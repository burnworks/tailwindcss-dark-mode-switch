# Tailwind CSS Dark Mode Switch Pug Sample

## Project Structure

```
/
├── src/
│     ├── index.pub
│     ├── _mixin/
│     │      └── _darkmodeswitch.pug
│     └── css/
│             └── styles.css
├── tailwind.config.cjs
├── bs-config.cjs (browser-sync config file)
└── package.json
```

## Getting Started

### View sample page

```shell
git clone https://github.com/burnworks/tailwindcss-dark-mode-switch.git
cd pug
npm install
npm run build
npm run dev
```

### Usage

Copy `src/_mixin/_darkmodeswitch.pug` file to your project.

include mixin and use.

```pug
include /_mixin/_darkmodeswitch

+darkmodeswitch
```

## Link

- [Pug](https://pugjs.org/api/getting-started.html)
- [Tailwind CSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/)
