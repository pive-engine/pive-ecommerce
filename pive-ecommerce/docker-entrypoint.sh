#!/bin/sh
# docker-entrypoint.sh

# Sprawdź, czy środowisko jest ustawione na 'production'
if [ "$NODE_ENV" = "production" ]; then
  echo "Running production build..."
  npm run build
  npm run start
else
  echo "Running development server..."
  # Uruchom serwer Next.js na wszystkich interfejsach sieciowych, aby umożliwić "hot reloading"
  npm run dev
fi
