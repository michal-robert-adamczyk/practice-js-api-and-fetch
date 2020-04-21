console.log("Asynchroniczność - test");

function getAsyncData(callback) {

    //Math.random() podaje liczbę zmiennoprzecinkową w zakresie 0-1, po pomnożeniu razy 5000 otrzymuję liczbę od 0-5000, które później jest używane jako parametr w funkcji setTimeout.
    const time = Math.random() * 5000;
    
    // data jest tablicą z właściwośiami: name (o wartości 'secret') i value (o wartości null)
    const data = {name: 'secret', value: null};
    
    // po pewnej liczbie milisekund wywoływana jest callback z argumentem o wartości data
    setTimeout(function(){
        callback(data)
    }, time);
}

console.log('before');
getAsyncData(function(data){
    console.log('async 1', data);
});
getAsyncData(function(data){
    console.log('async 2', data);
});
console.log('after');