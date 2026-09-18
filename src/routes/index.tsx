import { createFileRoute } from '@tanstack/react-router'
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Brain,
  Check,
  CircleDot,
  Dna,
  HeartPulse,
  Menu,
  Microscope,
  MoveRight,
  Sparkles,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const specialties = [
  {
    number: '01',
    icon: HeartPulse,
    title: 'Diabetes & metabolic health',
    description:
      'Comprehensive care for diabetes and related complications, insulin resistance, obesity, and sustainable weight management.',
    detail: 'Metabolic care without judgment.',
  },
  {
    number: '02',
    icon: CircleDot,
    title: 'Thyroid & Hashimoto’s care',
    description:
      'Individualized evaluation for Hashimoto’s disease, hypothyroidism, hyperthyroidism, nodules, and persistent thyroid-related symptoms.',
    detail: 'Answers beyond a single lab value.',
  },
  {
    number: '03',
    icon: Dna,
    title: 'Women’s hormone health',
    description:
      'Support for premenopausal, perimenopausal, and postmenopausal concerns from a bioidentical hormone specialist.',
    detail: 'Hormone care shaped around you.',
  },
  {
    number: '04',
    icon: Brain,
    title: 'Whole-person wellbeing',
    description:
      'Connected care for sleep-related issues, osteoporosis, anxiety, depression, and symptoms that cross traditional specialties.',
    detail: 'Treating the person, not just labs.',
  },
  {
    number: '05',
    icon: Activity, // Make sure to import { Activity } from 'lucide-react' at the top
    title: 'Weight loss',
    description: 'Comprehensive programs tailored to support healthy, sustainable weight management.',
    detail: 'Guided, sustainable progress.',
  },
  {
    number: '06',
    icon: HeartPulse,
    title: 'Cortisol & metabolism',
    description: 'Targeted therapies to balance stress hormones and optimize metabolic function.',
    detail: 'Restoring natural energy.',
  },
  {
    number: '07',
    icon: Sparkles,
    title: 'Pellet therapy',
    description: 'Consistent, personalized hormone optimization using subcutaneous bio-identical pellets.',
    detail: 'Steady, reliable balance.',
  },
  {
    number: '08',
    icon: Check,
    title: 'Hormone cream patches',
    description: 'Topical and transdermal solutions for effective, non-invasive hormone balance.',
    detail: 'Non-invasive hormone support.',
  },
]

const careHighlights = [
  ['Experience', '26 years with patients', 'Long-term perspective, attentive listening, and individualized care'],
  ['Clinical approach', 'Traditional + functional', 'Established endocrinology combined with whole-person functional insight'],
  ['Hormone focus', 'Bioidentical hormone specialist', 'Personalized support through every stage of hormonal change'],
]

