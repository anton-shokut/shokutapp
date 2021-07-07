#!/usr/bin/env bash

# Create an .env from AppCenter Environment variables for use with react-native-config
echo AS-test-root-pre-build
echo ${AS_TEST}

ENV_WHITELIST=${ENV_WHITELIST:-"USER[-|_]DEFINED_.*"}
printf "Creating an .env file with the following whitelist:\n"
printf "%s\n" $ENV_WHITELIST

set | egrep -e $ENV_WHITELIST | egrep -v "^_" | egrep -v "WHITELIST" > .env.tmp
sed -E -e 's/USER-DEFINED_\USER_DEFINED-//g' .env.tmp > env

printf "\n.env created with contents:\n\n"
cat .env