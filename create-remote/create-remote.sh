#!/bin/bash
source .env

COMPONENT_NAME=$1

if [[ $COMPONENT_NAME == "" ]]; then 
  echo "error: provide a component name"
  exit 2
fi

if [ ! -d "$SOURCE" ]; then
  echo "error: projet does not exist at $SOURCE"
  exit 2
fi

rsync -av $SOURCE $DEST/$COMPONENT_NAME --exclude node_modules --exclude dist --exclude .git

echo "$COMPONENT_NAME created"
