// let elementNode = document.getElementById('one');

// elementNode.textContent = "Hallo";

 let listeusund = document.getElementById('listeUsund');
 
 console.log(listeusund)
 
 let newLi = document.createElement('li');
 newLi.setAttribute('class','usundt');

 let newText = document.createTextNode('Sodavand')
 newLi.appendChild(newText);

 listeusund.appendChild(newLi);

 console.log(listeusund);


//  Looper igennem alle elementer med tagname <li>, hvis class attributten er lig usundt
//  Sættes den til sundt 
 let listeLi = document.getElementsByTagName('li');
 for (let i = 0; i < listeLi.length; i++) {
     console.log('class : ' + listeLi[i].getAttribute('class'));
     if (listeLi[i].getAttribute('class') == 'usundt')
       listeLi[i].setAttribute('class','sundt');
}

 

