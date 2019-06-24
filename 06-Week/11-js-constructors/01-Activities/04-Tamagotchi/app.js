class Tomagotchis {
    constructor(name = 'daniel') {
        this.name = name;
        this.age = 0;
        this.bored = true;
        this.sleepy = false;
        this.hungery = false;
    }

    feed() {
        if (this.hungery === true) {
            console.log('yummy');
            this.hungery = false;
        }
        else{
            console.log('no thanks im full');
        }
    }

    sleep(){
        if(this.sleepy === true){
            console.log('zzzzzz');
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        }
        else{
            console.log('no way im not tired');
        }
    }

    play(){
        if(this.bored === true){
            console.log("yay lets play");
            this.bored = false;
        }
        else{
            console.log('not now');
        }
    }

    increaseAge(){
        this.age++;
        console.log("Happy Birthday to me! I am "+this.age+" old!")
    }

}

// let dog = Object.create(new Tomagotchis("zoe"))
function Dog(name){
    Tomagotchis.call(this, name);
    this.outside = false;
}

Dog.prototype = Object.create(Tomagotchis.prototype)


Dog.bark = function(){
    console.log('bark!')
}

Dog.goOutside = function(){
if(this.outside == true){
    "we are already outside"
}
else{
    this.bark();
    this.outside = true;
    console.log('yay outside time')
}
}

Dog.goInside = function(){
    this.outside = false;
    console.log("aww lame")
}


const dog = new Dog();
//console.log(Object.getPrototypeOf(dog))
//console.log(Object.getPrototypeOf(new Tomagotchis()))
dog.goInside()
dog.bark()
dog.sleep()
dog.play();