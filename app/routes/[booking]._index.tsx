import { type MetaFunction, type LinksFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Book Healthcare AI Strategy Session - ELFADIL | BrainSAIT" },
    {
      name: "description",
      content:
        "Book a private 60-minute healthcare AI consultation with Dr. El Fadil. NPHIES integration, FHIR compliance, and healthcare automation expertise. 2,390 SAR.",
    },
    { name: "keywords", content: "healthcare AI, NPHIES, FHIR, BrainSAIT, Dr El Fadil, Saudi Arabia healthcare" },
    { property: "og:title", content: "Book Healthcare AI Strategy Session - ELFADIL" },
    { property: "og:description", content: "Private consultation with Dr. El Fadil on healthcare AI, NPHIES, and FHIR" },
    { property: "og:type", content: "website" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://js.stripe.com" },
];

const bookingStyles = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  
  :root {
    --midnight: #050B18;
    --deep-blue: #0B1226;
    --medical-blue: #2b6cb8;
    --signal-teal: #0ea5e9;
    --success-green: #22c55e;
    --error-red: #ef4444;
    --slate-300: #cbd5e1;
    --slate-400: #94a3b8;
    --slate-600: #475569;
  }
  
  .booking-page {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background: linear-gradient(180deg, var(--midnight) 0%, var(--deep-blue) 50%, #000 100%);
    color: white;
    min-height: 100vh;
    overflow-x: hidden;
    line-height: 1.6;
  }
  
  .booking-page[dir="rtl"] {
    font-family: 'IBM Plex Sans Arabic', 'Segoe UI', Tahoma, Arial, sans-serif;
  }
  
  .bg-effects {
    position: fixed;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 0;
  }
  
  .glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.15;
    animation: pulse 8s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.15; transform: scale(1); }
    50% { opacity: 0.25; transform: scale(1.1); }
  }
  
  .glow-1 {
    top: 10%;
    left: 20%;
    width: 400px;
    height: 400px;
    background: var(--medical-blue);
  }
  
  .glow-2 {
    bottom: 20%;
    right: 20%;
    width: 400px;
    height: 400px;
    background: var(--signal-teal);
    animation-delay: 2s;
  }
  
  .booking-container {
    position: relative;
    z-index: 1;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  
  .booking-header {
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(5, 11, 24, 0.8);
  }
  
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    color: white;
    transition: transform 0.2s;
  }
  
  .logo:hover {
    transform: scale(1.05);
  }
  
  .logo-icon {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: linear-gradient(135deg, var(--medical-blue), var(--signal-teal));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
  }
  
  .logo-text {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.5px;
  }
  
  .lang-toggle {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 9999px;
    cursor: pointer;
    transition: all 0.2s;
    color: white;
    font-size: 0.875rem;
  }
  
  .lang-toggle:hover {
    background: rgba(255,255,255,0.1);
    transform: translateY(-1px);
  }
  
  .progress-steps {
    max-width: 48rem;
    margin: 3rem auto;
  }
  
  .steps-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .step {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .step-circle {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.875rem;
    transition: all 0.3s;
  }
  
  .step-circle.active {
    background: linear-gradient(135deg, var(--medical-blue), var(--signal-teal));
    box-shadow: 0 0 20px rgba(14, 165, 233, 0.4);
  }
  
  .step-circle.completed {
    background: var(--success-green);
  }
  
  .step-circle.pending {
    background: rgba(255,255,255,0.1);
    color: rgba(255,255,255,0.5);
  }
  
  .step-label {
    font-weight: 500;
    font-size: 0.875rem;
  }
  
  .step-divider {
    width: 4rem;
    height: 2px;
    background: rgba(255,255,255,0.2);
    transition: background 0.3s;
  }
  
  .step-divider.completed {
    background: var(--success-green);
  }
  
  .booking-main {
    padding: 2rem 0 4rem;
  }
  
  .grid-2 {
    display: grid;
    gap: 3rem;
  }
  
  @media (min-width: 1024px) {
    .grid-2 { grid-template-columns: 1fr 1fr; }
  }
  
  .card {
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 1.5rem;
    padding: 2rem;
    transition: all 0.3s;
  }
  
  .card:hover {
    border-color: rgba(255,255,255,0.2);
    transform: translateY(-2px);
  }
  
  .card-gradient {
    background: linear-gradient(135deg, rgba(43,108,184,0.2), rgba(14,165,233,0.1));
    border-color: rgba(43,108,184,0.3);
  }
  
  .badge {
    display: inline-block;
    padding: 0.375rem 1rem;
    background: rgba(43,108,184,0.2);
    border: 1px solid rgba(43,108,184,0.3);
    color: var(--signal-teal);
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }
  
  .booking-h1 {
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  
  .booking-h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  
  .gradient-text {
    background: linear-gradient(90deg, var(--medical-blue), var(--signal-teal));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
  }
  
  .text-lg { font-size: 1.125rem; }
  .text-slate { color: var(--slate-300); }
  .text-slate-400 { color: var(--slate-400); }
  
  .pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 2rem;
  }
  
  .pill {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 0.75rem;
    font-size: 0.875rem;
  }
  
  .pill svg {
    color: var(--signal-teal);
  }
  
  .features {
    margin-bottom: 2rem;
  }
  
  .feature-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: background 0.2s;
  }
  
  .feature-item:hover {
    background: rgba(255,255,255,0.03);
  }
  
  .check-icon {
    color: var(--success-green);
    flex-shrink: 0;
    margin-top: 0.125rem;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .booking-label {
    display: block;
    font-size: 0.875rem;
    color: var(--slate-400);
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  .booking-input {
    width: 100%;
    padding: 0.75rem 1rem;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 0.75rem;
    color: white;
    font-size: 1rem;
    outline: none;
    transition: all 0.2s;
  }
  
  .booking-input:focus {
    border-color: var(--signal-teal);
    box-shadow: 0 0 0 3px rgba(14,165,233,0.1);
    background: rgba(255,255,255,0.08);
  }
  
  .booking-input::placeholder {
    color: rgba(255,255,255,0.3);
  }
  
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border: none;
    border-radius: 0.75rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    text-decoration: none;
    position: relative;
    overflow: hidden;
  }
  
  .btn-primary {
    background: linear-gradient(90deg, var(--medical-blue), var(--signal-teal));
    color: white;
  }
  
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 40px rgba(14,165,233,0.3);
  }
  
  .btn-primary:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
  
  .btn-full {
    width: 100%;
    padding: 1.25rem;
    font-size: 1.125rem;
  }
  
  .mb-8 { margin-bottom: 2rem; }
  
  .booking-footer {
    border-top: 1px solid rgba(255,255,255,0.1);
    padding: 2rem 0;
    margin-top: 4rem;
    text-align: center;
    color: var(--slate-400);
    font-size: 0.875rem;
  }
  
  .booking-footer a {
    color: var(--signal-teal);
    text-decoration: none;
    transition: color 0.2s;
  }
  
  .booking-footer a:hover {
    color: var(--medical-blue);
  }
  
  @media (max-width: 768px) {
    .booking-h1 { font-size: 2rem; }
    .booking-h2 { font-size: 1.25rem; }
    .step-label { display: none; }
    .booking-container { padding: 0 1rem; }
  }
