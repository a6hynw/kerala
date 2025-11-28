@echo off
REM Kerala AI Website - Setup Script for Windows

echo.
echo ============================================
echo Kerala AI Website - Complete Setup
echo ============================================
echo.

REM Check if Node.js is installed
node -v >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js found:
node -v
npm -v
echo.

REM Install frontend dependencies
echo.
echo [1/4] Installing frontend dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: Failed to install frontend dependencies
    pause
    exit /b 1
)
echo ✓ Frontend dependencies installed

REM Install backend dependencies
echo.
echo [2/4] Installing backend dependencies...
cd backend
call npm install
if errorlevel 1 (
    echo ERROR: Failed to install backend dependencies
    pause
    exit /b 1
)
echo ✓ Backend dependencies installed
cd ..

echo.
echo ============================================
echo ✓ Setup Complete!
echo ============================================
echo.
echo To start the application:
echo.
echo Terminal 1 - Start Backend:
echo   cd backend
echo   npm start
echo.
echo Terminal 2 - Start Frontend:
echo   npm run dev
echo.
echo Frontend will be available at: http://localhost:5173
echo Backend will be available at: http://localhost:5000
echo.
pause
