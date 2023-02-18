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
        if (array[i] > array[i+1]) {
            numero = numero + array[i];
        }else if (array[i] === array[i+1]) {
          numero = numero + array[i]
        }else { 
            numero = numero +(array[i+1] - array[i])
            i++
        }
    }
        if (array[array.length - 1] === array[array.length - 2]) {
            numero = numero + array[array.length - 1]
        }
    console.log(numero)
    return numero
};

romanToInt('DCXXI')

/*
    
III         2 / 2P   0 = 1    1 + 1  
LVIII      57 / 4P   0 > 1    50     --> 1 > 2 =  5 + 50 = 55 --> 2 = 3  es 
MCMXCIV  1994 / 6P   
DCXXI    D > C   500 > 100 = 500
         C > X  100 > 10  = 500 + 100 = 600
         X = X   10 = 10  = 600 + 10 = 610
         X > I   10 > 1   = 610 + 10 = 620
*/ 