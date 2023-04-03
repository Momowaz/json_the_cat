const request = require('request');
const args = process.argv.slice(2);

const name = args[0];

const fetchBreedDescription = function (name) {

    request(`https://api.thecatapi.com/v1/breeds/search?name=${name}`, function (error, res, body) {
        if (error) {
            console.error('Request failed');
            return;
        }
        const data = JSON.parse(body);
        if (data.length === 0) {
            console.log('Breed not found, please check your URL');
            return;
        }
        console.log('\n');
        console.log('Description:', data[0].description);
        console.log('\n');
    });

}

fetchBreedDescription(name);