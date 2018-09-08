// JS only
/*
  Facebook
  const someEvent2 = function(string) {
    console.log('Some Event2: ', string);
  };
  emitter.on('blah', function(string) {
    console.log('Some Event1: ', string);
  });
  emitter.on('blah', someEvent2);
  emitter.emit('blah', 'hello');
  emitter.removeListener('blah', someEvent2);
  emitter.emit('blah', 'hello!');
*/
class EventEmitter {
  constructor () {
    console.log("Constructed");
    this.events = {};
  }
  
  on (eventName, callbackFunction) {
    console.log("On", eventName);
    let tempArr = this.events[eventName];
    if (!tempArr) {
      tempArr = [];
    }
    tempArr.push(callbackFunction);
    this.events[eventName] = tempArr;
  }
  
  // now a function to be called to emmit a type of event
  emit (eventName, ...params) {
    let candidateEvents = this.events[eventName];
    if (candidateEvents) {
      for (let i = 0; i < candidateEvents.length; i++) {
        let cb = candidateEvents[i];
        cb.apply(this, params);
      }
    }
  }
  
  removeListener(eventName, listener) {
    let eventFamily = this.events[eventName];
    if (eventFamily.indexOf(listener) !== -1) {
      eventFamily.slice(eventFamily.indexOf(listener), 1);
    }
    // test this part
    this.events[eventName] = eventFamily;
  }
}

const toyEmitter = new EventEmitter();

const someEvent4 = function(a, b) {
  console.log('Some Event4: ', a);
};
toyEmitter.on('blah', function(a, b) {
  console.log('Some Event3: ', a);
});
toyEmitter.on('blah', someEvent4);
toyEmitter.emit('blah', 'hello');
toyEmitter.removeListener('blah', someEvent4);
toyEmitter.emit('blah', 'hello!');
