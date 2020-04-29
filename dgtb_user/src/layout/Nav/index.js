import React, { Component } from "react";
import NavHeader from "./styles/nav";
import { withRouter } from "next/router";
import routes from "@Src/routes";
const { Link } = routes;
class Nav extends Component {
	getNav = (Option) => {
		const { key, label, children } = Option;
		const { router } = this.props;
		if (children) {
			return (
				<Link route={key} key={key}>
					<a
						className={`btnNav ${
							router.asPath === key ||
							router.asPath === this.search(router.asPath, children)
								? "active"
								: ""
						}`}
					>
						{label}
					</a>
				</Link>
			);
		} else {
			return (
				<Link route={key} key={key}>
					<a className={`btnNav ${router.asPath === key ? "active" : ""}`}>
						{label}
					</a>
				</Link>
			);
		}
	};

	search = (key, inputArray) => {
		for (let i = 0; i < inputArray.length; i++) {
			if (inputArray[i].key === key) {
				return inputArray[i].key;
			}
		}
	};

	render() {
		const { options } = this.props;
		return (
			<NavHeader>
				<div id="myNav">{options.map((Option) => this.getNav(Option))}</div>
			</NavHeader>
		);
	}
}

export default withRouter(Nav);
