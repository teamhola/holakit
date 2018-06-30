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

> WARNING: You should pin the version you use in your project, since we're still in 0.x stage and we can have some breaking changes at any time. We'll follow semver later we finish our 0.x.

Or use CSS files in the npm package directly. You can exclude unnecessary parts of this project in `assets/holakit.css` and regenerate a build using `yarn build`. This project is using pure CSS with many edge-cutting CSS features, and you can see our backcompat status in `.browserlistrc`. However, some features like scoped CSS variables is not supported by cssnext, so you can't really use HolaKit in some old browsers, even is listed in `.browserlistrc`. This means you will need to roll your own build for better browser compatibility.

This project is mostly designed for ¡Hola! usage, so the design may not be fit in your project. Pull requests are welcome though, for your or some others' case.

### Advanced Usage

#### Customizing

We are using CSS variables, so you can do some customizations by changing variables. See `assets/css/var.css` for reference.

Since we use a class to scope our variables, you have many choices to override our defaults.

1. Make you own build and replace defaults in `var.css`.
2. Roll your own `.hola-var` class and apply it on `<html>`.
3. Roll a class with only the variables you changed, and add it on `<html>`, after our `hola-var`.

And many other ways. Our flexible, properly-scoped architecture can make most cases cakes.

#### Use a subset

You may want to use only a part of our component set. That's pretty easy since we divide different components into different files. You can `@import` any part of this set, and don't forget to include `vendor.css`, `reset.css` and `var.css` since they are required by most components. Anyway, it's not garanteed nor is tested, so you may found that you need to import more than your need. Drop us an issue or a PR if you find better split solution.

## Legal

Licensed under MIT. See LICENSE.
