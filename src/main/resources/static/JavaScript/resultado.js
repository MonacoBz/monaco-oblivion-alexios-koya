const resultado=document.getElementById("resultado");
const boton = document.getElementById("btn")
let contador=0;
const gif1=document.getElementById("gif1");
const gif2=document.getElementById("gif2")
//80%-100% 
const sufrio=`<div class="tenor-gif-embed" data-postid="9168416654789210060" data-share-method="host" data-aspect-ratio="0.564257" data-width="30%"><a href="https://tenor.com/view/gragas-falling-sky-flying-gif-9168416654789210060">Gragas Falling GIF</a>from <a href="https://tenor.com/search/gragas-gifs">Gragas GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>`
//60%-80% 
const casiSufrio=`<div class="tenor-gif-embed" data-postid="15886645431933958846" data-share-method="host" data-aspect-ratio="1.76596" data-width="30%"><a href="https://tenor.com/view/gragas-gragas-e-gragas-jumpscare-jumpscare-league-of-legends-gif-15886645431933958846">Gragas Gragas E GIF</a>from <a href="https://tenor.com/search/gragas-gifs">Gragas GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>`
//30%-50%
const casi=`<div class="tenor-gif-embed" data-postid="5517663203231418022" data-share-method="host" data-aspect-ratio="1" data-width="30%"><a href="https://tenor.com/view/kda-gragas-league-of-legends-dance-gif-5517663203231418022">Kda Gragas GIF</a>from <a href="https://tenor.com/search/kda-gifs">Kda GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>`
//0-30%
const seguro=`<div class="tenor-gif-embed" data-postid="17197025412024608449" data-share-method="host" data-aspect-ratio="1" data-width="30%"><a href="https://tenor.com/view/gragas-dance-league-of-legends-psychological-horror-gif-17197025412024608449">Gragas Dance GIF</a>from <a href="https://tenor.com/search/gragas-gifs">Gragas GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>`
const gifs=[sufrio,casiSufrio,casi,seguro]
boton.addEventListener("click",()=>{
contador++;
    if(contador===2){
        boton.innerText="POrfavor deja de presionarme"
    }
    if(contador===5){
        boton.innerText="Basta la ptm"
    }
    if(contador===10){
        boton.innerText="TE LO ADVERTI!!!!!!!!!"
        agregarGifsAlBody();
    }
})
function agregarGifsAlBody() {
    gifs.forEach((gif) => {
        const gifContainer = document.createElement("div");
        gifContainer.innerHTML = gif; // Inserta el contenido del GIF
        document.body.appendChild(gifContainer);
    });
    const tenorScript = document.createElement("script");
    tenorScript.src = "https://tenor.com/embed.js";
    tenorScript.async = true;
    document.body.appendChild(tenorScript);
    
}


