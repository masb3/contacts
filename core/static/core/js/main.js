function main() {
    //localStorage.removeItem("apiToken");
    if(isApiTokenObtained()) {
        document.getElementById("loginForm").hidden = true;
        document.getElementById("addContactButton").hidden = false;
        getContacts();
    }
    else {
        document.getElementById("loginForm").hidden = false;
        document.getElementById("addContactButton").hidden = true;
    }
}