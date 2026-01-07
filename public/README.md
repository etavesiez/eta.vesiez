
# Guide de modification du site ETA Vesiez (sans coder)

> Ce guide explique comment modifier les textes, les prestations, les icônes (Lucide) et les images du carrousel, même si tu ne sais pas programmer.

---

## 1. Modifier les prestations et les icônes (services)

Le fichier principal est : `public/texte/services.json`

Chaque bloc correspond à une prestation :

```json
{
  "title": "Plantation de pommes de terre",
  "desc": "Plantation mécanisée et précise des pommes de terre pour un démarrage optimal.",
  "icon": "Sprout"
}
```

- `title` : le nom de la prestation (gros titre)
- `desc` : la description (petit texte)
- `icon` : le nom d'une icône Lucide (voir ci-dessous)


### Icônes Lucide : comment ça marche ?
- Va sur https://lucide.dev/icons/
- Cherche une icône qui te plaît (ex : "Tractor", "Hammer", "Sprout", "Truck"...)
- **IMPORTANT :** Mets le nom exact du composant React dans le champ `icon` du JSON :
  - Le nom commence toujours par une majuscule (ex : `Tractor`)
  - Pas d'espaces, pas de tirets, pas d'accents (ex : `TreeDeciduous` et non `tree-deciduous`)
  - Si le nom affiché sur le site Lucide est en plusieurs mots, écris-le en "CamelCase" (ex : `TreeDeciduous`, `Columns4`)
  - Si tu ne mets rien ou si le nom est faux, une icône par défaut sera affichée

#### Exemples de noms valides :
```json
"icon": "Tractor"
"icon": "Hammer"
"icon": "Sprout"
"icon": "TreeDeciduous"
"icon": "Columns4"
```

#### Comment trouver le bon nom ?
- Clique sur une icône sur https://lucide.dev/icons/ : le nom du composant React est affiché en haut à droite (ex : `<TreeDeciduous />`)
- Copie ce nom (sans les chevrons ni le slash) et colle-le dans le champ `icon` du JSON

---

---

## 2. Modifier les textes du site

- Les textes principaux (prestations, descriptions) sont dans `public/texte/services.json`
- Pour d'autres textes, demande à Camille où ils se trouvent ou ajoute d'autres fichiers dans ce dossier

---

## 3. Gérer les images du carrousel

Les images du carrousel sont dans `public/images/carrousel/` (plusieurs sous-dossiers par catégorie).


### Astuce : Choisir l'ordre des catégories du carrousel
Pour choisir l'ordre d'affichage des catégories dans le carrousel, commence le nom de chaque dossier par un chiffre et un tiret, par exemple :

```
public/images/carrousel/
  01-plantation/
  02-arrachage/
  03-preparation/
  04-fourrage/
  05-entretien/
```

Le chiffre fixe l'ordre d'apparition sur le site, mais il ne sera pas affiché (le nom visible sera "Plantation", "Arrachage"...).

Tu peux ainsi réorganiser les catégories simplement en changeant le numéro au début du nom du dossier.

---

### Ajouter une photo
1. Nomme-la avec des tirets (ex : `semis-printemps-2025.jpg`)
2. Mets-la dans le bon dossier (ex : `public/images/01-plantation/`)
3. Publie (push sur GitHub)

### Supprimer une photo
1. Supprime le fichier du dossier
2. Publie (push sur GitHub)

### Créer une nouvelle catégorie
1. Crée un dossier dans `public/images/` (ex : `public/images/transport/`)
2. Ajoute des photos dedans
3. Publie

### Règles importantes
- Pas d'espaces ni d'accents dans les noms de fichiers
- Formats acceptés : `.jpg`, `.jpeg`, `.png`, `.webp`
- Les images sont triées automatiquement par nom

---

## 4. Comment ça marche ?

- À chaque modification (texte, image, icône), il faut enregistrer et pousser sur GitHub (ou utiliser l'interface web)
- Le site se mettra à jour automatiquement après quelques minutes

---

## 5. Astuce
- Tu peux tout tester sans risque : si tu fais une erreur, demande à Camille ou reviens en arrière sur GitHub

---


---

## 6. Image og-image.png (aperçu du lien partagé)

Le fichier `og-image.png` (placé dans `public/images/`) est l'image utilisée comme vignette d'aperçu lorsque tu partages le site sur les réseaux sociaux (Facebook, LinkedIn, etc.) ou dans les messageries (WhatsApp, Messenger...).

- **À quoi ça sert ?**
  - C'est l'image qui s'affiche automatiquement à côté du titre et de la description du site quand tu colles le lien.
  - Elle permet d'avoir un aperçu visuel professionnel et reconnaissable.
- **Comment la changer ?**
  - Remplace le fichier `og-image.png` dans `public/images/` par une nouvelle image (format PNG, idéalement 1200x630px pour un affichage optimal).
  - Garde le même nom de fichier pour que l'aperçu fonctionne sans modifier le code.
- **Astuce :**
  - Après modification, il peut être nécessaire d'attendre ou d'utiliser un "debugger" Facebook pour voir la nouvelle image (les réseaux sociaux gardent parfois l'ancienne en cache).

---


---

**Ce guide est fait pour que tu puisses gérer le contenu du site sans coder !**
