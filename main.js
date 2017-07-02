function randomNum() {
    return mathRandom()+mathRandom()+mathRandom()+mathRandom()+'';
}
function mathRandom() {
    return Math.floor(Math.random()*10);
}
function init() {
    alert('Page is loaded')
    //randomNum();
}
