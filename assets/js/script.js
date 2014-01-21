/*
** Main Menu Template
*/
// Grab the source
var jobSource = document.getElementById('job-source').innerHTML;
// Compile the source
var jobTemplate = Handlebars.compile(jobSource);
// Feed the data
var jobData = {
	jobPost: [
		{
			jobName : "Dev Ops Engineer",
			jobCompany : "Google",
			jobLink : "http://google.com",
			jobDate : "01.19.2014",
			jobLocation : "Remote",
			jobSalary : "$85k - $100k",
			jobType : "dev",
		},
	]
};
// Process the template
document.getElementById( 'job-print' ).innerHTML = jobTemplate( jobData );