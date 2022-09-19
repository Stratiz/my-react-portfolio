import React, { useState } from 'react';
import NavTabs from './Navigation';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const headerStyle = {
    "margin-left": "10px"
}

export default function Header() {
    const [currentPage, setCurrentPage] = useState('About');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'About') {
        return <About />;
        }
        if (currentPage === 'Portfolio') {
        return <Portfolio />;
        }
        if (currentPage === 'Contact') {
        return <Contact />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <header>
            <div style={headerStyle}>
                <h1 style={{"display" : "inline"}}>Harrison's Portfolio </h1>
                   
                {/* We are passing the currentPage from state and the function to update it */}
                <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
                {/* Here we are calling the renderPage method which will return a component  */}
                {renderPage()}
            </div>
        </header>
    );
}
