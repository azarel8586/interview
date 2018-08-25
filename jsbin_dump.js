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

// ------------------------------------------------------------------------

// play with MAP and REDUCE
console.clear();

 // REDUCE
var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  }
];
//to number of years and be slick
// remember that it returns a value
const years = pilots.reduce((accumilator, item) => accumilator + item.years, 0);
console.log(years, "Total years exp");

// the point is that you get a single value back.
// now find the greenest pilot:
const newb = pilots.reduce((greenest, item) => {
  //console.log(greenest, item);
  if ((greenest.years || 100) > item.years) {
    return item;
  } else {
    // you NEED to pass on the value regardless:
    return greenest;
  }
});

console.log(newb)

// FILTER
var pilots2 = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  }
];

console.log(pilots2.filter(item => item.faction === "Rebels"));
console.log(pilots2.filter(item => item.faction === "Empire"));
