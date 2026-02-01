@echo off
TITLE Six Sigma Platform Server
color 0A
cls
echo ==================================================
echo   Starting Six Sigma Platform (WSL Environment)
echo ==================================================
echo.
echo [-] Connecting to Ubuntu...
echo [-] Project Path: ~/projects/six-sigma-platform
echo [-] URL: http://localhost:3000
echo.
echo Output:
echo --------------------------------------------------
wsl -u ddust bash -c "cd ~/projects/six-sigma-platform && npm run dev"
pause
