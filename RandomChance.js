function randomChance(num, willingToLeave=0) {
    var win = 50;
    while (num > 0) {
        num--;
        var current = Math.floor(Math.random()*100);
        if (current === win) {
            num += Math.floor(Math.random()*51) + 50;
            if (num >= willingToLeave) {
                return num;
            }
        }
    }
    return 0;
}

console.log(randomChance(100, 200));