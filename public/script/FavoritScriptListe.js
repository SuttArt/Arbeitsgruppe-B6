function getList(){

    fetch("/api/favoriten")
        .then (res=>{
            return res.json();
        })
        .then(data=>{
            if(data.length >0){
                for(const i of data){
                    document.getElementById("favoriten").innerHTML += `<br> <input id="${i.name}" type="button" value="${i.name}" onClick='location.href="${i.url}"'>`
                }
            }
        })
}
getList();
