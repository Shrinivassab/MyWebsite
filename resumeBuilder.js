/*
 This is empty on purpose! Your code to build the resume will go here.
 */
//Printing my name in webpage
/*var myName = "Shrinvass.A.B";
 var formatedName = HTMLheaderName.replace("%data%",myName)
 $("#header").append(formatedName);


 //Printing my role in my webpage
 var role = "Software Engineer";
 var formatedRole = HTMLheaderRole.replace("%data%",role);
 $("#header").append(formatedRole);

 //Trying out arrays
 var skills = ["C/C++","Java"];
 $("#main").append(skills);

 var newSkills = skills.push("JavaScript");
 $("#main").append(newSkills);

 //Converting first char in name to caps other to small

 var name ="shRINIvasS";
 var newFirstName = name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
 $("#main").append(newFirstName);

 //Using onjects




 //bio.Picture = HTMLbioPic.replace("%data%",images/fry.jpg);
 //$("#header").append(bio.Picture);

 $("#main").append(bio.Name,bio.Role,bio.Contact_No,bio.Picture,bio.Contact_No.E_Mail,bio.DOB,bio.age );

 bio.DOB = "March-16";
 bio["age"] = 24;

 $("#main").append(bio.age);

 //Creating a JSON file formate

 var education = {
 "School" :        {
 "firstName" : "Shrinivass",
 "lastName" :"Arunachalam Balasubramanian",
 "age" : 24,
 "major" : ["Information Technology","Computer and Information Science"],
 "universityName" : "University of Massachusetts- Dartmouth",
 "gradYear" : "May-31-2016"
 }


 }
 */

/*var myName = "Shrinvass.A.B";
 var formatedName = HTMLheaderName.replace("%data%",myName)
 $("#header").append(formatedName);


 //Printing my role in my webpage
 var role = "Software Engineer";
 var formatedRole = HTMLheaderRole.replace("%data%",role);
 $("#header").append(formatedRole);*/


var bio ={
    "name" : "Shrinivass.A.B",
    "role" : "Software Engineer/ Developer",

    "contacts" : [
        {
            "Mobile" : "9784071827",
            "E_Mail" : "shrinivassab@gmail.com",
            "github" : "shrinivassab",
            "hacker_rank" : "shrinivassab",
            "location" : "USA"
        }
    ],
    "welcomeMessage" : "With more than 2 years of experience and knowledge in software industry, I am a highly accomplished, skilled and knowledgeable Software Engineer with work expertise in different technologies such as (Java, SQL, HTML, XHTML, CSS and JavaScript). I am looking for opportunities to move to the next level of being a developer while taking on more technical challenge and leadership endeavors in my career. I am seeking a position that will challenge my problem solving skills and enhance my knowledge and potential in the industry.",
    "Picture" : "images/1.jpg",
    "Skills" : ["* Java/J2EE" , "* C/C++", "* SQL","* JavaScript","* HTML/CSS", "* OpenGL/Advance"],
    "Web" : ["* JavaScript", "* Angular","* Ember", "* Backbone", "* HTML/HTML5", "* CSS"],
    "Security":["* OWASP","* Cryptography","* CSRF","* XSS","* Buffer Overflow","* SQL Injection"]


};

var work ={
    "jobs" :[
        {
            "employer" : "State Express Transport Corporation",
            "title" : "Data Base Engineer",
            "location" : "Chennai - TN - India",
            "date" : "15-MAY-2012 to 23-AUG-2012",
            "description" : " Managing records for all the passengers travelling through bus." +
            "	Storing the daily records about the ticket collected and list of passengers travelled." +
            "   Technologies which I used were SQL, MYSQL and Excell."
        },
        {
            "employer" : "Navin Enterprises",
            "title" : "Software Engineer",
            "location" : "Leominster - MA - USA",
            "date" : "11-DEC-2014 to 23-JAN-2016",
            "description" : " Image Compression using KL Transform." +
            " Doing research work to overcome the disadvantages of Image compression using KL-Transform" +
            " Developed, implemented and improved the algorithm which will calculate the image quality after decoded using KL-Transform."
        }


    ]

};


