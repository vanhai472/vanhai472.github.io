const routes = require("next-routes")();

// ------------ ROUTES ---------------
routes

	// ---------------vistors-----------
	.add("visitors/Home/index", "/")
	.add("visitors/ViewAllComment/index", "/view-all-comment/:id")
	.add("visitors/Search/index", "/search/master")
	.add("visitors/Search/service", "/search/service")
	.add("visitors/ProfileMaster/index", "/master") // về sau chỗ này sẽ có param id
	.add("visitors/viewMoreGoogleMaps/index", "/google-map-master")

	//----------------user--------------
	.add("users/FavouriteList/index", "/favourite")
	.add("users/Profile/index", "/profile")
	.add("users/Profile/photo", "/photo")
	.add("users/Booking/index", "/incoming")
	.add("users/Booking/payment", "/payment")
	.add("users/Booking/pending", "/pending")
	.add("users/Booking/history", "/history")
	.add("users/Booking/denied", "/denied")

	//----------------master------------
	.add("masters/Profile/index", "/master/profile")
	.add("masters/Profile/photo", "/master/photo")
	.add("masters/Booking/index", "/master/incoming")
	.add("masters/Booking/payment", "/master/payment")
	.add("masters/Booking/pending", "/master/pending")
	.add("masters/Booking/history", "/master/history")
	.add("masters/Booking/denied", "/master/denied")
	.add("masters/Dashboard/index", "/master/dashboard")
	.add("masters/Dashboard/withdrawal", "/master/dashboard/withdrawal")
	.add("masters/Deposite/index", "/master/deposite");

// ------------ ROUTES ---------------
//

module.exports = routes;
