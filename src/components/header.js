import React from 'react';

import './header.css';

export default function Header(props) {
        return (
            <header className="header">
                <h1>{props.title}</h1>
            		<nav className='navigation-bar-nav'>
                  <input type="button" value="New Game?" onClick={e => 
                    e.onClick(
                      window.location.reload()
                      )
                  }></input>
                </nav>
            </header>
        );
}