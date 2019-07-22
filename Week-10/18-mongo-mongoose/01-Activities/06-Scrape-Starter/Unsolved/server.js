// Using this template, the cheerio documentation,
// and what you've learned in class so far, scrape a website
// of your choice, save information from the page in a result array, and log it to the console.

var cheerio = require("cheerio");
var axios = require("axios");

// Make a request via axios to grab the HTML body from the site of your choice
axios.get("https://www.amazon.com/gp/bestsellers/wireless?pf_rd_p=ba9baa66-90ba-50ef-b10c-072338708557&pf_rd_r=GRXRBN2EW3N7WD2J6WP4&pd_rd_wg=3BGvn&ref_=pd_gw_ri&pd_rd_w=9E8no&pd_rd_r=d156fe46-7f5a-4dbe-b6bc-5c352da03279").then(function(response) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(response.data);

  // An empty array to save the data that we'll scrape
  var results = [];

  // Select each element in the HTML body from which you want information.
  // NOTE: Cheerio selectors function similarly to jQuery's selectors,
  // but be sure to visit the package's npm page to see how it works
  $("zg-item-immersion").each(function(i, element) {

    var title = $(element).children().children().text();
    var link = $(element).find("a").attr("href");

    // Save these results in an object that we'll push into the results array we defined earlier
    results.push({
      title: title,
      link: link
    });
  });

  // Log the results once you've looped through each of the elements found with cheerio
  console.log(results);
});
