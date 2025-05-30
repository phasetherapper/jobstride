# start-docker.ps1
Write-Host "Building and starting Docker containers..."

# Optional: Uncomment this if you want to force rebuilds every time
# docker-compose build --no-cache

docker-compose up --build

# Optional: For logs in real-time, use this after containers are running
# docker-compose logs -f