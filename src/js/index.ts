//tilføjer en click eventlistener på HTML elementet med attributten id='submitBtn'
//Når der klikkes på elementet vil den udføre metoden addVare
document.getElementById('submitBtn').addEventListener("click",addVare);

//finder input tekstfeltet i DOM'en, har en id som hedder 'nyvare'
let elementInput = document.getElementById('nyvare');

//function som tilføjer den vare som er i input feltet
function addVare(){
    //ser hvad værdien er input feltet vai value, der castes til <HTMLInputElement>
    let inputText = (<HTMLInputElement>elementInput).value;

    //finder listen der skal tilføjes til
    let listeusund = document.getElementById('listeUsund');

    //opretter et nyt li element
    let newLi = document.createElement('li');
    let newText = document.createTextNode(inputText)
    newLi.appendChild(newText);
    newLi.setAttribute('class','usundt');
    
    //tilføjer li elementet til listen 
    listeusund.appendChild(newLi);

   }

//tilføjer en click eventlistener på listen med id ='liste'
//der tilføjes en klik eventlistener på elementerne i listen som sætter
//attributten hidden til true, dvs. skjuler elementet
let elementsLi = document.getElementById('liste').addEventListener('click',function(e){
    let clikElement = (<HTMLInputElement>e.target);

    if(e.target && (clikElement).nodeName == "LI")
      {
          console.log(clikElement.id + " was clicked")
          clikElement.setAttribute('hidden','true');
      }
    
});;




//tilføjer en click eventlistener på HTML elementet med attributten id='unhideBtn'
//Når der klikkes på elementet vil den udføre metoden addVare
document.getElementById('unhideBtn').addEventListener("click",noHide);

//Looper igennem listen og fjerner attributten hidden
function noHide(){
     let liElements = document.getElementById('liste').children;

     for(let i=0;liElements.length;i++)
     {
         let eh = liElements[i].getAttribute('hidden'); 
         if( eh == 'true')
         {
            // (<HTMLLIElement>liElements[i]).style.visibility = 'visible';  
             liElements[i].removeAttribute('hidden');
         }      
     }
 }
 
 