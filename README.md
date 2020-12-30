# QR'Maker auf A4

Mit diesem Projekt sollen QR erstellt werden. Die auf einer A4 seite passiert.

## Project setup

Erstelle eine Datei mit `.env.local` und ersetze es mit deinem Namen.

```
VUE_APP_IMPRESSUM_FIRMA="Muster Firem"
VUE_APP_IMPRESSUM_NAME="Muster Name"
VUE_APP_IMPRESSUM_STREETNAME="Muster Str. 2"
VUE_APP_IMPRESSUM_ZIP_ORT="12345 Musterstadt"
VUE_APP_IMPRESSUM_EMAIL="muster#email.xx"
```

**Achte** darauf das in der Email adresse das `@` durch eine `#` ersetzt wird.
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production

Nach dem Build den `./dist` Order veröffentlichen.

```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
