//Her skal du skrive din typescriptkode

let liste: HTMLElement = document.getElementById('liste');

document.getElementById('btnNyVare').addEventListener('click', function(){
    let value: string = (<HTMLInputElement>document.getElementById('nyVareText')).value;
    let nyVare: HTMLElement = document.createElement('li');
    let type: string = (<HTMLInputElement>document.getElementById('typeNyVare')).value;

    nyVare.setAttribute('id', GetUniqueId().toString());
    nyVare.setAttribute('class', type);
    nyVare.innerText = value;

    liste.appendChild(nyVare);
});


function GetUniqueId(): number{
    let lastItem: number = liste.children.length - 1;
    let lastId: number = parseInt(liste.children[lastItem].getAttribute('id'));
    return lastId + 1;
}