import { Component, Prop, Element, h } from '@stencil/core'

@Component({
  tag: 'hola-button',
  styleUrl: 'hola-button.css',
  shadow: true,
})
export class HolaButton {
  @Element() el: HTMLElement

  /**
   * When you need this to be a link, specify this as a url.
   */
  @Prop() href: string = '#'

  /**
   * The type of button when this element acts as `<button>`.
   */
  @Prop() type: string = 'button'

  /**
   * Add this if you want this acts like a form submit.
   */
  @Prop() submit: boolean = false

  private onClick(event: Event) {
    // To make form events work, this method is stole from
    // https://github.com/ionic-team/ionic/blob/0fec72255bb99611cfe67ea70152400ec7f8b762/core/src/components/button/button.tsx#L118-L139
    if (!this.el) return
    const form = this.el.closest('form')
    if (form) {
      event.preventDefault()
      if (this.submit) return form.submit()
      const fakeButton = document.createElement('button')
      fakeButton.type = this.type
      fakeButton.style.display = 'none'
      form.appendChild(fakeButton)
      fakeButton.click()
      fakeButton.remove()
    }
  }

  render() {
    if (this.href)
      <a href={this.href} class="button">
        <slot></slot>
      </a>
    return (
      <button onClick={this.onClick} type={this.type} class="button">
        <slot></slot>
      </button>
    )
  }
}
