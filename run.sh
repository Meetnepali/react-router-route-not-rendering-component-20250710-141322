#!/bin/sh
set -e
./install.sh
echo "\n[+] App is running at http://localhost:3000"
echo "[i] Try accessing /projects/123/details or /projects/123/tasks and diagnose why they show the NotFound page."
