// javascript code goes here
let num = "";
let answer = "";

function add(value){
    console.log(value);
    num = num + value;
    document.getElementById('input').value=num;
}

function ans(){
    answer = eval(num);
    document.getElementById('input').value=answer;
    answer = '';
    num = '';
}

function clr(){
    num = '';
    document.getElementById('input').value='';
}
