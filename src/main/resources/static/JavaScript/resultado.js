const resultado=document.getElementById("resultado");
const boton = document.getElementById("btn")
let contador=0;
const gif1=document.getElementById("gif1");
const gif2=document.getElementById("gif2")

const sufrio=`<div class="tenor-gif-embed" data-postid="9168416654789210060" data-share-method="host" data-aspect-ratio="0.564257" data-width="80%"><a href="https://tenor.com/view/gragas-falling-sky-flying-gif-9168416654789210060">Gragas Falling GIF</a>from <a href="https://tenor.com/search/gragas-gifs">Gragas GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>`
const casiSufrio=`<div class="tenor-gif-embed" data-postid="15886645431933958846" data-share-method="host" data-aspect-ratio="1.76596" data-width="80%"><a href="https://tenor.com/view/gragas-gragas-e-gragas-jumpscare-jumpscare-league-of-legends-gif-15886645431933958846">Gragas Gragas E GIF</a>from <a href="https://tenor.com/search/gragas-gifs">Gragas GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>`
const casi=`<div class="tenor-gif-embed" data-postid="5517663203231418022" data-share-method="host" data-aspect-ratio="1" data-width="80%"><a href="https://tenor.com/view/kda-gragas-league-of-legends-dance-gif-5517663203231418022">Kda Gragas GIF</a>from <a href="https://tenor.com/search/kda-gifs">Kda GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>`
const seguro=`<div class="tenor-gif-embed" data-postid="17197025412024608449" data-share-method="host" data-aspect-ratio="1" data-width="80%"><a href="https://tenor.com/view/gragas-dance-league-of-legends-psychological-horror-gif-17197025412024608449">Gragas Dance GIF</a>from <a href="https://tenor.com/search/gragas-gifs">Gragas GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>`
const shrek = '<div class="tenor-gif-embed" data-postid="24000366" data-share-method="host" data-aspect-ratio="1.77778" data-width="80%"><a href="https://tenor.com/view/shrek-is-love-shrek-is-life-shrek-meme-shrek-dancing-shrek-gif-24000366">Shrek Is Love Shrek Is Life Shrek Meme GIF</a>from <a href="https://tenor.com/search/shrek+is+love+shrek+is+life-gifs">Shrek Is Love Shrek Is Life GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>'
const spiderjs = '<div class="tenor-gif-embed" data-postid="26235446" data-share-method="host" data-aspect-ratio="1.08844" data-width="80%"><a href="https://tenor.com/view/spiderman-balloon-jumpscare-gif-26235446">Spiderman Balloon GIF</a>from <a href="https://tenor.com/search/spiderman-gifs">Spiderman GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>'
const harhar = '<div class="tenor-gif-embed" data-postid="24208923" data-share-method="host" data-aspect-ratio="1.49533" data-width="80%"><a href="https://tenor.com/view/freddy-fazbear-fnaf-freddy-fazballs-duderudyy-gif-24208923">Freddy Fazbear Fnaf GIF</a>from <a href="https://tenor.com/search/freddy+fazbear-gifs">Freddy Fazbear GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>'
const puppet = '<div class="tenor-gif-embed" data-postid="5017865932531913760" data-share-method="host" data-aspect-ratio="0.931727" data-width="80%"><a href="https://tenor.com/view/fnaf-2-puppet-gangnam-style-gif-5017865932531913760">Fnaf 2 Puppet Gangnam Style GIF</a>from <a href="https://tenor.com/search/fnaf+2+puppet+gangnam+style-gifs">Fnaf 2 Puppet Gangnam Style GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>'
const gato = '<div class="tenor-gif-embed" data-postid="5174092258452898145" data-share-method="host" data-aspect-ratio="0.92437" data-width="80%"><a href="https://tenor.com/view/cat-cat-meme-gif-5174092258452898145">Cat Cat Meme Meme</a>from <a href="https://tenor.com/search/cat-memes">Cat Memes</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>'
const calarmado = `<div class="tenor-gif-embed" data-postid="16734875250227343084" data-share-method="host" data-aspect-ratio="1.36813" data-width="80%"><a href="https://tenor.com/view/creepypasta-uncanny-squidward-gif-16734875250227343084">Creepypasta Uncanny GIF</a>from <a href="https://tenor.com/search/creepypasta-gifs">Creepypasta GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>`
const calaboca = '<div class="tenor-gif-embed" data-postid="26245147" data-share-method="host" data-aspect-ratio="1.31148" data-width="80%"><a href="https://tenor.com/view/kauagomis-samuel-kadest-sk-kaua-cala-boca-kaua-gif-26245147">Kauagomis Samuel Kadest GIF</a>from <a href="https://tenor.com/search/kauagomis-gifs">Kauagomis GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>'

const gifs=[calarmado, sufrio, casiSufrio, casi, seguro, calaboca, shrek, spiderjs, harhar, puppet, gato]
boton.addEventListener("click",()=>{
contador++;
    if(contador===2){
        boton.innerText="Porfavor deja de presionarme"
    }
    if(contador===5){
        boton.innerText="Basta!!!"
    }
    if(contador===8){
        boton.innerText="Tu te lo estas buscando"
        const audio = document.getElementById('audioTerror');
        audio.volume = 0.1;
        audio.play().catch((err) => console.error("Error al reproducir el audio:", err));
    }
    if(contador===10){
        boton.innerText="TE LO ADVERTI!!!!!!!!!"
        agregarGifsAlBody();
    }
})
function agregarGifsAlBody() {
    gifs.forEach((gif) => {
        const gifContainer = document.createElement("div");
        gifContainer.innerHTML = gif;
        document.body.appendChild(gifContainer);
    });
    const tenorScript = document.createElement("script");
    tenorScript.src = "https://tenor.com/embed.js";
    tenorScript.async = true;
    document.body.appendChild(tenorScript);

}

