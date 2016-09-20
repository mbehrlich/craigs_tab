document.addEventListener("DOMContentLoaded", () => {
  let options = document.getElementById('options-link');
  options.addEventListener("click", () => {
    let props = {url: "../views/options.html"};
    chrome.tabs.create(props);
  });
});
