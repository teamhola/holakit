# hola-card

Card components are blocks by default. We don't suggest using them as inlines or inline-blocks. Normally you would just wrap cards in card stack or get them into layouts so they won't get too wide. In some cases you want to wrap cards directly in containers: Fine, but don't do it every where, since cards can be too wide for desktop users.

Cards can't be too narrow too; Because we have great padding around cards, if you get 4 or more columns in a container, the whole page may looks too messy, and lines in each column will be too short for a comfortable reading experience.

We also have tiny cards design. Tiny cards are designed to be an `inline-block` and it fits in horizonal layouts, like the app cards we can see in Google Play Store. Don't put too much things in it, since typically a tiny card should only contains an image and a title.

Of course titles are accepted in cards and you will use them frequently. We also get head images for cards, and even pure image cards. Go ahead and make your app vivid.

We have patched cards for being used in links; Feel free to use them as
clickable items, but don't use them as buttons. For example, you can use linked cards as article items in a list page of blog, but don't use a card titled "Click Here" as an action button. Card always contains some actual data, instead of pure commands / verbs.

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
```

<!-- Auto Generated Below -->


## CSS Custom Properties

| Name                  | Description                                                                    |
| --------------------- | ------------------------------------------------------------------------------ |
| `--hola-card-gap`     | Specify the gap between cards. It's shared across both vertical and horizonal. |
| `--hola-card-padding` | Specify the padding of cards. Currently it only affects normal size cards.     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
