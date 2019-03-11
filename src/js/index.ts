//  Looper igennem alle elementer med tagname <li>, hvis class attributten er lig usundt
//  Sættes den til sundt 
 let listeLi = document.getElementsByTagName('li');
 for (let i = 0; i < listeLi.length; i++) {
     console.log('class : ' + listeLi[i].getAttribute('class'));
     if (listeLi[i].getAttribute('class') == 'usundt')
       listeLi[i].setAttribute('class','sundt');
}

 

