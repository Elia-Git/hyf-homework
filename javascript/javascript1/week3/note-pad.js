const notes = [];

function saveNote(content, id) {
    //Code goes here here
    notes.push({ content: content, id: id });
}
saveNote("Attend classes regularly", 1);
saveNote("Pay attention to lessons", 2);
saveNote("Ask for doubts", 3);
saveNote("Do your homework", 4);

console.log("\n saveNote function outputs \n");
console.log(notes);

// 2'nd function
function getNote(id) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id == id) {
            return notes[i];
        }
    }
    return "Error!";
}

const firstNote = getNote(1); //Gives out { content: 'Attend classes regularly', id: 1 }
// const firstNote = getNote(0); // gives out Error!
console.log("\n getNote function outputs \n");
//Gives out {content:"Eat regularly", id=7}
console.log(firstNote);

function logOutNotesFormatted() {
    console.log("\n logOutNotesFormatted function outputs \n");
    for (let i = 0; i < notes.length; i++) {
        // Logs out the formatted notes
        console.log(
            "The note with id: " +
            notes[i].id +
            ", has the following note text: " +
            notes[i].content
        );
    }
}
logOutNotesFormatted();