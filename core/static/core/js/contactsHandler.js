function getContacts() {
let apiReq = new XMLHttpRequest();
apiReq.open('GET', 'api/contacts/');
apiReq.send();

apiReq.onload = () => {
    resp = JSON.parse(apiReq.responseText);
    console.log(resp.count);
    for(i=0; i  < parseInt(resp.count); i++) {
        console.log(resp.results[i]);
        document.getElementById("contacts").innerHTML += '<li>' + resp.results[i].name + ', ' +
                                        resp.results[i].code_name + ', ' + resp.results[i].phone + '</li>';
    }
  };
}

function addContact() {
    const TOKEN = getApiTokenFromStorage();
    let name = document.getElementById("name").value;
    let code_name = document.getElementById("code_name").value;
    let phone = document.getElementById("phone").value;
    if(name === "" || code_name === "" || phone === "") {
        alert('All fields must be filled');
    }
    else {
        let apiReq = new XMLHttpRequest();
        apiReq.open('POST', 'api/contacts/');
        apiReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        apiReq.setRequestHeader("Authorization", "Bearer " + TOKEN);
        apiReq.send(JSON.stringify({ "code_name": code_name, "name": name, "phone": phone }));
    }
}