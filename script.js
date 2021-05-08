const axios = require('axios').default;

token = "5d0bdc15-50d5-4ca0-853d-1a63ca90efaa"

axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
 headers: {
   'X-CMC_PRO_API_KEY': token, 
 } //the token is a variable which holds the token
 }).then(function(req)  {
  //  console.log(req);
  console.log(req.data.data);
 console.log(req.data.data[0].quote.USD.price);
})



// const requestOptions = {
//   method: 'GET',
//   uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
//   qs: {
//     'start': '1',
//     'limit': '5000',
//     'convert': 'USD'
//   },
//   headers: {
//     'X-CMC_PRO_API_KEY': '5d0bdc15-50d5-4ca0-853d-1a63ca90efaa'
//   },
//   json: true,
//   gzip: true
// };

// rp(requestOptions).then(response => {
//   console.log('API call response:', response);
// }).catch((err) => {
//   console.log('API call error:', err.message);
// });

// const queryURL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=" + userInput + "&key=AIzaSyAIRa_UYE_tGr5zwxbcAlrStZrQRhOL9PE";

// console.log(queryURL);
// console.log(userInput);


// // $.ajax({
// //   url: queryURL,
// //   method: "GET"
// // })
// //   .then(function(response) {
// //     console.log(response)
// //     console.log(response.items[Math.floor(Math.random()*15)]);
// //   const vidId = (response.items[Math.floor(Math.random()*15)].id.videoId);
// //   $("#vibe-form").append("www.youtube.com/watch?v=" + vidId);
// //   // const videoLink= "youtube.com/watch?v=" + vidId;
// //     let iFrame = document.createElement("iframe");
// //     iFrame.setAttribute("src", "https://www.youtube.com/embed/" + vidId);
// //     $(".vidContent").append(iFrame);

// //   });

