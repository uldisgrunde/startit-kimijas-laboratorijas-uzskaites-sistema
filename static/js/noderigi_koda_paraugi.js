//šis fails netiek izmantots sitēmā
//tas satur noderīgus koda paraugus




//meklēšanas pogu funkcionalitāte
//ieslēdz vizuāli aktīvo pogu un izslēdz pārējās
(function() {
    let table_filter_buttons = document.querySelectorAll('.table_filter .button')
  
    table_filter_buttons.forEach(function(currentIndex){
      currentIndex.onclick = function(){
        var btn = 0
        while(btn < table_filter_buttons.length){
          table_filter_buttons[btn++].classList.remove('active')
        }
  
        this.classList.add('active')
        raditNoliktavasDatus(this.dataset.filter)
      }
    })
  })();







//atsevišķa funkcija kas veic tikai fetch
//noderīgi lai atdalītu fetch funkcionalitāti no pārējām funkcijām
async function iegutDatusNoApi(url)
{
  let datiNoServera = await fetch(url);
  let datiJson = await datiNoServera.json();
  return datiJson;
}
//funkciju var izsaukt šādi
//let datiJson = await iegutDatusNoApi('https://armandspucs.github.io/majas-darbs-1/data/datoruDB.json');


//ar šo funkciju var pamēģināt notestēt vai darbojas iepriekšējā funkcija iegutDatusNoApi()
async function testIegutDatusNoApi()
{
  let datiJson = await iegutDatusNoApi('https://armandspucs.github.io/majas-darbs-1/data/datoruDB.json');

  console.log(datiJson);
}



//funkcija kas izmanto augstāk esošo iegutDatusNoApi()
//lai iegūtu datus no diviem api un apvienotu vienā tabulā
async function raditNoliktavasDatus(tipsAtlase)
{
 
  let jsonVielas = Array();
  let jsonInventars = Array();

  if(tipsAtlase==undefined)
  {
    jsonVielas = await iegutDatusNoApi('https://pytonc.eu.pythonanywhere.com/api/v1/vielas');
    jsonInventars = await iegutDatusNoApi('https://pytonc.eu.pythonanywhere.com/api/v1/inventars');
  }
  else if(tipsAtlase=='viela')
  {
    jsonVielas = await iegutDatusNoApi('https://pytonc.eu.pythonanywhere.com/api/v1/vielas');
  }
  else if(tipsAtlase=='aprikojums')
  {
    jsonInventars = await iegutDatusNoApi('https://pytonc.eu.pythonanywhere.com/api/v1/inventars');
  }


  let datiNoliktava = jsonVielas.concat(jsonInventars);
  console.log(datiNoliktava);

  let tabula = document.querySelector('#pub_data tbody');
  tabula.innerHTML = '';


  for (i = 0; i < datiNoliktava.length; i++)
  {

      tipsClass = datiNoliktava[i]['tips'];

      tabula.innerHTML = tabula.innerHTML+`
      <tr class="`+tipsClass+`">
      <td> `+datiNoliktava[i]['id']+` </td>
      <td> `+datiNoliktava[i]['nosaukums']+` </td>
      <td> `+datiNoliktava[i]['tips']+` </td>
      <td> `+datiNoliktava[i]['apakstips']+` </td>
      <td> `+datiNoliktava[i]['skaits']+` </td>
      <td> `+datiNoliktava[i]['daudzums']+` </td>
      <td> `+datiNoliktava[i]['komentari']+` </td>
      </tr>`;
      


  }//loop beigas
  


}//beidzas raditNoliktavasDatus(dati)






