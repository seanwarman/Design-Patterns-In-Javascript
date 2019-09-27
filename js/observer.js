const StockObservable = {
    observers: [],
    ibmPrice: 0, 
    aaplPrice: 0, 
    googPrice: 0,
    register: function(newObserver) {
        this.observers.push(newObserver)
    },
    unregister: function(delObserver) {
        let index = this.observers.indexOf(delObserver);
        console.log('Observer ' + index+1 + ' deleted');
        this.observers.splice(index, 1)
    },
    notifyObservers: function() {
        this.observers.forEach( observer => {
            observer.update(this.ibmPrice, this.aaplPrice, this.googPrice);
        })
    },
    setAAPLPrice: function(newPrice) {
        this.aaplPrice = newPrice;
        this.notifyObservers();
    },
    setIBMPrice: function(newPrice) {
        this.ibmPrice = newPrice;
        this.notifyObservers();
    },
    setGOOGPrice: function(newPrice) {
        this.googPrice = newPrice;
        this.notifyObservers();
    }
}

let observerIDTracker = 0;

const StockObserver = {
    ibmPrice: 0,
    aaplPrice: 0,
    googPrice: 0,
    observerID: 0,
    stockObservable: null,
    bindObserverTo: function(stockObservable) {
        this.stockObservable = stockObservable;
        this.observerID = observerIDTracker++;
        stockObservable.register(this);
    },
    update: function(ibmPrice, aaplPrice, googPrice) {
        this.ibmPrice = ibmPrice;
        this.aaplPrice = aaplPrice;
        this.googPrice = googPrice;
    }
}

// Create an object to be observed. This is also going to
// be our interface.
let stockObservable = Object.create(StockObservable);

// Create another object to observe it. This is the
// listener object. Then bind them together
// using bindObserverTo(). 
let observer1 = Object.create(StockObserver);
observer1.bindObserverTo(stockObservable);

// Now if we update the prices, they will also update
// on observer1.
stockObservable.setAAPLPrice(197);
stockObservable.setGOOGPrice(192);

// We can create any number of new observers at any time
// and they will have the correct prices as soon as they
// are bound to the observed object.
let observer2 = Object.create(StockObserver);
observer2.bindObserverTo(stockObservable);
let observer3 = Object.create(StockObserver);
observer3.bindObserverTo(stockObservable);

// When we update the observed object, all the observers
// will update as well.
stockObservable.setAAPLPrice(9);
console.log('observer1:');
console.log(observer1);
console.log('observer2:');
console.log(observer2); 
console.log('observer3:');
console.log(observer3); 
console.log('stockObservable :', stockObservable.observers);
