// Initialization

window.addEventListener("hashchange", onRouteChange);
Pages = document.querySelector("#pages");

window.addEventListener("DOMContentLoaded", onRouteChange);

// Functions

function onRouteChange() {
  let pageLocation;
  if (window.location.hash.substring(1, 2) == "/") {
    pageLocation = window.location.hash.substring(2);
  } else {
    pageLocation = window.location.hash.substring(1);
  }
  if (!pageLocation) {
    pageLocation = "index";
  }
  loadContent(pageLocation);
}

async function loadContent(uri) {
  let content = "";
  let prefix = "rezepte";
  if (uri == "index") {
    prefix = "";
  }
  let response = await fetch(`${prefix}/${uri}.md`);
  if (response.ok) {
    // Markdown file found
    content = await response.text();
    content = markdown(content);
  } else {
    response = await fetch(`${prefix}/${uri}.html`);
    if (response.ok) {
      content = await response.text();
    } else {
      content = "<h1>404. Page not found.</h1>";
    }
  }
  updatePages(content);
}

function updatePages(content) {
  Pages.innerHTML = content;
}
