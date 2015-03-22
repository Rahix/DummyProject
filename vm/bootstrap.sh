#!/usr/bin/env bash

# Initial apt-get update
echo "Updating apt-get..."
sudo apt-get update > /dev/null
echo "Updating done."

echo "Installing apache2, g++, curl, libssl-dev, apache2-utils, git-core..."
sudo apt-get install -y apache2
sudo apt-get install -y g++ curl libssl-dev apache2-utils
sudo apt-get install -y git-core

echo "Installing node..."
sudo apt-get install -y nodejs nodejs-legacy

echo "Setting up apache2..."
if ! [ -L /var/www/html ]; then
  rm -rf /var/www/html
  ln -fs /vagrant/client /var/www/html
fi

echo "Done."
