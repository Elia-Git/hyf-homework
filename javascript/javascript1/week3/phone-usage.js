const activities = [];
let date = new Date();
let today = date.toLocaleDateString();

function addActivity(date, activity, period) {
    activities.push({ date, activity, period });
}
// adding acctivities to the empty array
addActivity(today, "YouTube", 30);
addActivity(today, "Facebook", 34);
addActivity(today, "Twitter", 14);
//addActivity(today, "Instagram", 12); // no smartphoning alert pops up when it reachs the limit

console.log(activities);

function showStatus(activities) {
    let totalUsage = 0;
    const maxLimit = 90; // in minutes
    for (let i = 0; i < activities.length; ++i) {
        totalUsage += activities[i].period;
    }
    console.log(
        "You have added " +
        activities.length +
        " activities. They amount to " +
        totalUsage +
        " min. of usage"
    );
    if (totalUsage >= maxLimit) {
        console.log("You have reached your limit, no more smartphoning for you!");
    } else if (activities.length === 0) {
        console.log('Add some activities before calling showStatus');
        return;
    }
}
showStatus(activities);

// still missing the extra features part