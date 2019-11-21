# Observer
[Code](./js/observer.js)

How to have an object *push* messages to multiple child objects simultaniously.

This works by allowing any number of child objects to **subscribe** to the object pushing messages.

This is actually already built in to Javascript because every <button> element can be subscribed to using `button.addEventListener`.

To do this the `<button>`, the thing being observed or the **Observable**, needs to tell the event listeners, or the **Observers**, when it has changed.

The **Observable** keeps an array of **Observers** that are able to update themselves whenever the **Observable** is updated.

```js
const StockObservable = {
    observers: [],
    //...
}
```

In turn, the **Observers** hold an instance of the **Observerable** as well.

```js
// observer1
{
    sockObserverable: { aaplPrice: 9, googPrice: 192 }
}
```

The properties for each of the object's "classes" are as follows:

```js
Observerable = {
    observers: [],
    register: () => {
        // push to observers.
    },
    unregister: () => {
        // splice observers.
    },
    notifyObservers: () => {
        // update each item in observers.
    },
    setter: () => {
        // Set property of each item in observers.
        // There can be one of these for every property.
    }
    // ...values
}

Observer = {
    observerable: {},
    bindObserverTo: () => {
        // register with the Observerable.
    },
    update: () => {
        // to update this objects properties.
    }
    // ...values
}
```