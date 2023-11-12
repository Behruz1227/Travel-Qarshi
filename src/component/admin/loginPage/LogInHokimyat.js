import "./style.scss";
import axios from "axios";
import { apiTravel } from "../../api/api";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

function LogInHokimyat() {

    const [role, setRole] = useState("")

    function logIn() {
        let email = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        axios.post(apiTravel + "login/", { email, password }).then(res => {
            // sessionStorage.setItem('jwtToken', res.data.access_token);
            sessionStorage.setItem('jwtToken', "Bearer " + res.data.access_token);

            if (!res.data.access_token) {
                setRole("/");
                document.getElementById("linkError").click();
                toast.error("username yoki passwordda xatolik bor! Iltimos tekshirib qaytadan urinib ko'ring!!!")
            } else {
                setRole("/admin hotel");
                document.getElementById('link').click();
                toast.success("Tizimga muvaffaqiyatli kirdingiz!");
            }
        })
    }

    return (
        <div className="main_section">
            <Link to={role} id="link"></Link>
            <Link to={role} id="linkError"></Link>
            <section>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span>

                <div className="signin">
                    <div className="content">
                        <h2>Log In</h2>
                        <div className="form">
                            <div className="inputBox">
                                <input type="email" id="username" required /> <i>Username</i>
                            </div>
                            <div className="inputBox">
                                <input type="password" id="password" required /> <i>Password</i>
                            </div>
                            <div className="links"><a></a><a></a>
                            </div>
                            <div className="inputBox">
                                <button className="glow-on-hover" onClick={logIn}>Log In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LogInHokimyat;