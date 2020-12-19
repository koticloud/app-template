# Koti Cloud App Template

This is the official app template for [Koti Cloud](https://koti.cloud) app developers.

## Usage

```
mkdir your-new-app
cd your-new-app
git clone https://github.com/koticloud/app-template.git .
rm -rf .git
npm install
```

To build the app use one of these commands (uses [laravel-mix](https://github.com/JeffreyWay/laravel-mix)):
- `npm run dev` - build a dev version
- `npm run watch` - live reloading
- `npm run prod` - build a prod (minified) version