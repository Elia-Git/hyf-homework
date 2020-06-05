const notes = [];

function saveNote(content, id) {
    // write some code here
    notes.push({ content, id });
}
saveNote("Attend classes regularly", 1);
saveNote("Pay attention to lessons", 2);
saveNote("Ask for doubts", 3);
saveNote("Do your homework", 4);
saveNote("Take notes", 5);
saveNote("Study hard", 6);
saveNote("Eat regularly", 7);
saveNote("Take enough rest", 8);
saveNote("You will be successfull", 9);

console.log("\n saveNote function outputs \n");
console.log(notes);

// 2'nd function
function getNote(id) {
    for (let i = 0; i < notes.length; i++) {
        //looping to search through array
        if (notes[i].id === id) {
            //check where id matches
            return notes[i];
        } else if (String(notes[i].id).trim() === "" || isNaN(notes[i].id)) {
            console.log("Error!"); //check for spaces and if id is number type
        }
    }
}
const firstNote = getNote(10); //calling getNote() function
console.log("\n getNote function outputs \n");
console.log(firstNote);

function logOutNotesFormatted() {
    //function to display formatted array

    console.log("\n logOutNotesFormatted function outputs \n");

    for (let i = 0; i < notes.length; i++) {
        console.log(
            "The note with id: " +
            notes[i].id +
            ", has the following note text: " +
            notes[i].content
        );
    }
}
logOutNotesFormatted();