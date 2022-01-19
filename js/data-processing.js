
//use location object to access querystring (address bar)
const queryString = window.location.search;
let myData = '';

if(queryString != "") {
    //separate querystring parameters
    const urlParams = new URLSearchParams(queryString);

    /*
        prints 
    */

    urlParams.forEach(function(value, key) {
        //https://stackoverflow.com/questions/542232/in-javascript-how-can-i-perform-a-global-replace-on-string-with-a-variable-insi
        //will replace underscore with spaces
        key = key.split("_").join(" ");
        myData += `<p>${key}: ${value}</p>`;
    });

    myData += `<p><a href="index.html">CLEAR</a></p>`
    document.getElementById("output").innerHTML = myData;
}

    

