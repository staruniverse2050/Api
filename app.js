function CreateCard(Character){
  const {character,quote,image} = Character;

  const card = document.createElement("div");
  const title = document.createElement("h2");
  const img = document.createElement("img");
  const quoteCharacter = document.createElement("p");


  title.textContent = character;
  img.src = image;
  img.alt = character;
  quoteCharacter.textContent = quote;

  card.appendChild(title);
  card.appendChild(img);
  card.appendChild(quoteCharacter);

  
}

const options = {method: 'GET'};

const API_URL = "https://thesimpsonsquoteapi.glitch.me/quotes";
const HTMLResponse = document.querySelector("#app");

// fetch(URL)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

 document.getElementById("txtBtn").addEventListener("click",BtnGenerate);
 const ul = document.createElement('ul');
 const products = [
  
 ];
function BtnGenerate(){
  fetch(`${API_URL}`)
  .then(function(respuesta){
    return respuesta.json();
})
.then(function(data){
  const img = document.querySelector('img');
  img.src = data[0].image;
    let html = "";
    data.forEach(function(tarjetas){
        html += `
        <b><p>Personaje:</b> ${tarjetas.character}</p> 
        <b><p>Frase:</b> ${tarjetas.quote}</p></ul>
        `;
        
})
document.getElementById("result").innerHTML = html;
})
.catch(function(error){
    console.log(error);
});
}
fetch(`${API_URL}`)
.then(function(respuesta){
  return respuesta.json();
})
.then(function(data){
  setTimeout(() => {
    const img = document.querySelector('img');
    img.src = data[0].image;  
  }, "1 second")

  let html = "";
  data.forEach(function(tarjetas){
      html += `
      <b><p>Personaje:</b> ${tarjetas.character}</p> 
      <br>
      <b><p>Frase:</b> ${tarjetas.quote}</p></ul>
      `;
      
})
document.getElementById("result").innerHTML = html;
})
.catch(function(error){
  console.log(error);
});
