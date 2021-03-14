function getCount(){
	const titelSeite = document.getElementById("titelSeite").innerText;

    fetch("/api/pagescount").then(
		res => {return res.json();}
	).then(
		data => { document.getElementById("mostVisitedPages").innerText = data.text}
	).catch(error => {
        console.error('Error:', error);
    });
}
getCount();