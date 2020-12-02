function openForm() {
    document.getElementById("addContactForm").hidden = false;
    document.getElementById("addContactButton").hidden = true;
}

function closeForm() {
    document.getElementById("addContactForm").hidden = true;
    document.getElementById("addContactButton").hidden = false;
}

function loginForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(username === "" || password === "") {
        alert('All fields must be filled');
    }
    else {
        let apiReq = new XMLHttpRequest();
        apiReq.open('POST', 'api/token/');
        apiReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        apiReq.send(JSON.stringify({ "username": username, "password": password }));

        apiReq.onload = () => {
            resp = JSON.parse(apiReq.responseText);
            console.log(apiReq.status);
            if(apiReq.status === 200) {
                localStorage.setItem("apiToken", resp.access);
                main();
            }
            };
    }
}