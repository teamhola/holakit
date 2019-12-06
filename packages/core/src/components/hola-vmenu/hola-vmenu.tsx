import { Component, h } from '@stencil/core'

@Component({
  tag: 'hola-vmenu',
  styleUrls: ['hola-vmenu.css'],
  shadow: true
})
export class HolaVmenu {
  render() {
    return <slot></slot>
  }
}
