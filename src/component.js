import renderElement from './utils.js';

class Component {
  constructor() {
    if (new.target === Component) {
      throw new Error(`Can't instantiate Component, only concrete one.`);
    }

    this._element = null;
  }

  get element() {
    return this._element;
  }

  get template() {
    throw new Error(`You have to define template.`);
  }

  render() {
    this._element = renderElement(this.template);
    this.bind();
    return this._element;
  }

  bind() {};

  unbind() {};

  unrender() {
    this.unbind();
    this._element.remove();
    this._element = null;
  };
}

export default Component;