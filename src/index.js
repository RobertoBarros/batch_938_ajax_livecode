// API Doc: https://www.last.fm/api/show/artist.getTopAlbums

const api_key = "INSERIR A CHAVE DO LAST FM AQUI";
const baseUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums`
// selecionar o form
const form = document.querySelector("#search");
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const artist = document.getElementById("artist").value;
  const url = `${baseUrl}&artist=${artist}&api_key=${api_key}&format=json&limit=5`
  const div = document.querySelector("#albums-container");
  div.innerHTML="";
  console.log(artist)

  fetch(url).then(response => response.json()).then((data)=>{
    data.topalbums.album.forEach((album) => {


      const row =`<div class="row mt-3">
      <div class="col-12 d-flex justify-content-start">
        <img src="${album.image[2]['#text']}">
         <div class='ms-3'>
           <h2>${album.name}</h2>
           <p>${album.artist.name}</p>
          </div>
        </div>
       </div>`
       div.insertAdjacentHTML('beforeend', row)
    })
  })
})
// nome da banda/artista
