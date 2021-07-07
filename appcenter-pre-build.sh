#!/usr/bin/env bash

# Create an .env from AppCenter Environment variables for use with react-native-config
echo AS-test-root-pre-build

ENV_WHITELIST=${ENV_WHITELIST:-"USER[-|_]DEFINED_*"}
printf "Creating an .env file with the following whitelist:\n"
printf "%s\n" $ENV_WHITELIST

set | printenv | egrep -e $ENV_WHITELIST | sed 's/^USER[-|_]DEFINED_//g' > .env

printf "\n.env created with contents:\n\n"
cat .env