`;

function ClockIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="10" cy="10" r="8"/>
      <path d="M10 6v4l2 2"/>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 6l-6 6-3-3"/>
      <rect x="2" y="4" width="16" height="14" rx="2"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="check-icon" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="10" cy="10" r="8"/>
      <path d="M6 10l2 2 4-4"/>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 10h14M14 5l5 5-5 5"/>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="8" cy="8" r="7"/>
      <path d="M8 1a14 14 0 0 0 0 14M8 1a14 14 0 0 1 0 14M1 8h14"/>
    </svg>
  );
}

export default function BookingPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic will be implemented
  };

  const handleLanguageToggle = () => {
    // Language toggle logic will be implemented
  };

  return (
    <>
      <style>{bookingStyles}</style>
      <div className="booking-page">
        <div className="bg-effects">
          <div className="glow glow-1"></div>
          <div className="glow glow-2"></div>
        </div>
        
        <header className="booking-header">
          <div className="booking-container">
            <div className="header-content">
              <a href="/" className="logo">
                <div className="logo-icon">✨</div>
                <span className="logo-text">BrainSAIT</span>
              </a>
              <button 
                className="lang-toggle" 
                onClick={handleLanguageToggle} 
                aria-label="Toggle Language"
                type="button"
              >
                <GlobeIcon />
                <span id="lang-text">العربية</span>
              </button>
            </div>
          </div>
        </header>
        
        <main className="booking-main booking-container">
          <div className="progress-steps">
            <div className="steps-container">
              <div className="step">
                <div className="step-circle active" id="step1-circle">1</div>
                <span className="step-label" id="step1-label">Payment</span>
              </div>
              <div className="step-divider" id="divider1"></div>
              <div className="step">
                <div className="step-circle pending" id="step2-circle">2</div>
                <span className="step-label" id="step2-label">Select Slot</span>
              </div>
              <div className="step-divider" id="divider2"></div>
              <div className="step">
                <div className="step-circle pending" id="step3-circle">3</div>
                <span className="step-label" id="step3-label">Confirmation</span>
              </div>
            </div>
          </div>
          
          <div id="step-1" className="step-content">
            <div className="grid-2">
              <div>
                <span className="badge">Strategy Session</span>
                <h1 className="booking-h1">
                  Book Your<br/>
                  <span className="gradient-text">Private Session</span>
                </h1>
                <p className="text-lg text-slate mb-8">
                  One-on-one strategic consultation with Dr. El Fadil on healthcare AI, NPHIES integration, and BrainSAIT solutions.
                </p>
                
                <div className="pills">
                  <div className="pill">
                    <ClockIcon />
                    <span>60 Minutes</span>
                  </div>
                  <div className="pill">
                    <CalendarIcon />
                    <span>Google Meet</span>
                  </div>
                </div>
                
                <div className="features mb-8">
                  <div className="feature-item">
                    <CheckIcon />
                    <span className="text-slate">Personalized healthcare AI strategy</span>
                  </div>
                  <div className="feature-item">
                    <CheckIcon />
                    <span className="text-slate">NPHIES compliance guidance</span>
                  </div>
                  <div className="feature-item">
                    <CheckIcon />
                    <span className="text-slate">Technical architecture review</span>
                  </div>
                  <div className="feature-item">
                    <CheckIcon />
                    <span className="text-slate">Implementation roadmap</span>
                  </div>
                </div>
                
                <div className="card card-gradient">
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                    <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>2,390 SAR</span>
                  </div>
                  <span className="text-slate-400">One-time session fee</span>
                </div>
              </div>
              
              <div>
                <div className="card">
                  <h2 className="booking-h2">Proceed to Payment</h2>
                  <form id="payment-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="booking-label" htmlFor="name">Full Name</label>
                      <input 
                        className="booking-input" 
                        type="text" 
                        id="name" 
                        name="name"
                        required 
                        placeholder="Enter your name"
                        autoComplete="name"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="booking-label" htmlFor="email">Email Address</label>
                      <input 
                        className="booking-input" 
                        type="email" 
                        id="email" 
                        name="email"
                        required 
                        placeholder="your@email.com"
                        autoComplete="email"
                      />
                    </div>
                    
                    <button type="submit" className="btn btn-primary btn-full">
                      <span>Proceed to Payment</span>
                      <ArrowIcon />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <footer className="booking-footer">
          <div className="booking-container">
            <p>© 2025 <a href="https://brainsait.io">BrainSAIT</a> · <a href="https://elfadil.com">ELFADIL.com</a> · Healthcare AI Innovation</p>
          </div>
        </footer>
      </div>
      <script src="https://js.stripe.com/v3/" async></script>
    </>
  );
}
