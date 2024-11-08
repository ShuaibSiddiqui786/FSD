let a=fetch("https://api.github.com/users");
a.then((data) => {
    console.log(data);
    return data.json();
});