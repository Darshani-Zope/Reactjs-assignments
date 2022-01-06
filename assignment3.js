let fetchData;
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        fetchData = data;
        // console.log("fetchData", fetchData)
        fetchData.forEach((userDetails) => {
            filtertable = "<tr> <td> " + userDetails.id + " </td> <td> " + userDetails.name + " </td> <td>" + userDetails.username + "</td> <td> " + userDetails.email + " </td><td>" + userDetails.phone + "</td><td>" + userDetails.website + "</td></tr>";
            $("#fetchData").append(filtertable);
        })
    });