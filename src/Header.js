import React, { Component } from 'react';
import './Header.css';
import sections from './sections.js';

const sectionTitles = Object.keys(sections);
const sectionContents = Object.values(sections);
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: true,
            hoverElem: sections["Life & Arts"],
            hoverTitle: "Life & Arts"
        }
    }

    handleMouseEnter = (content, title) => {
        console.log("handleMouseEnter()");
        console.log(content);
        const data = content;
        const t = title;
        this.setState({
            hover: true,
            hoverElem: data,
            hoverTitle: t
        })
    }

    handleMouseLeave = () => {
        this.setState({
            hover: false,
            hoverTitle: ""
        })
    }

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
                            let coloring = "";
                            const title = sectionTitles[ct];
                            if (title === this.state.hoverTitle)
                                coloring = "dropdown-color item-border";
                            return (
                                <li className={"full-size-item " + coloring}>
                                    <a href="#"
                                        className="section-full"
                                        onMouseEnter={() => this.handleMouseEnter(content, title)}
                                        onMouseLeave={this.handleMouseLeave}
                                    >
                                        {title}</a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                {this.state.hover && <HoverMenu display={this.state.hoverElem} />}
            </div>
        )
    }
}

const HoverMenu = (props) => {
    const {
        display
    } = props;
    console.log(display);
    const sectionTitles = Object.keys(display);
    const sectionContents = Object.values(display);
    let ct = -1;
    return (
        <div className="center-block dropdown-color">
            {sectionContents.map(section => {
                ct++;
                let name = "dropdown-box";
                if (ct === sectionContents.length - 1)
                    name = "other";
                return (
                    <div className={name}>
                        <h4>{sectionTitles[ct]}</h4>
                        <ul className="content-list">
                            {section.map(contentItem => {
                                return (
                                    <li>{contentItem}</li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default Header;