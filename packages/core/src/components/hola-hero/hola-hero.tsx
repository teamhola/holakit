import { Component } from '@stencil/core';

@Component({
  tag: 'hola-hero',
  styleUrl: 'hola-hero.css',
  shadow: true
})
export class HolaHero {
  render () {
    return <hola-container>
      <slot></slot>
    </hola-container>
  }
}
