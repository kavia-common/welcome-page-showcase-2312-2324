#!/bin/bash
cd /home/kavia/workspace/code-generation/welcome-page-showcase-2312-2324/frontend_reactjs
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

