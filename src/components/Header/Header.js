import React from "react";
import "./HeaderStyles.scss";

function Header() {
	return (
		<nav id="main-nav">
			<div className="container">
				<img src="../Images/logoeasy.png" className="logo" alt="company logo" />
				<ul>
					<li>
						<a className="btn" href="https://www.google.com">
							CV Writing
						</a>{" "}
					</li>
					<li>
						<a className="btn" href="https://www.google.com">
							Home
						</a>{" "}
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
