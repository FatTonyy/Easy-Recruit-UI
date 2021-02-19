import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/fontawesome";
import "./HeaderStyles.scss";

function Header() {
	return (
		<header className="header">
			<div className="container">
				<nav id="main-nav">
					<a href="https://www.google.com" className="logo">
						<img src="../Images/logoeasy.png" alt="company logo" />
					</a>
					{/* hamburger icons below */}
					<div class="hamburger-menu">
						{/* <FontAwesomeIcon icon={faBars} /> */}
						{/* <FontAwesomeIcon icon={faTimes} /> */}
					</div>
					<ul className="nav-list">
						<li className="nav-item">
							<a className="nav-link" href="https://www.google.com">
								CV Writing
							</a>{" "}
						</li>
						<li className="nav-item">
							<a className="nav-link" href="https://www.google.com">
								Home
							</a>{" "}
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
