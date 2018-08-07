import React, { Component } from 'react';
import Multiband from '../assets/image/works/multiband.png';
import Sepatumu from '../assets/image/works/sepatumu.png';
import CodeRealm from '../assets/image/works/coderealm.png';
import CashGo from '../assets/image/works/cashgo.png';
import Gravicodev from '../assets/image/works/gravicodev.png';
import Qash from '../assets/image/works/qash.png';
import CloudDDS from '../assets/image/works/cloud-dds.png';
import Pixeler from '../assets/image/works/pixeler.png';
import SUBMonoline from '../assets/image/works/submonoline.png';

const Works = props => {
    return (
        <section className="section is-section-spaced is-section-odd">
            <div className="container">
                <div className="columns">
                    <div className="column is-3 has-text-right">
                        <h1 className="title">
                            <b>Works</b>
                        </h1>
                        <p className="subtitle">I build the real value.</p>
                    </div>
                    <div className="column is-1"></div>
                    <div className="column">
                        <div className="tile is-ancestor">
                            <a className="tile is-parent work-item">
                                <article className="tile is-child is-mid-center">
                                    <img src={Multiband} alt="Multiband" />
                                </article>
                            </a>
                            <a className="tile is-parent work-item">
                                <article className="tile is-child is-mid-center">
                                    <img src={Sepatumu} alt="Sepatumu" />
                                </article>
                            </a>
                            <a className="tile is-parent work-item">
                                <article className="tile is-child is-mid-center">
                                    <img src={CodeRealm} alt="CodeRealm" />
                                </article>
                            </a>
                            <a className="tile is-parent work-item">
                                <article className="tile is-child is-mid-center">
                                    <img src={CashGo} alt="CashGo" />
                                </article>
                            </a>
                        </div>
                        <div className="tile is-ancestor">
                            <a className="tile is-parent work-item">
                                <article className="tile is-child is-mid-center">
                                    <img src={Gravicodev} alt="Gravicodev" />
                                </article>
                            </a>
                            <a className="tile is-parent work-item">
                                <article className="tile is-child is-mid-center">
                                    <img src={Qash} alt="Qash" />
                                </article>
                            </a>
                            <a className="tile is-parent is-6 work-item">
                                <article className="tile is-child is-mid-center">
                                    <img src={CloudDDS} alt="CloudDDS" />
                                </article>
                            </a>
                        </div>
                        <div className="tile is-ancestor">
                            <a className="tile is-parent work-item">
                                <article className="tile is-child is-mid-center">
                                    <img src={Pixeler} alt="Pixeler" />
                                </article>
                            </a>
                            <a className="tile is-parent is-8 work-item">
                                <article className="tile is-child is-mid-center">
                                    <img src={SUBMonoline} alt="SUBMonoline" />
                                </article>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Works;