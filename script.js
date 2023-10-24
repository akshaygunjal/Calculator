let currentDisplay = '';
document.querySelector('#display').value = currentDisplay;
let btnElem = Array.from(document.querySelectorAll('.button'));

function displayText(num){
    
    if(num !==0 && num !==13){
        currentDisplay = currentDisplay + document.getElementsByClassName('button')[num].innerText;
        console.log(currentDisplay);
        document.querySelector('#display').value = currentDisplay;
    }else if(num === 0){
        document.querySelector('#display').value = '';
        currentDisplay = '';
    }else if(num === 13){
        currentDisplay = eval(currentDisplay);
        document.querySelector('#display').value = currentDisplay;
    }
    
    // btnElem.forEach(elem =>{
    //     elem.addEventListener('click',()=>{
    //         currentDisplay = currentDisplay + elem.innerText;
    //         document.querySelector('#display').value = currentDisplay;
    //     });
    // });
}