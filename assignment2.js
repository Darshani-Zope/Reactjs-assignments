function req1() {
    console.log("1")
    return fetch('https://jsonplaceholder.typicode.com/posts/6')
        .then(response => response.json())
        .then(json => {
            let id = json.id;
            let userId = json.userId;
            let title = json.title;
            let body = json.body;
            document.getElementById("printId").innerHTML = id;
            document.getElementById("printUserId").innerHTML = userId;
            document.getElementById("printTitle").innerHTML = title;
            document.getElementById("printBody").innerHTML = body;

        });
}