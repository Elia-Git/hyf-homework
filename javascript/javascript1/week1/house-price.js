// Peter's case below
const peterWidthInMeters = 8;
const peterHeightInMeters = 10;
const peterDepthInMeters = 10;

const peterVolumeInMeters =
    peterWidthInMeters * peterHeightInMeters * peterDepthInMeters;
const peterGardenSizeInM2 = 100;

const peterHousePrice =
    peterVolumeInMeters * 2.5 * 1000 + peterGardenSizeInM2 * 300;

console.log(peterHousePrice);

if (peterHousePrice >= 2500000) {
    console.log("Ohhh,Peter's house price is too much");
} else {
    console.log("Woww,Peter's house price is too low");
    console.log("See also julia's house prices bellow");
}

//Julia's case below

const juliaWidthInMeters = 5;
const juliaHeightInMeters = 8;
const juliaDepthInMeters = 11;

const juliaVolumeInMeters =
    juliaWidthInMeters * juliaDepthInMeters * juliaHeightInMeters;
const juliaGardenSizeInM2 = 70;

const juliaHousePrice =
    juliaVolumeInMeters * 2.5 * 1000 + juliaGardenSizeInM2 * 300;
console.log(juliaHousePrice);

if (juliaHousePrice >= 1000000) {
    console.log("Ohh,Julias house price is too much");
} else {
    console.log("Wow,julias house price is too low");
}