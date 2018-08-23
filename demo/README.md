[Demo](http://kelbylu.me/fetch/)  
[Docs](https://github.com/Kelby2/fetch)

For this demo, we are using Foursquare's API and making an AJAX request with `$f.ajax()` to return five cafes around the searched destination. This returns a Promise, which we can chain a callback to when it returns. The DOM is manipulated using `html('')` to clear the results section and `append` to render new results to the panel.

```JavaScript
$f.ajax(options)
  .then(data => {
    renderData(data.response.venues)
  })
}

```

On the bottom right hand corner is a form--when the `Toggle Button` is clicked, `$f(selector)` will be called to grab the respective elements with the matching class or id. Using `toggleClass`, it will toggle a red border around the elements selected.

```JavaScript
function toggleClass() {
  event.preventDefault();
  const selection = $f(event.currentTarget[0].value);
  selection.toggleClass('red-border')
}
```
