import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./HeaderStyles.scss";

function Header() {
	return (
		<header className="header">
			<div className="container">
				<nav className="nav">
					<a href="https://www.google.com" className="logo logoh1">
						EASY-RECRUIT
						<img src="../Images/logoeasy.png" alt="" />
					</a>
					{/* hamburger icons below */}
					<div class="hamburger-menu">
						<FontAwesomeIcon icon={faBars} />
						<FontAwesomeIcon icon={faTimes} />
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
