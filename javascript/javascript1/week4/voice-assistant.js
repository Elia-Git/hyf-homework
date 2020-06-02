let myToDo = [];
var today = new Date();

function getReply(command) {
    if (command === "Hello my name is Elias") return "Nice to meet you Elias";
    else if (command === "What is my name") return "My name is Elias";
    else if (command === "Add fishing to my todo") {
        myToDo.push("fishing");
        return "Fishing added to your todo";
    } else if (command === "Add singing in the showeer to my todo") {
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
    else if (command === "what day is it today")
        return (
            "The " +
            today.getDate() +
            ". of " +
            today.toLocaleString("default", { month: "long" }) +
            "," +
            today.getFullYear()
        );
    else if (command === "Set a timer for 4 minutes")
        return "Timer set for 4 minutes ";
    else if (command === "Timer is done") return "Timer set for 4 minutes";
    else if (command === "Timer is up") {
        let secs = 240; // in seconds

        function countDown() {
            if (secs < 1) {
                clearTimeout();
            }
            secs--;
            let timer = setTimeout(function() {
                console.log("timer set");
            }, 1000);
            //
        }
        return "Timer done";
    } else return "Command not defined, try again";
}

console.log(getReply("Hello my name is Elias"));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the showeer to my todo"));
console.log(getReply("What is my todo?"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("How are you"));
console.log(getReply("what do you do"));
console.log(getReply("Try this simple math"));
console.log(getReply("what is 3+3"));
console.log(getReply("what is 4*12"));
console.log(getReply("what day is it today"));
console.log(getReply("Set timer for 4 minutes")); // gives command not found, as the sting is not written exacltly
//as "Set a timer for 4 minutes" instead
console.log(getReply("Timer is done"));
console.log(getReply("Timer is up"));
console.log(getReply("what bla blah...  "));