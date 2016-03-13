var tempCheck = false; 
var url;

/*****GET REQUESTS FOR DIFFERENT ARTICLES *****/
var edu = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=women%2C+education%2C+lack&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879";
var work = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=women%2C+workplace%2C+pay%2C+discrimination&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879";

var genocide = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=women%2C+genocide&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879";
var reproduction = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=abortion%2C+women%2C+prolife&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879";
var violence =  "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=domestic+violence%2C+women%2C+abuse&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879";
var politics = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=women%2C+politics&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879";
var science = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=women%2C+technology%2C+lack&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879";
var media = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=women%2C+media+%2C+cyber%2C+attack&api-key=4eb27fee97550b23662e1222ece13e6b%3A17%3A71194879";
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

/*
        $("#temp").remove();
        $("p").hide();
        $("#temp").hide();
        */

/*calls GUI and parsing files once static pages are loaded*/
$(document).ready(function(){
        parseJSON();
        popOut();
        ifClicked();
        infoBoxClicked();
    /*
        $("#temp").remove();
        $("p").hide();
        $("#temp").hide();
        */
         

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
        /*
        $("#temp").remove();
        $("p").hide();
        $("#temp").hide();
        */
    });
}


function whichClicked(){
    var i;

    $("#edu").click(function(){
        for(i=0; i<eduArticles.length;i++)
        {
            if(tempCheck == false)
            {
                $("#container #edu").append('<p id="temp">' + eduArticles[i] + '</p>');     
            }

        }
        tempCheck = true;
    })
    
    $("#work").click(function(){
        for(i=0; i<workArticles.length;i++)
        {
            if(tempCheck == false) {
                $("#container #work").append('<p id="temp">' + workArticles[i] + '</p>');
            }
        }
        tempCheck = true;
    })
    
    $("#genocide").click(function(){
        for(i=0; i<genocideArticles.length;i++)
        {
            if(tempCheck == false)
            {
                $("#container #genocide").append('<p id="temp">' + genocideArticles[i] + '</p>');     
            }
        }
        tempCheck = true;
    })
    
    $("#reproductive").click(function(){
        for(i=0; i<reproductionArticles.length;i++)
        {
            if(tempCheck == false)
            {
                $("#container #reproductive").append('<p id="temp">' + reproductionArticles[i] + '</p>');    
            }
        }
        tempCheck = true; 
    })
    
    $("#violence").click(function(){
        for(i=0; i<violenceArticles.length;i++)
        {
            if(tempCheck == false)
            {
                $("#container #violence").append('<p id="temp">' + violenceArticles[i] + '</p>');
            }
        }
        tempCheck = true;
    })
    
     $("#pol").click(function(){
        for(i=0; i<politicsArticles.length;i++)
        {
            if(tempCheck == false)
            {
                $("#container #pol").append('<p id="temp">' + politicsArticles[i] + '</p>');
            }
        }
         tempCheck = true;
    })
    
     $("#sci").click(function(){
        for(i=0; i<scienceArticles.length;i++)
        {
            if(tempCheck == false)
            {
                $("#container #sci").append('<p id="temp">' + scienceArticles[i] + '</p>');
            }
        }
         tempCheck = true;
    })
    
    $("#media").click(function(){
        for(i=0; i<mediaArticles.length;i++)
        {
            if(tempCheck == false)
            {
                $("#container #media").append('<p id="temp">' + mediaArticles[i] + '</p>');
            }
        }
        tempCheck = true;
    })
    
     $("#journalism").click(function(){
        for(i=0; i<mediaArticles.length;i++)
        {
            if(tempCheck == false)
            {
                $("#container #journalism").append('<p id="temp">' + journalismArticles[i] + '</p>');
            }
        }
         tempCheck = true;
    })
     
}
/*checks to see if clicked outside of box*/
function ifClicked() {

    $('h3').click(function() {
        tempCheck = false; 
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
    /*
        $("#temp").remove();
        $("p").remove();
        $("p").hide();
        $("#temp").hide();
        */
}

/*inserts information about feminist issues */
/*
function insertEDU(){
    $('#edu').append("<p>Women do not have the same access to education in many parts of the        world.</p>");
}
*/

/*parses the JSON data and inserts into proper div*/

function parseJSON(){
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











