
function wakeDog(dogName, dogBreed) {
    let messageDog = `Wake ${dogName} the ${dogBreed}`
    console.log(messageDog);
    return messageDog;
}

function leashDog(dogName, dogBreed) {
    let messageDog = `Leash ${dogName} the ${dogBreed}`
    console.log(messageDog);
    return messageDog;
}

function walkToPark(dogName, dogBreed) {
    let messageDog = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(messageDog);
    return messageDog;
}

function throwFrisbee(dogName, dogBreed) {
    let messageDog = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(messageDog);
    return messageDog;
}

function walkHome(dogName, dogBreed) {
    let messageDog = `Walk home with ${dogName} the ${dogBreed}`
    console.log(messageDog);
    return messageDog;
}

function unleashDog(dogName, dogBreed) {
    let messageDog = `Unleash ${dogName} the ${dogBreed}`
    console.log(messageDog);
    return messageDog;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    let arrayMessages = [];
    for (const doggyFunction of routine) {
        arrayMessages.push(doggyFunction(dogName, dogBreed))
    };
    return arrayMessages;
}