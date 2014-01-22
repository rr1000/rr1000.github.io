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
		// Google Dev Ops
		{
			jobName : "Dev Ops Engineer",
			jobCompany : "Google",
			jobLink : "http://google.com",
			jobDate : "01.19.2014",
			jobLocation : "Remote",
			jobSalary : "$85k - $100k",
			jobType : "dev",
			jobColor : "dev-blue",
		},
		// Dribbble Marketing
		{
			jobName : "Account Manager",
			jobCompany : "Dribbble",
			jobLink : "http://dribbble.com",
			jobDate : "02.15.2014",
			jobLocation : "San Francisco, CA",
			jobSalary : "$45k - $60k",
			jobType : "business",
			jobColor : "business-red",
		},
		// 37Signals Engineer
		{
			jobName : "Full-stack Developer",
			jobCompany : "37Signals",
			jobLink : "http://37signals.com",
			jobDate : "02.02.2014",
			jobLocation : "Remote",
			jobSalary : "$95k - $120k",
			jobType : "dev",
			jobColor : "dev-blue",
		},
		// Twitter Designer
		{
			jobName : "Product Designer",
			jobCompany : "Twitter",
			jobLink : "http://twitter.com",
			jobDate : "01.26.2014",
			jobLocation : "Remote",
			jobSalary : "$90k - $110k",
			jobType : "design",
			jobColor : "design-green",
		},
		// SalesForce Custom Service
		{
			jobName : "Custom Service Rep",
			jobCompany : "Sales Force",
			jobLink : "http://SalesForce.com",
			jobDate : "02.10.2014",
			jobLocation : "San Francisco, CA",
			jobSalary : "$55k - $70k",
			jobType : "business",
			jobColor : "business-red",
		},
		// Reddit Engineer
		{
			jobName : "Front-end Engineer",
			jobCompany : "Reddit",
			jobLink : "http://reddit.com",
			jobDate : "02.29.2014",
			jobLocation : "San Francisco, CA",
			jobSalary : "$75k - $90k",
			jobType : "dev",
			jobColor : "dev-blue",
		},
	]
};
// Process the template
document.getElementById( 'job-print' ).innerHTML = jobTemplate( jobData );