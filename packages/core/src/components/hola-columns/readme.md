# hola-columns

Columns are useful for desktop experience. Normally if you want a card based stack works on desktop, put them in columns. Because columns fallback a stack on mobile, we suggest you always use columns instead of stacks.

IF your columns would be a set of cards (previously by combining `.hola-card-stack` with `.hola-columns`), just specify `of-cards`.

For some common design patterns, add `ruled` to enable rules between columns. This is useful in text-only or text-heavy situations.

## Markups

```html
<hola-columns of-cards ruled>
  <!--
    Don't really use ruled with of-cards!
    Here we just demonstrate that we have these two properties, but they won't work together!
    Use ruled for text columns, and ONLY of-cards for cards.
  -->
  <div class="item" margined>
    <!--
      Add margined if you want any gap between your items.
      Again don't do that on card ones.
    -->
    <hola-card></hola-card>
  </div>
</hola-columns>
```

<!-- Auto Generated Below -->


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
