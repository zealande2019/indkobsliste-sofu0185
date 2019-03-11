//Her skal du skrive din typescriptkode

let liste: HTMLElement = document.getElementById('liste');

document.getElementById('btnNyVare').addEventListener('click', function(){
    let value: string = (<HTMLInputElement>document.getElementById('nyVareText')).value;
    let nyVare: HTMLElement = document.createElement('li');
    let type: string = (<HTMLInputElement>document.getElementById('typeNyVare')).value;

    if(value == '')
        return;

    nyVare.setAttribute('id', GetUniqueId().toString());
    nyVare.setAttribute('class', type);
    nyVare.innerText = value;

    liste.appendChild(nyVare);
});

liste.addEventListener('click', function(e){
    let target: HTMLElement = <HTMLElement>e.target;
    if(target.tagName == 'LI'){
        console.log('Hello!');
        target.setAttribute('hidden', 'true')
    }
});

document.getElementById('btnShow').addEventListener('click', function(){
    let children: HTMLCollection = liste.children;
    for(let i = 0; i < children.length; i++){
        if(children[i].getAttribute('hidden') == 'true'){
            children[i].removeAttribute('hidden');
        }
    }
});

function GetUniqueId(): number{
    let lastItem: number = liste.children.length - 1;
    let lastId: number = parseInt(liste.children[lastItem].getAttribute('id'));
    return lastId + 1;
}