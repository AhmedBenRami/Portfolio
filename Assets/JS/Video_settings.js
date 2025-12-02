class Video {
    constructor(wrapper) {
        this.container = wrapper.querySelector(".video-pack");
        this.overlay = this.container.querySelector(".video-overlay");
        this.video = this.container.querySelector("video");
        this.timebase = this.container.querySelector(".track-base");
        this.controls = this.container.querySelector(".controls");
        this.pause = this.controls.querySelector(".left .pause");
        this.sound_control = this.controls.querySelector(".left .sound-level");
        this.time = this.controls.querySelector(".left .time");
        this.fullscreen = this.controls.querySelector(".right .full-screen");

        this.video_is_paused = true;
        this.pause_interval = null;

        this.initialize_events();
    }

    load_video() {
        this.video.currentTime = 0;
        this.video_is_paused = false;

        this.container.style.setProperty("--sound-volume", "70%");
        this.video.volume = 0.7;

        // Show loading indicator
        this.show_loading();
    }

    show_loading() {
        // Create loading overlay if it doesn't exist
        if (!this.loadingOverlay) {
            this.loadingOverlay = document.createElement('div');
            this.loadingOverlay.className = 'video-loading';
            this.loadingOverlay.innerHTML = `
                <div class="loading-spinner"></div>
                <p>Loading video...</p>
            `;
            this.container.appendChild(this.loadingOverlay);
        }
        this.loadingOverlay.style.display = 'flex';
    }

    hide_loading() {
        if (this.loadingOverlay) {
            this.loadingOverlay.style.display = 'none';
        }
    }

    toggle_play() {
        this.video_is_paused = !this.video_is_paused;

        // Immediately update the UI
        let pause_button = this.pause.querySelector("img");
        if (this.video_is_paused) {
            this.video.pause();
            pause_button.src = "../Assets/Icons/play.svg";
        } else {
            this.video.play();
            pause_button.src = "../Assets/Icons/pause.svg";
        }
    }

    toggle_fullscreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
            this.fullscreen.querySelector("img").src = "../Assets/Icons/enter-fullscreen.svg";
        }
        else {
            this.container.requestFullscreen();
            this.fullscreen.querySelector("img").src = "../Assets/Icons/exit-fullscreen.svg";
        }
    }

    drag_time(event) {
        let mouse_position = event.clientX;
        let timeline_start = this.timebase.getClientRects()[0].left;
        mouse_position = mouse_position - timeline_start;

        let timeline_width = parseFloat(getComputedStyle(this.timebase).width.replace("px", ""));

        let time_percentage = mouse_position / timeline_width * 100;
        time_percentage = Math.max(0, Math.min(100, time_percentage));

        this.container.style.setProperty("--video-value", `${time_percentage}%`);

        //edit timing
        let video_duration = this.video.duration;
        this.video.currentTime = video_duration * time_percentage / 100;
    }

    set_volume(event) {
        const soundBase = this.sound_control.querySelector(".sound-base");
        const volumeIcon = this.sound_control.querySelector("img");

        let mouse_position = event.clientX;
        let sound_bar_start = soundBase.getClientRects()[0].left;
        mouse_position = mouse_position - sound_bar_start;

        let sound_bar_width = parseFloat(getComputedStyle(soundBase).width.replace("px", ""));

        let volume_percentage = mouse_position / sound_bar_width * 100;

        // Clamp between 0-100
        volume_percentage = Math.max(0, Math.min(100, volume_percentage));

        this.container.style.setProperty("--sound-volume", `${volume_percentage}%`);

        // Set video volume
        this.video.volume = volume_percentage / 100;

        // Update volume icon based on level
        if (volume_percentage === 0) {
            volumeIcon.src = "../Assets/Icons/volume-mute.svg";
        } else if (volume_percentage < 50) {
            volumeIcon.src = "../Assets/Icons/volume-down.svg";
        } else {
            volumeIcon.src = "../Assets/Icons/volume-up.svg";
        }
    }

    toggle_mute() {
        const volumeIcon = this.sound_control.querySelector("img");

        if (this.video.volume > 0) {
            // Mute - store current volume
            this.previousVolume = this.video.volume * 100;
            this.video.volume = 0;
            this.container.style.setProperty("--sound-volume", "0%");
            volumeIcon.src = "../Assets/Icons/volume-mute.svg";
        } else {
            // Unmute - restore previous volume or default to 70%
            const restoreVolume = this.previousVolume || 70;
            this.video.volume = restoreVolume / 100;
            this.container.style.setProperty("--sound-volume", `${restoreVolume}%`);

            if (restoreVolume === 0) {
                volumeIcon.src = "../Assets/Icons/volume-mute.svg";
            } else if (restoreVolume < 50) {
                volumeIcon.src = "../Assets/Icons/volume-down.svg";
            } else {
                volumeIcon.src = "../Assets/Icons/volume-up.svg";
            }
        }
    }

    end_video() {
        this.pause.querySelector("img").src = "../Assets/Icons/replay.svg";
        this.video_is_paused = true;
        this.video.pause();
    }

    change_time_display() {
        const format_time = (s) => {
            let min = parseInt(s / 60);
            let sec = parseInt(s % 60);
            sec = (sec < 10) ? "0" + sec : sec;
            min = (min < 10) ? "0" + min : min;
            return `${min}:${sec}`;
        }

        this.time_display_interval = setInterval(() => {
            let current_value = this.video.currentTime;
            let duration_value = this.video.duration;
            let duration = format_time(duration_value);
            let current = format_time(current_value);
            this.time.innerHTML = `${current} | ${duration}`;

            let percentage = parseInt(current_value / duration_value * 100);
            this.container.style.setProperty("--video-value", `${percentage}%`)

        }, 100);
    }


    initialize_events() {
        this.video.addEventListener("loadstart", () => { this.load_video() });

        // Hide loading when video can play
        this.video.addEventListener("canplay", () => { this.hide_loading() });

        // Also hide loading when video starts playing
        this.video.addEventListener("playing", () => { this.hide_loading() });

        this.change_time_display();
        this.pause.addEventListener("click", () => { this.toggle_play() });
        this.fullscreen.addEventListener("click", () => { this.toggle_fullscreen() });

        this.timebase.addEventListener("click", (e) => { this.drag_time(e) });

        this.timebase.querySelector(".thumb").addEventListener("drag", (e) => { this.drag_time(e) });

        this.video.addEventListener("ended", () => { this.end_video() });


        this.sound_control.querySelector(".sound-base").addEventListener("click", (e) => { this.set_volume(e) });

        this.sound_control.querySelector("img").addEventListener("click", () => { this.toggle_mute() });

        this.overlay.addEventListener("click", () => { this.toggle_play() });

        document.addEventListener("keydown", (ev) => {
            if (ev.code === "KeyF" || ev.key === "f" || ev.key === "F") {
                this.toggle_fullscreen();
            }
            else if (ev.code === "Space" || ev.key === " ") {
                ev.preventDefault();
                this.toggle_play();
            }
        })
    }
}

