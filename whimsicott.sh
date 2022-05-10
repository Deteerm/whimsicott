#!/usr/bin/bash
echo "Script running..."
file=`date +"%Y-%m-%d".txt`
path="./rates/"
node.exe whimsicott.js > $path$file
echo "File's ready!"
sleep 1