var projects ={
    "project" :[
        {
            "title" : "Artificial Intelligence using Genetic Algorithm",
            "technology" : "",
            "dates" : "4 - Month  - [ Unity 3D, Java, SQL , Genetic Algorithm ]",
            "description" : "•	Created an application that will determine whether the satellite reach the moon." +
            "•	Genetic algorithm help to find the trivia parameters that are used in calculation of trajectories in launching the satellites from earth to moon." +
            "•	I get a population of satellites which have higher chance to hit the moon with the help of fitness function." +
            "•	I perform roulette wheel selection to select two satellite for cross over." +
            "•	I perform one point cross over at random points. The slice point is selected randomly for each cross- over." +
            "•	I implemented two mutation, which can be controlled by the user before the simulation process." +
            "•	For every 5% of mutation rate one satellite undergoes total randomness while in the other type of mutation we randomly select values of θ, α, V from the range of its + or ‐ initial values." +
            "•	For every 2% mutation rate a satellite is selected in this mutation type." +
            "•	My termination criteria is when the satellite reaches the moon."

        },

        {
            "title" : "3D game using Opengl",
            "technology" : "",
            "dates" : "3 - Month  - [ OpenGL ,Modern OpenGL, C/C++, Visual Studio]",
            "description" : "•	Created a 3D game where I utilized the concepts like viewing and camera: modelling, transformation, clipping, color." +
            "•	Shading and lighting: light source, rendering of surfaces, antialiasing, fog, texture mapping; others: frame buffering, tessellators, collision detection." +
            "•	•	I used GLEW, GLUT, FREEGLUT, GLU, GLFW OpenGL library tool kit in order to complete the project." +
            "•	I created a terrain with a concept called height map." +
            "•	•	Then implemented a tree using Fractals. Fractals is a useful way to drawing some real life like objects where some pattern recurs. I have drawn single line and then recurring sub trees. " +
            "•	Created skybox to make the scene looks bigger and more impressive by wrapping the viewer with a texture that goes around the camera 360 degree. " +
            "•	The main idea behind the skybox is to render a big cube and place the viewer at its center."

        },
        {
            "title" : "Network Provenance",
            "technology" : "",
            "dates" : "3 - Month  - [ Cisco Packet Tracer, Java, Swing, SQL and MYSQL ]",
            "description" : "•	Created a 3D game where I utilized the concepts like viewing and camera: modelling, transformation, clipping, color." +
            "•	Shading and lighting: light source, rendering of surfaces, antialiasing, fog, texture mapping; others: frame buffering, tessellators, collision detection." +
            "•	•	I used GLEW, GLUT, FREEGLUT, GLU, GLFW OpenGL library tool kit in order to complete the project." +
            "•	I created a terrain with a concept called height map." +
            "•	•	Then implemented a tree using Fractals. Fractals is a useful way to drawing some real life like objects where some pattern recurs. I have drawn single line and then recurring sub trees. " +
            "•	Created skybox to make the scene looks bigger and more impressive by wrapping the viewer with a texture that goes around the camera 360 degree. " +
            "•	The main idea behind the skybox is to render a big cube and place the viewer at its center."

        },
        {
            "title" : "Meet Up Event Planner",
            "technology" : "",
            "dates" : "1 - Month  - [JavaScript, HTML/HTML5 , CSS and Object-Oriented Concepts ]",
            "description" : "•	Any meaningful experience on the web has a form. Whether it's a form made of text boxes, toggles, buttons, checkboxes, or touchable widgets," +
            " web developers need to be purposeful about forms to make users happy and increase conversions.•	" +
            "It’s a responsive web application that allows user to establish a meet-up event.•	This app is applicable both in desktop and mobile.•	This application " +
            "allows user to name their event, search for host location (using a location API like Foursquare), set the capacity of the event, start and end time," +
            " and input a description of the event."

        },
        {
            "title" : " CURRENT PROJECT : Neighborhood Map",
            "technology" : "",
            "dates" : "Present   - [JavaScript, jQuery, HTML/HTML5 , CSS and AngularJS]",
            "description" : "•	Developing a single-page application featuring a map of the user’s neighborhood or a " +
            "neighborhood user like to visit. Trying to add additional functionality like map marker to identify popular " +
            "location or places user like to visit.•	Search function to easily discover theses location, and a list view to support " +
            "simple browsing of all location. •	Implementing third party API which will provide additional information about the locations " +
            "(such as StreetView images, Wikipedia article, Yelp review etc.)"

        }


    ]


};


