import React, { Component } from "react";
import NavHeader from "./styles/nav";
import { Link, withRouter } from "react-router-dom";
class Nav extends Component {
    getNav = (Option) => {
        const { key, label, children } = Option;
        const { location } = this.props;
        if (children) {
            return (
                <Link
                    to={key}
                    key={key}
                    className={`btnNav ${
                        location.pathname === key ||
                        location.pathname ===
                            this.search(location.pathname, children)
                            ? "active"
                            : ""
                    }`}
                >
                    {label}
                </Link>
            );
        } else {
            return (
                <Link
                    to={key}
                    key={key}
                    className={`btnNav ${
                        location.pathname === key ? "active" : ""
                    }`}
                >
                    {label}
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
                <div id="myNav">
                    {options.map((Option) => this.getNav(Option))}
                </div>
            </NavHeader>
        );
    }
}

export default withRouter(Nav);
