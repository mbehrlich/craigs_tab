## Craigs Tab

### Background

This project will be a chrome extension that replaces the default new tab page with
a list of craigslist links. Users who are checking craigslist every day to find a new
job, apartment, or relationship will be able to just look at their new tab, which
will have all posts from that day, based on the users location and preferences.

### Functionality & MVP

- [ ] Users specify options such as what type of postings, their location, and other filters
- [ ] the extension scrapes from craigslist the relevant results
- [ ] the extension displays on the new tab page the links


### Wireframes

[wireframes](./docs)

### Technologies & Technical Challenges

The craigs tab chrome extension will use vanilla Javascript, HTML, and CSS

a chrome extension requires a manifest.json and package.json file

There will be a form.html file along with a preferences.js file where users will update their preferences.

There will be a new_tab.html file where craigslist results will be displayed.

There will be a craigstab.js file that will scrape the data from craigslist.

The biggest challenge will be learning how to design and use a web scraper. I do not
know if craigslist does anything to guard against scrapers, as well, so that will have
to be researched.

### Implementation Timeline

**Day 1**:
- [ ] Project skeleton
- [ ] manifest.json
- [ ] package.json
- [ ] research chrome extensions
- [ ] research web scrapers

**Day 2**:
- [ ] form.html
- [ ] preferences.js
- [ ] Write code so that users can set preferences.

**Day 3 - 4**:

- [ ] craigstab.js
- [ ] Write webscraper to get info from craigslist

**Day 5 - 6**:
- [ ] new_tab.html
- [ ] New tab displays results
- [ ] Testing
- [ ] Production readme
