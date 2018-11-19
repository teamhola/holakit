import { Component } from '@stencil/core';

@Component({
  tag: 'hola-container',
  styleUrl: 'hola-container.css',
  shadow: true
})
export class HolaContainer {
  render () {
    return <slot></slot>
  }
}