var education = {
    "schools":[
        {
            "name" : "Anna University",
            "degree" : "Bachelor's ",
            "duration" : "AUG-3-2009 to  June-19-2013",
            "location" : "Chennai - TN - India",
            "major" : "Information Technology"
        },
        {
            "name" : "University of Massachusetts- Dartmouth",
            "degree" : "Master's",
            "duration" : "SEP-10-2014 to MAY-30-2016",
            "location" : "Dartmouth - MA - USA",
            "major" : "Computer and Information Science"

        }

    ]



};



bio.display = function () {
    var formatedName = HTMLheaderName.replace("%data%",bio.name);
    var formatedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formatedMessage =HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    var formatedImage = HTMLbioPic.replace("%data%",bio.Picture);
    $("#header").append(formatedName).append(formatedRole).append(formatedImage);
   // $("#header").append(HTMLskillsStart,HTMLwebStart,HTMLsecurityStart);
    $("#header").append(formatedMessage);

  // for(skill in bio.Skills){
    //  var formatedSkills = HTMLskills.replace("%data%",bio.Skills[skill]);
     //$("#skills").append(formatedSkills);

   //}
  // for (web in bio.Web){
    //   var formatedWeb = HTMLskills.replace("%data%",bio.Web[web]);
      // $("#web").append(formatedWeb);

   //}
    //for (sec in bio.Security){
      //  var formatedSecurity = HTMLskills.replace("%data%",bio.Security[sec]);
       // $("#security").append(formatedSecurity);
//
    //}


    for(contact in bio.contacts) {
        var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].Mobile);
        var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].E_Mail);
        var formattedGithub = HTMLgithub.replace("%contact%","Github").replace("%data%",bio.contacts[contact].github);
        var formattedLocation =HTMLlocation.replace("%data%", bio.contacts[contact].location);
        $("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);
        $("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);
    };

};

work.display = function () {
    for (job in work.jobs){

        $("#workExperience").append(HTMLworkStart);

        var formatedEmp = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formatedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formatedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        var formatedDate = HTMLworkDates.replace("%data%",work.jobs[job].date);
        var formatedDescription = HTMLprojectDescription.replace("%data%",work.jobs[job].description);

        $(".work-entry:last").append(formatedEmp + formatedTitle, formatedLocation, formatedDate, formatedDescription)


    }
}

/*work.display = function () {
 for (job in work.Internship){

 $("#workExperience").append(HTMLworkStart);

 var formatedInternEmp = HTMLworkEmployer.replace("%data%",work.Internship[job].companyName);
 var formatedInternTitle = HTMLworkTitle.replace("%data%",work.Internship[job].title);

 var formatedEmpTitle = formatedInternEmp + formatedInternTitle;
 $(".work-entry:last").append(formatedEmpTitle);

 var formatedInternLocation = HTMLworkLocation.replace("%data%",work.Internship[job].location);
 $(".work-entry:last").append(formatedInternLocation);

 // var formatedInternDate = HTMLworkDates.replace("%data%",work.internship[job].date);
 //  $(".work-entry:last").append(formatedInternDate);

 }

 }

 work.display();*/

