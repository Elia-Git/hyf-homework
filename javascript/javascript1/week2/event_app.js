function getEventWeekdays(eventDay) {
    const wholeWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let todayDate = new Date();
    let day = todayDate.getDay();
    let a = (day + eventDay) % 7;
    return "The event will be held on " + wholeWeek[a];
}
console.log(getEventWeekdays(7));