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
  console.info({Name : 'Page open', Value : openPage, Info : 'Welcome user to the KeamsOS console opened by the run of the page BlugrayGuy.com.'})
});

function search() {
  var input = document.getElementById("searchInput").value.toLowerCase();
  var pages = ["index.html", "72.html", "dtst.html", "summary.html", "mod-application.html", "storyline.html", "style.css", "mod.css", "ex.txt", "ex-sraw.js", "search.css", "Blugray-console.html", "https://linktr.ee/blugray", 'https://youtube.com/@BlugrayGuy', 'https://youtube.com/DaFuqBoom', 'https://google.com', 'https://github.com', 'README.md', 'LICENCE.md', 'security.md',];
  var wikiPages = [];

  fetch('https://api.github.com/repos/BlugrayGuyLegit/Blugray/contents/')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error fetching data from GitHub API');
      }
      return response.json();
    })
    .then(data => {
      wikiPages = data.map(file => file.path);
      displayResults();
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error fetching data from GitHub API. Please try again later.");
    });

  function displayResults() {
    var results = [];

    for (var i = 0; i < pages.length; i++) {
      if (pages[i].toLowerCase().indexOf(input) > -1) {
        results.push(pages[i]);
      }
    }
    for (var j = 0; j < wikiPages.length; j++) {
      if (wikiPages[j].toLowerCase().indexOf(input) > -1) {
        results.push(wikiPages[j]);
      }
    }

    var resultsList = document.getElementById("resultsList");
    resultsList.innerHTML = "";

    if (results.length > 0) {
      for (var k = 0; k < results.length; k++) {
        var listItem = document.createElement("li");
        var link = document.createElement("a");
        link.href = results[k];
        link.textContent = results[k];
        listItem.appendChild(link);
        resultsList.appendChild(listItem);
      }
      document.getElementById("searchResults").style.display = "block";
    } else {
      document.getElementById("searchResults").style.display = "none";
      alert("No matches found for your search.");
    }
  }
}
