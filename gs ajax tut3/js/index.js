document.getElementById("btn").addEventListener('click', ajaxfun);
function ajaxfun() {
    const xhr = new XMLHttpRequest();
    console.log(xhr.readyState);
    xhr.open("GET", "data.txt", true);

    // this is work with server response handling 
    console.log(xhr.readyState);
    xhr.onload = () => {
        console.log(xhr.readyState);
        if (xhr.status === 200) {
            console.log(xhr);
            console.log(xhr.responseText);
        } else {
            console.log("problem occured");
        }
    }
    xhr.send();

}