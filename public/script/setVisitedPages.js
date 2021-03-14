function addCount(){
	const titelSeite = document.getElementById("titelSeite").innerText;
	const obj = {currentPage: titelSeite};

    fetch("/api/pagescount", {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(obj)
    }).catch(error => {
            console.error('Error:', error);
        });
}
addCount();