$(document).ready(() => {
  chrome.storage.sync.get('rules', (store) => {
    Object.keys(store.rules).forEach((rule, idx) => {
      $("#rules").append(`<li id="rule${idx}"><h3 id="title${idx}"></h3><ul class="rule-list" id="rule-list${idx}"></ul></li>`);
      let pattern = new RegExp("\\\?");
      let newRule;
      if (pattern.test(rule)) {
        newRule = rule + "&postedToday=1";
      } else {
        newRule = rule + "?postedToday=1"
      }
      $.ajax({
        url: newRule,
        method: "GET",
        success: (data) => {
          $(`#title${idx}`).append($(data)[1].innerHTML);
          $(`#rule-list${idx}`).append($(data).find(".hdrlnk"));
          $(`#rule-list${idx} .hdrlnk`).each((idx, el) => {
            if ($(el).attr("href").slice(0, 4) !== "http" && $(el).attr("href").slice(0, 2) !== "//") {
              $(el).attr("href", "http://craigslist.org" + $(el).attr("href"));
            } else {

              $(el).attr("href", "http:" + $(el).attr("href"));
            }
            $(el).wrap("<li class='rule'></li>");
          });
        }
      });
    });
    if (Object.keys(store.rules).length == 0) {
      $("#rules").append('<p>To add daily results from craigslist, navigate to the craigslist search page you wish to save, click on the peace sign icon in your toolbar, and select "add rule". Rules can be deleted from the options menu.</p>');
    }
  });
});
