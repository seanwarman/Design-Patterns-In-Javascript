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
        setTimeout(() => {
          console.log('Timeout complete.')
        }, 1000);
      }
      this.firstInstance = Object.create(this.Singleton)
    }

    return this.firstInstance;
  },
  getLetterList: function() {
    return this.firstInstance.letterList;
  },
  getTiles: function() {
    let tilesToSend = this.getLetterList();
    tilesToSend.forEach((letter, i) => {
      tilesToSend.push(this.firstInstance.letterList.slice(0))
    })
  }

}

