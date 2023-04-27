function test() {
    const a = 10;
}

var x = function () {
    console.log("I was anynonymous function");
}

const x1 = () => {
    console.log("Arrow function");
}

const person = {
    name : "Shilpa",
    print : function () {
        console.log(this.name);
    }
}

person.print();

const person2 =  {
    name : "Shilpa2",
    print : () => {
        console.log(this.name);
    }
}
person2.print();

const person3 =  {
    name : "Shilpa3",
    print : () => {
        console.log(person3.name);
    },
    print2 : function () {
        console.log(person3.name);
    },
    print3 : function (name) {
        console.log(name);
    },
    print4 : (name) => {
        console.log(name);
    },
    print5 : function (name) {
        console.log(this.name);
    },
    print6 : (name) => {
        console.log(this.name); 
    }
}

person3.print();
person3.print2();
person3.print3("new Shilpa");
person3.print4("new Shilpa1");
person3.print5("new Shilpa2");
person3.print6("new Shilpa3");