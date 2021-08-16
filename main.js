let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let posesion = [`my homework`,`my car`,`my heart`];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

let largo = when.length;

function getRandom(array) {
    let largo = array.length;
    return Math.floor(Math.random()*(largo));
}
console.log(largo);
function rand(array){
    let frase = array[getRandom(array)];
    return frase; 
}
function creaexcusa(who,what,posesion,when){
    let frase = rand(who)+" "+rand(what)+" "+rand(posesion)+" "+rand(when);
    return frase;
}

const onLoad = () => {
    let frase = creaexcusa(who,what,posesion,when)
    document.getElementById("excuse").innerHTML = frase;

}

onLoad()