#!/bin/bash

# Color codes for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting WSL Environment Setup...${NC}"

# 1. Update and Install Prerequisites
echo "Updating package lists..."
sudo apt-get update
sudo apt-get install -y curl build-essential rsync

# 2. Install Node.js 20 (LTS)
echo "Installing Node.js 20..."
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify Node installation
NODE_VER=$(node -v)
NPM_VER=$(npm -v)
echo -e "${GREEN}Installed Node.js $NODE_VER and npm $NPM_VER${NC}"

# 3. Setup Project Directory
TARGET_DIR=~/projects/six-sigma-platform
echo "Creating project directory at $TARGET_DIR..."
mkdir -p ~/projects

# 4. Copy Files from Windows
# Note: Assuming this script is run from /mnt/e/Learning Six Sigma (where it resides on Windows side)
SOURCE_DIR=$(pwd)
echo "Copying source code from $SOURCE_DIR to $TARGET_DIR..."
echo "This ensures high performance by using the Linux filesystem."

rsync -av --progress \
    --exclude 'node_modules' \
    --exclude '.next' \
    --exclude '.git' \
    --exclude '.vercel' \
    "$SOURCE_DIR/" "$TARGET_DIR/"

# 5. Install Dependencies
echo "Installing dependencies..."
cd "$TARGET_DIR"

# Clean install
npm install

echo -e "${GREEN}Setup Complete!${NC}"
echo -e "To start your app, run the following commands:"
echo -e "1. ${GREEN}cd ~/projects/six-sigma-platform${NC}"
echo -e "2. ${GREEN}npm run dev${NC}"
