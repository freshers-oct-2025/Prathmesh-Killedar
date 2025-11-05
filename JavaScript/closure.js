function outer() {
  let outerVar = "I'm from outer!";

  function inner() {
    console.log(outerVar);
  }

  return inner;
}

const innerFunc = outer();
innerFunc();

function one() {
  console.log("One");
  two();
}

function two() {
  console.log("Two");
  three();
}

function three() {
  console.log("Three");
}

one();

const user = {
  name: "Prathamesh",
  greet: function () {
    const self = this;
    console.log(this.name);

    function inner() {
      console.log(self.name);
    }
    inner();
  },
};

user.greet();
