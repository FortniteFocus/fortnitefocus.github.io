document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');
    const shopContainer = document.getElementById('shop-container');

    // Fetch and display Fortnite news
    fetch('https://fortnite-api.com/v2/news')
        .then(response => response.json())
        .then(data => {
            const newsItems = data.data.br.motds;
            newsItems.forEach(item => {
                const newsElement = document.createElement('div');
                newsElement.classList.add('news-item');

                // Create news item title
                const title = document.createElement('h3');
                title.textContent = item.title;
                newsElement.appendChild(title);

                // Create news item image
                const image = document.createElement('img');
                image.src = item.image;
                image.alt = item.title;
                newsElement.appendChild(image);

                // Create news item description
                const description = document.createElement('p');
                description.textContent = item.body;
                newsElement.appendChild(description);

                // Create link for more information
                const link = document.createElement('a');
                link.href = '#';  // Link to more details or external source
                link.textContent = 'Read More';
                newsElement.appendChild(link);

                // Append news item to the container
                newsContainer.appendChild(newsElement);
            });
        })
        .catch(error => {
            console.error('Error fetching news data:', error);
        });

    // Placeholder for the shop items (could be updated with a similar fetch)
    const shopItems = [
        { name: 'Item 1', image: 'https://via.placeholder.com/400x200', description: 'Description of item 1' },
        { name: 'Item 2', image: 'https://via.placeholder.com/400x200', description: 'Description of item 2' }
    ];

    shopItems.forEach(item => {
        const shopElement = document.createElement('div');
        shopElement.classList.add('shop-item');

        const title = document.createElement('h3');
        title.textContent = item.name;
        shopElement.appendChild(title);

        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.name;
        shopElement.appendChild(image);

        const description = document.createElement('p');
        description.textContent = item.description;
        shopElement.appendChild(description);

        shopContainer.appendChild(shopElement);
    });
});
