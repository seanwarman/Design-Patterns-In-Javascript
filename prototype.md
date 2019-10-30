# Prototype
Make an exact copy of an object. This actually happens whenever you make an object in Javascript so it's not really relevent to use this pattern.

It's interesting to know though that JS does this whenever you assign an object from one to another. Every object has a prototype parameter that contains a set of functions that are available to all objects of the same type.