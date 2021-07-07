#!/usr/bin/env bash

# Create an .env from AppCenter Environment variables for use with react-native-config
echo AS-test-root-pre-build

echo Prin all env
printenv

ENV_WHITELIST=${ENV_WHITELIST:-"*"}
printf "Creating an .env file with the following whitelist:\n"
printf "%s\n" $ENV_WHITELIST

set | egrep -e $ENV_WHITELIST | egrep -v "^_" > .env

printf "\n.env created with contents:\n\n"
cat .env