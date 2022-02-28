let count = 0;


function add(params) {
    count++;
    control('count');
}

function minas(params) {
    count--;
    control('count');
}


function control(id) {
    document.getElementById(id).innerText = count;
}