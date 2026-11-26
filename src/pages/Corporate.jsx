import React from 'react';
import { Link } from 'react-router-dom';
import { ActionButton, Wordbar } from '../components/Shared.jsx';
import FourWays from '../components/FourWays.jsx';

export default function Corporate() {
 return (<main>
<section className="hero hero-inner dots"><div className="hero-copy"><h1>Why Punchline<br /><mark>exists.</mark></h1><p>Punchline uses the craft of comedy to help people communicate, think and connect better. From workplace teams and college students to aspiring performers and live audiences, we make learning</p><ActionButton type="button" className="btn" action="Enquire now">Enquire now</ActionButton><ActionButton type="button" className="btn" action="Download PDF">Download PDF</ActionButton></div><div className="hero-visual"><img src="/assets/images/about-hero.webp" alt="Trainer leading a conversation with a team" className="" /></div></section>
<Wordbar />
<section className="corporate-ideas grid-paper"><h2>Corporate <mark>idea’s</mark></h2><div className="ideas-grid"><ActionButton className="video-placeholder" aria-label="Play corporate video" action="Video"><span className="play" aria-hidden="true">▶</span></ActionButton><div className="ideas-copy"><h3>Your team has ideas.<br />Are those ideas landing?</h3><p>Punchline uses the craft of comedy to help people communicate, think and connect better. From workplace teams and college students to aspiring performers and live audiences, we make learning more engaging and memorable.</p></div></div></section>
<FourWays />
</main>);
}
