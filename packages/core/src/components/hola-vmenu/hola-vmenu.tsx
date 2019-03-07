import { Component } from '@stencil/core';

@Component({
  tag: 'hola-vmenu',
  styleUrls: [
    'hola-vmenu.css'
  ],
  shadow: true
})
export class HolaCard {
  render () {
    return <slot></slot>
  }
}
