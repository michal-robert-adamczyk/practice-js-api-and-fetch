function getAsyncData(delay, callback) {
    const time = Math.random() * 2000;
    setTimeout(function(){
        callback(time);
    }, delay + time);
}

getAsyncData(0, firstCallback);

function firstCallback(delay1){
    getAsyncData(delay1, secondCallback);
}

function secondCallback(delay2){
    getAsyncData(delay2,thirdCallback);
}

function thirdCallback(){
    console.log('started all async fn');
}




// getAsyncData(0, function(delay1) {
//     getAsyncData(delay1, function(delay2){
//         getAsyncData(delay2, function(){
//             console.log('started all async fn')
//         });
//     });
// });