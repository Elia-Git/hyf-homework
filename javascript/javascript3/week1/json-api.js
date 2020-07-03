//Create your own json file of interest
// valid
const myDetail = `{
"firstName": "Elias",
"lastName": "Weldemichael",
"gender": "man",
"age": 33,
"address": {
    "streetAddress": "17",
    "city": "Frederiksberg",
    "state": "Cph",
    "postalCode": "2000"
},
"phoneNumbers": [
    { "type": "mobile", "number": "71312960" }
]
}
`;
console.log(myDetail);
const jsMyDetail = JSON.parse(myDetail);
console.log(jsMyDetail);
console.log(jsMyDetail.phoneNumbers[0].number);

//Find a cool api
const coolApi = fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });
console.log(coolApi);
//Api Explanation
// Guess nome is name and codig code
// Fetch -get the data from a server
// The api is array of objects[{..}, {..},]
// Each object contains two pair value(name and code)
// The keys can accessed through data[index],
//data[index].nome // will give as the car name
// data[index].codigo // will give the code for a car