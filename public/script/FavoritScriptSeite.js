/*
    Überprüfen, ob Favoriten-Checkbox angecheckt ist
 */

const titelSeite = document.getElementById("titelSeite").innerText;
const url = window.location.pathname;
const favoritenCheck = document.getElementById("favoritenCheck");

favoritenCheck.addEventListener('change', setFavorit);


function setFavorit() {

    const obj = {name: titelSeite, url: url, status: favoritenCheck.checked};

    fetch("/api/favoriten", {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(obj)
    }).catch(error => {
            console.error('Error:', error);
        });

}

function getFavorit(){

    fetch("/api/favoriten")
        .then (res=>{
            return res.json();
        })
        .then(data=>{
            if(data.length >0){
                let status = data.find(param=>{
                    return param.name === titelSeite;
                })
                if(status !== undefined){
                    favoritenCheck.checked = true;
                }
            }
        })
}
getFavorit();
