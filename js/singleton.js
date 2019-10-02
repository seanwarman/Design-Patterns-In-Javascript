const Singleton = {
  firstInstance: null,
  letterList: [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ],
  firstThread: true,
  Singleton: {},
  getInstance: function () {
    if (this.firstInstance === null) {
      if(this.firstThread) {
        this.firstThread = false;
        // ??
      }
      this.firstInstance = Object.create(this.Singleton)
    }

    return this.firstInstance;
  }
}

