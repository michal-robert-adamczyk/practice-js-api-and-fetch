const a = 12, b = 4;
const promise = new Promise(function(resolve, reject){
    if(b !==0){
        resolve(a/b);
    } else {
        reject('Nie dzielimy przez zero!');
    }
});

promise.then(function(resp){
    console.log(resp);
});

promise.catch(function(err){
    console.log(err);
});