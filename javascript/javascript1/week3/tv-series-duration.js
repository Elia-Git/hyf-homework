const seriesDurations = [
    // my favorite tv -series
    {
        title: 'Lost',
        days: 3,
        hours: 18,
        minutes: 0,
    }, {
        title: 'NG Explorer',
        days: 4,
        hours: 12,
        minutes: 0,
    },

    {
        title: 'Prison Break',
        days: 2,
        hours: 18,
        minutes: 0,
    },
    {
        title: 'Fear Factor',
        days: 6,
        hours: 12,
        minutes: 0,
    }
]


function logOutSeriesText(seriesDurations) {
    const lifespan = 80 * 365 * 24 * 60; // minutes
    let total = 0;
    for (let i = 0; i < seriesDurations.length; i++) {
        const seriesDuration = seriesDurations[i].days * 24 * 60 + seriesDurations[i].hours * 60;
        const percent = (seriesDuration / lifespan) * 100;
        total += percent;
        console.log(`${seriesDurations[i].title} took ${percent.toFixed(3)} % of my life`);
    }
    console.log(`In total that is ${total.toFixed(3)} % of my life`);
}


// Logs out the text by calling the function
logOutSeriesText(seriesDurations);