// implement observable

console.clear();

class Observable {
  constructor(obsvrObj) {
    this.observe(obsvrObj)
  }
  // set this up to trigger all of the observer props
  observe(observer) {
    this.ondata = (e) => observer.next(e);
    this.onerror = (err) => observer.error(err);
    this.oncomplete = () => observer.complete();
    return () => {
      this.destroy();
    }
  }
}

class DataFoo extends Observable {
  constructor(obsvrObj) {
    super(obsvrObj);
    let i = 0;
    this._id = setInterval(() => this.emit(i++), 200);
  }
  
  emit(n) {
    const limit = 10;
    if (this.ondata) {
      this.ondata(n);
    }
    if (n === limit) {
      if (this.oncomplete) {
        this.oncomplete();
      }
      this.destroy();
    }
  }
  
  destroy() {
    clearInterval(this._id);
  }
}

/**
 * now let's use it
 */
let foo = new DataFoo({
  next(x) { console.log(x); },
  error(err) { console.error(err); },
  complete() { console.log('done')}
});
