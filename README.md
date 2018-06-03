# fetch

Fetch at it's core is a DOM manipulation library. A stripped down version of the notorious jQuery, Fetch comes with all the core functionalities and none of the baggage.

#### How To Use
Include the following in the head of your HTML and start using ```$f(selector)``` to create a collection of DOM elements.

```html
<script src='https://cdn.rawgit.com/Kelby2/fetch/39c979e2/dist/main.js'></script>
```
#### Selector
```JavaScript
$f('h1')      //Returns a collection of all h1 elements
$f('.strong') //Returns a collection of all elements with the strong class
const collection = $f(selector);
```

#### DOM Manipulation
```JavaScript
collection.html([text]); //If no argument is passed in, returns the innerHTML of the first element in the collection. Otherwise, sets the innerHTML of each element in the collection to the argument
collection.append(element);
collection.addClass(className); //Adds the specified class to all elements in the collection
collection.removeClass(className); //Removes the specified class from all elements in the collection. No-op if the element does already the specified class
collection.toggleClass(className);
  //Adds or removes one or more class names from each element in the collection, depending on the presence of the class
```

#### Traversal
```JavaScript
collection.first(); //Returns the first element in the collection
collection.last(); //Returns the last element in the collection
collection.children(); //Returns a new collection of the children of each each element
collection.parent(); //Returns a distinct collection of the parents of each element
```

#### Event Handling
```JavaScript
collection.on(event, callback);
  //Creates an listener for the event, triggering the callback when the event occurs

collection.off(event, [callback]);
  //Removes all associated callbacks that are tied to the event. If a callback argument is passed in, will only remove that specific callback
```

#### Ajax Requests with Promise Return
```JavaScript
$f.ajax(options) //Performs an asynchronous HTTP request and returns a Promise. Options is a plain object that configures the set up of the request
```

Developed by Kelby Lu
