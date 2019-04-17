
function inject() {

  var message = $('#message');

  chrome.tabs.executeScript(null, {
    file: "injectcss.js"
  }, function() {

    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });

}

document.getElementById("copy").addEventListener("click", inject());
