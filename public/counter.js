const btn = document.getElementById("download_button");

btn.addEventListener("click", () => {
    console.log("+1");
    // location.href = "/download";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/download");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({}));
});