# hola-card

Card components are blocks by default. We don't suggest using them as inlines or inline-blocks. Normally you would just wrap cards in card stack or get them into layouts so they won't get too wide. In some cases you want to wrap cards directly in containers: Fine, but don't do it every where, since cards can be too wide for desktop users.

Cards can't be too narrow too; Because we have great padding around cards, if you get 4 or more columns in a container, the whole page may looks too messy, and lines in each column will be too short for a comfortable reading experience.

Of course titles are accepted in cards and you will use them frequently. We also get head images for cards, and even pure image cards. Go ahead and make your app vivid.

We have patched cards for being used in links; Feel free to use them as
clickable items, but don't use them as buttons. For example, you can use linked cards as article items in a list page of blog, but don't use a card titled "Click Here" as an action button. Card always contains some actual data, instead of pure commands / verbs.

## Special

### Tiny Cards

We also have tiny cards design. Tiny cards are designed to be an `inline-block` and it fits in horizonal layouts, like the app cards we can see in Google Play Store. Don't put too much things in it, since typically a tiny card should only contains an image and a title.

### Card Lists

Card lists are designed for displaying a list of items. It looks like one card with a small divider between every item. It's widely used in mobile designs as a group of menus, just like the Settings app on phones. Adding an icon or including a tagline for the item is welcome, but don't put too much things there in an item. For a rich list you may want it be a list of cards, which can be addressed using our Card Stack or Columns.

## Markups

```html
<hola-card with-image>
  <!--
    Use with-image for image headers, or full-image for picture-only cards.
    Use tiny if you wants a tiny card, which is an inline-block and fits in
    horizonal distributions.
  -->
  <img src="https://source.unsplash.com/random" alt="">
  <h2 class="title">Test Card</h2> 
  <!-- .title acts as the card title. -->
  <p>... with a little content.</p>
</hola-card>

<hola-card list>
  <!-- Card List -->
  <div class="item">
    <!-- Items with .item -->
    <h3>London Fog</h3>
    <p>by Jose Tranco @ 2017.11.7</p>
  </div>
  <div class="item">
    <h3>On My Way To Business</h3>
    <p>by Hawk Luo @ 2018.5.15</p>
  </div>
</hola-card>
```

<!-- Auto Generated Below -->


## CSS Custom Properties

| Name                  | Description                                                                    |
| --------------------- | ------------------------------------------------------------------------------ |
| `--hola-card-gap`     | Specify the gap between cards. It's shared across both vertical and horizonal. |
| `--hola-card-padding` | Specify the padding of cards. Currently it only affects normal size cards.     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
