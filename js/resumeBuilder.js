
var introHeader = {};

introHeader.display = function() {
	'use strict';
	var formattedName = HTMLheaderName.replace('%data%', 'Nak Bou');
	var formattedRoleName = HTMLheaderRole.replace('%data%', 'Designer & Web Developer');
	$("#header").prepend(formattedRoleName);
	$("#header").prepend(formattedName);
}

introHeader.display();

var bio = {
	"name": 'Nak Bou',
	"role": 'Designer & Web Developer',
	"welcomeMessage": 'Hello, world!',
	"contacts": {
	"mobile": '310 409 8402',
	"email": 'nak@nakbou.com',
	"github": 'github.com/uobkan',
	"location": 'San Jose, CA'
	},
	"skills": [
	'graphic designer', 'illustrator', 'programming', 'JS'
	]
};

bio.display = function() {
	'use strict';
	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	$('#topContacts').append(formattedMobile);

	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	$('#topContacts').append(formattedEmail);

	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	$('#topContacts').append(formattedGithub);

	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
	$('#topContacts').append(formattedLocation);

	/* Radial Progress Graphic */
	var div1=d3.select(document.getElementById('div1'));
	var div2=d3.select(document.getElementById('div2'));
	var div3=d3.select(document.getElementById('div3'));

	start();

	function onClick1() {
		deselect();
		div1.attr('class','selectedRadial');
	}

	function onClick2() {
		deselect();
		div2.attr('class','selectedRadial');
	}

	function onClick3() {
		deselect();
		div3.attr('class','selectedRadial');
	}

	function labelFunction(val,min,max) {

	}

	function deselect() {
		div1.attr('class','radial');
		div2.attr('class','radial');
		div3.attr('class','radial');
	}

	function start() {

	var rp1 = radialProgress(document.getElementById('div1'))
		.label('RESEARCH')
		.onClick(onClick1)
		.diameter(150)
		.value(65)
		.render();

	var rp2 = radialProgress(document.getElementById('div2'))
		.label('B.S.')
		.onClick(onClick2)
		.diameter(150)
		.value(10)
		.render();

	var rp3 = radialProgress(document.getElementById('div3'))
		.label('PRODUCTION')
		.onClick(onClick3)
		.diameter(150)
		.value(25)
		.render();

	}

	/* End of Radial Progress Graphic */
}

bio.display();


if(bio.skills.length > 0){
	$('#skillsGlance').append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
	$('#skills').append(formattedSkill);
	formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
	$('#skills').append(formattedSkill);
	formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
	$('#skills').append(formattedSkill);
	formattedSkill = HTMLskills.replace('%data%', bio.skills[3]);
	$('#skills').append(formattedSkill);
}

var education = {
	"schools": [
		{
		"name": 'Fresno City College',
		"location": 'Fresno, CA',
		"major": 'IGETC',
		"dates": '2002-2004 - IGETC (Transfer Curriculum)'
		},

		{
		"name": 'UCLA',
		"location": 'Los Angeles, CA',
		"major": 'Design | Media Arts',
		"dates": '2004-2006 - Bachelor of Arts (B.A.)'
		}
	]
};

education.display = function () {
	'use strict';
	for(var school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedSchoolName);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocations = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocations);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}
}

education.display();

var work = {
	"jobs": [

		{
		"employer": 'Peninsula Bible Church',
		"title": 'Senior Designer',
		"dates": '2015-Current',
		"location": 'Palo Alto, CA',
		"description": 'Lead the rebranding of PBC\'s 60 year history through a variety projects including web, video and print media.'
		},

		{
		"employer": 'Great Wall Club',
		"title": 'Senior Designer',
		"dates": '2014',
		"location": 'Mountain View, CA',
		"description": 'Produced graphics for entire mobile tech conference based in China (GMIC) held at Hilton Union Square in San Francisco.'
		},

		{
		"employer": 'AdEase',
		"title": 'Designer',
		"dates": '2013',
		"location": 'San Diego, CA',
		"description": 'Designed ad campaigns related to print and web for a variety of clients throughout Southern California.'
		},

		{
		"employer": 'SR3',
		"title": 'Senior Designer',
		"dates": '2010-2012',
		"location": 'Beverly Hills, CA',
		"description": 'Led the branding of an interior design startup through a variety of projects based in web, video and print media.'
		},

		{
		"employer": 'American Apparel',
		"title": 'Graphic Designer',
		"dates": '2007-2008',
		"location": 'Los Angeles, CA',
		"description": 'Produced graphics and marketing materials for clothing stores throughout major international and domestic cities.'
		}
	]
};

work.display = function() {
	for (var job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$('.work-entry:last').append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		$('.work-entry:last').append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		$('.work-entry:last').append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
		$('.work-entry:last').append(formattedDescription);
	}
}

work.display();

/* First Letter Uppercase, Last Name All Uppercase */
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	return name[0] + " " + name[1];
}

inName('nak bou');
/* End of InName*/

var projects = {
	"projects": [
		{
		"title": 'PBC Web 4.0',
		"dates": '2015',
		"description": 'Redesigned PBC\'s Website for mobile, tablet, and desktop.',
		"images": ['images/pbcweb.png', 'images/pbcweb2.png']
		},
		{
		"title": 'Suicide Prevention Campaign',
		"dates": '2013',
		"description": 'Designed Suicide Prevention Campaign materials print and web for San Diego County.',
		"images": ['images/sd.png', 'images/sd2.png', 'images/sd3.png']
		}
	]

};

projects.display = function(){
	for (var project in projects.projects) {
	$('#projects').append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
	$('.project-entry:last').append(formattedTitle);

	var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
	$('.project-entry:last').append(formattedDates);

	var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
	$('.project-entry:last').append(formattedDescription);

	if (projects.projects[project].images.length > 0) {

	for (var image in projects.projects[project].images) {
	var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
	$('.project-entry:last').append(formattedImage);
			}
		}
	}
}

projects.display();

$("#mapDiv").append(googleMap);
