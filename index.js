$(document).ready(function() {
  $.ajaxSetup({ cache: false });
});

getNewQuote();

$("#generateNew").click(getNewQuote);

function getNewQuote() {
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(json) {
    var html = "";
    var content = json[0].content.replace(/<p>/,"").replace(/<\/p>/,"").replace(/\s+$/,"");
    content = '"' + content + '"';
    var person = json[0].title;
    html += '<p id="quote">' + content + '</p>' + '<p id="person">- ' + person + "</p>";
    
    $("#quoteHere").html(html);
    var intentLink = "";
    intentLink = "https://twitter.com/intent/tweet?text=" + encodeURI(content) + encodeURI(" - " + person);
    $("#twitterButton").attr("href", intentLink).attr("target", "_blank");
  });
}