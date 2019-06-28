function removeDuplicateInt(array){
    let key = {};
    let output = [];
array.forEach(element => {
    if(key[element] === undefined){
        key[element] = true;
        output.push(element);
    }
    
});
return output;
}

// console.log(process.argv)

function isEqual(item1, item2){
return item1 === item2

}

// console.log(isEqual(process.argv[2],process.argv[3]));

function passwordValidator(string){
    let stringArray = string.split("");
    let upper = false;
    let lower = false;
    console.log(stringArray)
    if(stringArray.length > 7){
        console.log(stringArray.length)
        for(let i =0; i<stringArray.length;i++){
            if(stringArray[i].toUpperCase() === stringArray[i]){
                upper = true;
            }
            if(stringArray[i].toLowerCase() === stringArray[i]){
                lower= true;
            }
            if(upper == true&&lower == true){
                return true;
            }
        }
    }
    return false;
}


function addArray(array, map){
    let output = [];
    array.forEach(element => {
        output.push(map(element))
    });
    return output;
}

let testArray = [1,2,3,4,5,6,7,8]

// console.log(addArray(testArray, function(num){
//     return num+1
// }));



const arrayMap = function(array, truthy){
    let output = [];
    for(key in array){
        if(truthy(array[key])){
            output.push(array[key])
        }
    }
    return output;
}

let array1 = [1,2,3,4,5,6,4,2]

console.log(arrayMap(array1, function(num){return num > 2}))
