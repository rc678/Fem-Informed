var url;
var box = new Object();
var initial = true;

/*****GET REQUESTS FOR DIFFERENT ARTICLES *****/
var education = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=women+and+education&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879";
var work = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=women+workplace&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879";
var genocide = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=women+genocide&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879";
var reproduction = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=abortion&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879";
var violence =  "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=domestic+violence+us&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879";
var politics = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=women+in+government&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879";
var science = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=women+in+STEM&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879"
var media = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=women+media+discrimination&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879"
var journalism = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=women+journalism+discrimination&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879";

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
$(document).ready(function()
{
    onBox();
    offBox();
    onBoxClick();
    parseJSON();
});

/*changes CSS when user hovers over a category in the box on the webpage*/
function onBox()
{
    $("p").mouseenter( function() {
        $(this).css('padding', '15%'); 
        $(this).css('font-size', '20px');
        $(this).css('text-shadow', '5px 5px 10px #F87, 5px 5px 10px #F87');
        $(this).css('text-align', 'center');
    });
}

/*CSS changes when user hovers off the category in the box on the webpage*/
function offBox()
{
    $("p").mouseleave( function() { 
        $(this).css('padding', '30%');
        $(this).css('font-size', '15px');
        $(this).css('text-shadow', "");
        $(this).css('text-align', 'center');
    });
}

/*display information when the user clicks a category*/
function onBoxClick()
{
    $('#grid div').on('click', function() { //selecting any box in the grid
         $('#grid').hide("slow"); //hide the grid and display block that was clicked
         $("body").append('<div id="info-box"> </div>').css( //styling to allow block to take up screen
          {
             "outline": "1px solid",
             "padding-left" : "0",
             "padding-right": "0",
             "margin-left": "auto",
             "margin-right": "auto",
             "display": "block",
             "width": "600px",
             "height": "600px",
             "z-index": "10"  
          });
                    
          if(initial === true) //create home button if once clicked
          {
              $("div").append
              ('<h3 id="home"> HOME </h3>');
              initial = false; 
              
             $('h2').css({
             "color": "red",
             "margin-left": "auto",
             "margin-right": "auto",
             "display": "block",
             "width": "100px"
             });
          }

          if(initial === false) //show h3 (home button) if something was clicked previously
          {
              $('h3').show();
          }
          
         $('#info-box').append('<h2>' + this.id + '</h2>');
                    
          $('h2').css({
             "color": "red",
             "margin-left": "auto",
             "margin-right": "auto",
             "display": "block",
             "width": "180px",
             "text-align": "center"
         });
         offBoxClick()    
    }); 
}

/*gets the main screen when the home page is not clicked*/
function offBoxClick()
{
    $("h3").click(function() { //select a box
        $('#grid').show("slow");
        $('h3').hide();
        $('h2').remove();
    });
}

/*parses a JSON file based on the box that was clicked */
function parseJSON()
{
    var request = new XMLHttpRequest();
    
    request.open("GET", "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=women+in+science+discrimination&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879", false);
    request.send();
    var result = request.responseText; 
    var json = JSON.parse(result);
    var title =  json.response.docs[0].snippet;
    console.log(title);
}

/*displays the articles that relate to the box that was clicked*/
function displayArticleTitles()
{
    
}