import React from "react";

const Footer = ({ appName }) => {
    return (
        <footer class="bg-transparent mt-5 pb-4 pt-3">
            <div class="ta-c w-full">
                <div class="m-auto">
                    <h4 class="fs-md">{appName}</h4>
                    <span class="fs-sm t-d-gray-6">
                        <p>© {new Date().getFullYear()} {appName}. Direitos Reservados.</p>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
