# Set project variables
$repoName = "jobstride"
$githubUsername = "<phasetherapper>"  # Replace with your GitHub username
$remoteUrl = "https://github.com/$githubUsername/$repoName.git"

# Initialize Git repo
cd "$PSScriptRoot"
git init
git add .
git commit -m "Initial commit from PowerShell script"
git branch -M main

# Set up GitHub remote
git remote add origin $remoteUrl

# Optional: Set your GitHub personal access token
# git config --global credential.helper store
# echo https://<YOUR_GITHUB_TOKEN>@github.com > "$env:USERPROFILE\.git-credentials"

# Push to GitHub
git push -u origin main