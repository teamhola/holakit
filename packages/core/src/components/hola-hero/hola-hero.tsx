import { Component } from '@stencil/core';

@Component({
  tag: 'hola-hero',
  styleUrl: 'hola-hero.css',
  shadow: true
})
export class HolaCard {
  render () {
    return <hola-container>
      <slot></slot>
    </hola-container>
  }
}
