#!/bin/sh
echo "Updating dependencies..."
npm update
echo "Starting app..."
exec "$@"