Backbone-Upper
==============

A method to mix in Backbone Views/Models/Collections (and in other objects that use prototypal inheritance) to call the ancestor version of a method.

In fact it does not need to be an ancestor, it can be used with any object with a prototype, but the idea is to provide an abstraction that is often usefull when we have hierarchies.