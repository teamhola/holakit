import { Component, h } from '@stencil/core'

@Component({
  tag: 'hola-card',
  styleUrls: [
    'hola-card.css',
    'hola-card-tiny.css',
    'hola-card-ghost.css',
    'hola-card-list.css'
  ],
  shadow: true
})
export class HolaCard {
  render() {
    return <slot></slot>
  }
}
