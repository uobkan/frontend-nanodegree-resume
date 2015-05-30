var formattedName = HTMLheaderName.replace("%data%", "Nak Bou");
var formattedRoleName = HTMLheaderRole.replace("%data%", "Designer & Web Developer")
$("#header").prepend(formattedRoleName);
$("#header").prepend(formattedName);

var bio = {
	"name": "Nak Bou",
	"role": "Designer & Developer",
	"bioPic": "images/me.jpg",
	"contacts": {
	  "mobile": "310 409 8402",
	  "email": "nak@nakbou.com",
	  "github": "github.com/uobkan",
	  "location": "San Jose"
    },
    "skills": [
	  "graphic designer",", ", "illustrator", ", ", "programming", ", ", "JS"
	],
	"welcome message": "Thanks for visiting my site!",

}

var work = {};
work.position = "graphic designer";
work.employer = "Peninsula Bible Church";
work.duration = "4 months";
work.city = "Palo Alto";

var education = {
	"schools": [
	  {
	  	"name": "Fresno City College",
	  	"city": "Fresno, CA",
	  	"major": "IGETC"
	  },

	  {
	  	"name": "UCLA",
	  	"city": "Los Angeles, CA",
	  	"major": "Design | Media"
	  }
	],


	"onlineCourses": [
	  {
		"title": "Javascript Syntax",
		"school": "Udacity",
		"dates": "2015",
		"url": "http://www.udacity.com"
	  }
	]
}

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	  $("#skills").append(formattedSkill);
	  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	  $("#skills").append(formattedSkill);
	  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	  $("#skills").append(formattedSkill);
	  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	  $("#skills").append(formattedSkill);

}


$("#main").append(work["city"]);
$("#main").append(education.schools);
