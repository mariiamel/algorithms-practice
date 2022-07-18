
const person = {
    name: 'Mariia',
    sayName: function(){
        console.log(this.name);
    }
}

person.sayName(); // mariia

const localSayName = person.sayName;
localSayName(); // undefined, based on GLOBAL contecst

const boundSayName = person.sayName.bind(person);
boundSayName(); // mariia


const person = {
    name: 'Mariia',
    sayName: () => {
        console.log(this.name);
    }
}
person.sayName(); // undefined, because of using arrow function