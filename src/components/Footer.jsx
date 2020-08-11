import React from "react";
import "./Footer.css";

const Footer = (image) => {
	return (
		<div className="footer">
			<div className="copyright">© 2020 Jay Gentallan</div>
			<div className="contact">
				<a href="mailto:jaygentallan926@gmail.com" className="contactText">
					Email
				</a>{" "}
				//{" "}
				<a href="https://www.linkedin.com/in/jay-ivan-gentallan-846729163/" target="_blank" className="contactText">
					LinkedIn
				</a>{" "}
				//{" "}
				<a href="https://github.com/jaygentallan" target="_blank" className="contactText">
					Github
				</a>
			</div>
		</div>
	);
};

export default Footer;
