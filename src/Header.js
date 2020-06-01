import React, { Component } from 'react';
import './Header.css';
import sections from './sections.js';

const sectionTitles = Object.keys(sections);
const sectionContents = Object.values(sections);
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

class Header extends Component {

    render() {
        let ct = -1;
        let now = new Date(Date.now());
        return (
            <div className="header sticky">
                <h1 className="full-title">The Wall Street Journal</h1>
                <div className="subtitle-options center-block side-list">
                    <div className="subtitle-option"><a className="link">English Edition</a></div>
                    <div className="subtitle-option">{monthNames[now.getMonth()]} {now.getDay()}, {now.getFullYear()}</div>
                    <div className="subtitle-option"><a className="link">Print Edition</a></div>
                    <div className="subtitle-option"><a className="link">Video</a></div>
                    <div className="latest-headlines"><a>Latest Headlines</a></div>
                </div>
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