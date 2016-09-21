document.addEventListener("DOMContentLoaded", () => {
  let options = document.getElementById('options-link');
  options.addEventListener("click", () => {
    let props = {url: "../views/options.html"};
    chrome.tabs.create(props);
  });
  let addRule = document.getElementById('add-rule-link');
  addRule.addEventListener("click", () => {
    chrome.tabs.getSelected((tab) => {
      let url = tab.url;
      let pattern = new RegExp("\.craigslist\.org/search");
      if (pattern.test(url)) {
        chrome.storage.sync.get('rules', (store) => {
          let newRules = store.rules;
          if (!newRules) {
            newRules = {};
          }
          newRules[url] = true;
          chrome.storage.sync.set({"rules": newRules}, () => {
            message("*New rule created*");
          });
        });
      } else {
        message("*You must be on a craigslist search page to create a rule*");
      }
    });
  });
});

function message(msg) {
  let list = document.getElementById('link-list');
  let message = document.createElement('li');
  let messageText = document.createTextNode(msg);
  message.appendChild(messageText);
  list.appendChild(message);
  window.setTimeout(() => {
    list.removeChild(message);
  }, 4000);
}
