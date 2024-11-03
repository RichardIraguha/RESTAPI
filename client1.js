const axios = require('axios');

async function getItems() {
    try {
        const response = await axios.get('http://localhost:3000/items');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function getItem(id) {
    try {
        const response = await axios.get(`http://localhost:3000/items/${id}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function createItem(name) {
    try {
        const response = await axios.post('http://localhost:3000/items', { name });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getItems();
getItem(1);
createItem('Item 3');