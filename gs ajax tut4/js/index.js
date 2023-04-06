document.getElementById("btn").addEventListener("click", ajax_fun);
let data = document.getElementById("data");
function ajax_fun() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", 'data.json', true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            data.innerHTML = xhr.responseText
        } else {
            console.log("problem occured");
        }
    }
    xhr.send();
}

document.getElementById("btn-attr").addEventListener("click", ajax_fun2);
let name_data = document.getElementById("name");
let age_data = document.getElementById("age");
let salary_data = document.getElementById("salary");

function ajax_fun2() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json", true);
    xhr.responseType = "json";
    xhr.onreadystatechange = () => {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200) {
                json_data = xhr.response;
                name_data.innerHTML = json_data.name;
                age_data.innerHTML = json_data.age;
                salary_data.innerHTML = json_data.salary;
            } else {
                name_data.innerHTML = "Error not found";
            }
        }
    }
    xhr.send();
}