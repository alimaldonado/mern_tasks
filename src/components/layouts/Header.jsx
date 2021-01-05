import React from 'react';

const CustomHeader = () => {
    return ( 
        <header className="app-header">
            <p className="nombre-usuario">Hello <span>Ali</span></p>
            <nav className="nav-principal">
                <a href="#!">Logout</a>
            </nav>
        </header>
     );
}
 
export default CustomHeader;