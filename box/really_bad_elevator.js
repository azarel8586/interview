//design an Elevator CLASS!

class Elevator {
  constructor() {
    this.callStack = [];
    this.floorMap = new Map();
    this.capacity = 5;
    this.isAvailable = true;
    this.curFloor = 0;
    this.direction = 'up';
    this.upCalls = 0;
    this.upBottomFloor = 0;
    this.downCalls = 0;
    this.downTopFloor = 0;
    
    this.gotoFloor.bind(this);
    this.nextDestination.bind(this);
  }
  
  callElevator (callFloor, callDest, direction) {
    this.callStack.push({
      start: callFloor,
      stop: callDest,
      dir: direction
    });
  }
  
  startElevator () {
    this.buildRunPlan();
    
    console.log('u v d', this.upCalls, this.downCalls )
    if (this.upCalls > this.downCalls) {
      this.upCalls = 0;
      this.direction = 'up';
      this.gotoFloor(this.upBottomFloor);
    } else {
      this.downCalls = 0;
      this.direction = 'down';
      this.gotoFloor(this.downTopFloor);
    }
  }
  
  buildRunPlan () {
    // What we need here is to make a map of the floor, Ku and Kd (up and down);
    this.calcExtremities();
    // turn the call stack into a run map;
    while (this.callStack.length) {
      let call = this.callStack.pop();
      console.log('call', call);
      
      if (call.dir === 'up') {
        for (let i = call.start; i <= call.stop; i++) {
          if (this.floorMap.has(i)) {
            let temp = this.floorMap.get(i);
            temp['ku'] += 1;
            this.floorMap.set(i, temp);
          } else {
            this.floorMap.set(i, {
              'ku': 1,
              'kd': 0
            });
          }
        }
      } else {
        for (let j = call.stop; j <= call.start; j++) {
          if (this.floorMap.has(j)) {
            let temp = this.floorMap.get(j);
            temp['kd'] += 1;
            this.floorMap.set(j, temp);
          } else {
            this.floorMap.set(j, {
              'ku': 0,
              'kd': 1
            });
          }
        }
      } 
    }
  }
  
  calcExtremities () {
    this.callStack.forEach((item, i) => {
      if (item.dir === 'up') {
        this.upBottomFloor = (this.upBottomFloor > item.start) ? item.start : this.upBottomFloor;
        this.upCalls++;
      } else {
        this.downTopFloor = (this.downTopFloor < item.start) ? item.start : this.downTopFloor;
        this.downCalls++;
      }
    });
  }

  nextDestination () {
    let ref = this.floorMap.get(this.curFloor);
    
    if (ref) {
      if (this.direction === 'up') {
        if (ref.ku > 0) {
          return this.curFloor + 1;
        }
      } else {
        if (ref.kd > 0) {
          return this.curFloor - 1;
        } else {
          this.downCalls = 0;
        }
      }
    }
    this.isAvailable = true;
    this.startElevator();
    return null;
  }
  
  gotoFloor (floor) {
    this.isAvailable = false;
    this.curFloor = floor;
    
    console.log("stopped on ", floor);
    
    setTimeout(() => {
      let nextFloor = this.nextDestination();
      if (nextFloor) {
        this.gotoFloor(nextFloor);
      }
    }, 1000);
  }
}

const ele = new Elevator();

ele.callElevator(0, 5, 'up');
ele.callElevator(1, 5, 'up');
ele.callElevator(1, 5, 'up');
ele.callElevator(0, 3, 'up');
ele.callElevator(0, 2, 'up');
ele.callElevator(0, 2, 'up');
ele.callElevator(1, 2, 'up');
ele.callElevator(1, 4, 'up');
ele.callElevator(4, 5, 'up');
ele.callElevator(5, 4, 'down');
ele.callElevator(3, 2, 'down');
ele.callElevator(2, 1, 'down');
ele.callElevator(4, 2, 'down');
ele.callElevator(3, 0, 'down');
ele.callElevator(4, 0, 'down');
ele.callElevator(5, 0, 'down');
ele.startElevator();
