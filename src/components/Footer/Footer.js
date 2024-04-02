import React from 'react';

const Footer = ({ appName }) => {
    return (
        <footer className='bg-transparent mt-5 pb-4 pt-3'>
            <div className='ta-c w-full'>
                <div className='m-auto'>
                    <h4 className='fs-md'>{appName}</h4>
                    <span className='fs-sm'>
                        <p>© {new Date().getFullYear()} {appName}. Direitos Reservados.</p>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
