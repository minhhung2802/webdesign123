
var i = 2;
var e = 2;
var click = document.getElementById("drop-item");
 function show_hide() {

   if(click.style.display === "none"){
     click.style.display = "block";
     document.getElementById("button").style = "  background-color: white;border: none;"
   }else{
     click.style.display = "none";
   }
 }
window.addEventListener('mouseup',function(event)
{var box=document.getElementById("drop-item");
if(event.target !=box && event.target.parentNode != box){
  box.style.display = 'none';document.getElementById("product-id").style ="display:none;"; i=2;
}
});
function show() {
  if(i% 2 == 0)
  {
    document.getElementById("product-id").style = "display:block;";
    i++;
  }
  else {
    document.getElementById("product-id").style = "display:none;";
    i++;
  }
}
function appearSearch()
{

    document.getElementById("picture12").style.left="300px";
    document.getElementById("picture12").style.opacity="0";
    document.getElementById("search2").style.left = "50px";
    document.getElementById("search2").style.opacity="1";
    document.getElementById("searchBtn").style.left="230px";
    document.getElementById("searchBtn").style.opacity="1";


}
function click1()
{
  document.getElementById("picture12").style.opacity="1";
  document.getElementById("search2").style.opacity="0";
  document.getElementById("searchBtn").style.opacity="0";
  document.getElementById("searchBtn").style.left="500px";
  document.getElementById("search2").style.left = "320px";
  document.getElementById("picture12").style.left="240px";

}
function aleart1()
{
  var d = document.getElementById("search2").value.length;
  if(d >= 20)
  {
    var f=document.getElementById("search2").value;
    alert("20 word limit");

  }
}
