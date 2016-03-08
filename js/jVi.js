(function(window, undefined) {

    function jVi(selector) {
        if (selector === undefined) {
            return false;
        }

        if (window === this) {
            return new jVi(selector);
        }

        this.length = 0;
        this.nodes = [];
        this.selector = selector;

        if (typeof selector === 'string') {
            this.nodes = [].slice.call(document.querySelectorAll(selector));
        } else {
            console.log('Wrong selector');
        }

        if (this.nodes.length) {
            var i = 0,
                l = this.nodes.length;

            this.length = this.nodes.length;

            for(i; i < l; i++) {
                this[i] = this.nodes[i];
            }
        }

        return this;
    }



    /**
     *  Mouse events:       mousedown, mouseup, click
     *  Keyboard events:    keydown, keypress, keyup
     *
     *  https://developer.mozilla.org/en-US/docs/Web/Events
     */
    jVi.prototype.on = function(eventName, handler) {
        return this.each(function() {
            this.addEventListener(eventName, handler, false);
        });
    };



    /**
     *  Each
     */
    jVi.prototype.each = function(callback) {
        var i = 0,
            l = this.length;

        for(i; i < l; i++) {
            callback.call(this[i], this, i);
        }

        return this;
    };



    /**
     *  Adds class names
     *
     * @returns {jVi}
     */
    jVi.prototype.addClass = function(classNames) {
        return this.each(function() {
            this.className += ' ' + classNames;
        });
    };



    /**
     *  Remove class name
     *
     * @returns {jVi}
     */
    jVi.prototype.removeClass = function(className) {
        return this.each(function() {
            this.className = this.className.replace(new RegExp('(?:^|s)' + className + '(?!S)'), '');
        });
    };



    /**
     *  Show element
     *
     * @returns {jVi}
     */
    jVi.prototype.show = function() {
        return this.each(function() {
            this.style.display = 'block';
        });
    };



    /**
     *  Hide element
     *
     * @returns {jVi}
     */
    jVi.prototype.hide = function() {
        return this.each(function() {
            this.style.display = 'none';
        });
    };



    /**
     *  Change element size
     *
     * @returns {jVi}
     */
    jVi.prototype.size = function(obj) {
        return this.each(function() {
            if (obj.width !== undefined) {
                this.style.width = obj.width;
            }

            if (obj.height !== undefined) {
                this.style.height = obj.height;
            }
        });
    };



    /**
     *  Change or return element text
     *
     * @returns {jVi}
     */
    jVi.prototype.text = function(str) {
        if (str !== undefined) {
            return this.each(function() {
                this.innerText = str;
            });
        }

        return this.length && this[0].innerText;
    };



    /**
     *  Adds inline css rules
     *  Rule argument can be object
     *
     *  @returns {jVi}
     */
    jVi.prototype.css = function(rule, value) {
        var rules = {};

        if (typeof rule === 'object') {
            rules = rule;
        } else if (typeof rule === 'string' && typeof value === 'string' && arguments.length === 2) {
            rules[rule] = value;
        } else {
            return this;
        }

        return this.each(function() {
            for (key in rules) {
                this.style[key] = rules[key];
            }
        });
    };


    window.jVi = jVi;

})(window);