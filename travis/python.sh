#!/bin/bash

set -xe

[[ "$PYTHON" != true ]] && exit 0

pushd python_apps/airtime_analyzer
pyenv local 2.7
pip install -e .
nosetests -a '!rgain'
echo "replaygain tests where skipped due to not having a reliable replaygain install on travis."
popd
