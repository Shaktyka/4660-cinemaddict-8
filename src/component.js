import renderElement from './utils.js';

class Component {
  constructor() {
    if (new.target === Component) {
      throw new Error(`Can't instantiate Component, only concrete one.`);
    }

    this._element = null;
  }

  get element() {
    this.render();
    return this._element;
  }

  render() {
    this._element = renderElement(this.template);
    this.bind();
  }

  get template() {
    throw new Error(`You have to define template.`);
  }

  bind() {}

  unbind() {}

  unrender() {
    if (this._element) {
      this.unbind();
      this._element = null;
    }
  }

  update() {}
}

export default Component;
