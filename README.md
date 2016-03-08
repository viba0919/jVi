jVi
==================================================

Small and fast JavaScript library.


Available methods
--------------------------------------

- show() - display the matched elements
- hide() - hide the matched elements
- css(property, value)
- css({property: value, property: value, ...})
- size({width: value, height: value}) - set new dimensions to matched elements
- addClass(classNames) - add class names to matched elements
- removeClass(className) - remove class name from matched element
- text() - return inner text
- text(str) - set inner text
- on(eventName, handler) - event handler
- each(callback)


Manipulation style properties
--------------------------------------

```js
jVi('#container').css({
    'background':   '#eee',
    'color':        '#333'
});

jVi('#container').css('padding', '25px 30px');

jVi('p').hide();

jVi('#container').size({
    width: '70%',
    height: 'auto'
});
```


Event Handling
--------------------------------------

```js
jVi('#button').on('click', function() {
    // Some code
});
```

Method chaining
--------------------------------------

```js
jVi('#heading')
	.css('fontSize', '24px')
	.addClass('h-font-weight-normal')
	.removeClass('h-color-red');
```

Text manipulation
--------------------------------------

```js
jVi('.h-hide').text('Text added with text() method').css('color', 'red');
```