//biography
var bio = {
	"name": "Slavik Gidenko",
	"role": "Web Developer",
	"contacts": {
		"mobile": "503-871-1448",
		"email": "mr.gidenko@gmail.com",
		"github": "gidenkvs",
		"twitter": "@fakeAddress",
		"location": "Salem, OR"
	}, 
    "Welcome": "Hello and welcome to my website!",
    "skills": ["PL/SQl Programer", "Unisys Imaging System Administrator",
              "OBIEE Developer and Administrator", "Beginer Web Developer"
    ],
	"bioPic": "images/main_img-small.jpg"
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedGreeting = HTMLwelcomeMsg.replace("%data%", bio.Welcome);
var formattedImg = HTMLbioPic.replace("%data%", bio.bioPic);

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedGreeting);
$("#header").append(formattedImg);

if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	
    $("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);

	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
}

// education

var education = {
	"schools": [
	{
		"name": "Chemeketa Commumity College",
		"location": "Salem, OR",
		"degree": "None",
		"majors": ["Business Administrator"],
		"dates": 2003,
		"url": "www.chemeketa.edu"
	},
	{
		"name": "Sacramento City College",
		"location": "Sacramento, CA",
		"degree": "None",
		"majors": ["Computer Programing"],
		"dates": 1998,
		"url": "www.scc.losrios.edu"
	}		
	],
	"onlineCourses": [
	{
		"title": "JavaScript Crash Course",
   		"school": "Udacity",
   		"dates": 2015,
		"url": "http://www.udacity.com"
	}	
	]	
}

education.diplay = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedSchoolName);

		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedSchoolMajor);	

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.schools[school].url);
		$(".education-entry:last").append(formattedOnlineURL);
	};

	for (online in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolOnlineLocation = HTMLonlineClasses.replace("%data%", education.onlineCourses[online].school);
		$(".education-entry:last").append(formattedSchoolOnlineLocation);

		var formattedSchoolOnlineDegree = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
		$(".education-entry:last").append(formattedSchoolOnlineDegree);

		var formattedSchoolOnlineDates = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].dates);
		$(".education-entry:last").append(formattedSchoolOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}

education.diplay();

//works experience

var work = {
	"jobs": [
	{
		"employer": "Oregon Employment Department",
		"title": "Information Systems Specialist",
		"dates": "June 2009 - Present",
		"location": "Salem, OR",
		"description": "Developing Federal Reports, data analytics, imaging system administration, and web design."
	},
	{
		"employer": "Oregon Finish and Design",
		"title": "Project Manager",
		"dates": "Sept 2004 - June 2009",
		"location": "Salem, OR",
		"description": "Managing construction projects, products procurement, and public relations."
	},	
	{
		"employer": "United Dominion Realty Trust",
		"title": "Maintenance Tech",
		"dates": "Sept 2000 - Sept 2004",
		"location": "Salem, OR",
		"description": "Multi-unit property maintenance."
	}
	]
}


function displayWork() {
	for (job in work.jobs) {
		// creates new div for workexperience
		$("#workExperience").append(HTMLworkStart);
		
		// concatenates employer and title
	    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription= HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

// projects

var projects = {
	"projects": [
	{
		"title": "Sample Project 1",
		"dates": "2014 - 2015",
		"description": "Automation of Federal Reports via Oracle Datawarehouse and Pl/SQL",
		"images": ["images/rosebt.jpg"]
	},
	{
		"title": "Sample Project 2",
		"dates": "2015 - present",
		"description": "Modification of look and feel of company website",
		"images": ["images/image_UI.jpg"]
	}
	]
};

projects.diplay = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);				

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		} 
	}
}

projects.diplay();

// international - unable to make it function

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

//$('#main').append(internationalizeButton);

// map

$('#mapDiv').append(googleMap);

// footer Contact
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedLocation);

