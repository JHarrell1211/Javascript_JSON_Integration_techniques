

//OBJECTS
var info = {
    "full_name": "Ray Villalobos",
    "title": "Staff Author",
    //CREATING AN ARRAY
    "courses": [
        "JavaScript & JSON",
        "Facebook Apps",
        "jQuery Mobile Web Apps"
    ],
    "links": [
        { "blog": "http://iviewsource.com" },
        { "facebook": "http://facebook.com/iviewsource" },
        { "youtube": "http://www.youtube.com/planetoftheweb" },
        { "podcast": "http://feeds.feedburner.com/authoredcontent" },
        { "twitter": "http://twitter.com/planetoftheweb" }
    ]
};
//console.log(info.full_name);
//console.log(info.courses[1]);
//console.log(info.links.youtube);

//var output = "";

//for (key in info.links) {
//    if (info.links.hasOwnProperty(key)) {
//        output += '<li>' +
//            '<a href = "' + info.links[key] +
//            '">' + key + '</a>' +
//            '</li>';
//    } // if the links has the key property
//} // for...go through each link

//var update = document.getElementById('link');
//update.innerHTML = output;

//Ajax
//var request;
//if (window.XMLHttpRequest) {
//    request = new XMLHttpRequest();
//}
//else {
//    request = new ActiveXObject("Microsoft.XMLHTTP");
//}

//request.open('GET', 'http://iviewsource.com/exercise/json/data.json');
//request.onreadystatechange = function () {
//    if ((request.status == 200) && (request.readyState == 41)) {
//        var info = JSON.parse(request.respnseText);

//

//function dataHandler(info) {

    var output = '';

    for (var i = 0; i <= info.links.length; i++) {
        for (var key in info.links[i]) {
            if (info.links[i].hasOwnProperty(key)) {
                output += '<li>' +
                    '<a href = "' + info.links[i][key] +
                    '">' + key + '</a>' +
                    '</li>';
            }// hasOwnProperty check
        }//for each object
    }// for each array element

    var update = document.getElementById('link');
    update.innerHTML = output;
//} //json p
 //   }//ready
//}//event
//request.send();