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

