function catCtreator(catsData) {
    class Cat {
        constructor (name, age){
            this.name = name;
            this.age = age;

        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);

        }
        
    }
    let cats = [];
    for (let catData of catsData) {
        let line = catData.split(" ");
        let catName = line[0];
        let catAge = line[1];
        let myCat = new Cat(catName, catAge);
        cats.push(myCat);
        
    }
    for (let myCat of cats){
        myCat.meow();
    }
}
catCtreator(['Mellow 2', 'Tom 5']);
catCtreator(['Candy 1', 'Poppy 3', 'Nyx 2']);