import React from "react";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./Navbar.jsx";



//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<div className="container">
		<Jumbotron/>
		<div className="row">
		<Card/><Card/><Card/><Card/>
		</div>
		</div>
		<Footer/>
		</>

	);

};

export default Home;
