import React from 'react';
import { Link } from 'react-router-dom';
import { ActionButton, Wordbar } from '../components/Shared.jsx';
import Journey from '../components/Journey.jsx';

export default function About() {
 return (<main>
<section className="hero hero-inner dots"><div className="hero-copy"><h1>Why Punchline<br /><mark>exists.</mark></h1><p>Punchline uses the craft of comedy to help people communicate, think and connect better. From workplace teams and college students to aspiring performers and live audiences, we make learning more engaging and memorable.</p><ActionButton type="button" className="btn" action="Enquire now">Enquire now</ActionButton></div><div className="hero-visual"><img src="/assets/images/about-hero.webp" alt="Trainer leading a conversation with a team" className="" /></div></section>
<Wordbar />
<section className="vision-mission grid-paper"><div className="vm-line" aria-hidden="true"><i></i><i></i><i></i></div><div className="vm-copy"><h2>Our<br />vision</h2><p>Punchline uses the craft of comedy to help people communicate, think and connect better. From workplace teams and college students to aspiring performers and live audiences, we make learning more engaging and memorable.</p></div><div className="vm-image mirror"><img src="/assets/images/thinker.webp" alt="Illustration of a person studying a lightbulb" className="" /></div><div className="vm-image left"><img src="/assets/images/thinker.webp" alt="Illustration of a person studying a lightbulb" className="" /></div><div className="vm-copy right"><h2>Our<br />mission</h2><p>Punchline uses the craft of comedy to help people communicate, think and connect better. From workplace teams and college students to aspiring performers and live audiences, we make learning more engaging and memorable.</p></div></section>
<Journey />
</main>);
}
