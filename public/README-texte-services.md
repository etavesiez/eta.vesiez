# Modifier les prestations et icônes du site

Ce dossier contient le fichier `services.json` qui permet de modifier facilement les prestations affichées sur le site, sans coder.

## Comment modifier une prestation ?

1. Ouvre le fichier `public/texte/services.json`.
2. Chaque bloc correspond à une prestation. Exemple :

```json
{
  "title": "Plantation de pommes de terre",
  "desc": "Plantation mécanisée et précise des pommes de terre pour un démarrage optimal.",
  "icon": "Sprout"
}
```

- `title` : le nom de la prestation (affiché en gros)
- `desc` : la description (en petit)
- `icon` : le nom d'une icône Lucide (voir https://lucide.dev/icons/)

## Ajouter ou changer une icône

- Mets le nom exact d'une icône Lucide dans le champ `icon` (ex : `Tractor`, `Hammer`, `Sprout`, `Truck`...)
- La liste complète est ici : https://lucide.dev/icons/
- Si tu ne mets rien ou si le nom est faux, une icône par défaut sera affichée.

## Exemple complet

```json
[
  {
    "title": "Plantation de pommes de terre",
    "desc": "Plantation mécanisée et précise des pommes de terre pour un démarrage optimal.",
    "icon": "Sprout"
  },
  {
    "title": "Arrachage de pommes de terre",
    "desc": "Arrachage, tri et préparation à la livraison de vos pommes de terre.",
    "icon": "Tractor"
  }
]
```

## Astuce
- Tu peux ajouter, supprimer ou modifier les prestations comme tu veux.
- N'oublie pas d'enregistrer le fichier après modification.
- Le site se mettra à jour automatiquement après un push sur GitHub.
