let span1 = document.getElementById("sts1")
        let span2 = document.getElementById("sts2")
        let span3 = document.getElementById("sts3")


        let container = document.querySelector(".achievements2")
        function shffle(max, span) {
            span.textContent = 0
            let end = setInterval(function () {
                span.textContent = parseInt(span.textContent) + 1
                if (parseInt(span.textContent) >= max) {
                    clearInterval(end)
                }

            }, 50)

        }
        function shffle_Per(max, span) {
            span.textContent = 0
            let end = setInterval(function () {
                span.textContent = parseInt(span.textContent) + 1 +"%"
                if (parseInt(span.textContent) >= max) {
                    clearInterval(end)
                }

            }, 10)

        }

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                shffle_Per(100, span1)
                shffle(21, span2)
                shffle(37, span3)
                observer.disconnect();  // run only once
            }
        });
        observer.observe(span2);