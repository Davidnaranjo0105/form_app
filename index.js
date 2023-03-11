//const fs = require('fs');
//const path = require('path');

//console.log(__dirname)
////const readFile = async () => {
    //const filePath = path.resolve(`${__dirname}/text.txt`);
   // const data = await fs.promises.readFile(filePath, 'utf-8');
   // console.log(data);
//
//readFile().then(() => console.log("Done"));

const { fetchapi } = require('./api')
const fetch = require ('./utils/api')
const { fetchAPI, greting} = fetch
fetchapi('https://rickandmortyapi.com/')
greting