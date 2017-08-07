var chile4tap=document.getElementById('chile4ta');
var lima5tap=document.getElementById('lima5ta');
var lima6tap=document.getElementById('lima6ta');
var select=document.getElementById('select');
select.onchange = function (){
  if (select.value == "chile4tap") {
    displayImage();
    chile4tap.style.display ='block';
  }

  if (select.value == "lima5tap") {
    displayImage();
    lima5tap.style.display ='block';
  }

  if (select.value == "lima6tap") {
    displayImage();
    lima6tap.style.display ='block';
  }
}

function displayImage(){
  chile4tap.style.display='none';
  lima5tap.style.display='none';
  lima6tap.style.display='none';
}