// Initialize video overlay functionality
let videoPlayer = null;

document.addEventListener('DOMContentLoaded', function () {
    const showcase = document.querySelector('.showcase');
    const videoContainer = document.querySelector('.video-container');
    const closeButton = document.createElement('button');

    closeButton.className = 'close-video';
    closeButton.innerHTML = '×';
    videoContainer.appendChild(closeButton);

    // Open video overlay when showcase is clicked
    showcase.addEventListener('click', function (e) {
        if (!e.target.closest('.video-container')) {
            videoContainer.classList.add('active');
            if (!videoPlayer) {
                videoPlayer = new Video(videoContainer);
            }
            // Auto-play when opened
            setTimeout(() => {
                if (videoPlayer.video_is_paused) {
                    videoPlayer.toggle_play();
                }
            }, 100);
        }
    });

    // Close video overlay
    closeButton.addEventListener('click', function () {
        videoContainer.classList.remove('active');
        if (videoPlayer) {
            videoPlayer.video.pause();
            videoPlayer.video.currentTime = 0;
            videoPlayer.video_is_paused = true;
            videoPlayer.pause.querySelector("img").src = "../Assets/Icons/play.svg";
        }
    });

    // Close on escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && videoContainer.classList.contains('active')) {
            closeButton.click();
        }
    });
});