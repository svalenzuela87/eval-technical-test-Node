function convertBromaToStrLine(item) {
    return `${item.id}|${item.joke}|\r\n`;
}

module.exports = (bromaJsonResponse) => {
    let bromasPorLineas = '';
    let pages = 0;
    try {
        const parseData = JSON.parse(bromaJsonResponse);
        if ('results' in parseData) {
            parseData.results.forEach((element) => {
                bromasPorLineas += convertBromaToStrLine(element);
            });
            pages += (parseData.total_jokes / parseData.limit).toFixed();
        } else {
            bromasPorLineas += convertBromaToStrLine(parseData);
        }
    } catch (err) {
        console.log({ err: err, bromaJsonResponse: bromaJsonResponse });
    }

    return { bromasPorLineas, pages };
};