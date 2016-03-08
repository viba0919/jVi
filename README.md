jVi
==================================================

Small and fast JavaScript library.


Available methods
--------------------------------------

- show()
- hide()
- css(property, value)
- css({property: value, property: value, ...})
- addClass(classNames)
- removeClass(className)
- on(eventName, handler)
- each(callback)


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