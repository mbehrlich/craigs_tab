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
          console.log($(data)[1]);
          $(`#title${idx}`).append($(data)[1].innerHTML);
          $(`#rule-list${idx}`).append($(data).find(".hdrlnk"));
          $(`#rule-list${idx} .hdrlnk`).each((idx, el) => {
            $(el).attr("href", "http://craigslist.org" + $(el).attr("href"));
            $(el).wrap("<li class='rule'></li>")
          });
        }
      });
    });
  });
});
