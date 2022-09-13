// index.js
const { fetchMyIP, fetchCoordsByIp,fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIp ('190.87.162.50',(error, coordinates) => {

//     if (error) {
//       console.log("It didn't work2!" , error);
//       return;
//     }
  
//     console.log('It worked! Returned coordinates are:' , coordinates);
//   });

fetchISSFlyOverTimes(({ latitude: 1asas3.6929403, longitude: -89.2181911 }), (error, riseTime) =>{
    if (error) {
              console.log("It didn't work2!" , error);
              return;
            }
          
            console.log('It worked! Returned coordinates are:' , riseTime);
})


 