function HomePage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Dr. Ayesha Akbar home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
          </span>
          <span>
            <strong>Dr. Ayesha Akbar MD</strong>
            <small>Endocrinology & Functional Medicine</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#expertise">Expertise</a>
          <a href="#approach">Approach</a>
          <a href="#about">About</a>
        </nav>

        <a className="header-cta" href="#contact">
          Request a consultation <ArrowUpRight size={15} />
        </a>

        <a className="mobile-menu" href="#contact" aria-label="Jump to consultation">
          <Menu size={20} />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy reveal reveal-one">
          <p className="eyebrow"><span /> Traditional expertise, functional perspective</p>
          <h1>
            You are more than <em>your labs.</em>
            <br />Your care should be, too.
          </h1>
          <p className="hero-intro">
            I combine traditional endocrinology with a functional, whole-person approach—
            treating you as a person, not a set of numbers.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Start a conversation <MoveRight size={17} />
            </a>
            <a className="text-link" href="#expertise">
              Explore my specialties <ArrowDownRight size={16} />
            </a>
          </div>
        </div>

        <div className="hero-visual reveal reveal-two" aria-label="Abstract endocrine system illustration">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hormone-map">
            <div className="map-node node-one"><span>Thyroid</span></div>
            <div className="map-node node-two"><span>Metabolism</span></div>
            <div className="map-node node-three"><span>Hormones</span></div>
            <svg viewBox="0 0 470 540" role="img" aria-label="Connected endocrine pathways">
              <path d="M238 45 C 165 110, 300 154, 225 230 S 120 355, 231 491" />
              <path d="M238 45 C 320 120, 176 174, 254 260 S 370 355, 231 491" />
              <circle cx="238" cy="45" r="8" />
              <circle cx="225" cy="230" r="7" />
              <circle cx="254" cy="260" r="5" />
              <circle cx="231" cy="491" r="9" />
            </svg>
          </div>
          <div className="visual-note note-top">
            <Sparkles size={14} />
            <span><strong>26 years</strong> of experience with patients</span>
          </div>
          <div className="visual-note note-bottom">
            <Microscope size={14} />
            <span><strong>Traditional + functional.</strong> Personally tailored.</span>
          </div>
        </div>

        <p className="hero-caption reveal reveal-three">Endocrinology · Functional medicine · Bioidentical hormones</p>
      </section>

      <section className="signal-bar" aria-label="Practice principles">
        <span>26 years of patient care</span><i />
        <span>Whole-person perspective</span><i />
        <span>Shared decisions</span><i />
        <span>Long-term partnership</span>
      </section>

    <section id="expertise">
      <div className="section-heading">
          <p className="eyebrow"><span /> Areas of focus</p>
          <h2>Complex symptoms,<br /><em>connected thoughtfully.</em></h2>
          <p>
            Endocrine conditions rarely fit into neat boxes. Your symptoms, labs, history,
            sleep, mood, and daily life all belong in the conversation.
          </p>
        </div>

        <div className="specialty-list">
          {specialties.map((specialty) => {
            const Icon = specialty.icon
            return (
              <article className="specialty-row" key={specialty.title}>
                <span className="specialty-number">{specialty.number}</span>
                <div className="specialty-icon"><Icon size={25} strokeWidth={1.5} /></div>
                <div>
                  <h3>{specialty.title}</h3>
                  <p>{specialty.description}</p>
                </div>
                <p className="specialty-detail">{specialty.detail}</p>
                <ArrowUpRight className="specialty-arrow" size={22} />
              </article>
            )
          })}
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="approach-art" aria-hidden="true">
          <div className="art-ring ring-a" />
          <div className="art-ring ring-b" />
          <div className="art-core">
            <Brain size={52} strokeWidth={1.15} />
          </div>
          <p>science</p>
          <p>story</p>
          <p>strategy</p>
        </div>

        <div className="approach-copy">
          <p className="eyebrow light"><span /> My approach</p>
          <h2>Traditional endocrinology, <em>expanded by function.</em></h2>
          <p className="approach-lead">
            A lab result is one piece of your story. I pair established endocrine care with
            functional insight into energy, sleep, stress, mood, nutrition, and the way you want to live.
          </p>
          <div className="principles">
            <div><Check size={15} /><span><strong>See the whole person.</strong> Your experience is meaningful clinical data.</span></div>
            <div><Check size={15} /><span><strong>Explain clearly.</strong> You deserve to understand every recommendation.</span></div>
            <div><Check size={15} /><span><strong>Integrate thoughtfully.</strong> Traditional and functional tools work together.</span></div>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="about-intro">
          <p className="eyebrow"><span /> About Dr. Akbar</p>
          <blockquote>“I treat you as a person—not just a collection of labs.”</blockquote>
        </div>

        <div className="about-body">
          <p>
            I’m Dr. Ayesha Akbar, an endocrinologist and bioidentical hormone specialist
            with 26 years of experience caring for patients. My practice combines traditional
            endocrinology with a functional approach to metabolism, hormones, and wellbeing.
          </p>
          <p>
            Together, we look beyond isolated results to understand patterns across thyroid
            health, diabetes, weight, menopause, bone health, sleep, and mood.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            {/* Circle Badge */}
            <div className="stat-circle">
              26
            </div>
            
            {/* Text block grouped together so wrapping stays aligned */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p style={{ margin: 0, textTransform: 'uppercase' }}>
                Years of experience with patients and whole-person endocrine care
              </p>
            </div>
            </div>
          </div>

      <section className="credentials" aria-label="Care experience and approach">
        {careHighlights.map(([label, title, place]) => (
          <div className="credential" key={label}>
            <p>{label}</p>
            <h3>{title}</h3>
            <span>{place}</span>
          </div>
        ))}
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow light"><span /> New patient consultations</p>
          <h2>Ready for care that connects the dots?</h2>
        </div>
        <div className="contact-actions">
          <p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=10181+Lincoln+Highway,+Frankfort,+IL+60423" 
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              10181 Lincoln Highway, Frankfort, IL 60423
            </a>
          </p>
          <p>Start a conversation about personalized endocrine and hormone care designed around your complete health story.</p>
          <a className="button button-light" href="tel:+18154647212">
            Request a consultation <ArrowUpRight size={17} />
          </a>
          <span>For medical emergencies, please call 911.</span>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true"><span /><span /></span>
          <strong>Dr. Ayesha Akbar MD</strong>
        </div>
        <p>Endocrinology & Functional Medicine</p>
        <div className="footer-links">
          <a href="#expertise">Expertise</a>
          <a href="#approach">Approach</a>
          <a href="#about">About</a>
        </div>
        <p>© 2026 Ayesha Akbar MD</p>
      </footer>
    </main>
  )
}
