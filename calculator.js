document.addEventListener('DOMContentLoaded',function(){
    const display = document.getElementById('display');
    const button = document.querySelectorAll('button');
    button.forEach(button =>{
        button.addEventListener('click',() =>{
            if(button.innerText ==='Enter'){
                try{
                    let result = eval(display.value);
                    if(result.toString().length > 4){
                        display.value = result.toPrecision(7);
                    }
                    else{
                        display.value = result;
                    }
                }
                catch(error){
                    display.value='Error';
                }
            }
                else if(button.innerText ==='clear'){
                    display.value = ' ';
                }
                else if(button.innerText ==='del'){
                    display.value = display.value.slice(0, -1);
                }
                else if(button.innerText ==='+-'){
                    display.value += '+-';
                }
                else{
                    display.value += button.innerText;
                }
        });
    }); 
});