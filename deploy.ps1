# GitHub Pages 部署脚本

Write-Host "开始构建项目..." -ForegroundColor Green
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "构建失败!" -ForegroundColor Red
    exit 1
}

Write-Host "进入构建输出目录..." -ForegroundColor Green
Set-Location www\DataScreen

Write-Host "初始化 git 仓库..." -ForegroundColor Green
git init

Write-Host "添加所有文件..." -ForegroundColor Green
git add -A

Write-Host "提交更改..." -ForegroundColor Green
git commit -m "Deploy to GitHub Pages"

Write-Host "创建 gh-pages 分支..." -ForegroundColor Green
git branch -M gh-pages

Write-Host "添加远程仓库..." -ForegroundColor Green
git remote add origin https://github.com/1337968347/DataScreen.git 2>$null

Write-Host "推送到 GitHub Pages..." -ForegroundColor Green
git push -f origin gh-pages

if ($LASTEXITCODE -eq 0) {
    Write-Host "部署成功!" -ForegroundColor Green
} else {
    Write-Host "部署失败!" -ForegroundColor Red
}

# 返回项目根目录
Set-Location ../..

# 清理目录中的 .git
Remove-Item -Recurse -Force www\DataScreen\.git -ErrorAction SilentlyContinue
