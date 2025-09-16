const API_ENDPOINT = 'https://api.example.com/data';

const dataContainer = document.getElementById('data-container');
const loadBtn = document.getElementById('load-data-btn');

async function fetchData() {
    try {
        const response = await fetch(API_ENDPOINT);
        const data = await response.json();
        dataContainer.innerHTML = `<strong>Data Loaded:</strong>${data.message}`;
    }
    catch (error) { }
}

loadBtn.addEventListener('click', fetchData);