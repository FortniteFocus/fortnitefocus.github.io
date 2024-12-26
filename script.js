// Fetch the news from the Fortnite API
fetch("https://fortnite-api.com/v2/news")
    .then(response => response.json())
    .then(data => {
        const newsContainer = document.getElementById('news-container');
        
        // Iterate over the 'motds' and display each news item
        data.data.br.motds.forEach(newsItem => {
            const div = document.createElement('div');
            div.classList.add('news-item');
            div.innerHTML = `
                <h3>${newsItem.title}</h3>
                <p>${newsItem.body}</p>
                <img src="${newsItem.image}" alt="${newsItem.title}">
            `;
            newsContainer.appendChild(div);
        });
    })
    .catch(error => console.log("Error fetching news:", error));

// Sample for fetching shop data (Placeholder for now)
fetch('https://api.example.com/shop') // Replace with actual API endpoint
    .then(response => response.json())
    .then(data => {
        const shopContainer = document.getElementById('shop-container');
        
        data.items.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('shop-item');
            div.innerHTML = `
                <h3>${item.name}</h3>
                <img src="${item.image}" alt="${item.name}">
                <p>Price: ${item.price}</p>
            `;
            shopContainer.appendChild(div);
        });
    })
    .catch(error => console.log("Error fetching shop data:", error));
