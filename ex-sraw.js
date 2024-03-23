// Hey you, if you looking for a secret code, there is nothing here ok! :)

function warndel() {
  console.log('Info-alert executed');
  console.warn('click the button right-bottom');
  console.warn('tip console clear to clear this.')
  console.info({InfoName : 'Deleted things', Where : 'Beside'})
  console.info(['Skibidi Toilet Ties', 'Ties from embracing', 'Dark tie', 'Special Blugray']);
  var Deltie;
  console.info({Name : 'DelTie', Type : 'Variable', Content : 'ST Tie / Dark Tie / Embracing Tie / Special Blugray', Value : '4'});
  alert('⚠️ Warning:\nThe section with all of ties was deleted and the logo of the website with due to some image bug.')
}

var openPage = 1;
var openPageFalse = 2;
document.addEventListener('DOMContentLoaded', function() {
  console.info('open')
  console.info({Name : 'Page open', Value : openPage, Info : 'If value = 1 = Page successful opened'})
  console.info({Name : 'Test (Page not open)', Value : openPageFalse, So : '2 = False'})
});

function search() {
  var input = document.getElementById("searchInput").value.toLowerCase();
  var pages = ["index.html", "72.html", "dtst.html", "summary.html", "mod-application.html", "storyline.html", "style.css", "mod.css", "ex.txt", "ex-sraw.js", "search.css", "Blugray-console.html", "https://linktr.ee/blugray", 'https://youtube.com/@BlugrayGuy', 'https://youtube.com/DaFuqBoom', 'https://google.com', 'https://github.com', 'README.md', 'LICENCE.md', 'security.md', 'wiki/index.md'];
  var results = [];

  for (var i = 0; i < pages.length; i++) {
    if (pages[i].toLowerCase().indexOf(input) > -1) {
      results.push(pages[i]);
    }
  }

  var resultsList = document.getElementById("resultsList");
  resultsList.innerHTML = "";

  if (results.length > 0) {
    for (var j = 0; j < results.length; j++) {
      var listItem = document.createElement("li");
      var link = document.createElement("a");
      link.href = results[j];
      link.textContent = results[j];
      listItem.appendChild(link);
      resultsList.appendChild(listItem);
    }
    document.getElementById("searchResults").style.display = "block";
  } else {
    document.getElementById("searchResults").style.display = "none";
    alert("No matches found for your search.");
  }
}
