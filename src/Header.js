import React, { Component } from 'react';
import './Header.css';
import sections from './sections.js';

const sectionTitles = Object.keys(sections);
const sectionContents = Object.values(sections);

class Header extends Component {

    render() {
        let ct = -1;
        return (
            <div className="header sticky">
                <h1 className="full-title">The Wall Street Journal</h1>
                <h1 className="wsj">WSJ</h1>
                <nav className="nav-bar">
                    <ul className="full-size-options center-block side-list">
                        {sectionContents.map(content => {
                            ct++;
                            return (
                                <li className="full-size-item">
                                    <a href="#" className="section-full">{sectionTitles[ct]}</a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;