exports.greeting = function (currentUserName) {
    const date = new Date();
    const hours = new Date().getHours();

    switch (true) {
        case (hours >= 23 && hours < 5):
            return `Date of request: ${date}\nGood night, ${currentUserName}!`;
            break;
        case (hours >= 5 && hours < 11):
            return `Date of request: ${date}\nGood morning, ${currentUserName}!`;
            break;
        case (hours >= 11 && hours < 17):
            return `Date of request: ${date}\nGood afternoon, ${currentUserName}!`;
            break;
        case (hours >= 17 && hours < 23):
            return `Date of request: ${date}\nGood evening, ${currentUserName}!`;
            break;
        default:
            console.log("Incorrect data");
    }
}