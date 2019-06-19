class Character{
    constructor(name, profession, gender, age ){
        this.name = name;
        this.job = profession;
        this.gender = gender;
        this.age = age;
        this.strength = Math.floor(Math.random()*100);
        this.HP = Math.floor(Math.random()*25);
        this.printStats()
    }

    printStats(){
        console.log(`${this.name} is a ${this.gender} age: ${this.age} with ${this.HP}
         HP, and ${this.strength} Stamina. their profession is a ${this.job}`)
    }

    isAlive(){
        if(this.HP>0){
            console.log(`${this.name} is alive`)
            return true;
        }
        else{
            return false
        }
    }

    

    Attack(Character){
        Character.HP-=this.strength;
        if(Character.HP<1){
            console.log(`you killed them`)
            return;
        }
        else{
            return;
        }

    }

    levelUp(){
        this.age++;
        this.strength+=5;
    }

    
}

var wat = new Character("meh", "killer", "elfkin",32)

wat.printStats

let lol = "string";
//dont do this its bad practice all though it does work.
String.prototype.AddW = function(str){
return str+"W";

};

// console.log(lol.AddW())