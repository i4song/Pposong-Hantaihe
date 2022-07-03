#!/bin/bash
url='https://w7.pngwing.com/pngs/595/955/png-transparent-black-circle-black-and-white-circle-geometric-shape-black-rim-thumbnail.png'
if [[ ! -f 'black_circle.png' ]]
then
    echo "Download an image"
    wget -O "black_circle.png" $url
else
    echo "An image already exists"
fi