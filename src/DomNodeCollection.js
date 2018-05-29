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

  first() {
    const firstNode = this.nodeArray[0];
    return new DOMNodeCollection([firstNode]);
  }

  last() {
    const lastNode = this.nodeArray[this.nodeArray.length-1];
    return new DOMNodeCollection([lastNode]);
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
    this._each(node => foundNodes.push(...node.querySelectorAll(selector)));
    debugger
    return new DOMNodeCollection(foundNodes);
  }

  remove() {
    this._each(node => node.remove());
    return this;
  }

  children() {
    let allChildrenNodes = [];
    this._each(node => {
      const nodeChildren = Array.from(node.children);
      allChildrenNodes.concat(nodeChildren);
    });
    return new DOMNodeCollection(allChildrenNodes);
  }

  parent() {
    let parentNodes = [];
    this._each(node => {
      const nodeParent = node.parentElement;
      //should only include each parent once
      if (!nodeParent.visited) { parentNodes.push(nodeParent); }
      nodeParent.visited = true;
    });

    //changes visited back to false for future calls
    parentNodes.forEach(node => {
      node.visited = false;
    });
    return new DOMNodeCollection(parentNodes);
  }

  on(event, callback) {
    const eventKey = `cs-${event}`;
    this._each(node => {
      node.addEventListener(event, callback);
      if (!node[eventKey]) { node[eventKey] = []; }
      //saves event/callback for removal purposes
      node[eventKey].push(callback);
    });
    return this;
  }

  off(event, callback) {
    const eventKey = `cs-${event}`;
    this._each(node => {
      if (callback) {
        //removes specific callback handler if provided
        node.removeEventListener(event, callback);
      } else {
        //removes all listeners attached to the event
        node[eventKey].forEach(cb => {
          node.removeEventListener(event, cb);
        });
        node[eventKey] = [];
      }
    });
    return this;
  }

  _each(callback) {
    this.nodeArray.forEach(callback);
  }

}

export default DOMNodeCollection;
