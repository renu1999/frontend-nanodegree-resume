/*
Resume Builder JS file containing four JSON objects each one representing a different resume section.
 */
// Biography section data
var bio = {
    "name": "Renuka",
    "role": "Web Developer",
    "contacts": {
        "mobile": "123-456-7890",
        "email": "renu_l@hotmail.com",
        "github": "renu1999",
        "twitter": "@Renu",
        "location": "Quincy, MA"
    },
    "welcomeMessage": "Hello! Welocme to my resume page. Its a responsive web page which can be viewed in all form factors (Desktop, mobile, tablet)",
    "skills": ["HTML", "CSS", "JavaScript", "JQuery", "Java/J2EE"],
    "pictureUrl": "images/me.png",
    display: function() {

        // Display Biographic information

        // Header section
        $("#header").prepend(formatData(HTMLheaderName, bio.name) + formatData(HTMLheaderRole, bio.role));
        //$("#header").append(formatData(HTMLheaderRole,bio.role));

        $("#header").append(formatData(HTMLbioPic, bio.pictureUrl));
        $("#header").append(formatData(HTMLwelcomeMsg, bio.welcomeMessage));
        $("#header").append(HTMLskillsStart);
        // Skills
        bio.skills.forEach(function(skill, index) {
            $("#header").append(formatData(HTMLskills, skill));
        });

        // Contact Information
        formatContacts("#topContacts");
        formatContacts("#footerContacts");
        $("#footerContacts").append(internationalizeButton);

    }
};
//Display Biography Section
bio.display();


//Work Experience section data
var work = {
    "jobs": [{
        "employer": "Consulting Company",
        "title": "Senior Software Engineer",
        "location": "Cambridge, MA",
        "dates": "Jan 2001 - Sep 2015",
        "description": "Senior Software Engineer with over 14years experience developing Java/J2EE  web applictaions." +
            "Responsible for delivery of complex business solutions with areas of" +
            "expertise in Java, J2EE."
    }, {
        "employer": "Finiancial Services",
        "title": "Architect",
        "location": "Boston, MA",
        "dates": "Sep 2015 - Current",
        "description": "Lead Architect designing and develop responsive website using HTML 5, CSS, JavaScript , JQuery." +
            "Responsible for delivery of complext website capable of transation workfolow and order prcessiong."
    }],
    display: function() {
        // Display Work information
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(formatData(HTMLworkEmployer, job.employer));
            $(".work-entry:last").append(formatData(HTMLworkDates, job.dates));
            $(".work-entry:last").append(formatData(HTMLworkLocation, job.location));
            $(".work-entry:last").append(formatData(HTMLworkDescription, job.description));
        });

    }
};

//Display Work experience Section
work.display();

//Projects section data

var projects = {

    "projects": [{
            "id": "trade",
            "title": "Online Trading",
            "dates": "2014-Future",
            "description": "Online Trading stocks , options , mutual funds. Migration of existing online trading pages to use the" +
                "latest framework components and deployment standards. Involved in technical design and implemented" +
                "several middle-tier components and business logic to support the business requirements.",
            "images": "images/trade.png"
        }, {
            "id": "positions",
            "title": "Portfolio Positions",
            "dates": "2001-2014",
            "description": "Online customer Portfolio Account website which displays positions, balances information and real-time market values ," +
                "totals gain loss for positions heald in the account",
            "images": "images/positions.png"
        }

    ],
    display: function() {

        // Display Work information
        projects.projects.forEach(function(project) {
            $("#projects").append(formatData(HTMLprojectStart, project.id));
            //$("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(formatData(HTMLprojectTitle, project.title));
            $(".project-entry:last").append(formatData(HTMLprojectDates, project.dates));
            $(".project-entry:last").append(formatData(HTMLprojectDescription, project.description));
            $(".project-entry:last").append(formatData(HTMLprojectImage, project.images));
        });

    }
};

//Display Projects Section
projects.display();

// Eduction section data
var education = {
    "schools": [{
        "name": "Osmania University",
        "location": "Hyderabad , India",
        "degree": "Bachelor of Engineering",
        "majors": [
            "Electronic & Communication"
        ],
        "dates": "1996",
        "url": "http://www.osmania.ac.in/"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2015",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    display: function() {
        // Display education information

        // Display education details
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formatData(HTMLschoolName, school.name));
            $(".education-entry:last").append(formatData(HTMLschoolDegree, school.degree));
            $(".education-entry:last").append(formatData(HTMLschoolDates, school.dates));
            $(".education-entry:last").append(formatData(HTMLschoolLocation, school.location));
            $(".education-entry:last").append(formatData(HTMLschoolMajor, school.majors));
        });

        // Display online courses
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(onlinecourse) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formatData(HTMLonlineTitle, onlinecourse.title));
            $(".education-entry:last").append(formatData(HTMLonlineSchool, onlinecourse.school));
            $(".education-entry:last").append(formatData(HTMLonlineDates, onlinecourse.dates));
            $(".education-entry:last").append(formatData(HTMLonlineURL, onlinecourse.url));
        });

    }
};

//Display Education Section
education.display();

//Display Map Section
$("#mapDiv").append(googleMap);


// Format methods
function formatData(sourceStr, dataStr) {
    return sourceStr.replace("%data%", dataStr);
}

function formatContacts(sourceId) {
    $(sourceId).append(formatData(HTMLmobile, bio.contacts.mobile));
    $(sourceId).append(formatData(HTMLemail, bio.contacts.email));
    $(sourceId).append(formatData(HTMLgithub, bio.contacts.github));
    $(sourceId).append(formatData(HTMLtwitter, bio.contacts.twitter));
    $(sourceId).append(formatData(HTMLlocation, bio.contacts.location));
}