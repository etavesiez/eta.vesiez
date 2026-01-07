
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
- Mets le nom exact dans le champ `icon` du JSON
- Si tu ne mets rien ou si le nom est faux, une icône par défaut sera affichée

---

## 2. Modifier les textes du site

- Les textes principaux (prestations, descriptions) sont dans `public/texte/services.json`
- Pour d'autres textes, demande à Camille où ils se trouvent ou ajoute d'autres fichiers dans ce dossier

---

## 3. Gérer les images du carrousel

Les images du carrousel sont dans `public/images/carrousel/` (plusieurs sous-dossiers par catégorie).

### Ajouter une photo
1. Nomme-la avec des tirets (ex : `semis-printemps-2025.jpg`)
2. Mets-la dans le bon dossier (ex : `public/images/plantation/`)
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

**Ce guide est fait pour que tu puisses gérer le contenu du site sans coder !**
