function rangeValue (v){
    document.getElementById("num").innerHTML=v+"%";

    document.getElementById('tl').style.width = +v /2+ "%";
    document.getElementById('tr').style.height =+v /2+ "%";
    document.getElementById('bl').style.height =+v /2+ "%";
    document.getElementById('br').style.width =+v /2+ "%";

}