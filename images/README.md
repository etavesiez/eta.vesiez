# 📸 Guide des images du site

**Tout est automatique ! Vous n'avez JAMAIS à toucher au code.**

---

## 🖼️ Changer l'image d'accueil

L'image d'accueil est la grande photo de fond sur la page principale.

**Comment faire :**
1. Prenez votre nouvelle image (formats acceptés : JPG, PNG, WEBP)
2. Renommez-la : `image-accueil.jpg`
3. Remplacez le fichier dans : `public/images/image-accueil.jpg`
4. Publiez : `yarn build && yarn deploy`

⚠️ Le nom doit être **exactement** `image-accueil.jpg`

---

## 🎠 Gérer le carrousel

Le carrousel affiche automatiquement toutes vos photos.

### 📁 Comment ça marche ?

**Les dossiers = Les catégories**

```
public/images/
├── plantation/      → Toutes les photos = catégorie "Plantation"
├── arrachage/       → Toutes les photos = catégorie "Arrachage"
├── preparation/     → Toutes les photos = catégorie "Préparation"
└── transport/       → Toutes les photos = catégorie "Transport"
```

---

## ➕ Ajouter une photo

1. **Nommez votre photo** avec des tirets :
   - ✅ `semis-printemps-2025.jpg`
   - ✅ `labour-automne.jpg`
   - ❌ `IMG_1234.jpg`
   - ❌ `photo avec espaces.jpg`

2. **Copiez-la** dans le bon dossier :
   ```
   public/images/plantation/semis-printemps-2025.jpg
   ```

3. **Publiez** :
   ```bash
   yarn build
   yarn deploy
   ```

**Le nom devient le titre :**
- `semis-printemps-2025.jpg` → "Semis Printemps 2025"

---

## 🗑️ Supprimer une photo

1. Supprimez le fichier du dossier
2. Publiez : `yarn build && yarn deploy`

---

## 📂 Créer une nouvelle catégorie

1. **Créez un dossier** dans `public/images/`
   Exemple : `public/images/transport/`

2. **Ajoutez des photos** dedans

3. **Publiez** : `yarn build && yarn deploy`

**Le nom du dossier devient la catégorie :**
- `transport/` → "Transport"
- `travaux-speciaux/` → "Travaux Speciaux"

---

## ✏️ Renommer une catégorie

Renommez simplement le dossier :
```bash
mv public/images/plantation public/images/semis
```

Puis publiez : `yarn build && yarn deploy`

---

## ❌ Supprimer une catégorie

1. Supprimez le dossier complet
2. Publiez : `yarn build && yarn deploy`

---

## 🚀 Publier les modifications

**Après CHAQUE modification :**

```bash
yarn build
yarn deploy
```

Attendez 1-2 minutes pour voir les changements en ligne.

---

## 📝 Règles importantes

✅ **À FAIRE :**
- Nommer avec des tirets : `ma-photo-2025.jpg`
- Formats : `.jpg`, `.jpeg`, `.png`, `.webp`
- Mettre dans les sous-dossiers de catégories

❌ **À ÉVITER :**
- Espaces dans les noms : `ma photo.jpg`
- Accents : `récolte.jpg` → utilisez `recolte.jpg`
- Images directement dans `public/images/` (utilisez les sous-dossiers)

---

## 🎯 Résumé rapide

**Ajouter une photo :**
1. Nommez-la : `ma-photo.jpg`
2. Copiez dans : `public/images/[categorie]/ma-photo.jpg`
3. Publiez : `yarn build && yarn deploy`

**Créer une catégorie :**
1. Créez : `public/images/nouvelle-categorie/`
2. Ajoutez des photos
3. Publiez : `yarn build && yarn deploy`

**Tout se met à jour automatiquement ! 🎉**
