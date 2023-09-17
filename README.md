# red-mobile-backend

## Prepare

```zsh
nodenv install
npm i -g cordova modclean@3.0.0-beta.1
```

## Developments

### Create App

```bash
cordova platform add android
cordova plugin rm @red-mobile/nodejs-mobile-cordova; cordova plugin add @red-mobile/nodejs-mobile-cordova@latest
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
