const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function() {
        console.log(this.first_name); 
        const fn = function() {
            console.log(this);
        }
        window.setTimeout(function() {
            console.log(this);
        })
    }
}

const window = {
    setTimeout: function(fn){
        fn();
    }
}

class MyObj {
    constructor() {
        this.first_name = 'Mafia';
        this.last_name = 'Code';
    }

    printFullName() {
        console.log(this.first_name);
    }
}

const obj2 = new MyObj();


obj.printFullName();
obj2.printFullName();