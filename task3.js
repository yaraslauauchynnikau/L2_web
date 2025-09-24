function whatCentury(year) {
    let suffix = "th";
    let century = Math.ceil(year / 100);
    if (century < 11 || century > 13) {
        switch(century % 10) {
            case 1: {
                suffix = "st";
                break;
            }
            case 2: {
                suffix = "nd";
                break;
            }
            case 3: {
                suffix = "rd";
                break;
            }
        }
    }

    return century + suffix;
}