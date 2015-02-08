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

        $("#temp").remove();
        $("p").hide();
        $("#temp").hide();

/*calls GUI and parsing files once static pages are loaded*/
$(document).ready(function(){
        parseJSON();
        popOut();
        ifClicked();
        $("#temp").remove();
        $("p").hide();
        $("#temp").hide();
         

});

/*makes box popOut when clicked*/
function popOut(){
    $("#container a").click(function(){
        $("#container div a").hide();
        $(this).show();
        $(this).css("width", 550);
        //$(this).css("max-width", 200);
        $(this).css("height", 450);
        //$(this).css("max-height", 150);
        whichClicked();
        ifClicked();
        $("#temp").remove();
        $("p").hide();
        $("#temp").hide();
    });
}


function whichClicked(){
    var i;
    
    $("#edu").click(function(){
        for(i=0; i<eduArticles.length;i++)
        {
            $("#container #edu").append('<p id="temp">' + eduArticles[i] + '</p>');
        }
    })
    
    $("#work").click(function(){
        for(i=0; i<workArticles.length;i++)
        {
            $("#container #work").append('<p id="temp">' + workArticles[i] + '</p>');
        }
    })
    
    $("#genocide").click(function(){
        for(i=0; i<genocideArticles.length;i++)
        {
            $("#container #genocide").append('<p id="temp">' + genocideArticles[i] + '</p>');
        }
    })
    
    $("#reproductive").click(function(){
        for(i=0; i<reproductionArticles.length;i++)
        {
            $("#container #reproductive").append('<p id="temp">' + reproductionArticles[i] + '</p>');
        }
    })
    
    $("#violence").click(function(){
        for(i=0; i<violenceArticles.length;i++)
        {
            $("#container #violence").append('<p id="temp">' + violenceArticles[i] + '</p>');
        }
    })
    
     $("#pol").click(function(){
        for(i=0; i<politicsArticles.length;i++)
        {
            $("#container #pol").append('<p id="temp">' + politicsArticles[i] + '</p>');
        }
    })
    
     $("#sci").click(function(){
        for(i=0; i<scienceArticles.length;i++)
        {
            $("#container #sci").append('<p id="temp">' + scienceArticles[i] + '</p>');
        }
    })
    
    $("#media").click(function(){
        for(i=0; i<mediaArticles.length;i++)
        {
            $("#container #media").append('<p id="temp">' + mediaArticles[i] + '</p>');
        }
    })
    
     $("#journalism").click(function(){
        for(i=0; i<mediaArticles.length;i++)
        {
            $("#container #journalism").append('<p id="temp">' + journalismArticles[i] + '</p>');
        }
    })
            $("#temp").remove();
        $("p").hide();
        $("#temp").hide();
}
/*checks to see if clicked outside of box*/
function ifClicked() {
        $("#temp").remove();
        $("p").hide();
        $("#temp").hide();
    $('h3').click(function() {
        $("#container div a").show();
        $("#container div a").css("width", 200);
        $("#container div a").css("height", 150);
        $('#edu p').remove();
        $('#work p').remove();
        $('#genocide p').remove();
        $('#reproductive p').remove();
        $('#violence p').remove();
        $('#pol p').remove();
        $('#sci p').remove();
        $('#media p').remove();
        $('#journalism p').remove();
    });
        $("#temp").remove();
        $("p").remove();
        $("p").hide();
        $("#temp").hide();
}

/*inserts information about feminist issues */
/*
function insertEDU(){
    $('#edu').append("<p>Women do not have the same access to education in many parts of the        world.</p>");
}
*/

/*parses the JSON data and inserts into proper div*/

function parseJSON(){
            $("#temp").remove();
            $("p").remove();
        $("p").hide();
        $("#temp").hide();
    var j;
    var i;

    for(i=0; i<topics.length; i++)
    {
        var request = new XMLHttpRequest();
        var response = request.open( "GET", topics[i], false );
        request.send(null);
        var json = request.responseText;
        var arr = JSON.parse(json);
        for(j=0; j<4; j++){
            url = arr.response.docs[j].web_url;
            switch(i){
                case 0:
                    eduArticles.push(url);
                    break;
                case 1:
                    workArticles.push(url);
                    break;
                case 2:
                    genocideArticles.push(url);
                    break;
                case 3:
                    reproductionArticles.push(url);
                    break;
                case 4:
                    violenceArticles.push(url);
                    break;
                case 5:
                    politicsArticles.push(url);
                    break;
                case 6:
                    scienceArticles.push(url);
                    break;
                case 7:
                    mediaArticles.push(url);
                    break;
                case 8:
                    journalismArticles.push(url);
                    break;
            }/*end of switch*/
        }/*end of inner for*/
    }/*end of outer for*/
} /*end of parseJSON */












