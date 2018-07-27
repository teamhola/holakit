# HolaKit

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Yet another design-driven UI component set.

## Priciples

1. Be nice in design.
2. Properly scoped.
3. Easy to plug into existing projects.
4. Be advanced.

## Usage

```html
<!-- Directly from unpkg (npm) -->
<link rel="stylesheet" href="https://unpkg.com/holakit/dist/holakit.css">
```

> WARNING: You should pin the version you use in your project, since we're still in 0.x stage and we can have some breaking changes at any time. We'll follow semver later as soon as we finish our 1.0.0.

Or use CSS files in the npm package directly:

```js
// yarn add holakit
// or
// npm i holakit

import 'holakit/dist/holakit.css'
// or you may import individual components, as is described below in Advanced Usage.
```

> NOTE: This project is using pure CSS with many edge-cutting CSS features, and you can see our backcompat status in `.browserlistrc`. Roll your own build with a modified browserlist, if you needs better browser compatibility.

### Advanced Usage

#### Customizing

We are using CSS variables, so you can do some customizations by changing variables. See `assets/css/var.css` for reference.

Since we use a class to scope our variables, you have many choices to override our defaults.

1. Make you own build and replace defaults in `var.css`.
2. Roll your own `.hola-var` class and apply it on `<html>`.
3. Roll a class with only the variables you changed, and add it on `<html>`, after our `hola-var`.

And many other ways. Our flexible, properly-scoped architecture can make most cases cakes.

#### Use a subset

You may want to use only a part of our component set. That's pretty easy since we divide different components into different files. You can `@import` any part of this set, and don't forget to include `vendor.css`, `reset.css` and `var.css` since they are required by most components. Anyway, it's not garanteed nor is tested, so you may found that you need to import more than your need. Another solution is, you can simply remove unnecessary parts of this project in `assets/holakit.css` (and other entrypoint files named `index.css`) and regenerate a build using `yarn build`. Drop us an issue or a PR if you find better split solution.

## Contributing & Financial Supporting

For GitHub Pages, we use `dist/holakit.css` in our demo `index.html`. You need to change it to `assets/holakit.css` for the Parcel dev server. Keep in mind that you should exclude this change in your PR.

This project is mostly designed for ¡Hola! usage, so the design may not be fit in your project. Pull requests are always welcome though, for your or some others' case.

In case you're interested in financially supporting this project or even ¡Hola! itself, you can directly support us on [Afdian.net](https://afdian.net/@ihola). You can contact `hello at ihola dot one` or `hola at ihola dot one` if you can't donate in CNY or through online payments.

## Legal

Licensed under MIT. See LICENSE.
