let calculator = {
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
      },

    sum: function (){
        return this.a + this.b;
    },

    mul: function (){
        return this.a * this.b;
    },

    subs: function (){
        return this.a - this.b;
    },

    div: function (){
        return this.a / this.b;
    }

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
alert( calculator.subs() );
alert( calculator.div() );

/*
console.log( calculator.sum(10,15) );
console.log( calculator.mul(12,63) );
*/