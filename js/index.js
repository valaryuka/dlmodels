function op(e) {
    document.getElementById('model_d').style.display = 'none';
    document.getElementById('motion_d').style.display = 'none';
    var tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace(" active", "");
    }
    e.currentTarget.className +=" active";
    switch (e.target.innerHTML) {
        case 'Models': document.getElementById('model_d').style.display = 'block';
        break;
        case 'Motion': document.getElementById('motion_d').style.display = 'block';
        break;
        default:
    }
}


function read() {
    $.ajax({
        url:"downloads/cdd.txt",
        method:"POST",
        dataType:"text",
        success:function(data) {
            console.log(data);
        }
    });
}
function dload(n) {
    switch(n){
        case 'Lucas': read();
        //document.getElementById('iframe').src = "http://valapocho.github.io/PMD/Lucas%20by%20ValaRyuka.zip";
        //window.open("http://valapocho.github.io/PMD/Lucas%20by%20ValaRyuka.zip");
        break;
        default:
    }
    setTimeout(function(){ document.getElementById('iframe').src=" ";}, 2000);
    
}