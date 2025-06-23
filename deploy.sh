
#!/bin/bash

# Script de déploiement manuel pour GoDaddy
# Usage: ./deploy.sh

echo "🚀 Début du déploiement..."

# Variables (à modifier selon votre configuration)
SERVER_HOST="97.74.189.218"
SERVER_USER="votre_utilisateur"
SITE_PATH="/var/www/lesvoixduchoeur"

# Build local
echo "📦 Construction du projet..."
npm run build

# Upload vers le serveur
echo "📤 Upload vers le serveur..."
rsync -avz --delete dist/ $SERVER_USER@$SERVER_HOST:$SITE_PATH/

# Redémarrer nginx
echo "🔄 Redémarrage d'nginx..."
ssh $SERVER_USER@$SERVER_HOST "sudo systemctl reload nginx"

echo "✅ Déploiement terminé avec succès!"
