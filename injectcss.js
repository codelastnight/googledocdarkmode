//
//
// function injectthing() {
//   $("#docs-chrome").style("color: #0c0c0c");
//
//
// }
//
// chrome.runtime.sendMessage({
//     action: "getSource",
//     source: injectthing()
// });

function element(id,color) {
  document.getElementById(id).setAttribute("style","color: #fff; background-color: "+color+"; border-color:"+color);
}
function main(arr) {

  for (var a = 0; a < arr.length;a++) {
      element(arr[a],"#010101");
  }



  var a = document.getElementById("docs-toolbar")
  for (var i = 0;i<a.children.length;i++) {

    //console.log(a.children[i]);
    a.children[i].setAttribute("style","color: #fff;background-color: #010101; border-color:#010101");
  }
  element("docs-editor","#0c0c0c");

  document.getElementById("docs-titlebar-container").lastChild.setAttribute("style","background-color: #010101; border-color:#010101");

}

var listofid = [
  "docs-chrome",
  "docs-toolbar-wrapper",
  "docs-titlebar-container",
  "kix-horizontal-ruler"
]

main(listofid);
