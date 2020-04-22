const promise = new Promise((resolve, reject)=>{
    const time = Math.random() * 1000;
    const a = parseInt(Math.random()* 10);
    const b = parseInt(Math.random()* 10);
    setTimeout(()=>{
        if(b !==0){resolve(a/b);} 
        else {reject('Nie dzielimy przez zero!');}
    }, time);
});

promise

.then(resp=> console.log(resp))
.catch(err=> console.log(err));
