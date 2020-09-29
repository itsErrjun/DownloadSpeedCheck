document.getElementById('not').innerHTML = 'Time to download a file';
'/n';
document.getElementById('nota').innerHTML = '(in seconds)';





function startProcess() {

    var size = prompt('What is the size of your file (in mbs)?');
    var speed = prompt('what is the speed of your internet connection?');
    var endResult = size/speed;
    document.getElementById('notb').innerHTML = (endResult + ' sec is the time it takes to download your file.')
    
}
if (endResult = null) {
    document.getElementById('notc').innerHTML = 'You are doing something wrong son.';
}











