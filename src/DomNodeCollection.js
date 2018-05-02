class DOMNodeCollection {
  constructor(nodeArray) {
    this.nodeArray = nodeArray;
  }

  at(index) {
    return this.nodeArray[index];
  }

  html(text) {
    if (typeof(text) === 'string') {
      this._each(node => {
        node.innerHTML = text;
      });
    } else {
      return this.nodeArray[0].innerHTML;
    }
  }

  empty() {
    this.html('');
  }

  prepend(newElement) {
    this._each(node => {
      node.innerHTML = newElement + node.innerHTML;
    });
    return this;
  }

  append(newElement) {
    this._each(node => {
      node.innerHTML += newElement;
    });
    return this;
  }

  addClass(className) {
    this._each(node => node.classList.add(className));
    return this;
  }

  removeClass(className) {
    this._each(node => node.classList.remove(className));
    return this;
  }

  toggleClass(className) {
    this._each(node => node.classList.toggle(className));
    return this;
  }

  find(selector) {
    let foundNodes = [];
    this._each(node => foundNodes.push(node.querySelectorAll(selector)));
    return new DOMNodeCollection(foundNodes);
  }

  remove() {
    this._each(node => node.remove());
    return this;
  }

  _each(callback) {
    this.nodeArray.forEach(callback);
  }

}

export default DOMNodeCollection;
