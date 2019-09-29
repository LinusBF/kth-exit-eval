/*
	
	main_menu.js contains only one function, create_main_menu which creates the main menu of the website
	This is done based on which page is currently being viewed.

	TODO:
		Limit entries based on logged in user (see nodejs passport documentation on sessions) - requires CAS.

*/

const create_main_menu = (req) => {
	var ret = "<div id=\"mainmenu\"><ul>";
	ret += "<li" + (req.path === "/" ? " class=\"active\"" : "") + "><a href=\"/\">Home</a></li>";
	ret += "<li" + (req.path === "/help" ? " class=\"active\"" : "") + "><a href=\"/help\">Help</a></li>";

	if(req.session.user.role === "director" || req.session.user.role === "examiner") {
		if(req.session.user.role === "director") {
			ret += "<li" + (req.path === "/add_director" ? " class=\"active\"" : "") + "><a href=\"/add_director\">Add director</a></li>";
			ret += "<li" + (req.path === "/directors" ? " class=\"active\"" : "") + "><a href=\"/directors\">Directors</a></li>";
			ret += "<li" + (req.path === "/add_budget_year" ? " class=\"active\"" : "") + "><a href=\"/add_budget_year\">Add budget year</a></li>";
			ret += "<li" + (req.path === "/budget_years" ? " class=\"active\"" : "") + "><a href=\"/budget_years\">Budget years</a></li>";
			ret += "<li" + (req.path === "/add_examiner" ? " class=\"active\"" : "") + "><a href=\"/add_examiner\">Add examiner</a></li>";
			ret += "<li" + (req.path === "/examiners" ? " class=\"active\"" : "") + "><a href=\"/examiners\">Examiners</a></li>";
			ret += "<li" + (req.path === "/specify_tutoring_hours" ? " class=\"active\"" : "") + "><a href=\"/specify_tutoring_hours\">Specify tutoring hours</a></li>";
		}
		ret += "<li" + (req.path === "/add_degree_project" ? " class=\"active\"" : "") + "><a href=\"/add_degree_project\">Add degree project</a></li>";
		ret += "<li" + (req.path === "/degree_projects" ? " class=\"active\"" : "") + "><a href=\"/degree_projects\">Degree projects</a></li>";
		ret += "<li" + (req.path === "/profile" ? " class=\"active\"" : "") + "><a href=\"/profile\">Profile</a></li>";
	}
	ret += "<li" + (req.path === "/available_examiners" ? " class=\"active\"" : "") + "><a href=\"/available_examiners\">Available examiners</a></li>";

	ret += "</ul></div>";
	return ret;
};

module.exports = {
	create_main_menu,
};