function wakeDog(dogName, dogBreed) {
    let newStr = `Wake ${dogName} the ${dogBreed}`
    console.log(newStr);
    return newStr
}

function leashDog(dogName, dogBreed) {
    let newStr = `Leash ${dogName} the ${dogBreed}`
    console.log(newStr);
    return newStr;
}

function walkToPark(dogName, dogBreed) {
    let newStr = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(newStr);
    return newStr;
}

function throwFrisbee(dogName, dogBreed) {
    let newStr = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(newStr);
    return newStr;
}

function walkHome(dogName, dogBreed) {
    let newStr = `Walk home with ${dogName} the ${dogBreed}`
    console.log(newStr);
    return newStr;
}

function unleashDog(dogName, dogBreed) {
    let newStr = `Unleash ${dogName} the ${dogBreed}`
    console.log(newStr);
    return newStr;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    return routine.map(function(fn){
        return fn(dogName, dogBreed);
    })
}