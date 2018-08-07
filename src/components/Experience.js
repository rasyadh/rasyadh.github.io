import React, { Component } from 'react';

class Experience extends Component {
    state = {
        experiences: [
            { id: 1, place: 'PT. Tustika Nagata', date: 'Dec 2017 - Mar 2018', description: 'Frontend Developer at Needs.co.id', icon: 'mdi mdi-train mdi-36px' },
            { id: 2, place: 'Gravicodev', date: 'Nov 2016 - today', description: 'Self Employed Frontend Developer and Designer at Gravicodev.com', icon: 'mdi mdi-code-tags mdi-36px' },
            { id: 3, place: 'PT. Telekomunikasi Indonesia', date: 'Feb 2017', description: 'Frontend Developer at Cloud Node Platform Division', icon: 'mdi mdi-server mdi-36px' },
            { id: 4, place: 'Biskuit Developer', date: '2015', description: 'Self Employed Game Developer and Designer at IndoCook', icon: 'mdi mdi-gamepad mdi-36px' }
        ]
    }

    isOdd = id => {
        return (id % 2 === 0 ? 'column is-one-third exp-item-odd' : 'column is-one-third exp-item-even');
    }

    render() {
        const { experiences } = this.state;
        return (
            <section className="section is-section-spaced">
                <div className="container">
                    <div className="columns">
                        <div className="column is-3 has-text-right">
                            <h1 className="title">
                                <b>Experience</b>
                            </h1>
                            <p className="subtitle">Experience build my skills.</p>
                        </div>
                        <div className="column is-1"></div>
                        <div className="column">
                            <div className="columns is-multiline">
                                {experiences.map(exp => (
                                    <div className={this.isOdd(exp.id)} key={exp.id}>
                                        <span className="icon is-large">
                                            <i className={exp.icon}></i>
                                        </span>
                                        <div className="exp-desc ">
                                            <p className="exp-item is-size-5">
                                                <b>{exp.place}</b>
                                            </p>
                                            <p>{exp.date}<br />{exp.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Experience;