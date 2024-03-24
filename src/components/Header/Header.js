import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

import "yummacss/dist/yumma.css";

const Header = ({ appName }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const dropdown = clsx({
        'fb-full': true,
        'fg-1': true,
        'ovf-h': true,
        'sm:d-b': true,
        'd-none': !showDropdown
    });

    return (
        <header className="bg-transparent d-f fw-w py-1 sm:fw-nw sm:jc-s sm:py-0 w-full zi-50">
            <nav className="lg:px-3 mx-auto pos-r px-1 sm:ai-c sm:d-f sm:jc-b sm:px-2 w-full">
                <div className="ai-c d-f jc-b">
                    <h1 className="f-none fs-lg fw-600 t-d-lead-1" href="#">
                        {appName}
                    </h1>
                    <div className="ml-auto sm:d-none">
                        <button
                            className="c-p ai-c bg-transparent cg-2 d-f dim-9 fw-600 jc-c rad-1"
                            onClick={toggleDropdown}
                        >
                            {showDropdown ? <IoClose className="fs-0 dim-4" /> : <IoMenu className="fs-0 dim-4" />}
                        </button>
                    </div>
                </div>
                <div className={dropdown}>
                    <div className="cg-0 d-f fd-c mt-2 rg-4 sm:ai-c sm:cg-3 sm:fd-r sm:jc-e sm:mt-0 sm:rg-0">
                        <Link className="fs-sm fw-600 h:t-teal sm:py-2 t-d-lead-1" to="/docs/intro">
                            Docs
                        </Link>
                        <Link className="fs-sm fw-600 h:t-teal sm:py-2 t-d-lead-1">
                            Estado
                        </Link>
                        <Link className="fs-sm fw-600 h:t-teal sm:py-2 t-d-lead-1">
                            Suporte
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
