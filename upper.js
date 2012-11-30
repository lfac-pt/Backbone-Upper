define([
    'underscore'
], function (_) {
    "use strict";

    return {
        /**
         * A method to mix in Backbone Views/Models/Collections
         * (and in other objects that use prototypal inheritance)
         * to call the ancestor version of a method.
         *
         * In fact it does not need to be an ancestor, it can be used
         * with any object with a prototype, but the idea is to provide
         * an abstraction that is often usefull when we have hierarchies.
         *
         * Adicional parameters will be passed to the method in the ancestor.
         *
         * @param  {Object} ancestor The object where the target method is.
         * @param  {String} method The name of the method to call.
         * @return The result of the call to the target method.
         */
        upper : function (ancestor, method) {
            return ancestor.prototype[method].apply(this, _.rest(arguments, 2));
        }
    };
});