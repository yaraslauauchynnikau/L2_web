function gambling(ticket, win) {
    let counter = 0;
    for (let combo of ticket) {
        for(let c of combo[0]) {
            if (c.charCodeAt(0) === combo[1]) {
                counter += 1;
                break;
            }
        }
    }
    return counter >= win ? "Winner!" : "Loser!";
}

console.log(gambling([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1));