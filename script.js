fetch('productos_amd_con_descripciones.json')
    .then(response => response.json())
    .then(products => {
        const container = document.getElementById('product-container');
        products.forEach(product => {
            // Crear la tarjeta del producto
            const productCard = document.createElement('div');
            productCard.className = 'product-card';

            // Nombre del producto
            const productName = document.createElement('h2');
            productName.textContent = product.name;
            productCard.appendChild(productName);

            // Precio del producto
            const productPrice = document.createElement('p');
            productPrice.textContent = `Price: $${product.price}`;
            productCard.appendChild(productPrice);

            // Descripción del producto
            const productDescription = document.createElement('p');
            productDescription.textContent = product.description;
            productCard.appendChild(productDescription);

            // Enlace al producto
            const productLink = document.createElement('a');
            productLink.href = product.url;
            productLink.textContent = 'View on Amazon';
            productLink.target = '_blank';
            productCard.appendChild(productLink);

            // Agregar tarjeta al contenedor
            container.appendChild(productCard);
        });
    })
    .catch(error => {
        console.error('Error loading the JSON file:', error);
    });
