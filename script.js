// Cargar datos del archivo JSON y mostrarlos
fetch('productos_amd_con_descripciones.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('product-container');

        // Crear la tarjeta del producto
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        // Nombre del producto
        const productName = document.createElement('h2');
        productName.textContent = data.name;
        productCard.appendChild(productName);

        // Precio del producto
        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${data.price}`;
        productCard.appendChild(productPrice);

        // Descripción del producto
        const productDescription = document.createElement('p');
        productDescription.textContent = data.description;
        productCard.appendChild(productDescription);

        // Enlace al producto
        const productLink = document.createElement('a');
        productLink.href = data.url;
        productLink.textContent = 'View on Amazon';
        productLink.target = '_blank';
        productCard.appendChild(productLink);

        // Agregar tarjeta al contenedor
        container.appendChild(productCard);
    })
    .catch(error => {
        console.error('Error loading the JSON file:', error);
    });
