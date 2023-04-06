document.getElementById("btn-ajax").addEventListener('click', ajaxfunc);
function ajaxfunc() {
    const xhr = new XMLHttpRequest();
    console.log("before open method called readyState is ", xhr.readyState);
    xhr.open("GET", "data.txt", true);
    console.log("After open method called readyState is ", xhr.readyState);


    // this is work with server response handling 
    xhr.onreadystatechange = function () {
        console.log("readyState is ", xhr.readyState);
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log(xhr);
                console.log(xhr.responseText);
            } else {
                console.log("problem occured");
            }
        }
    }
    xhr.send()
}