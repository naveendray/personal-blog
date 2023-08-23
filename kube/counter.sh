#!/bin/bash

count=$1
echo "starting counter for $count seconds"
while [ $count -ge 0 ]; do
    echo "Wait more: $count seconds"
    sleep 1
    ((count--))
done
echo "Time's up!"
