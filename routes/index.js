var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');


router.get('/movies', (req, res) => {
    

    console.log('manuuuu')
    const apiKey = process.env.OWN_API_KEY ;
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: apiKey }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(dataMovies => res.json( {movies : dataMovies.results}))
    //   .catch(err => console.error('error:' + err));


    // return res.json({movies : dataMovies })
    
})



module.exports = router;
