#!/bin/bash

BUCKET_NAME="game-results-bucket"

objects="$(aws s3api list-objects --bucket "${BUCKET_NAME}" --query 'Contents[].{Key: Key}')"

for object in $(echo "${objects}" | jq -r '.[].Key'); do
    echo "Setting ACL to public-read for object: ${object}"
    aws s3api put-object-acl --bucket "${BUCKET_NAME}" --key "${object}" --acl public-read
done
