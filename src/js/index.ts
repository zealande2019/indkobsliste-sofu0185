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



 

