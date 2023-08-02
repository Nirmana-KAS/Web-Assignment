function add() {
    var table = document.getElementById("table");
    var row = table.insertRow(table.rows.length);

    var ipcell = row.insertCell(0);
    var dateCell = row.insertCell(1);
    var ds = row.insertCell(2);
    var dsd= row.insertCell(3);

    ipcell.innerHTML = "28973";
    dateCell.innerHTML = "Shehan";
    ds.innerHTML = "Nirmana";
    dsd.innerHTML ="@Linkdin";
}

function br() {
    var table = document.getElementById("table");
  table.style.border = "2px solid black"
}


function rmove(){
var y = document.getElementById("list");
var g = document.getElementsByTagName("li");

if(g.length>0){
 y.removeChild(g[g.length-1]);
}
}
