// Fetch and display shop items
fetch('https://fortnite-api.com/v2/shop')
    .then(response => response.json())
    .then(data => {
        const entries = data?.data?.entries || [];
        const container = document.getElementById('shop-container');
        container.innerHTML = '';

        if (entries.length > 0) {
            entries.forEach(item => {
                const { devName, finalPrice, regularPrice, bundle, images } = item;

                const itemDiv = document.createElement('div');
                itemDiv.classList.add('shop-item');

                itemDiv.innerHTML = `
                    <img src="${bundle?.image || images?.featured || ''}" alt="${devName}">
                    <h3>${devName}</h3>
                    <p class="price">Price: ${finalPrice} V-Bucks</p>
                    ${finalPrice !== regularPrice ? `<p class="discounted">Was: ${regularPrice} V-Bucks</p>` : ''}
                `;
                container.appendChild(itemDiv);
            });
        } else {
            container.innerHTML = `<p>No items available in the shop at the moment. Please check back later.</p>`;
        }
    })
    .catch(error => {
        console.error('Error fetching shop data:', error);
        const container = document.getElementById('shop-container');
        container.innerHTML = `<p>There was an error loading the shop. Please try again later.</p>`;
    });
