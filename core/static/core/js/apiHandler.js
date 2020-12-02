function isApiTokenObtained() {
    return localStorage.getItem("apiToken") ? true : false;
}

function getApiTokenFromStorage() {
    return localStorage.getItem("apiToken");
}