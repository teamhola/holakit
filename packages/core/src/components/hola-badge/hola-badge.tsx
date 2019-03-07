import { Component } from '@stencil/core';

@Component({
  tag: 'hola-badge',
  styleUrls: [
    'hola-badge.css'
  ],
  shadow: true
})
export class HolaCard {
  render () {
    return <slot></slot>
  }
}
