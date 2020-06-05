const travelInformation = {
    speed: 80,
    destinationDistance: 573,
};

function findTime(information) {
    return information.destinationDistance / information.speed; //Basic physics time calculation formula: Time = distance / speed
}

const travelTime = findTime(travelInformation);
let hours = Math.floor(travelTime);
let minutes = Math.ceil((travelTime % Math.floor(travelTime)) * 60);

console.log(
    `The time needed to arrive our destination is ${hours} hours and ${minutes} minutes`
); // Gives out 7 hours and 17 minutes