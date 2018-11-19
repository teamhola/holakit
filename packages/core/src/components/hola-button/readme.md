# hola-button

Buttons are one of the most used components. It's the very basic way that users can interact with an application. Currently HolaKit provides 3 kinds of button: Normal buttons, Primary buttons and Ghost buttons.

* **Normal Buttons**: For general purpose.
* **Primary Buttons**: For primary operations. Normally in a row of buttons, you have at least one primary buttons, for the most frequent usage.
* **Ghost Buttons**: For banner and heroes. It's kind of call-to-action.

Add `normal`, `primary` or `ghost` as a property on this component to choose a kind of button. You should avoid using raw unmodified button, that means usually you should use one of those property.

If you do care the underlying actual element:

* Setting `href` property on `<hola-button>` to turn it into a link (`<a>`).
* Embedding `<hola-button>` into a `<form>` to use it as a form element. By default it will be a `<button type='button'>`, but you can change the `type` by changing `type` on `<hola-button>`.
* To use as a form submit, set a `submit` property on `<hola-button>`. This will make `<hola-button>` act as an `<input type="submit">`.

In some cases you can also use `<hola-button href="xxx">`, for links in a row with other buttons to be properly aligned.

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                              | Type      |
| -------- | --------- | -------------------------------------------------------- | --------- |
| `href`   | `href`    | When you need this to be a link, specify this as a url.  | `string`  |
| `submit` | `submit`  | Add this if you want this acts like a form submit.       | `boolean` |
| `type`   | `type`    | The type of button when this element acts as `<button>`. | `string`  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
