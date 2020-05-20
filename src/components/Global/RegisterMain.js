import React from 'react'

const RegisterMain = () => {
    return (
        <div className="content">
            <div className="register-choice">
                <div className="tap-on-your-side-text">
                    TAP <span style={{color: "#6534cc"}}>ON YOUR</span> SIDE<span
                    style={{color: "#6534cc"}}
                    >!</span
                    >
                </div>
                <div className="row choice-container">
                    <div className="col-6 student-choice">
                        <a href="/studentRegister.html">
                        <img
                        className="studentimg"
                        src={require("../../assets/img/student-reg-page.png")}
                        alt="Register as student" /></a>
                        <div className="student-link">
                            Are you<a href="/studentRegister.html"
                            ><span style={{color: "#ff4133"}}> student?</span></a
                            >
                        </div>
                    </div>
                    <div className="col-6 teacher-choice">
                        <a href="./teacherRegister.html"
                            ><img
                            className="teacherimg"
                            src={require("../../assets/img/teacher-reg-page.png")}
                            alt="Register as teacher"
                        /></a>
                        <div className="teacher-link">
                            Are you<a href="./teacherRegister.html"
                            ><span style={{color: "#ff4133"}}> teacher?</span></a
                            >
                        </div>
                    </div>
                </div>
                <div className="login-link">
                    Already Registered?<a href="./login.html"
                    ><span style={{color: "#ff4133"}}> Login here</span></a
                    >
                </div>
            </div>
        </div>
    )
}

export default RegisterMain;