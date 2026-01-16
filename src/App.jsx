import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, Linkedin, Mail, MapPin, Phone, 
  Code2, BrainCircuit, Terminal, 
  Briefcase, GraduationCap, Award, ExternalLink,
  Palette, ScanEye, Wand2, Monitor, Rocket
} from 'lucide-react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      {/* Navbar */}
      <nav>
        <div className="container nav-content">
          <div className="logo">AFEEFA REHAN<span style={{color: 'var(--accent-glow)'}}>.</span></div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} // Center content
          >
            {/* --- PROFILE IMAGE ADDED HERE --- */}
            <img 
              src="/profile.jpg" 
              alt="Afeefa Rehan" 
              className="profile-img"
            />
            {/* -------------------------------- */}

            <div style={{ marginBottom: '20px', display: 'inline-block', padding: '8px 20px', borderRadius: '30px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ color: 'var(--accent-glow)' }}>●</span> Open to Work
            </div>
            
            <h1>
              Full Stack Developer <br />
              <span style={{ fontSize: '0.6em', color: 'var(--text-dim)', display: 'block', marginTop: '10px' }}>
                Model Trainer & Prompt Engineer
              </span>
            </h1>
            
            <p>
              I am <strong>Afeefa Rehan</strong>, a multidisciplinary technologist merging 
              <strong> Full Stack Architecture</strong> with <strong>Generative AI</strong>. 
              I specialize in engineering scalable web ecosystems, fine-tuning Large Language Models, and crafting high-precision prompts to build intelligent, human-centric digital solutions.
            </p>
            
            <div className="btn-group">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="/afeefa-cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{display: 'inline-flex', alignItems: 'center', gap: '10px'}}>
                <ExternalLink size={18} /> Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills / Expertise Section */}
      <section className="section" style={{ background: '#0f172a' }}>
        <div className="container">
          <h2 className="section-title">Technical Arsenal</h2>
          
          <div className="grid-3">
            
            {/* Card 1: Full Stack Ecosystem */}
            <motion.div className="premium-card" whileHover={{ y: -5 }}>
              <Code2 size={40} color="var(--accent-glow)" style={{marginBottom: '20px'}} />
              <h3 style={{marginBottom: '15px', color: '#fff'}}>Full Stack Ecosystem</h3>
              <p style={{color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '15px'}}>
                Building robust applications with modern stacks and deploying on scalable cloud infrastructures.
              </p>
              <div>
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Firebase</span>
                <span className="tech-tag">HTML5/CSS3</span>
                <span className="tech-tag">JS (ES6+)</span>
                <div style={{marginTop: '10px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '10px'}}>
                  <small style={{color: '#64748b', display: 'block', marginBottom: '5px'}}>DEPLOYMENT:</small>
                  <span className="tech-tag" style={{borderColor: '#a855f7'}}>Vercel</span>
                  <span className="tech-tag" style={{borderColor: '#a855f7'}}>Render</span>
                  <span className="tech-tag" style={{borderColor: '#a855f7'}}>Netlify</span>
                  <span className="tech-tag" style={{borderColor: '#a855f7'}}>Wasmer</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: AI Model Engineering */}
            <motion.div className="premium-card" whileHover={{ y: -5 }}>
              <BrainCircuit size={40} color="var(--accent-purple)" style={{marginBottom: '20px'}} />
              <h3 style={{marginBottom: '15px', color: '#fff'}}>AI Model Engineering</h3>
              <p style={{color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '15px'}}>
                Fine-tuning intelligent models and architecting advanced retrieval pipelines.
              </p>
              <div>
                <span className="tech-tag">Python Scripting</span>
                <span className="tech-tag">TensorFlow</span>
                <span className="tech-tag">RAG Pipelines</span>
                <span className="tech-tag">LLM Fine-Tuning</span>
                <span className="tech-tag">Prompt Engineering</span>
                <span className="tech-tag">NLP</span>
              </div>
            </motion.div>

            {/* Card 3: Data Annotation (New) */}
            <motion.div className="premium-card" whileHover={{ y: -5 }}>
              <ScanEye size={40} color="#f43f5e" style={{marginBottom: '20px'}} />
              <h3 style={{marginBottom: '15px', color: '#fff'}}>Data Annotation</h3>
              <p style={{color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '15px'}}>
                Ensuring high-fidelity datasets for supervised learning through meticulous labeling, semantic segmentation, and RLHF (Reinforcement Learning from Human Feedback) protocols to maximize model accuracy.
              </p>
              <div>
                <span className="tech-tag">RLHF</span>
                <span className="tech-tag">Data Labeling</span>
                <span className="tech-tag">Quality Assurance</span>
              </div>
            </motion.div>

            {/* Card 4: Generative AI & Media (New) */}
            <motion.div className="premium-card" whileHover={{ y: -5 }}>
              <Palette size={40} color="#ec4899" style={{marginBottom: '20px'}} />
              <h3 style={{marginBottom: '15px', color: '#fff'}}>Generative AI Art</h3>
              <p style={{color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '15px'}}>
                Creating hyper-realistic visual assets and creative media using state-of-the-art diffusion models.
              </p>
              <div>
                <span className="tech-tag">Flux</span>
                <span className="tech-tag">Midjourney</span>
                <span className="tech-tag">Stable Diffusion</span>
                <span className="tech-tag">DALL-E 3</span>
                <span className="tech-tag">Veo</span>
                <span className="tech-tag">Kling</span>
              </div>
            </motion.div>

            {/* Card 5: AI-Assisted Development (New) */}
            <motion.div className="premium-card" whileHover={{ y: -5 }}>
              <Wand2 size={40} color="#eab308" style={{marginBottom: '20px'}} />
              <h3 style={{marginBottom: '15px', color: '#fff'}}>AI-Driven Dev</h3>
              <p style={{color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '15px'}}>
                Accelerating development cycles by leveraging advanced LLMs to architect codebases and debug complex logic.
              </p>
              <div>
                <span className="tech-tag">ChatGPT-4o</span>
                <span className="tech-tag">Gemini 1.5 Pro</span>
                <span className="tech-tag">Perplexity</span>
                <span className="tech-tag">Google AI Studio</span>
              </div>
            </motion.div>

            {/* Card 6: Platform Familiarity (New) */}
            <motion.div className="premium-card" whileHover={{ y: -5 }}>
              <Monitor size={40} color="#2dd4bf" style={{marginBottom: '20px'}} />
              <h3 style={{marginBottom: '15px', color: '#fff'}}>Platform Command</h3>
              <p style={{color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '15px'}}>
                Proficiency in industry-standard development environments and cloud studios.
              </p>
              <div>
                <span className="tech-tag">VS Code</span>
                <span className="tech-tag">Google Colab</span>
                <span className="tech-tag">Google AI</span>
                <span className="tech-tag">Firebase Studio</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Professional Journey</h2>
          <div className="grid-2">
            
            {/* Tech Experience */}
            <div>
              <h3 style={{marginBottom: '30px', color: '#fff', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '10px'}}>
                <Briefcase size={24} /> Tech Roles
              </h3>
              
              <div className="experience-item">
                <div className="experience-date">Invisible Technologies</div>
                <h3>Model Trainer & AI Researcher</h3>
                <p style={{color: 'var(--text-dim)', fontSize: '0.9rem', marginTop: '10px'}}>
                  • Spearheaded the fine-tuning of LLMs to enhance contextual understanding.<br/>
                  • Executed rigorous RLHF (Reinforcement Learning from Human Feedback) protocols.<br/>
                  • Optimized data preprocessing pipelines using Python and NLP libraries.
                </p>
              </div>

              <div className="experience-item">
                <div className="experience-date">Opsframes</div>
                <h3>Full Stack Developer</h3>
                <p style={{color: 'var(--text-dim)', fontSize: '0.9rem', marginTop: '10px'}}>
                  • Engineered responsive, scalable web applications using the React ecosystem.<br/>
                  • Collaborated on API integration and backend logic optimization.<br/>
                  • Delivered high-fidelity UI implementations from Figma prototypes.
                </p>
              </div>
            </div>

            {/* Other Experience */}
            <div>
              <h3 style={{marginBottom: '30px', color: '#fff', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '10px'}}>
                <Briefcase size={24} /> Leadership & Support
              </h3>

              <div className="experience-item" style={{borderLeftColor: '#64748b'}}>
                <div className="experience-date">Yousaf School</div>
                <h3>Computer Science Mentor</h3>
                <p style={{color: 'var(--text-dim)', fontSize: '0.9rem', marginTop: '10px'}}>
                  • Mentored students in algorithmic thinking and programming fundamentals.<br/>
                  • Led workshops on emerging technologies and digital literacy.
                </p>
              </div>

              <div className="experience-item" style={{borderLeftColor: '#64748b'}}>
                <div className="experience-date">Minhaj University / A.S Solutions</div>
                <h3>Operations Support</h3>
                <p style={{color: 'var(--text-dim)', fontSize: '0.9rem', marginTop: '10px'}}>
                  • Streamlined administrative workflows and facilitated cross-departmental communication.<br/>
                  • Managed client relationships with a focus on problem resolution.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section" style={{background: '#0a0a0a'}}>
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid-3">
            
            {/* Project 1 - GeniusPlate (NEW) */}
            <div className="premium-card">
              <h3 style={{color: '#fff'}}>GeniusPlate</h3>
              <p style={{color: 'var(--text-dim)', fontSize: '0.9rem', margin: '15px 0'}}>
                A smart, React-based web platform revolutionizing culinary e-commerce with intelligent layouts and dynamic user interaction.
              </p>
              <div>
                <span className="tech-tag">React</span>
                <span className="tech-tag">Smart UI</span>
                <span className="tech-tag">E-commerce</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="premium-card">
              <h3 style={{color: '#fff'}}>Pak Army Bot (PAB)</h3>
              <p style={{color: 'var(--text-dim)', fontSize: '0.9rem', margin: '15px 0'}}>
                An advanced LLM-powered retrieval system fine-tuned to provide accurate, domain-specific military information.
              </p>
              <div>
                <span className="tech-tag">LLM Fine-tuning</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">NLP</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="premium-card">
              <h3 style={{color: '#fff'}}>Travel Assistant AI</h3>
              <p style={{color: 'var(--text-dim)', fontSize: '0.9rem', margin: '15px 0'}}>
                A conversational AI agent built with deep learning frameworks to automate travel planning and query resolution.
              </p>
              <div>
                <span className="tech-tag">TensorFlow</span>
                <span className="tech-tag">Dialogflow</span>
                <span className="tech-tag">AI</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="premium-card">
              <h3 style={{color: '#fff'}}>Sportrium</h3>
              <p style={{color: 'var(--text-dim)', fontSize: '0.9rem', margin: '15px 0'}}>
                A comprehensive event management platform for sports enthusiasts featuring robust scheduling and booking systems.
              </p>
              <div>
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">System Design</span>
              </div>
            </div>

             {/* Project 5 */}
             <div className="premium-card">
              <h3 style={{color: '#fff'}}>Palette and Fit</h3>
              <p style={{color: 'var(--text-dim)', fontSize: '0.9rem', margin: '15px 0'}}>
                A holistic wellness application combining fitness tracking metrics with aesthetic color therapy for user engagement.
              </p>
              <div>
                <span className="tech-tag">Web App</span>
                <span className="tech-tag">UX Design</span>
              </div>
            </div>

             {/* Project 6 */}
             <div className="premium-card">
              <h3 style={{color: '#fff'}}>Atelier Cafe</h3>
              <p style={{color: 'var(--text-dim)', fontSize: '0.9rem', margin: '15px 0'}}>
                A fully responsive digital storefront for a boutique cafe, optimizing brand presence and customer accessibility.
              </p>
              <div>
                <span className="tech-tag">HTML5/CSS3</span>
                <span className="tech-tag">JavaScript</span>
              </div>
            </div>

          </div>
          
          <div style={{marginTop: '40px', textAlign: 'center'}}>
            <a href="https://github.com/AfeefaRehan" target="_blank" className="btn-outline" style={{display: 'inline-flex', alignItems: 'center', gap: '10px'}}>
              <Github size={18} /> View GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <h3 style={{marginBottom: '30px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '10px'}}>
                <GraduationCap size={28} color="var(--accent-glow)" /> Education
              </h3>
              <div className="premium-card" style={{marginBottom: '20px'}}>
                <h4 style={{color: '#fff'}}>BS Computer Science</h4>
                <p style={{color: 'var(--accent-glow)', fontSize: '0.9rem'}}>Minhaj University Lahore (2021-2025)</p>
                <p style={{color: 'var(--text-dim)', marginTop: '5px'}}>CGPA: 3.6 • Focus on AI & Web Technologies</p>
              </div>
              <div className="premium-card">
                <h4 style={{color: '#fff'}}>Intermediate (ICS)</h4>
                <p style={{color: 'var(--accent-glow)', fontSize: '0.9rem'}}>Punjab Group of Colleges (2019-2021)</p>
                <p style={{color: 'var(--text-dim)', marginTop: '5px'}}>Grade: A+ (900/1100)</p>
              </div>
            </div>

            <div>
              <h3 style={{marginBottom: '30px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '10px'}}>
                <Award size={28} color="var(--accent-purple)" /> Certifications
              </h3>
              <ul style={{listStyle: 'none', textAlign: 'left', paddingLeft: '10px'}}>
                {[
                  "NAVTTC AI Course",
                  "Python for Data Science Workshops",
                  "Ethical Hacking & Pen Testing (In Progress)",
                  "ISPR Internship - Technical Wing",
                  "Pitman English Language Proficiency"
                ].map((cert, index) => (
                  <li key={index} style={{marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-dim)'}}>
                    <span style={{color: 'var(--accent-purple)'}}>✔</span> {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" style={{ padding: '60px 0', borderTop: '1px solid var(--metal-border)', background: '#000' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '40px' }}>Let's Connect</h2>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', marginBottom: '40px' }}>
            <div className="footer-link">
              <Phone size={20} color="var(--accent-glow)" />
              <span>+92 313 7464567</span>
            </div>
            <div className="footer-link">
              <Mail size={20} color="var(--accent-glow)" />
              <span>afeefarehan00@gmail.com</span>
            </div>
            <div className="footer-link">
              <MapPin size={20} color="var(--accent-glow)" />
              <span>Near UET, Lahore</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '30px' }}>
            {/* LinkedIn Icon with your Profile Link */}
            <a 
              href="https://www.linkedin.com/in/afeefa-rehan-611116250/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#fff', transition: '0.3s' }}
            >
              <Linkedin size={28} />
            </a>

            {/* GitHub Icon */}
            <a 
              href="https://github.com/AfeefaRehan" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#fff', transition: '0.3s' }}
            >
              <Github size={28} />
            </a>
          </div>
          
          <p style={{ color: '#475569', fontSize: '0.9rem' }}>© 2026 Afeefa Rehan. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
