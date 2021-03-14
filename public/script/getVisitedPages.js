function getCount(){
	const titelSeite = document.getElementById("titelSeite").innerText;

    fetch("/api/pagescount").then(
		res => {console.log(res);}
	).catch(error => {
        console.error('Error:', error);
    });
}  

window.onload = getCount();