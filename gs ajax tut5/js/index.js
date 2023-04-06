document.getElementById("btn").addEventListener('click', ajax_fun);
let api_data = document.getElementById("api-data");

function ajax_fun() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", 'https://dummyjson.com/products/1', true);

    xhr.onload = () => {
        if (xhr.status === 200) {
            api_data.innerHTML = xhr.responseText;
        } else[
            api_data.innerHTML = "error not found"
        ]
    }

    xhr.send();
}

document.getElementById("btn-attrs").addEventListener('click', ajax_fun2);
let id = document.getElementById("id");
let title = document.getElementById("title");
let description = document.getElementById("description");
let price = document.getElementById("price");
function ajax_fun2() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", 'https://dummyjson.com/products/1', true);

    xhr.onload = () => {
        if (xhr.status === 200) {
            json_data = JSON.parse(xhr.response);
            id.innerHTML = json_data.id
            title.innerHTML = json_data.title
            description.innerHTML = json_data.description
            price.innerHTML = json_data.price
        } else[
            api_data.innerHTML = "error not found"
        ]
    }

    xhr.send();
}