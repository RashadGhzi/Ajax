document.getElementById("btn-ajax").addEventListener('click', ajaxfunc);
function ajaxfunc() {
    const xhr = new XMLHttpRequest();
    if (xhr.readyState === XMLHttpRequest.UNSENT) {
        console.log(`open method not yet called and readyState is ${xhr.readyState}`);
    }
    xhr.open("GET", "data.txt", true);
    if (xhr.readyState === XMLHttpRequest.OPENED) {
        console.log(`After open method called readyState is ${xhr.readyState}`);
    }

    // this is work with server response handling 
    xhr.onreadystatechange = function () {
        console.log('now working with ajax server response');
        if (xhr.readyState === 2) {
            console.log(`now inner of onreadystatechange first call and readystate is ${xhr.readyState}`);
        }
        if (xhr.readyState === 3) {
            console.log(`inner of onreadystatechange second call and readyState is ${xhr.readyState}`);
        }
        if (xhr.readyState === 4) {
            console.log(`now readyState is ${xhr.readyState}`);
            if (xhr.status === 200) {
                console.log(xhr);
                console.log(xhr.responseText);
            } else {
                console.log("Problem occured");
            }
        }
    }

    xhr.send();
}