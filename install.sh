#!/bin/sh
set -e

echo "[+] Building Docker image..."
docker build -t react-router-nested-bug-demo .
echo "[+] Image built. Starting container..."
docker run -d --rm -p 3000:3000 --name react_router_test react-router-nested-bug-demo
# Wait for container to be ready
echo "[+] Waiting for app to start..."
sleep 5
if docker ps | grep -q react_router_test; then
    echo "[+] App container running and accessible at http://localhost:3000"
else
    echo "[!] ERROR: App container failed to start."
    exit 1
fi
