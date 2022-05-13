const startHere = "Her kommer din kode";

function addNumber (){
    one= Math.floor(Math.random()* 9)+1;
    tow= Math.floor(Math.random()* 9)+1;
    three= Math.floor(Math.random()* 9)+1;
    four= Math.floor(Math.random()* 9)+1;

    document.getElementById("number1").innerHTML = one;
    document.getElementById("number2").innerHTML = tow;
    document.getElementById("number3").innerHTML = three;
    document.getElementById("number4").innerHTML = four;

  }
   document.getElementById("add").addEventListener("click",addNumber); 

function sortList() {
let list, i, switching, b, shouldSwitch;
list = document.getElementById("box");
switching = true;

while (switching) {
 
  switching = false;
  b = list.getElementsByTagName("LI");
 
  for (i = 0; i < (b.length - 1); i++) {

    shouldSwitch = false;


    if (Number(b[i].innerHTML) > Number(b[i + 1].innerHTML)) {

      shouldSwitch = true;
      break;
    }
  }
  if (shouldSwitch) {

    b[i].parentNode.insertBefore(b[i + 1], b[i]);
    switching = true;
  }
}
}
 document.getElementById("sort").addEventListener("click",sortList);
