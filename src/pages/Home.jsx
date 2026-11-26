import React from 'react';
import { Link } from 'react-router-dom';
import { ActionButton, Wordbar } from '../components/Shared.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Programs from '../components/Programs.jsx';
import './home-effects.css';

export default function Home() {
 return (<main className="home-page">
<section className="hero hero-home dots"><div className="hero-copy"><span className="eyebrow">THE ART BEHIND THE LAUGHS</span><h1>Corporate communication,<br />powered by the <mark>craft</mark><br />of comedy</h1><p>Punchline uses the craft of comedy to help people communicate, think and connect better. From workplace teams and college students to aspiring performers and live audiences, we make learning more engaging and memorable.</p><ActionButton type="button" className="btn" action="Enquire now">Enquire now</ActionButton></div><div className="hero-visual"><img src="/assets/images/speaker.webp" alt="Speaker holding a microphone" className="" /></div></section>
<Wordbar />
<Programs />
<section className="stats purple-dots"><Link className="btn" to="/about">Think about it</Link><h2>Punchline uses the craft of comedy to help people communicate, think and connect better. From workplace teams and college students to aspiring</h2><div className="stats-row"><button className="stat" style={{"--tilt": "7deg", "--size": "25%"}} aria-label="100 Live Show"><b>100</b><span>Live Show</span></button><button className="stat" style={{"--tilt": "-3deg", "--size": "19%"}} aria-label="36 Hours"><b>36</b><span>Hours</span></button><button className="stat" style={{"--tilt": "12deg", "--size": "13%"}} aria-label="9 Mentor"><b>9</b><span>Mentor</span></button><button className="stat" style={{"--tilt": "4deg", "--size": "13%"}} aria-label="4 Years"><b>4</b><span>Years</span></button></div></section>
<Testimonials />
<section className="founder-section"><div className="founder-card grid-paper"><img src="/assets/images/founder.webp" alt="Founder portrait" className="" /><div className="founder-copy"><h2>About <mark>me</mark><br />Praveen Kumar</h2><p>Punchline uses the craft of comedy to help people communicate, think and connect better. From workplace teams and college students to aspiring performers and live audiences, we make learning more engaging and memorable.<br />From workplace teams and college students to aspiring performers and live audiences, we make learning more engaging and memorable.</p><Link className="btn" to="/about">Know more</Link></div></div></section>
<section className="closing"><div className="closing-paper"><img src="/assets/images/trainer.webp" alt="Illustration of a communication trainer" className="" /><div className="closing-copy"><h2>Let’s <mark>make</mark><br />your message land.</h2><p>Punchline uses the craft of comedy to help people communicate, think and connect better. From workplace teams and college students to aspiring performers and live audiences, we make learning more engaging and memorable.</p><div className="closing-actions"><ActionButton type="button" className="btn" action="Enquire now">Enquire now</ActionButton><ActionButton type="button" className="btn yellow" action="Connect us">Connect us</ActionButton></div></div></div></section>
</main>);
}
