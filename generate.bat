@echo off

lune run cli/generate-in-lune
if %errorlevel% neq 0 (
    echo:
    echo ^[API GENERATOR^]: Lune generation failed. See above for details.
    echo ^[API GENERATOR^]: Attempting to build and open generator in studio...
    call studio/generate-in-studio.bat
)