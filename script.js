// q1

// let timeoutId;
// function changeColor(){
//     let changeColorBtn = document.getElementById('changeColorBtn');
//     let cancelBtn = document.getElementById('cancelBtn');
//     let div = document.getElementById('mainDiv');

//     changeColorBtn.disabled = true;
//     cancelBtn.disabled = false;

//     div.style.backgroundColor = 'blue'

//     timeoutId = setTimeout(()=>{
//         div.style.backgroundColor = 'red';
//         changeColorBtn.disabled = false;
//         cancelBtn.disabled = true;
//     },2000)
// }

// function cancelChange(){
//     clearTimeout(timeoutId);

//     let changeColorBtn = document.getElementById('changeColorBtn');
//     let cancelBtn = document.getElementById('cancelBtn');
//     let div = document.getElementById('mainDiv');

//     div.style.backgroundColor = 'red';
//     changeColorBtn.disabled = false;
//     cancelBtn.disabled = true;
// }


// q3

function customIndexOf(str,char){
    try {
        if(typeof  str !== 'string' || typeof char !== 'string'){
            throw new TypeError('Input parameters must be strings.')
        }

        for(let i = 0; i < str.length; i++){
            if(str[i] === char){
                return i
            }
        }
        return -1
    } catch (error) {
        console.error('Error:', error.message);
        return -1
    }
}

// let myStr = 'world'
// let findChar = 'b' 
// console.log(customIndexOf(myStr,findChar));
// return -1

// let myStr = 'world'
// let findChar = 'o' 
// console.log(customIndexOf(myStr,findChar));
// return index 1