import { Component, h } from '@stencil/core'

@Component({
  tag: 'hola-footer',
  styleUrl: 'hola-footer.css',
  shadow: true
})
export class HolaFooter {
  render() {
    return <slot></slot>
  }
}
