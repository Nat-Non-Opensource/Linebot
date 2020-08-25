#!/bin/bash
set -e

args=("$@")

if [ $# -lt 1 ]; then
      echo "No arguments supplied"
      exit -1
fi

pushd "${args[0]}"
yarn install
yarn build
popd


docker build -t trwfff/parking-artisan .
# docker push trwfff/parking-artisan
# docker run --rm -it -p4000:4000 --init trwfff/parking-artisan
# docker run --rm -it -p4000:4000 trwfff/parking-artisan