/*work.display();

 // Internship
 var formatedInternCompany = HTMLworkEmployer.replace("%data%",work.internship.companyName);
 var formatedInternTitle = HTMLworkTitle.replace("%data%",work.internship.title);
 var formatedInternDuration = HTMLworkDates.replace("%data%",work.internship.duration);
 var formatedInternLocation = HTMLworkLocation.replace("%data%",work.internship.location);
 var formatedInternDate = HTMLworkStart.replace("%data%",work.internship.date);
 var formatedInternDescription = HTMLworkDescription.replace("%data%",work.internship.description);

 var formatedEmpTitle  = formatedInternCompany + formatedInternTitle;

 $("#workExperience").append(HTMLworkStart);
 $("#workExperience").append(formatedEmpTitle,formatedInternDuration,formatedInternLocation,formatedInternDate,formatedInternDescription);
 //$("#workExperience").append();

 // Professional Experience

 var formatedProCompany = HTMLworkEmployer.replace("%data%",work.proExperience.companyName);
 var formatedProTitle = HTMLworkTitle.replace("%data%",work.proExperience.title);
 var formatedProDuration = HTMLworkDates.replace("%data%",work.proExperience.duration);
 var formatedProLocation = HTMLworkLocation.replace("%data%",work.proExperience.location);
 var formatedProDate = HTMLworkStart.replace("%data%",work.proExperience.date);
 var formatedProDescription = HTMLworkDescription.replace("%data%",work.proExperience.description);

 var formatedProEmpTitle  = formatedProCompany + formatedProTitle;

 $("#workExperience").append(HTMLworkStart);



 $("#workExperience").append(formatedProEmpTitle,formatedProDuration,formatedProLocation,formatedProDate,formatedProDescription);


 */

projects.display = function () {
    for (item in projects.project){

        $("#projects").append(HTMLprojectStart);

        var formatedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
        var formatedDate = HTMLprojectDates.replace("%data%",projects.project[item].dates);
        var formatedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);
        var formatedSkills = HTMLschoolLocation.replace("%data%",projects.project[item].technology);
        $("#projects").append(formatedSkills);

        $(".project-entry:last").append(formatedTitle,formatedDate,formatedDescription);


    }


}

/*if (bio.Skills.length >0){
 $("#header").append(HTMLskillsStart);

 var formatedSkills = HTMLskills.replace("%data%",bio.Skills[0]);
 $("#header").append(formatedSkills);
 var formatedSkills = HTMLskills.replace("%data%",bio.Skills[1]);
 $("#header").append(formatedSkills);
 var formatedSkills = HTMLskills.replace("%data%",bio.Skills[2]);
 $("#header").append(formatedSkills);

 }
 var name = HTMLheaderName.replace("%data%",bio.name);
 var formatedAGE = HTMLage.replace("%data%",bio.age);

 var formatedMobile = HTMLmobile.replace("%data%",bio.Contact_No.Mobile);

 var formatedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);


 $("#header").append(formatedMessage,formatedImage);
 $("#header").append(formatedAGE,formatedLocation,formatedMobile,formatedMail);*/

education.display = function () {

    for (bachelor in education.schools){
        $("#education").append(HTMLschoolStart);

        var formatedName = HTMLschoolName.replace("%data%",education.schools[bachelor].name);
        var formatedDegree = HTMLschoolDegree.replace("%data%",education.schools[bachelor].degree);
        var formatedDuration = HTMLschoolDates.replace("%data%",education.schools[bachelor].duration);
        var formatedLocation = HTMLschoolLocation.replace("%data%",education.schools[bachelor].location);
        var formatedMajor = HTMLschoolMajor.replace("%data%",education.schools[bachelor].major);

        $(".education-entry:last").append(formatedName + formatedDegree,formatedDuration,formatedLocation,formatedMajor);
    }
    
}

bio.display();
work.display();
projects.display();
education.display();

//Appending google map in my resume
$("#mapDiv").append(googleMap);
