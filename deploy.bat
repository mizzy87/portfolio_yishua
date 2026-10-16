@echo off
echo ========================================================
echo   DEPLOYING OLUKOREDE YISHUA EDITORIAL PORTFOLIO
echo ========================================================
echo.
echo [1/3] Running production build...
node scripts/build.js
if %errorlevel% neq 0 (
    echo [ERROR] Build failed! Check node installation.
    pause
    exit /b %errorlevel%
)
echo.
echo [2/3] Staging and committing files to Git...
git add .
git commit -m "Deploy: Update editorial portfolio, 3 books, build system, and deployment configs"
echo.
echo [3/3] Pushing to GitHub (origin main)...
git push origin main
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Git push encountered an issue. Please verify your GitHub credentials or internet connection.
    pause
    exit /b %errorlevel%
)
echo.
echo ========================================================
echo   DEPLOYMENT PUSH COMPLETE!
echo   Vercel and Netlify are now building your live site.
echo ========================================================
pause
