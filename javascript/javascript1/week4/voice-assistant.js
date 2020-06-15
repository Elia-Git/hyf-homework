let myToDo = [];
var today = new Date();

function getReply(command) {
    const commandWords = command.split(" ");
    let name;
    if (command.includes("Hello my name is")) {
        //const name = command.replace("Hello my name is ", "");
        const numbers = command.match(/\d+/g);
        return `Nice to meet you ${name}`;
    } else if (command === "What is my name") return `My name is ${name}`;
    else if (command === "Add fishing to my todo") {
        myToDo.push("fishing");
        return "Fishing added to your todo";
    } else if (command === "Add singing in the shower to my todo") {
        myToDo.push("Singing in the shower");
        return "Singing added to your todo";
    } else if (command === "What is my todo?")
        return (
            "you have " +
            myToDo.length +
            " todos : " +
            "'" +
            myToDo[0] +
            " ' and " +
            "'" +
            myToDo[1] +
            "'"
        );
    else if (command === "Remove fishing from my todo") {
        const i = myToDo.indexOf("fishing");
        if (i >= 0) {
            myToDo.splice(i, 0);
        }
        return "Removed fishing from your todo";
    } else if (command === "How are you") return "I am good";
    // additional command
    else if (command === "what do you do") return "Learn coding";
    // additional command
    else if (command === "Try this simple math") return "Ok";
    else if (command === "what is 3+3") return 3 + 3;
    else if (command === "what is 4*12") return 4 * 12;
    if (command === "what day is it today?") {
        return new Date().toLocaleDateString("en-US", {
            day: "numeric",
            year: "numeric",
            month: "long",
        });
    } else if (command === "Set a timer for 4 minutes") {
        let secs = 240; // in seconds
        console.log(`Timer set for ${secs} seconds`);
        setTimeout(function() {
            //console.log("Timer done");
        }, secs);
        return "Timer done";
    } else return "Command not defined, try again";
}

// Calling the function
console.log(getReply("Hello my name is"));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("What is my todo?"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("How are you"));
console.log(getReply("what do you do"));
console.log(getReply("Try this simple math"));
console.log(getReply("what is 3+3"));
console.log(getReply("what is 4*12"));
console.log(getReply("what day is it today?"));
console.log(getReply("Set a timer for 4 minutes"));
console.log(getReply("what bla blaaaaaaaah...  "));