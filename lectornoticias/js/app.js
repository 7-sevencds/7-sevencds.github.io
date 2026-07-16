
//Lector de noticias

async function cargarNoticias() {
    const noticiasdiv = document.getElementById('contenedor-noticias');

    try {
        // Petición HTTP
        const respuesta = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=cf3a001f7a43406f98fc7a4b8de7d392");
        
        // Validamos si algun error
        if (!respuesta.ok) {
            throw new Error(`Error en la petición: ${respuesta.status}`);
        }
        
        const noticias = await respuesta.json();

        //Variable para almacenar las noticias
        let htmlCards = '';

        //Usamos forEach para recorrer cada noticia y sumarla a la variable
            noticias.articles.forEach(noticia => {
                htmlCards += `
                    <div class="card"> 
                        <div class="fuente">Fuente:  ${noticia.source.name}</div>
                        <img src="${noticia.urlToImage}" alt="${noticia.title}" width="400" height="200" onerror="this.onerror=null; this.src='/img/sinimagen.jpg';">
                        <span class="publicado">${new Date(noticia.publishedAt).toLocaleDateString('en-CA')} | por: ${noticia.author}</span> 
                        <div class="card-contenido"> 
                            <h4>${noticia.title} <!--<img src="${noticia.title}" width="40" alt="Logo">--></h4> 
                            <p>${noticia.description}</p> 
                            <div style="text-align: right; background-color: #f1f1f1;"><a href="${noticia.url}" target="_blank">Leer más →</a></div> 
                        </div> 
                    </div>
                `;
            });

            //Muestra las noticias en el contenedor
            noticiasdiv.innerHTML = htmlCards;


        } catch (error) {
        // Manejo básico de errores por si falla la red o el JSON
        console.error('Hubo un problema al obtener las noticias:', error);
        noticiasdiv.innerHTML = `<p>No se pudieron cargar las noticias en este momento.</p>`;
    }

}

//Ejecuta la funcion
cargarNoticias()