function youShouldWear(temp) {
    const degreeCelcius = temp;
    if (degreeCelcius <= 7) {
        return "sweater, thick-gloves,big jacket, sweater-hat";
    } else if (degreeCelcius >= 8 && degreeCelcius <= 14) {
        return "pants, light-jacket";
    } else if (degreeCelcius >= 15 && degreeCelcius < 18) {
        return "t-shirt and short";
    } else {
        return "just short";
    }
}
console.log("You should wear:" + youShouldWear(0));