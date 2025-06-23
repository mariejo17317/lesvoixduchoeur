
# Guide de déploiement GoDaddy

## Configuration requise

### 1. Secrets GitHub à configurer

Allez dans votre repo GitHub → Settings → Secrets and variables → Actions
Ajoutez ces secrets :

- `SERVER_HOST`: 97.74.189.218
- `SERVER_USER`: votre nom d'utilisateur SSH
- `SERVER_SSH_KEY`: votre clé privée SSH (contenu du fichier ~/.ssh/id_rsa)
- `SERVER_PORT`: 22 (ou votre port SSH personnalisé)

### 2. Configuration serveur

Sur votre serveur GoDaddy (97.74.189.218) :

```bash
# Créer le répertoire du site
sudo mkdir -p /var/www/lesvoixduchoeur
sudo chown $USER:$USER /var/www/lesvoixduchoeur

# Installer Node.js et npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Installer nginx
sudo apt install nginx

# Configurer nginx
sudo nano /etc/nginx/sites-available/lesvoixduchoeur.ca
```

### 3. Configuration nginx

```nginx
server {
    listen 80;
    server_name lesvoixduchoeur.ca www.lesvoixduchoeur.ca;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    server_name lesvoixduchoeur.ca www.lesvoixduchoeur.ca;
    
    # SSL configuré automatiquement par GoDaddy
    
    root /var/www/lesvoixduchoeur/dist;
    index index.html;
    
    # Configuration pour SPA React
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache des assets statiques
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 4. Activer le site

```bash
sudo ln -s /etc/nginx/sites-available/lesvoixduchoeur.ca /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## Déploiement

### Automatique (recommandé)
Le déploiement se fait automatiquement à chaque push sur la branche main/master grâce à GitHub Actions.

### Manuel
```bash
chmod +x deploy.sh
./deploy.sh
```

## Vérification

1. Vérifiez que le DNS pointe vers 97.74.189.218 : `nslookup lesvoixduchoeur.ca`
2. Testez HTTPS : `curl -I https://lesvoixduchoeur.ca`
3. Vérifiez les logs nginx : `sudo tail -f /var/log/nginx/access.log`

## Dépannage

- **Erreur 502** : Vérifiez que nginx fonctionne (`sudo systemctl status nginx`)
- **Erreur SSL** : Vérifiez la configuration SSL chez GoDaddy
- **Erreur 404** : Vérifiez que les fichiers sont dans `/var/www/lesvoixduchoeur/dist`
