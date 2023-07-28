import React from "react";


export default class Navbar extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light col-md-8 mx-auto" style={{backgroundColor: "#a6d4e4cf"}} >
                    <div className="container-fluid">
                    <a className="navbar-brand" href="#">Project XIV</a>
                    </div>
                </nav>
            </div>
        )
    }
}
