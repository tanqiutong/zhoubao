param(
  [string]$Message = "update weekly report site"
)

$RepoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path

Push-Location $RepoRoot
try {
  if (-not (Test-Path ".git")) {
    throw "当前目录还不是 git 仓库，请先初始化 git。"
  }

  $remote = git remote
  if (-not $remote) {
    throw "还没有配置远程仓库，请先执行 git remote add origin <你的仓库地址>。"
  }

  git add .
  git diff --cached --quiet
  if ($LASTEXITCODE -eq 0) {
    Write-Host "没有新的改动需要提交。"
    exit 0
  }

  git commit -m $Message
  if ($LASTEXITCODE -ne 0) {
    throw "git commit 失败，请检查 git 用户信息或冲突。"
  }

  git push origin main
  if ($LASTEXITCODE -ne 0) {
    throw "git push 失败，请检查远程仓库权限或分支设置。"
  }

  Write-Host "已完成提交并推送到 origin/main。"
}
finally {
  Pop-Location
}
