import { useEffect, useRef, useState } from 'react';
import {
  Github, Linkedin, Mail, Twitter, Instagram, FileDown, Server, Shield, Database,
  Layout, Briefcase, Code, User, GraduationCap, Download, ArrowRight, ArrowUpRight,
  MapPin, Phone, Sparkles, Cloud, Workflow, Terminal, Lock, Cpu, Layers, Globe, Zap
} from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

/* ── reveal hook ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-fade, .reveal-scale');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ── scroll progress ── */
function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      el.style.transform = `scaleX(${scrolled / 100})`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div ref={ref} className="scroll-progress" style={{ width: '100%' }} />;
}

export default function App() {
  const [formState, handleSubmit] = useForm('mpwqjypv');
  const [activeSection, setActiveSection] = useState('hero');
  useReveal();

  // track active nav
  useEffect(() => {
    const ids = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const skills = [
    {
      category: 'Cloud Infrastructure',
      icon: <Cloud className="text-[#06ffd5]" size={28} />,
      accent: '#06ffd5',
      level: 92,
      items: ['Microsoft Azure (AVD, VMs)', 'AWS (EC2, IAM, S3)', 'GCP (Compute Engine)', 'Cloud CLI'],
    },
    {
      category: 'DevOps & Automation',
      icon: <Workflow className="text-[#22d3ee]" size={28} />,
      accent: '#22d3ee',
      level: 94,
      items: ['CI/CD Pipelines', 'GitHub Actions', 'Git', 'Systemd', 'Workflow Automation'],
    },
    {
      category: 'Programming & Scripts',
      icon: <Terminal className="text-[#6366f1]" size={28} />,
      accent: '#6366f1',
      level: 86,
      items: ['Python', 'Bash', 'Java', 'C/C++', 'YAML/JSON', 'HTML/XML'],
    },
    {
      category: 'Web & Servers',
      icon: <Layers className="text-[#a855f7]" size={28} />,
      accent: '#a855f7',
      level: 88,
      items: ['Nginx (Reverse Proxy)', 'Gunicorn (WSGI)', 'Load Balancing', 'PostgreSQL', 'Supabase'],
    },
    {
      category: 'Security & Identity',
      icon: <Lock className="text-[#ec4899]" size={28} />,
      accent: '#ec4899',
      level: 87,
      items: ['Entra ID (Azure AD)', 'Intune (MDM/MAM)', 'Windows Autopilot', 'CrowdStrike (EDR)', 'Safetica (DLP)', 'Azure Monitoring'],
    },
  ];

  const projects = [
    {
      title: 'Multi-Cloud Infrastructure (IaC)',
      subtitle: 'Provisioning & Networking',
      details: [
        'Managed scalable IaaS/PaaS across AWS (EC2), Azure (AVD) and GCP (Compute Engine) via Cloud CLI.',
        'Architected VPC/VNet, Security Groups and granular IAM for secure networking.',
        'Implemented auto-scaling and integrated S3 + Azure Blob for persistent storage.',
      ],
      tags: ['AWS', 'Azure', 'GCP', 'IaC', 'IAM', 'Auto-scaling'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
      accent: 'from-cyan-400 to-indigo-500',
    },
    {
      title: 'End-to-End CI/CD Automation',
      subtitle: 'Pipeline & Observability',
      details: [
        'Engineered fully automated CI/CD with GitHub Actions to streamline the SDLC.',
        'Used Git + Systemd for consistent staging and production behavior.',
        'Integrated health monitoring and logging for high post-deploy availability.',
      ],
      tags: ['GitHub Actions', 'CI/CD', 'Systemd', 'Observability'],
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop',
      accent: 'from-indigo-500 to-violet-500',
    },
    {
      title: 'Zero-Trust Identity Governance',
      subtitle: 'Security & Endpoint',
      details: [
        'Managed enterprise identities with Entra ID (Azure AD) + O365 under a Zero-Trust model.',
        'Leveraged Intune + Autopilot for zero-touch provisioning and lifecycle automation.',
        'Deployed CrowdStrike EDR + Safetica DLP with Azure Monitoring.',
      ],
      tags: ['Entra ID', 'Intune', 'Zero-Trust', 'CrowdStrike', 'Safetica'],
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop',
      accent: 'from-violet-500 to-pink-500',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <ScrollProgress />

      {/* ── ambient background ── */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="grid-pattern" />
        <div className="mesh-gradient" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* ── nav ── */}
      <header className="sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <nav className="mt-4 md:mt-6 flex items-center justify-between gap-6 rounded-2xl glass-strong px-5 md:px-7 py-3.5">
            <a href="#" className="flex items-center gap-3 shrink-0">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold tracking-widest text-slate-950" style={{ background: 'linear-gradient(135deg,#06ffd5,#6366f1)' }}>SP</span>
              <span className="hidden sm:inline text-sm font-semibold tracking-widest text-white">SHEEFA<span className="text-cyan-300">.</span></span>
            </a>

            <ul className="hidden lg:flex items-center gap-7 text-sm">
              {[
                ['About', 'about'],
                ['Skills', 'skills'],
                ['Experience', 'experience'],
                ['Projects', 'projects'],
                ['Education', 'education'],
                ['Contact', 'contact'],
              ].map(([label, id]) => (
                <li key={id}>
                  <a href={`#${id}`} className={`nav-link pb-1 ${activeSection === id ? 'active' : ''}`}>{label}</a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <a href="/Sheefa-Pathan-CV.pdf" download="Sheefa-Pathan-CV.pdf" className="btn-primary btn-ripple text-xs md:text-sm !px-5 !py-2.5">
                <FileDown size={16} /> <span className="hidden sm:inline">Download CV</span><span className="sm:hidden">CV</span>
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* ── hero ── */}
      <section className="section !pb-12 md:!pb-16">
        <div className="container">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-start">
            {/* left */}
            <div className="reveal">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-cyan-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                Available for new opportunities · Bengaluru
              </div>

              <h1 className="mt-6 text-5xl md:text-6xl lg:text-[4.2rem] font-bold leading-[0.95] tracking-tight">
                <span className="block text-white">Hi, I'm</span>
                <span className="block grad-brand">Sheefa Pathan</span>
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-lg md:text-xl font-heading text-slate-200">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/60 px-3.5 py-1.5 text-sm border border-slate-700/60"><Cpu size={16} className="text-cyan-400" /> DevOps</span>
                <span className="text-slate-600">·</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/60 px-3.5 py-1.5 text-sm border border-slate-700/60"><Globe size={16} className="text-indigo-400" /> Cloud Engineer</span>
                <span className="text-slate-600">·</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/60 px-3.5 py-1.5 text-sm border border-slate-700/60"><Zap size={16} className="text-violet-400" /> 5+ years</span>
              </div>

              <p className="mt-6 max-w-2xl text-pretty text-base md:text-lg leading-relaxed text-slate-400">
                I automate and scale environments across <span className="text-white font-medium">Azure, AWS and GCP</span> — from resilient IaC and CI/CD to zero-trust identity. I ship reliable infrastructure that teams trust in production.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/Sheefa-Pathan-CV.pdf" download="Sheefa-Pathan-CV.pdf" className="btn-primary btn-ripple">
                  <Download size={18} /> Download Resume
                </a>
                <a href="#projects" className="btn-ghost">
                  View my work <ArrowRight size={18} />
                </a>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <a href="https://github.com/Sheefa124" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="btn-icon"><Github size={18} /></a>
                <a href="https://linkedin.com/in/sheefapathan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="btn-icon"><Linkedin size={18} /></a>
                <a href="https://x.com/_sheefa_pathan_" target="_blank" rel="noopener noreferrer" aria-label="X" className="btn-icon"><Twitter size={18} /></a>
                <a href="https://www.instagram.com/_sheefa_pathan_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="btn-icon"><Instagram size={18} /></a>
                <a href="mailto:sheefapathan1224@gmail.com" aria-label="Email" className="btn-icon"><Mail size={18} /></a>
                <span className="ml-2 hidden sm:inline text-xs tracking-wide text-slate-500">sheefapathan1224@gmail.com · +91-8793635445</span>
              </div>
            </div>

            {/* right — bento / terminal */}
            <div className="reveal stagger-2 space-y-4">
              {/* terminal card */}
              <div className="glass-elevated overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-xs font-mono tracking-wide text-slate-500">infra@prod — zsh</span>
                  <span className="hidden sm:inline text-xs text-slate-600">⌘K</span>
                </div>
                <div className="px-5 py-5 font-mono text-sm leading-relaxed">
                  <div className="text-slate-500">$ terraform apply —auto-approve</div>
                  <div className="mt-3 space-y-1.5 text-slate-300">
                    <div className="flex gap-2"><span className="text-emerald-400">✔</span> Azure AVD + VNet provisioned</div>
                    <div className="flex gap-2"><span className="text-emerald-400">✔</span> AWS EC2 + S3 + IAM synced</div>
                    <div className="flex gap-2"><span className="text-emerald-400">✔</span> GCP Compute + Workload Identity</div>
                    <div className="flex gap-2"><span className="text-emerald-400">✔</span> GitHub Actions pipeline — 0 manual steps</div>
                    <div className="flex gap-2"><span className="text-emerald-400">✔</span> Entra ID · Intune · CrowdStrike — zero-trust</div>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300 border border-emerald-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Apply complete — 3 clouds, 40% less toil
                  </div>
                </div>
              </div>

              {/* stats bento */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { k: '5+ years', v: 'Experience', sub: '2 Android · 3 Cloud' },
                  { k: '3 clouds', v: 'Azure · AWS · GCP', sub: 'IaC & IAM' },
                  { k: '40% ↓', v: 'Manual toil cut', sub: 'Python & Bash' },
                ].map((s) => (
                  <div key={s.k} className="glass-card p-4 text-center">
                    <div className="text-lg font-bold tracking-tight text-white">{s.k}</div>
                    <div className="text-xs font-medium text-slate-300">{s.v}</div>
                    <div className="text-[11px] text-slate-500">{s.sub}</div>
                  </div>
                ))}
              </div>

              <div className="glass-card p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 border border-slate-700"><MapPin size={16} className="text-cyan-400" /></span>
                  <div>
                    <div className="text-sm font-medium text-white">Bengaluru, India</div>
                    <div className="text-xs text-slate-500">Open to remote & on-site</div>
                  </div>
                </div>
                <a href="#contact" className="pill-brand">Let's talk <ArrowUpRight size={14} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── about ── */}
      <section id="about" className="section bg-slate-900/40">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag"><User size={14} /> About</div>
            <h2 className="section-title">Engineer for reliable<br /><span className="grad-cyan-indigo">cloud systems.</span></h2>
            <div className="section-divider" />
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 glass-card p-7 md:p-8 reveal">
              <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-cyan-400/80 mb-4"><Sparkles size={14} /> Who I am</div>
              <p className="text-base md:text-lg leading-relaxed text-slate-300">
                I'm a <span className="text-white font-semibold">DevOps & Cloud Engineer</span> with <span className="text-white font-semibold">5+ years</span> — 2 years in Android and 3+ years in cloud infrastructure. I build automated, observable platforms across <span className="text-cyan-300">Azure, AWS and GCP</span>.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                My work spans CI/CD with GitHub Actions, production stacks with Nginx + Gunicorn + PostgreSQL, and hardening identity with Entra ID, Intune and DLP. I care about small, safe deploys, clear runbooks and on-call that doesn't page at 3am.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="pill-brand"><Cloud size={12} /> Multi-cloud</span>
                <span className="pill"><Workflow size={12} /> GitHub Actions</span>
                <span className="pill"><Terminal size={12} /> Python & Bash</span>
                <span className="pill"><Lock size={12} /> Zero-Trust</span>
              </div>
              <a href="/Sheefa-Pathan-CV.pdf" download="Sheefa-Pathan-CV.pdf" className="btn-ghost mt-6 !py-2.5 text-sm">
                <FileDown size={16} /> Download CV
              </a>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <div className="glass-card p-6 reveal stagger-1">
                <div className="text-xs font-medium tracking-widest uppercase text-slate-500 mb-4">Quick facts</div>
                <ul className="space-y-3.5 text-sm">
                  <li className="flex items-center justify-between gap-4 border-b border-slate-800 pb-3">
                    <span className="text-slate-400 flex items-center gap-2"><MapPin size={14} /> Location</span>
                    <span className="text-white font-medium">Bengaluru, India</span>
                  </li>
                  <li className="flex items-center justify-between gap-4 border-b border-slate-800 pb-3">
                    <span className="text-slate-400 flex items-center gap-2"><Briefcase size={14} /> Experience</span>
                    <span className="text-white font-medium">5+ years</span>
                  </li>
                  <li className="flex items-center justify-between gap-4 border-b border-slate-800 pb-3">
                    <span className="text-slate-400 flex items-center gap-2"><Mail size={14} /> Email</span>
                    <span className="text-white font-medium break-all text-xs md:text-sm">sheefapathan1224@gmail.com</span>
                  </li>
                  <li className="flex items-center justify-between gap-4">
                    <span className="text-slate-400 flex items-center gap-2"><Phone size={14} /> Phone</span>
                    <span className="text-white font-medium">+91-8793635445</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-6 reveal stagger-2">
                <div className="text-xs font-medium tracking-widest uppercase text-slate-500 mb-3">Currently</div>
                <p className="text-sm leading-relaxed text-slate-300">Available for cloud engineering roles — infra as code, platform reliability and secure device/identity rollouts. If you want fewer manual deploys and tighter guardrails, let's chat.</p>
                <a href="#contact" className="pill-brand mt-4">Get in touch <ArrowRight size={12} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── skills (bento) ── */}
      <section id="skills" className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag"><Cpu size={14} /> Capabilities</div>
            <h2 className="section-title">A balanced stack —<br /><span className="grad-indigo-pink">from IaC to identity.</span></h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((s, i) => (
              <div key={s.category} className={`glass-card p-6 md:p-7 reveal stagger-${Math.min(i + 1, 5)}`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/60 bg-slate-800/60">{s.icon}</div>
                  <span className="text-xs font-mono text-slate-500">{s.level}%</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">{s.category}</h3>
                <div className="mt-3 skill-track">
                  <div className="skill-fill" style={{ width: `${s.level}%`, background: `linear-gradient(90deg, ${s.accent}, #6366f1)` } as any} />
                </div>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {s.items.map((it) => (
                    <li key={it} className="pill text-[11px]">{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── experience (timeline) ── */}
      <section id="experience" className="section bg-slate-900/40">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag"><Briefcase size={14} /> Experience</div>
            <h2 className="section-title">Where I've shipped.</h2>
            <div className="section-divider" />
          </div>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-4 md:left-[11.25rem] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/50 via-indigo-500/40 to-transparent hidden sm:block" />

            <div className="space-y-8">
              {[
                {
                  date: 'Nov 2022 – Feb 2026',
                  company: 'Camptra Technologies',
                  loc: 'Hyderabad',
                  role: 'Cloud Engineer',
                  color: 'cyan',
                  bullets: [
                    'Provisioned scalable IaaS/PaaS across Azure (AVD), AWS (EC2) and GCP with IAM & Security Groups.',
                    'Engineered CI/CD with GitHub Actions; used Systemd for resilient service persistence.',
                    'Designed Nginx (reverse proxy) + Gunicorn stacks with load balancing and SSL.',
                    'Authored Python & Bash automation — 40% reduction in manual toil.',
                    'Owned identity: Entra ID, Intune (MDM/MAM), Autopilot, CrowdStrike EDR & Safetica DLP.',
                  ],
                },
                {
                  date: 'Jun 2022 – Oct 2022',
                  company: 'StartMySafari Innovations',
                  loc: 'Pune',
                  role: 'Android Developer',
                  color: 'indigo',
                  bullets: [
                    'Built core modules with REST APIs and Bluetooth ticketing hardware.',
                    'Integrated Firebase Auth & Analytics for engagement and security.',
                    'Used Firebase Realtime DB offline sync — 35% latency reduction.',
                  ],
                },
                {
                  date: 'Mar 2021 – May 2022',
                  company: 'IDelta',
                  loc: 'Pune',
                  role: 'Jr. Android Developer',
                  color: 'violet',
                  bullets: [
                    'Automated backend workflows and ticket generation with Python scripts.',
                    'Crafted UI with Jetpack Compose + XML for fluid, retentive experiences.',
                    'Shipped 3+ apps end-to-end to Google Play.',
                  ],
                },
              ].map((job, idx) => (
                <div key={job.company} className={`reveal stagger-${Math.min(idx + 1, 3)}`}>
                  <div className="grid md:grid-cols-[11.5rem_1fr] gap-4 md:gap-8">
                    <div className="hidden sm:flex md:flex-col items-center md:items-end gap-3 md:text-right">
                      <span className={`hidden md:inline text-xs font-semibold tracking-wide px-2.5 py-1 rounded-full border ${job.color === 'cyan' ? 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20' : job.color === 'indigo' ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20' : 'bg-violet-500/10 text-violet-300 border-violet-500/20'}`}>{job.date}</span>
                      <span className="md:hidden text-xs font-semibold text-slate-400">{job.date}</span>
                      <span className={`hidden sm:inline-flex h-3 w-3 rounded-full border-2 bg-slate-950 ${job.color === 'cyan' ? 'border-cyan-400 shadow-[0_0_10px_rgba(6,255,213,0.6)]' : job.color === 'indigo' ? 'border-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.6)]' : 'border-violet-400 shadow-[0_0_10px_rgba(168,85,247,0.6)]'}`} />
                    </div>
                    {/* mobile date */}
                    <div className="sm:hidden text-xs font-semibold tracking-wide text-cyan-300">{job.date} · {job.company} · {job.loc}</div>

                    <div className="glass-card p-6 md:p-7">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                          <div className="text-sm text-slate-400">{job.company} · {job.loc}</div>
                        </div>
                        <span className="hidden md:inline text-xs font-medium tracking-wide text-slate-500 border border-slate-700/60 rounded-full px-2.5 py-1 bg-slate-800/50">{job.date}</span>
                      </div>
                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-300">
                        {job.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="mt-2 h-1 w-1 rounded-full bg-cyan-400 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── projects (bento) ── */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag"><Layers size={14} /> Selected work</div>
            <h2 className="section-title">Cloud & DevOps<br /><span className="grad-teal-purple">in production.</span></h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <div key={p.title} className={`bento-card min-h-[420px] reveal stagger-${Math.min(i + 1, 3)}`}>
                <img src={p.image} alt={p.title} className="card-image" loading="lazy" />
                <div className="card-overlay" />
                <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${p.accent} opacity-80 z-20`} />
                <div className="card-content">
                  <div className="mt-auto">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium tracking-wide text-white border border-white/20">
                      <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${p.accent}`} /> {p.subtitle}
                    </div>
                    <h3 className="mt-3 text-xl font-semibold leading-tight text-white text-balance">{p.title}</h3>
                    <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-slate-200/90">
                      {p.details.map((d) => (
                        <li key={d} className="flex gap-2">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-white/70 shrink-0" />
                          <span>{d.split(': ').slice(-1).join(': ')}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="pill !bg-white/10 !text-white !border-white/20 backdrop-blur text-[11px]">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── education ── */}
      <section id="education" className="section bg-slate-900/40">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag"><GraduationCap size={14} /> Education</div>
            <h2 className="section-title">Learned & shipped.</h2>
            <div className="section-divider" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Master's in Computer Science", place: 'RBNB College, Shrirampur', uni: 'Pune University', year: '2021', iconBg: 'bg-cyan-500/15 text-cyan-400 border-cyan-400/20' },
              { title: "Bachelor's in Computer Science", place: 'RBNB College, Shrirampur', uni: 'Pune University', year: '2019', iconBg: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/20' },
              { title: 'HSC (Class 12)', place: 'RBNB College, Shrirampur', uni: '', year: '2016', iconBg: 'bg-sky-500/15 text-sky-400 border-sky-500/20' },
              { title: 'SSC (Class 10 / 11th)', place: 'St. Xavier School, Shrirampur', uni: '', year: '2014', iconBg: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20' },
            ].map((e, i) => (
              <div key={e.title} className={`glass-card p-6 reveal stagger-${Math.min(i + 1, 4)}`}>
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border ${e.iconBg}`}>
                  <GraduationCap size={18} />
                </div>
                <h3 className="mt-4 text-base font-semibold leading-tight text-white">{e.title}</h3>
                <div className="mt-1 text-sm text-slate-400">{e.place}</div>
                {e.uni && <div className="text-xs text-slate-500">{e.uni}</div>}
                <div className="mt-3 inline-flex rounded-full bg-slate-800 border border-slate-700 px-2.5 py-1 text-xs font-semibold tracking-wide text-slate-200">{e.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── contact ── */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag"><Mail size={14} /> Contact</div>
            <h2 className="section-title">Let's build something<br /><span className="grad-brand">reliable together.</span></h2>
            <div className="section-divider" />
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="glass-card p-7 reveal">
                <p className="text-base leading-relaxed text-slate-300">
                  Available for cloud engineering roles — IaC, platform reliability and secure identity rollouts. Tell me about your stack and what hurts.
                </p>
                <a href="/Sheefa-Pathan-CV.pdf" download="Sheefa-Pathan-CV.pdf" className="btn-primary btn-ripple mt-5">
                  <FileDown size={16} /> Download Resume
                </a>
                <div className="mt-6 space-y-3">
                  <a href="mailto:sheefapathan1224@gmail.com" className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3 text-sm text-slate-200 hover:border-cyan-400/30 hover:text-white transition-colors">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 border border-slate-700"><Mail size={14} /></span>
                    <span className="break-all">sheefapathan1224@gmail.com</span>
                  </a>
                  <a href="https://linkedin.com/in/sheefapathan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3 text-sm text-slate-200 hover:border-cyan-400/30 hover:text-white transition-colors">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 border border-slate-700"><Linkedin size={14} /></span>
                    linkedin.com/in/sheefapathan
                  </a>
                  <a href="https://x.com/_sheefa_pathan_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3 text-sm text-slate-200 hover:border-cyan-400/30 hover:text-white transition-colors">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 border border-slate-700"><Twitter size={14} /></span>
                    x.com/_sheefa_pathan_
                  </a>
                  <a href="https://www.instagram.com/_sheefa_pathan_/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3 text-sm text-slate-200 hover:border-cyan-400/30 hover:text-white transition-colors">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 border border-slate-700"><Instagram size={14} /></span>
                    instagram.com/_sheefa_pathan_
                  </a>
                </div>
              </div>
              <div className="glass-card p-6 flex items-center justify-between reveal stagger-1">
                <div className="text-sm text-slate-400">Prefer a quick call?</div>
                <a href="mailto:sheefapathan1224@gmail.com" className="pill-brand">Email me <ArrowUpRight size={14} /></a>
              </div>
            </div>

            <div className="lg:col-span-3 reveal stagger-1">
              <div className="glass-elevated p-6 md:p-8">
                <div className="mb-6 flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Response within 24h
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="form-label">Name</label>
                    <input id="name" name="name" type="text" required placeholder="Your name" className="form-field" />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input id="email" name="email" type="email" required placeholder="you@company.com" className="form-field" />
                    <ValidationError prefix="Email" field="email" errors={formState.errors} className="text-red-400 text-sm mt-2" />
                  </div>
                  <div>
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea id="message" name="message" rows={5} required placeholder="Tell me about your infra, your stack, or the role…" className="form-field resize-none" />
                    <ValidationError prefix="Message" field="message" errors={formState.errors} className="text-red-400 text-sm mt-2" />
                  </div>
                  <button type="submit" disabled={formState.submitting} className="btn-primary btn-ripple w-full justify-center">
                    {formState.submitting ? 'Sending…' : formState.succeeded ? 'Message sent — thank you!' : 'Send message'}
                  </button>
                  {formState.succeeded && <p className="text-center text-sm text-emerald-300">Thanks for reaching out — I'll get back to you shortly.</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── footer ── */}
      <footer className="border-t border-slate-800/80 py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl text-xs font-bold tracking-widest text-slate-950" style={{ background: 'linear-gradient(135deg,#06ffd5,#6366f1)' }}>SP</span>
            <span className="text-sm text-slate-400">© {new Date().getFullYear()} Sheefa Pathan · Built with care on Azure, AWS & GCP.</span>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://github.com/Sheefa124" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="btn-icon"><Github size={16} /></a>
            <a href="https://linkedin.com/in/sheefapathan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="btn-icon"><Linkedin size={16} /></a>
            <a href="https://x.com/_sheefa_pathan_" target="_blank" rel="noopener noreferrer" aria-label="X" className="btn-icon"><Twitter size={16} /></a>
            <a href="https://www.instagram.com/_sheefa_pathan_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="btn-icon"><Instagram size={16} /></a>
            <a href="/Sheefa-Pathan-CV.pdf" download="Sheefa-Pathan-CV.pdf" aria-label="Download CV" className="btn-icon"><FileDown size={16} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
