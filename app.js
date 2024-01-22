// Este archivo podría contener scripts para interactuar con la aplicación

// Por ejemplo, podrías cargar dinámicamente los artículos sobre trastornos mentales desde una base de datos o API.
// También podrías agregar funcionalidades interactivas, formularios de contacto, etc.

// Ejemplo de carga dinámica de artículos (usando JavaScript y Fetch API):
const articlesContainer = document.getElementById('articles');

fetch('api/articulos')
    .then(response => response.json())
    .then(articles => {
        articles.forEach(article => {
            const articleElement = document.createElement('article');
            articleElement.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
            articlesContainer.appendChild(articleElement);
        });
    })
    .catch(error => console.error('Error al cargar artículos:', error));
