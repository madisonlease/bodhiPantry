function setUp(){
    document.getElementById("galleryPage").style.display = "none";
    document.getElementById("covidPage").style.display = "none";
    document.getElementById("contactPage").style.display = "none";
}

function galleryPage(){
    document.getElementById("homePage").style.display = "none";
    document.getElementById("contactPage").style.display = "none";
    document.getElementById("covidPage").style.display = "none";
    document.getElementById("galleryPage").style.display = "block";

    document.body.style.backgroundImage="none";
    document.body.style.backgroundColor="#ffe7c5";
}

function covidPage(){
    document.getElementById("homePage").style.display = "none";
    document.getElementById("contactPage").style.display = "none";
    document.getElementById("galleryPage").style.display = "none";
    document.getElementById("covidPage").style.display = "block";

    document.body.style.backgroundImage="none";
    document.body.style.backgroundColor="#ffe7c5";
}

function contactPage(){
    document.getElementById("homePage").style.display = "none";
    document.getElementById("covidPage").style.display = "none";
    document.getElementById("galleryPage").style.display = "none";
    document.getElementById("contactPage").style.display = "block";

    document.body.style.backgroundImage="none";
    document.body.style.backgroundColor="#ffe7c5";
}