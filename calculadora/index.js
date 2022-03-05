let visor1 = document.getElementById('visor1');

function insert(num) {
    let numero = document.getElementById('visor1').innerHTML;
    document.getElementById('visor1').innerHTML = numero + num
}

function cleam() {
    document.getElementById('visor1').innerHTML = "";
}


function igual() {
    let visor1 = document.getElementById('visor1').innerHTML;
    if(visor1){
        document.getElementById('visor1').innerHTML = eval(visor1)
    }
}