import { Component, h } from '@stencil/core'

@Component({
  tag: 'hola-columns',
  styleUrl: 'hola-columns.css',
  shadow: true
})
export class HolaColumns {
  render() {
    return <slot></slot>
  }
}
