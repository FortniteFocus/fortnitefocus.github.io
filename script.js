// Fetch and display news items
fetch('https://fortnite-api.com/v2/news')
    .then(response => response.json())
    .then(data => {
        const articles = data?.data?.articles || [];
        const container = document.getElementById('news-container');
        container.innerHTML = '';

        if (articles.length > 0) {
            articles.forEach(article => {
                const { title, summary, image } = article;

                const articleDiv = document.createElement('div');
                articleDiv.classList.add('news-item');

                articleDiv.innerHTML = `
                    <img src="${image || ''}" alt="${title}">
                    <h3>${title}</h3>
                    <p>${summary}</p>
                `;
                container.appendChild(articleDiv);
            });
        } else {
            container.innerHTML = `<p>No news available at the moment. Please check back later.</p>`;
        }
    })
    .catch(error => {
        console.error('Error fetching news data:', error);
        const container = document.getElementById('news-container');
        container.innerHTML = `<p>There was an error loading the news. Please try again later.</p>`;
    });
