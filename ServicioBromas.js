const requestJsonBroma = require('./httpRequest');
const guardarBroma = require('./guardarBroma')('bromas.txt');
const parseBromaJsonResponse = require('./parseBromaJsonResponse');

const bromaUrl = new URL('https://icanhazdadjoke.com/');

async function getBromas(term) {
    const bromaTermUrl = new URL(bromaUrl.href);
    bromaTermUrl.pathname = '/search';
    bromaTermUrl.searchParams.set('term', term);

    let bromasPorLineas = '';
    const bromaJsonResponse = await requestJsonBroma(bromaTermUrl);
    const parsedJokeJson = parseBromaJsonResponse(bromaJsonResponse);
    bromasPorLineas += parsedJokeJson.bromasPorLineas;
    if (parsedJokeJson.pages > 1) {
        const responses = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 1; i < parsedJokeJson.pages; i++) {
            bromaTermUrl.searchParams.set('page', i);
            responses.push(requestJsonBroma(bromaTermUrl));
        }
        await Promise.all(responses)
            .then(results => results.forEach((pagebromaJsonResponse) => {
                const parsedJokeJsonPage = parseBromaJsonResponse(pagebromaJsonResponse);
                bromasPorLineas += parsedJokeJsonPage.bromasPorLineas;
            }))
            .catch((err) => {
                console.log(err);
            });
    }

    if (bromasPorLineas !== ""){
        await guardarBroma(bromasPorLineas);
    }

    return bromasPorLineas;
}


module.exports = {
    buscarBroma: async function (term) {
        // const jokeByStrLines = await getBromas(term);
        var bromasPorLineas = await getBromas(term);
        console.log(bromasPorLineas);

        if (bromasPorLineas === ""){
           bromasPorLineas = console.log("No se encontraron bromas para la palabra ingresada");
        }

        return bromasPorLineas;
    },
};
