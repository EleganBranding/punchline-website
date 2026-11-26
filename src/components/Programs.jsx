import React from 'react';
import { Link } from 'react-router-dom';
import { ActionButton } from './Shared.jsx';

const programmes = [
  {
    tab: '01-Conversation',
    title: ['Punchline', 'Unlocked'],
    description: 'Punchline uses the craft of comedy to help people communicate, think and connect better. From workplace teams and college students to aspiring performers and live audiences, we make learning more engaging and memorable.',
    image: 'comicstaan.webp',
    alt: 'Comedy workshop',
    color: '#AFE6FA',
    route: '/corporate',
  },
  {
    tab: '02-Campus',
    title: ['Punchline', 'Campus'],
    description: 'Help students find their voice, express ideas with confidence and connect with others through the craft of comedy.',
    image: 'meeting.webp',
    alt: 'A group exchanging ideas',
    color: '#FFE19A',
    action: 'Campus',
  },
  {
    tab: '03-Academy',
    title: ['Punchline', 'Academy'],
    description: 'Explore the art of humour, storytelling and communication through hands-on learning and public masterclasses.',
    image: 'trainer.webp',
    alt: 'Illustration of a communication trainer',
    color: '#FEB60B',
    action: 'Academy',
  },
  {
    tab: '04-Live',
    title: ['Punchline', 'Live'],
    description: 'Experience the power of laughter and connection through live comedy and engaging performances.',
    image: 'speaker.webp',
    alt: 'Speaker holding a microphone',
    color: '#550887',
    text: '#FFFFFF',
    action: 'Live',
  },
];

export default function Programs() {
  return (
    <section className="programs grid-paper" aria-labelledby="programmes-heading">
      <h2 id="programmes-heading">Find your <mark>kind</mark><br />of Punchline</h2>
      <div className="program-stack">
        <img src={import.meta.env.BASE_URL + "assets/images/brain.webp"} alt="" className="brain" />
        {programmes.map((item, index) => (
          <div className="program-layer" key={item.tab} style={{
            '--index': index,
            '--panel-color': item.color,
            '--panel-ink': item.text || '#080808',
          }}>
            <div className="program-layer-tab">{item.tab}</div>
            <article className="program-card" aria-labelledby={`programme-${index}`}>
              <div className="program-layer-copy">
                <h2 id={`programme-${index}`}>{item.title[0]}<br />{item.title[1]}</h2>
                <p>{item.description}</p>
                {item.route ? (
                  <Link className="btn" to={item.route}>Know more</Link>
                ) : (
                  <ActionButton className="btn" action={item.action}>Know more</ActionButton>
                )}
              </div>
              <img className={index >= 2 ? 'program-art' : ''} src={`${import.meta.env.BASE_URL}assets/images/${item.image}`} alt={item.alt} />
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
