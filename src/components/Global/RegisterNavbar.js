import React from 'react'

const RegisterNavbar = () => {
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg navbar-dark"
                style={{backgroundColor: "#6534cc"}}
                >
                <a className="navbar-brand" href="/index.html">
                    <img
                    src={require("../../assets/logo/LeftArrow.png")}
                    alt=""
                    srcset=""
                    width="35"
                    height="30" />
                </a>
                <p className="back-label">Back</p>
                </nav>
        </div>
    )
}

export default RegisterNavbar;