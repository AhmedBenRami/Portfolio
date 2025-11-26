from livereload import Server, shell
import os

# Path of your project ('.' = current directory)
project_path = "."

server = Server()

# Watch everything inside your project
for root, dirs, files in os.walk(project_path):
    for file in files:
        if file.endswith((".html", ".css", ".js")):
            server.watch(os.path.join(root, file))

# Serve on all interfaces (broadcast to your network)
server.serve(
    root=project_path,
    host="0.0.0.0",
    port=8080,
    restart_delay=1,
    liveport=35729,
)
