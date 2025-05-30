
# Clear containers and volumes
docker-compose down --volumes --remove-orphans

# Cleanup frontend deps
Write-Output "Cleaning frontend dependencies..."
Remove-Item -Recurse -Force .\frontend\node_modules
Remove-Item -Force .\frontend\package-lock.json

# Reinstall fresh
Write-Output "Installing frontend dependencies..."
Set-Location .\frontend
npm install
Set-Location ..

# Rebuild with new Node version
Write-Output "Rebuilding containers with Node 20..."
docker-compose build --no-cache
docker-compose up