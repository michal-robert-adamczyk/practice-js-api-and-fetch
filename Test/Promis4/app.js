//Jeśli obeitnica ma posiadać dane z zewnątrz powinniśmy ją utworzyć w ciele funkcji, 
const getSumAsync = (a, b) => {

    const promise = new Promise((resolve, reject)=>{
        const time = Math.random() * 1000;
        setTimeout(()=>{
            if(b !==0){resolve(a/b);} 
            else {reject('Nie dzielimy przez zero!');}
        }, time);
    });
    return promise;
}

//a dane przekaać jako jej parametr. 
getSumAsync(4,2)
.then(resp1=>getSumAsync(resp1, 4))
.then(resp2=>console.log(resp2))
.catch(err=>console.log(err));
