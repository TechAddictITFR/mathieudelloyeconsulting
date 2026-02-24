# 🚀 GUIDE DE DÉPLOIEMENT - Mathieu Delloye Portfolio

## ✅ Votre Repo GitHub Créé
**URL:** https://github.com/TechAddictITFR/mathieudelloyeconsulting.git

---

## 📋 ÉTAPE 1 : Préparer vos fichiers

Vous avez les fichiers suivants à commit :
```
mathieudelloyeconsulting/
├── index.html                    (page principale)
├── styles.css                    (design)
├── script.js                     (interactivité)
├── cv_mathieu_servicenow_1page.html  (CV téléchargeable)
├── README.md                     (documentation)
└── images/
    ├── framatome.svg
    ├── atos.svg
    ├── devoteam.svg
    └── adecco.svg
```

---

## 🖥️ ÉTAPE 2 : Cloner le repo (Si vous ne l'avez pas)

```bash
# Ouvrir Terminal/PowerShell
git clone https://github.com/TechAddictITFR/mathieudelloyeconsulting.git
cd mathieudelloyeconsulting
```

---

## 📤 ÉTAPE 3 : Ajouter les fichiers du portfolio

**Option A : Via interface GitHub Web (Plus facile)**

1. Allez à : https://github.com/TechAddictITFR/mathieudelloyeconsulting
2. Cliquez **"Add file"** → **"Upload files"**
3. **Drag & drop** ou **selectionnez** ces fichiers :
   - `index.html`
   - `styles.css`
   - `script.js`
   - `cv_mathieu_servicenow_1page.html`
   - `README.md`
   - **Dossier complet** `images/` (avec les 4 SVG)
4. Message : `"Add portfolio website files"`
5. Cliquez **"Commit changes"**

**Option B : Via Git Command Line (Si vous avez Git installé)**

```bash
# Copier les fichiers dans le dossier
cp -r /mnt/user-data/outputs/* /chemin/vers/mathieudelloyeconsulting/

# Vérifier que tout est là
ls -la

# Ajouter tous les fichiers
git add .

# Commit
git commit -m "Add portfolio website with experience images"

# Push vers GitHub
git push origin main
```

---

## ⚙️ ÉTAPE 4 : Activer GitHub Pages

1. Allez au dépôt : https://github.com/TechAddictITFR/mathieudelloyeconsulting
2. Cliquez sur **Settings** (⚙️ engrenage)
3. Dans le menu gauche, allez à **"Pages"**
4. Sous **"Source"**, sélectionnez :
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Cliquez **"Save"**

---

## 🌐 ÉTAPE 5 : Accéder à votre portfolio

Après quelques secondes, vous verrez une notification :
```
Your site is published at: 
https://techaddictitfr.github.io/mathieudelloyeconsulting/
```

**OU** (plus court) :
```
https://techaddictitfr.github.io
```

⏳ **Attendez 1-2 minutes** pour que GitHub Pages compile et déploie le site.

---

## ✅ VÉRIFICATION

Une fois déployé, testez :
- ✅ Page s'affiche correctement
- ✅ Images SVG visibles
- ✅ Navigation fluide
- ✅ Boutons fonctionnels
- ✅ CV téléchargeable

---

## 🎨 PERSONNALISATION (Optionnel)

**Ajouter votre propre domaine** (exemple: mathieudelloye.com)

1. **Acheter un domaine** (~$2-5/an) :
   - namecheap.com
   - godaddy.com
   - google.com/domains

2. **Configurer GitHub Pages** :
   - Settings → Pages → Custom domain
   - Entrer votre domaine
   - Ajouter records DNS chez votre registraire

---

## 📝 À AJOUTER À VOTRE CV

Insérez cette ligne dans la section "Contact" ou "Web" de votre CV :

```
Portfolio: https://techaddictitfr.github.io/mathieudelloyeconsulting/
```

ou simplement :

```
Website: https://techaddictitfr.github.io
```

---

## 🔧 TROUBLESHOOTING

**Site ne s'affiche pas ?**
- Vérifiez que `index.html` est à la **racine** du repo
- Attendez 2-3 minutes après push
- Videz le cache du navigateur (Ctrl+Shift+Del)
- Vérifiez Settings → Pages → Source est bien configuré

**Images ne s'affichent pas ?**
- Vérifiez que le dossier `images/` est à la racine
- Vérifiez les chemins dans index.html : `images/nom.svg`
- Vérifiez que tous les 4 SVG sont dans le dossier

**Site très lent ?**
- Les SVG sont légers, pas de soucis
- GitHub Pages est gratuit, donc un peu variable
- Normal, tout fonctionne

---

## 📊 STATS FINALES

✅ **Portfolio créé** : Moderne, professionnel, interactif
✅ **Hébergement** : Gratuit sur GitHub Pages (illimité)
✅ **Domaine** : techaddictitfr.github.io (gratuit)
✅ **Performance** : Rapide, pas de dépendances externes
✅ **Responsive** : Desktop, Tablet, Mobile
✅ **Intégrable dans CV** : Lien direct à inclure

---

## 🎯 PROCHAINES ÉTAPES

1. **Push** les fichiers sur GitHub (voir Étape 3)
2. **Activer** GitHub Pages (voir Étape 4)
3. **Attendre** 1-2 minutes
4. **Tester** le lien : https://techaddictitfr.github.io/mathieudelloyeconsulting/
5. **Ajouter** le lien à votre CV

---

**Questions ?** Consultez :
- GitHub Pages Docs: https://docs.github.com/en/pages
- Portfolio files: Tous dans `/mnt/user-data/outputs/`

**Bon déploiement ! 🚀**

---

*Créé le : 24 Février 2025*
*Portfolio v1.0 - ServiceNow ITSM & AI Product Owner*
