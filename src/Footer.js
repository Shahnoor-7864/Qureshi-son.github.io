import React from 'react';

const Footer = () =>  {
    const year = new Date().getFullYear()
    return (

        <>
        <div className = "bg-light text-center w-100">
            <p>copyright © {year} .All rights Reserved</p>
        </div>
        </>
    )
}
export default Footer;
