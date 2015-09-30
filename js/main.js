var url;

/*****GET REQUESTS FOR DIFFERENT ARTICLES *****/
var edu = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=women%2C+education%2C+lack&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879";
var work = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=women%2C+workplace%2C+pay%2C+discrimination&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879";
var genocide = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=women%2C+genocide&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879";
var reproduction = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=abortion%2C+women%2C+prolife&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879";
var violence =  "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=domestic+violence%2C+women%2C+abuse&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879";
var politics = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=women%2C+politics&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879";
var science = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=women%2C+technology%2C+lack&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879"
var media = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=women%2C+media+%2C+cyber%2C+attack&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879"
var journalism = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=gamergate&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879";

var topics = [edu, work, genocide, reproduction, violence, politics, science, media, journalism];

/***STORES ARTICLES BASED ON SUBJECT ***/
var eduArticles = new Array();
var workArticles = new Array();
var genocideArticles = new Array();
var reproductionArticles = new Array();
var violenceArticles = new Array();
var politicsArticles = new Array();
var scienceArticles = new Array();
var mediaArticles = new Array();
var journalismArticles = new Array();


/*calls GUI and parsing files once static pages are loaded*/
$(document).ready(function(){
    onBox();
    offBox();
    onBoxClick();
});

/*changes CSS when user hovers over a category in the box on the webpage*/
function onBox(){
    $("p").mouseenter( function() {
        $(this).css('padding', '15%'); 
        $(this).css('font-size', '20px');
        $(this).css('text-shadow', '5px 5px 10px #F87, 5px 5px 10px #F87');
        $(this).css('text-align', 'center');
    });
}

/*CSS changes when user hovers off the category in the box on the webpage*/
function offBox(){
    $("p").mouseleave( function() { 
        $(this).css('padding', '30%');
        $(this).css('font-size', '15px');
        $(this).css('text-shadow', "");
        $(this).css('text-align', 'center');
    });
}

/*display information when the user clicks a category*/
function onBoxClick(){
    $("div div").click(function() {
         $("div").remove();
         $("body").append("<div> </div>");
         $("div").css(
          {
             "outline": "1px solid",
             "padding-left" : "0",
             "padding-right": "0",
             "margin-left": "auto",
             "margin-right": "auto",
             "display": "block",
             "width": "600px",
             "height": "600px"             
          });
         /*
         $("div").css("margin-left", "auto");
         $("div").css("margin-right", "auto");
         $("div").css("display", "block");
         $("div").css("width", "600px");
        */
         
    });
    
/*builds the base home screen after clicking*/
function buildHomeScreen() {
    
}

}












