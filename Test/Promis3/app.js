//Jeśli obeitnica ma posiadać dane z zewnątrz powinniśmy ją utworzyć w ciele funkcji, 
const getSumAsync = (a, b) => {

    const promise = new Promise((resolve, reject)=>{
        const time = Math.random() * 1000;
        const a = parseInt(Math.random()* 10);
        const b = parseInt(Math.random()* 10);
        setTimeout(()=>{
            if(b !==0){resolve(a/b);} 
            else {reject('Nie dzielimy przez zero!');}
        }, time);
    });
    return promise;
}

//a dane przekaać jako jej parametr. 
getSumAsync(4,2)
.then(resp=> console.log(resp))
.catch(err=> console.log(err));

getSumAsync(4,0)
.then(resp=> console.log(resp))
.catch(err=> console.log(err));
