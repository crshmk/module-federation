#!/bin/bash

COMPONENT_NAME=$1
PARENT_PATH=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
SOURCE="${PARENT_PATH}/sample-remote/"
DEST="${PARENT_PATH}/../../src/${COMPONENT_NAME}"

cd "$PARENT_PATH"

if [[ $COMPONENT_NAME == "" ]]; then 
  echo "error: provide a component name"
  exit 2
fi

if [ -d "$DEST" ]; then
  echo "error: remote ${COMPONENT_NAME} exists
  "
  exit 1
fi

mkdir $DEST

rsync -a $SOURCE $DEST --exclude node_modules --exclude dist --exclude .git

echo "$COMPONENT_NAME created
"

node ./addModuleName $COMPONENT_NAME
