import React from "react";

function Footer() {
    const currYear = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright &#169; {currYear}</p>
        </footer>
    );
}

export default Footer;