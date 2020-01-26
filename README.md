# Design Patterns In Javascript
A repo with examples of Design Patterns as I learn them.

### [State](state.md) | [Code](./js/state.js)
How to have have an object's functions do different things depending on the objects internal state.
This pattern allows us to use a single interface that has multiple functionality without using any
`if` statements.

## [Observer](observer.md) | [Code](./js/observer.js)
How to have an object *push* messages to multiple child objects simultaniously.

## [Factory](factory.md) | [Code](./js/factory.js)
A way to generate objects that share common properties and methods but have different types.

## [Strategy](strategy.md) | [Code](./js/strategy.js)
How to add differing methods to any "sub-classes" that stem from the same "super-class".

## [Singleton](singleton.md) | [Code](./js/singleton.js)
Creating a class that will only ever make one instance of an object.

## [Builder](builder.md) | [Code](./js/builder.js)
A **Builder** is a blueprint for creating objects that have the same properties but different values.

## [Prototype](prototype.md) | [Code](./js/prototype.js)
Make an exact copy of an object.

## [Decorator](decorator.md) | [Code](./js/decorator.js)
The Decorator allows you to add functionality to an object at run-time. 

## [Command](command.md) | [Code](./js/decorator.js)
**Command** is a little bit like [State](./js/state.js) in that it uses 
different objects to change the functionality of a single interface. 

## [Adapter](adapter.md) | [Code](./js/adapter.js)
The adapter allows us to use to incompatible interfaces together.
