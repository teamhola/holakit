# Migrating from 0.x

In 0.x versions of Holakit, we used a lot of CSS classes and its combinations to achieve various components. Version 2.x now is built completely in *WebComponents*, which makes using Holakit components effortless in all kinds of projects, needless to memory CSS classes and its usage. However, Holakit's major goals and missions didn't change in this transition. We still wants simplicity and painless framework-agnostic design and development process.

> **Why jumping over 1.x ?** We did plann to release a 1.x series, but we found that 0.x are not worth continuing due to the framework design, so we decided to move to the *WebComponents* way after then. In this way, tagging the new version as 1.x won't be proper, since it's not a "stable release of 0.x" in common sense.

This guide is designed for refactoring existing Holakit 0.x apps to use recommended Holakit 2.x.

## General

### Packages to use

NPM package `holakit` is now deprecated. Holakit 2.x use organization `@holakit` on NPM. if you use Holakit through NPM, just replace it with `@holakit/core`.

```bash
yarn remove holakit
yarn add @holakit/core
```

Since now Holakit is a set of WebComponents, you will also need to import the JS bundle instead of a CSS file in Holakit 0.x.

### `<hola-base>`

`<hola-base>` is a special component that implements some basic resets and variables for the whole component set. You can put it at the beginning of `<body>`. This replaces `hola-var`, `hola-body-typography` and `hola-html-reset`. You should drop these classes on root elements.

### Most of the time...

Components are just transformed in a general way when we convert them to WebComponents:

* component class (`.hola-button`) -> component element (`<hola-button>`)
* modifier class (`.hola-button-primary`) -> component property (`<hola-button primary></hola-button>`)
* sub-element class (`.hola-infosheet-row`) -> sub-element class (`<hola-infosheet><p class="row"></p></hola-infosheet>`)

But as always, we don't like complicated things. Some components may have different patterns, and some may redesigned (or for new components designed in 2.x, first-time designed) from scratch with WebComponents' advantages in hand. You should always refer to the docs of Holakit 2.x to see the right way to make full use of our component set.

## Components

### `<hola-button>`

The only thing to mention is, since we are now custom elements, you can't just change the tag name. But the solution is even easier:

* Setting `href` property on `<hola-button>` to turn it into a link (`<a>`).
* Embedding `<hola-button>` into a `<form>` to use it as a form element. By default it will be a `<button type='button'>`, but you can change the `type` by changing `type` on `<hola-button>`.
* To use as a form submit, set a `submit` property on `<hola-button>`. This will make `<hola-button>` act as an `<input type="submit">`.

### `.hola-card-stack` with `.hola-columns`

Because it's kind of too complex, we decided not to combine these two classes in any cases. Don't worry, this won't break your design:

* More than one card in a vertical scene both on mobile & desktop (e.g. in sidebar): Use `<hola-card-stack>`.
* Various card want to be distributed to multi columns one desktop to make use of horizonal available space: Use `<hola-columns>` directly.

Notice: if you want a card flow, please don't `<hola-columns>` since it distributes cards vertical-first.
