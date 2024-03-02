function postComment(){
    let myFrom = document.getElementById("mainForm");
    var formData = new FormData(myFrom);
    let request = new XMLHttpRequest();

    let method = "POST";
    let url = "./message.txt";
    request.open(method, url);
    request.onreadystatechange = function (){
        if (this.readyState ===4 && this.status ===200){
            document.getElementById("result").innerHTML = this.responseText;
        }
    };
    request.send(formData);
}