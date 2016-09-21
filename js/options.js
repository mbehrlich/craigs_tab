document.addEventListener("DOMContentLoaded", () => {
  let rules = document.getElementById('rules');
  chrome.storage.sync.get('rules', (store) => {
    populateRules(rules, store);
  });
  let submit = document.getElementById('submit');
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    let url = document.getElementById('rule');
    let pattern = new RegExp("\.craigslist\.org/search");
    if (pattern.test(url.value)) {
      chrome.storage.sync.get('rules', (store) => {
        let newRules = store.rules;
        if (!newRules || Array.isArray(newRules)) {
          newRules = {};
        }
        newRules[url.value] = true;
        chrome.storage.sync.set({"rules": newRules}, () => {
          message("New rule created");
          populateRules(rules, store);
        })
      });

    } else {
      message("url must be a craigslist search page");
    }
  });
});

function populateRules(rules, store) {
  rules.innerHTML = "";
  Object.keys(store.rules).forEach((rule) => {
    let newNode = document.createElement("li");
    newNode.className = "list-rule";
    let nodeP = document.createElement("p");
    let nodeText = document.createTextNode(rule);
    nodeP.appendChild(nodeText);
    newNode.appendChild(nodeP);
    let deleteButton = document.createElement("button");
    deleteButton.name = rule;
    deleteButton.addEventListener("click", (e) => {
      e.preventDefault();
      let ruleText = e.target.name;
      console.log(ruleText);
      newRules = store.rules;
      console.log(newRules);
      delete newRules[ruleText];
      console.log(newRules);
      chrome.storage.sync.set({rules: newRules}, () => {
        message("rule deleted");
        populateRules(rules, store);
      });
    });
    let deleteText = document.createTextNode("Delete Rule");
    deleteButton.appendChild(deleteText);
    newNode.appendChild(deleteButton);
    rules.appendChild(newNode);
  });
}

function message(msg) {
  let div = document.getElementById('message');
  div.innerHTML = msg;
  div.style.display = "block";
  window.setTimeout(() => {div.style.display = "none"}, 5000);
}
