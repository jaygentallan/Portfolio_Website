import React from "react";
import Main from "../components/Main";
import Footer from "../components/Footer";

// React function that returns what is displayed to the
// user when it is called using the Router in the App.js file.
const MainPage = (props) => {
	return (
		<div className="Container">
			<Main />
			<Footer />
		</div>
	);
};

// Used to be able to import HomePage
// outside of this file.
export default MainPage;
