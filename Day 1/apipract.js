//"https://api.github.com/users"

function getData() {

    fetch("https://api.github.com/shuaibsidiqui786").then((response) => {
            const data = response.json();
            return data;
    }).then((response) => {
        const data = document.getElementById("parent");
        data.innerHTML = response.login;
        //console.log(response);
    });
}
//getData()