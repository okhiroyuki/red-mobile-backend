# red-mobile-backend

## Prepare

```zsh
nodenv install
npm i -g cordova modclean@3.0.0-beta.1
npm run ci
```

## Developments

### Create App

```bash
cordova platform add android
```

### Build Apk

```zsh
cordova build
```

### Test the App

```zsh
cordova run
```

## Release

### Build bundle file

```zsh
cordova build --release
```
