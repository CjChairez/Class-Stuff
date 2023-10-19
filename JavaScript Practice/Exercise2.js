var person = { 
    name: "CJ",
    age: 30,

    sayMyName: function() {

        console.log("My name is " + this.name);

    },

    sayMyAge: function() {
        console.log("My age is " + this.age);
    }

};

person.sayMyName();
person.sayMyAge();