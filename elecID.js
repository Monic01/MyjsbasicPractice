var i = 0;

function change_id(){
    var change_id = document.getElementById("elec_id_display");
    var id = "DueMonic";
    change_id.innerText+=id[i];
    var colorCode  = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    change_id.style.color=colorCode;
    i++;
    if(i == id.length+1){
        i=0;
        change_id.innerText = '';
    }
}