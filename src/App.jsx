import { useState } from 'react'
import './App.css'

const courses = [
  {
    name: 'AI Foundations Bootcamp',
    description: '8-week live cohort with hands-on projects, prompt engineering, and deployment-ready AI demos.',
    price: '$1,699',
  },
  {
    name: 'ML in Production',
    description: '4-week advanced workshop covering MLOps, model monitoring, and scalable cloud deployments.',
    price: '$1,299',
  },
  {
    name: 'Executive AI Strategy',
    description: '2-day intensive for leadership teams to align AI initiatives with business ROI.',
    price: '$999',
  },
]

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>AI Strategy & Consulting for High-Impact Growth</h1>
          <p>
            I help enterprises and professionals design, build, and monetize AI/ML
            products. Join training cohorts, accelerate model deployment, and
            unlock revenue with AI expertise.
          </p>
          <a href="#contact" className="primary-btn">
            Schedule a Discovery Call
          </a>
        </div>
      </header>

      <section className="section" id="services">
        <h2>Consulting Services</h2>
        <div className="cards">
          <article className="card">
            <h3>AI Opportunity Assessment</h3>
            <p>
              Identify the highest-value AI use cases, technical feasibility, and
              ROI roadmap for your organization.
            </p>
          </article>
          <article className="card">
            <h3>Model Delivery & MLOps</h3>
            <p>
              Productionize models with scalable pipelines (ETL, monitoring,
              governance, and cloud-native deployment).
            </p>
          </article>
          <article className="card">
            <h3>Custom Training Programs</h3>
            <p>
              Onsite/remote workshops tailored for engineers, product managers,
              and exec teams.
            </p>
          </article>
        </div>
      </section>

      <section className="section" id="courses">
        <h2>Featured Courses</h2>
        <div className="cards">
          {courses.map((course) => (
            <article key={course.name} className="card course-card">
              <h3>{course.name}</h3>
              <p>{course.description}</p>
              <span className="price">{course.price}</span>
              <a href="#contact" className="secondary-btn">
                Book this Course
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="testimonials">
        <h2>Client Success</h2>
        <blockquote>
          "Within 10 weeks, we launched a revenue-generating AI product that
          improved retention by 35%. Their expertise made it possible."
          <cite>— Product Leader, SaaS Startup</cite>
        </blockquote>
      </section>

      <section className="section" id="contact">
        <h2>Get in Touch</h2>
        <p>
          Ready to transform your business with AI? Share your goals, and I’ll
          propose a practical action plan.
        </p>

        {submitted ? (
          <div className="success-banner">
            Thanks, {formData.name || 'there'}! Your message is received. I will
            follow up via email shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact" >
            <label>
              Name
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project"
              />
            </label>
            <button className="primary-btn" type="submit">
              Send Message
            </button>
          </form>
        )}
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} AI Consulting & Training. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
