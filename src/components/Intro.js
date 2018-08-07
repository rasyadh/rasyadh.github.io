import React, { Component } from 'react';

class Intro extends Component {
    state = {
        description: [
            'My name is Rasyadh Abdul Aziz, i am a frontend developer. My expertise as a coder is building great user interface to solve problem. I write code in many different language such as Python, Javascript, and Java. Also i have done many projects for Android and Web Development.',
            'Now i am currently studying in Electronics Engineering Polytechnic Institute of Surabaya with majoring in Informatics Engineering.'
        ],
        skills: [
            { title: 'HTML5/CSS3', value: 95, percentage: '95%' },
            { title: 'Javascript', value: 90, percentage: '90%' },
            { title: 'Python', value: 90, percentage: '90%' },
            { title: 'Java', value: 85, percentage: '85%' },
            { title: 'ReactJS', value: 80, percentage: '80%' },
            { title: 'Adobe Illustrator', value: 90, percentage: '90%' }
        ]
    }

    render() {
        const { description, skills } = this.state;
        return (
            <section className="section is-section-spaced is-section-odd">
                <div className="container">
                    <div className="columns">
                        <div className="column is-3 has-text-right">
                            <h1 className="title">
                                <b>Intro</b>
                            </h1>
                            <p className="subtitle">What I am all about.</p>
                        </div>
                        <div className="column is-1"></div>
                        <div className="column">
                            <div className="content">
                                {description.map((value, index) => (
                                    <p key={index}>{value}</p>
                                ))}
                            </div>
                            <div className="intro-skills">
                                {skills.map(skill => (
                                    <div className="skill-item" key={skill.title}>
                                        <p className="skill-title">
                                            {skill.title}
                                            <span className="is-pulled-right">{skill.percentage}</span>
                                        </p>
                                        <progress className="progress is-link is-xsmall" value={skill.value} max="100">{skill.percentage}</progress>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Intro;