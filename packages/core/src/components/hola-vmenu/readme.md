# hola-vmenu

*Vmenu* is a short form of *Vertical Menu*. It is mainly designed for sidebars in websites, listing and allowing users to navigate to certain sections of the whole part. It also specifically has an active indicator to indicate "which section is the one you're looking at". Often used in informational sites and dashboards, this component however is not designed for showing menu groups like what you see in normal phone *Settings* app. For that usage, you'd better see [`hola-card`'s card list](hola-card.md#card-lists).

It's designed to be used in a card. You can use it out of cards if you need to in specific scenarios. When used in cards, this component will adjust itself to fit card's padding and takes up all horizontal space, but you can have other elements before and after this menu. In many cases you want a card title before, and copyright and other footer information after if you implemented a never-end flow for the main column of site.

```html
<hola-card>
  <hola-vmenu>
    <!--.item for items to be rendered.-->
    <a class="item" href="/team">Our team</a>
    <a class="item" href="/sponsors">Sponsors</a>
    <a class="item" href="/team/recruit">Recruiting <hola-badge>We're hiring!</hola-badge></a>
    <!--.active for active item. Ensure you have only one .active in a vmenu!-->
    <a class="item active" href="/about">About us</a>
  </hola-vmenu>
</hola-card>
```

<!-- Auto Generated Below -->