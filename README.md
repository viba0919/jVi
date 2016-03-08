jVi
==================================================

Small and fast JavaScript library.


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
	.css('fontSize': '24px')
	.addClass('some-class-name')
	.removeClass('other-class-name');
```


Manipulation style properties
--------------------------------------

```js
jVi('#container').css({
    'background': 	'#eee',
    'color': 		'#333'
});

jVi('#heading').css('fontSize': '24px');
```