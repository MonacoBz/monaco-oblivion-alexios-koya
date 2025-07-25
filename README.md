<h1>Proyecto Final Pishing</h1>
En este proyecto creamos una página web donde el usuarió puede insertar una url.
Una vez ingresada la url esta pasa por el primer filtro que verífica que la url sea valida.
Una vez se verifico ese, se manda a nuestro back(Java framework Spring-Boot) y esta verífica que este 
en una pequeña base del conocimiento que tenmos, si no la encuentra, se manda a una API de Google para verificar que no este en su base de url´s maliciosas
y si no esta, la manda a nuestro filtro que es una IA(Gemini), está ia analiza bien la url y nos devuelve una cádena de texto con información de la url ;:D.
