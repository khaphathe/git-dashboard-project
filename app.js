const API_ENDPOINT = 'https://api.example.com/data';

const dataContainer = document.getElementById('data-container');
const loadBtn = document.getElementById('load-data-btn');

async function fetchData() {
    try {
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
            throw new Error('HTTP error! status : ${response.status} ');

        }
        const data = await response.json();
         dataContainer.innerHTML = `<strong>Data Loaded</strong>${data.message}`;
    }
    catch (error) {
        dataContainer.innerHTML = `<span class="error">Failed to  load data</span>`;
        console.error('Fetch error:', error);
    }
}




loadBtn.addEventListener('click', fetchData);