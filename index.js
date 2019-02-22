class AlumWithFlyweight {
  constructor(name, flyweight) {
    this.name = name;
    this.data = flyweight
  }
}

class AlumWithoutFlyweight {
  constructor(name) {
    this.name = name;
    this.city = 'New York';
    this.state = 'New York';
    this.address = 'asdfasd';
    this.knowsCode = true;
    this.graduated = false;
    this.picture = 'img/logo_rc.png';
  }
}

class Flyweight {
  constructor() {
    this.city = 'New York';
    this.state = 'New York';
    this.address = 'asdfasd';
    this.knowsCode = true;
    this.graduated = false;
    this.picture = 'img/logo_rc.png';
  }
}

class FlyweightFactory {
  constructor() {
    this.flyweight = new Flyweight();
  }

  static create() {
    return new AlumWithFlyweight(`Eileen & Michelle ${i}`, FlyweightFactory.flyweight);
  }
}

function generate() {
  let input = document.getElementById("numberOfObjects")
  let withUsedHeapSize = document.getElementById("withUsedHeapSize");
  let withTotalHeapSize = document.getElementById("withTotalHeapSize");
  let withoutUsedHeapSize = document.getElementById("withoutUsedHeapSize");
  let withoutTotalHeapSize = document.getElementById("withoutTotalHeapSize");
  numberOfObjects = input.value;
  let alumni = []

  for(i=0; i<numberOfObjects; i++){
    alumni.push(new AlumWithoutFlyweight(`Eileen & Michelle ${i}`))
    // alumni.push(FlyweightFactory.create(`Eileen & Michelle ${i}`))
  }

  console.log(window.performance.memory);
  totalJSHeapSize = window.performance.memory.totalJSHeapSize;
  usedJSHeapSize = window.performance.memory.usedJSHeapSize;

  withTotalHeapSize.textContent = totalJSHeapSize;
  withUsedHeapSize.textContent = usedJSHeapSize;

  alumni = []
  for(i=0; i<numberOfObjects; i++){
    // alumni.push(new AlumWithoutFlyweight(`Eileen & Michelle ${i}`))
    alumni.push(FlyweightFactory.create(`Eileen & Michelle ${i}`))
  }

  console.log(window.performance.memory);
  totalJSHeapSize = window.performance.memory.totalJSHeapSize;
  usedJSHeapSize = window.performance.memory.usedJSHeapSize;

  withoutTotalHeapSize.textContent = totalJSHeapSize;
  withoutUsedHeapSize.textContent = usedJSHeapSize;
}


// initial measurements below
// MemoryInfo
// jsHeapSizeLimit: 2190000000
// totalJSHeapSize: 23100000
// usedJSHeapSize: 18200000

// MemoryInfo {totalJSHeapSize: 15200000, usedJSHeapSize: 14300000, jsHeapSizeLimit: 2190000000}
// jsHeapSizeLimit: 2190000000
// totalJSHeapSize: 15200000
// usedJSHeapSize: 14300000
// __proto__: MemoryInfo


//
// The objects participating in this pattern are:
//
//     Client -- In sample code: Computer
//         calls into FlyweightFactory to obtain flyweight objects
//     FlyweightFactory -- In sample code: FlyweightFactory
//         creates and manages flyweight objects
//         if requested, and a flyweight does not exist, it will create one
//         stores newly created flyweights for future requests
//     Flyweight -- In sample code: Flyweight
//         maintains intrinsic data to be shared across the application
