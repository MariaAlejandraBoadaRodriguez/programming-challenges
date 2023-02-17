/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanList = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    inputSeparado = s.split('')
    let numero = 0
    let array = []

    for(let i = 0; i<inputSeparado.length;i++){
        claveAleatoria = inputSeparado[i]
        array.push(romanList[claveAleatoria])
    }

    for (let i = 0; i < array.length - 1; i++) { 
        if (array[i] < array[i+1]) {
            numero = numero + (array[i+1] - array[i]);
        }else {
            numero = numero + array[i];
        }
        console.log(numero)
    }
    console.log("return "+numero)
    
    
    
    
};

romanToInt('MCMXCIV')