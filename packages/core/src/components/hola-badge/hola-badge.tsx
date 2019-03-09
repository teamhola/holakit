import { Component } from '@stencil/core';

@Component({
  tag: 'hola-badge',
  styleUrls: [
    'hola-badge.css'
  ],
  shadow: true
})
export class HolaBadge {
  render () {
    return <slot></slot>
  }
}
