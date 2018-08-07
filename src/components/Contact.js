import React, { Component } from 'react';

class Contact extends Component {
    state = {
        contacts: [
            { title: "Adress", value: "Dupak 5 No. 42 Surabaya, Indonesia" },
            { title: "Phone", value: "+62 838-85653-5951" },
            { title: "Email", value: "rasyadhabdulaziz@gmail.com" },
        ]
    }

    render() {
        const { contacts } = this.state;
        return (
            <section className="section is-section-spaced">
                <div className="container">
                    <div className="columns">
                        <div className="column is-3 has-text-right">
                            <h1 className="title">
                                <b>Contact</b>
                            </h1>
                            <p className="subtitle">Find me here.</p>
                        </div>
                        <div className="column is-1"></div>
                        <div className="column">
                            <div className="columns">
                                {contacts.map(contact => (
                                    <div className="column" key={contact.title}>
                                        <p className="contact-item">
                                            <strong>{contact.title}</strong>
                                        </p>
                                        <p>{contact.value}</p>
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

export default Contact;