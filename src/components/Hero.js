import React, { Component } from 'react';
import Logo from '../assets/image/logo.png';
import ProfilePicture from '../assets/image/rasyadh.jpeg';

class Hero extends Component {
    state = {
        socials: [
            { url: 'https://github.com/Rasyadh', icon: 'mdi mdi-github-circle mdi-36px' },
            { url: 'https://www.linkedin.com/in/rasyadh/', icon: 'mdi mdi-linkedin mdi-36px' },
            { url: 'https://medium.com/@rasyadh', icon: 'mdi mdi-medium mdi-36px' },
            { url: 'https://www.behance.net/rasyadh', icon: 'mdi mdi-behance mdi-36px' },
            { url: 'https://instagram.com/rasyadh_', icon: 'mdi mdi-instagram mdi-36px' },
        ]
    }

    render() {
        const { socials } = this.state;
        return (
            <section className="hero is-fullheight is-link is-link-third">
                <div className="hero-head">
                    <nav className="navbar">
                        <div className="container">
                            <div className="navbar-brand">
                                <a className="navbar-item rsdh-logo">
                                    <img src={Logo} alt="RSDH" />
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-6">
                                <div className="hero-title-subtitle">
                                    <h1 className="title is-1">
                                        <b>Rasyadh<br />Abdul Aziz</b>
                                    </h1>
                                    <p className="subtitle is-4">
                                        Code writer and designer.
                                </p>
                                </div>
                                <hr />
                                <div className="hero-social-media">
                                    {socials.map(social => (
                                        <a href={social.url} key={social.url}>
                                            <span className="icon is-large social-icons">
                                                <i className={social.icon}></i>
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="column is-1"></div>
                            <div className="column">
                                <img className="profile-pict" src={ProfilePicture} alt="Rasyadh" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;