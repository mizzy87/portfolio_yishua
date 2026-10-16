# Deploy script for Olukorede Yishua Editorial Portfolio
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  DEPLOYING OLUKOREDE YISHUA EDITORIAL PORTFOLIO        " -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "[1/3] Running production build..." -ForegroundColor Yellow
node scripts/build.js
if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERROR] Build failed." -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host ""
Write-Host "[2/3] Staging and committing changes to Git..." -ForegroundColor Yellow
git add .
git commit -m "Deploy: Update editorial portfolio, 3 books, build system, and deployment configs"

Write-Host ""
Write-Host "[3/3] Pushing to GitHub (origin main)..." -ForegroundColor Yellow
git push origin main
if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================================" -ForegroundColor Green
    Write-Host "  DEPLOYMENT PUSH COMPLETE!                             " -ForegroundColor Green
    Write-Host "  Vercel & Netlify are now automatically rebuilding.    " -ForegroundColor Green
    Write-Host "========================================================" -ForegroundColor Green
} else {
    Write-Host "[ERROR] Git push failed. Please check internet connection or GitHub auth." -ForegroundColor Red
}
