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

function logOutSeriesText(info) {
    // variables declaration
    let daysTotal;
    let hoursTotal;
    let minutesTotal;
    let seriesInTotal;
    let total = 0;

    for (let i = 0; i < info.length; ++i) {
        //Days to year in %age in 80 years
        daysTotal = (info[i].days / (365.6 * 80)) * 100;
        //Hours to year in %age in 80 years
        hoursTotal = (info[i].hours / (365.6 * 80 * 24)) * 100;
        //Minutes to year in %  age in 80 years
        minutesTotal = (info[i].minutes / (365.6 * 80 * 24 * 60)) * 100;
        // Total % of age for a single series in 80 years
        seriesInTotal = daysTotal + hoursTotal + minutesTotal;
        console.log(info[i].title + ' took me ' + seriesInTotal.toFixed(2) + '% of my life');
        // Iterating total % of age for all series in 80 years
        total += seriesInTotal;
    }
    console.log(
        'In total that is ' + total.toFixed(3) + " of my life took only by those 4 tv-series ");
}
// Logs out the text by calling the function
logOutSeriesText(seriesDurations);