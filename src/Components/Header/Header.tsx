import React from "react";
import Logo from "images/Logo.png";
import './Header.scss';

export const Header: React.FC = () => {

    return (
        <div className="Header">
            <div className="Header-Wrapper">
                <div className="Header-Logo">
                    <img src={Logo} alt="Matic Logo" />
                </div>

                <div className="Header-Details">
                    <div>Call an insurance agent at <span className="Header-Details-Number">(877) 507-6722</span> </div>
                    <div className="Header-Details-WorkingHours">Working Hours: 9AM - 5PM (EST)</div>
                </div>
            </div>
        </div>
    )
}