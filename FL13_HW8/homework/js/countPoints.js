function countPoints(games) {
    var i = 0;
    var points = 0;
    for (i; i < games.length; i++) {
        let each = games[i].split(":");
        if (each[0] > each[1]) {
            points += 3;
        } else if (each[0] === each[1]) {
            points += 1;
        } else {
            points += 0;
        }
    }
    return points;
}

countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']);

