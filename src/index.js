import DOMNodeCollection from './DomNodeCollection';

const fxArray = [];

function $f(selector) {
  let nodeArray;
  switch (typeof selector) {
    case 'string':
      const nodeList = document.querySelectorAll(selector);
      nodeArray = Array.from(nodeList);
      break;
    case 'function':
      fxArray.push(selector);
      break;
    case HTMLElement:
      nodeArray = Array.from(selector);
      break;
  }

  return new DOMNodeCollection(nodeArray);
}

document.addEventListener("DOMContentLoaded", () => {
  fxArray.forEach(fx => fx());
});

$f.extend = (...args) => {
  return Object.assign({}, ...args);
};

$f.ajax = options => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const defaults = {
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      method: "get",
      url: "",
      success: () => {},
      error: () => {},
      data: {},
    }
    options = $f.extend(defaults, options);
    options.method = options.method.toUpperCase();

    xhr.open(options.method, options.url, true);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(JSON.parse(xhr.response));
      }
    }

    xhr.send(JSON.stringify(options.data));
  });
};

window.$f = $f;
