document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    const setBorderColorAsync = (element, color) => {
        const promise = new Promise((resolve, reject) => {
            const time = Math.random() * 3000;
            setTimeout(() => {
                if (element && element instanceof HTMLElement) {
                    element.style.border = `3px solid ${color}`;
                } else { alert('Parametr ~callback~ mus być funkcją'); }
            }, time);
        });
        return promise;

    }

    setBorderColorAsync(divList[0], 'red')
        .then(resp => setBorderColorAsync(resp))
        .catch(err1 => console.log(err1))
        .catch(err2 => console.log(err2));

    setBorderColorAsync(divList[1], 'blue')
        .then(resp => setBorderColorAsync(resp))
        .catch(err1 => console.log(err1))
        .catch(err2 => console.log(err2));

    setBorderColorAsync(divList[2], 'green')
        .then(resp => setBorderColorAsync(resp))
        .catch(err1 => console.log(err1))
        .catch(err2 => console.log(err2));

}




// function init() {
//     const divList = document.querySelectorAll('div');

//     setBorderColorAsync(divList[0], 'red', function () {
//         setBorderColorAsync(divList[1], 'blue', function () {
//             setBorderColorAsync(divList[2], 'green', function () {
//                 console.log('finish');
//             });
//         });
//     });

// }

// function setBorderColorAsync(element, color, callback) {
//     if (element && element instanceof HTMLElement) {
//         // sprawdzam czy parametr jest elementem DOM, więcej:
//         // https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object

//         if (callback && typeof callback === 'function') {
//             setTimeout(() => {
//                 element.style.border = `3px solid ${color}`;
//                 callback();
//             }, Math.random() * 3000);
//         } else {
//             alert('Parametr ~callback~ mus być funkcją');
//         }
//     } else {
//         alert('Paremetr ~element~ musi być prawidłowym elementem DOM');
//     }
// }