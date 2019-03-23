class Component {
   constructor() {
       if (new.target === Component) {
           throw new Error(`Can't instantiate Component, only concrete one.`);
       }
   }

   get template() {
    throw new Error(`You have to define template.`);
  }

  render() {
    this.unrender();
    this._element = renderElement(this.template);
    this.bind();
    return this._element;
  }
}
