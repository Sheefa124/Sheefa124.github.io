import { useEffect } from 'react';
import { Github, Linkedin, Mail, Twitter, Server, Shield, Database, Layout, Briefcase, Code, User, GraduationCap } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [formState, handleSubmit] = useForm("mpwqjypv"); // keeping existing form action

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 50,
    });
  }, []);

  const projects = [
    {
      title: "Multi-Cloud Infrastructure (IaC) & Provisioning",
      details: [
        "Provisioning: Managed and provisioned scalable IaaS/PaaS environments across AWS (EC2), Microsoft Azure (AVD), and GCP (Compute Engine) using Cloud CLI.",
        "Networking & IAM: Architected secure cloud networking by configuring VPC/VNet setups, Security Groups, and granular IAM access controls.",
        "Scalability & Storage: Implemented Auto-scaling logic for infrastructure resilience and integrated AWS S3 and Azure Blobs for persistent data management."
      ],
      technologies: ["AWS", "Azure", "GCP", "IaC", "IAM", "S3", "Auto-scaling"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "End-to-End CI/CD Pipeline Automation",
      details: [
        "GitHub Actions: Engineered fully automated CI/CD pipelines using GitHub Actions to streamline the SDLC and eliminate manual bottlenecks.",
        "Environment Consistency: Utilized Git for version control and Systemd for process management to ensure identical behavior across staging and production.",
        "Performance & Observability: Integrated automated health monitoring and logging to proactively identify system bottlenecks and ensure high service availability post-deployment."
      ],
      technologies: ["GitHub Actions", "CI/CD", "Systemd", "Git", "Observability"],
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Zero-Trust Identity & Endpoint Governance",
      details: [
        "Identity Governance: Managed enterprise-level identities and secure access using Microsoft Entra ID (Azure AD) and O365 Administration under a Zero-Trust model.",
        "Endpoint Management: Leveraged Microsoft Intune (MDM/MAM) and Windows Autopilot for zero-touch provisioning and automated device lifecycle management.",
        "Security Posture: Enhanced organizational defense by deploying CrowdStrike (EDR) and Safetica (DLP), utilizing Azure Monitoring for proactive threat mitigation."
      ],
      technologies: ["Entra ID", "Intune", "CrowdStrike", "Zero-Trust", "Safetica"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  const skills = [
    {
      category: "Cloud Infrastructure",
      icon: <Server className="text-purple-500 mb-4" size={36} />,
      items: ["Microsoft Azure (AVD, VMs)", "AWS (EC2, IAM, S3)", "GCP (Compute Engine)", "Cloud CLI"]
    },
    {
      category: "DevOps & Automation",
      icon: <Code className="text-pink-500 mb-4" size={36} />,
      items: ["CI/CD Pipelines", "GitHub Actions", "Git", "Systemd", "Workflow Automation"]
    },
    {
      category: "Programming & Scripts",
      icon: <Layout className="text-blue-500 mb-4" size={36} />,
      items: ["Python", "Bash", "Java", "C/C++", "YAML/JSON", "HTML/XML"]
    },
    {
      category: "Web & Servers",
      icon: <Database className="text-green-500 mb-4" size={36} />,
      items: ["Nginx (Reverse Proxy)", "Gunicorn (WSGI)", "Load Balancing", "PostgreSQL", "Supabase"]
    },
    {
      category: "Security & Identity",
      icon: <Shield className="text-red-500 mb-4" size={36} />,
      items: ["Entra ID (Azure AD)", "Intune (MDM/MAM)", "Windows Autopilot", "CrowdStrike (EDR)", "Safetica (DLP)", "Azure Monitoring"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-300 font-sans selection:bg-purple-500/30 selection:text-purple-200">

      {/* Background Orbs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Header/Navigation */}
        <header className="sticky top-0 z-50 glass">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex justify-between items-center max-w-6xl mx-auto">
              <a href="#" className="text-2xl font-bold font-heading text-white tracking-wider">SP<span className="text-purple-500">.</span></a>
              <ul className="hidden md:flex space-x-8 text-sm font-medium">
                <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a></li>
                <li><a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a></li>
                <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
                <li><a href="#education" className="hover:text-purple-400 transition-colors">Education</a></li>
                <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="min-h-[90vh] flex items-center py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="md:w-2/3" data-aos="fade-up">
              <span className="text-purple-400 font-medium tracking-wider mb-4 block uppercase text-sm">Portfolio</span>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 font-heading text-white leading-tight">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Sheefa Pathan</span>
              </h1>
              <h2 className="text-2xl md:text-4xl text-gray-300 mb-8 font-heading">
                DevOps & Cloud Engineer
              </h2>
              <p className="text-gray-400 mb-12 text-lg max-w-2xl leading-relaxed">
                Expert in automating and scaling environments across Azure, AWS, and GCP. Proven track record in orchestrating CI/CD pipelines, managing production web stacks, and securing cloud identities.
              </p>
              <div className="flex space-x-5" data-aos="fade-up" data-aos-delay="200">
                <a href="https://github.com/Sheefa124" target="_blank" rel="noopener noreferrer" className="glass-card p-4 rounded-full text-white hover:text-purple-400">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/sheefapathan" target="_blank" rel="noopener noreferrer" className="glass-card p-4 rounded-full text-white hover:text-purple-400">
                  <Linkedin size={24} />
                </a>
                <a href="https://x.com/_sheefa_pathan_" target="_blank" rel="noopener noreferrer" className="glass-card p-4 rounded-full text-white hover:text-purple-400">
                  <Twitter size={24} />
                </a>
                <a href="mailto:sheefapathan1224@gmail.com" className="glass-card p-4 rounded-full text-white hover:text-purple-400">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-gray-900/30">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center mb-16" data-aos="fade-right">
              <User className="text-purple-500 mr-4" size={32} />
              <h2 className="text-4xl font-bold font-heading text-white">About Me</h2>
              <div className="h-px bg-gray-800 flex-grow ml-8"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-up" className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a DevOps & Cloud Engineer with over <strong className="text-white font-semibold">5+ years of experience</strong>, including 2 years in Android Development and 3+ years specializing in Cloud Infrastructure.
                </p>
                <p>
                  I specialize in automating, deploying, and scaling environments across <strong className="text-white font-semibold flex-inline items-center gap-1">Azure, AWS, and GCP</strong>. I have a proven track record of orchestrating CI/CD pipelines using GitHub Actions, managing robust web stacks like Nginx and Gunicorn, and significantly reducing manual overhead through Python and Bash automation.
                </p>
                <p>
                  Beyond infrastructure, my focus extends to securing cloud identities and endpoints with Zero-Trust models using Microsoft Entra ID, Intune, and deploying advanced Data Loss Prevention (DLP) policies.
                </p>
              </div>
              <div className="glass-card p-8 rounded-2xl" data-aos="fade-left" data-aos-delay="200">
                <h3 className="text-2xl font-bold mb-6 font-heading text-white">Quick Facts</h3>
                <ul className="space-y-4">
                  <li className="flex border-b border-gray-800 pb-4">
                    <span className="w-32 text-purple-400 font-medium font-heading">Location:</span>
                    <span className="text-gray-200">Bengaluru, India</span>
                  </li>
                  <li className="flex border-b border-gray-800 pb-4">
                    <span className="w-32 text-purple-400 font-medium font-heading">Experience:</span>
                    <span className="text-gray-200">5+ years total</span>
                  </li>
                  <li className="flex border-b border-gray-800 pb-4">
                    <span className="w-32 text-purple-400 font-medium font-heading">Email:</span>
                    <span className="text-gray-200 break-all">sheefapathan1224@gmail.com</span>
                  </li>
                  <li className="flex border-b border-gray-800 pb-4">
                    <span className="w-32 text-purple-400 font-medium font-heading">Phone:</span>
                    <span className="text-gray-200">+91-8793635445</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center mb-16" data-aos="fade-right">
              <Code className="text-pink-500 mr-4" size={32} />
              <h2 className="text-4xl font-bold font-heading text-white">Technical Skills</h2>
              <div className="h-px bg-gray-800 flex-grow ml-8"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay={idx * 100}>
                  {skillGroup.icon}
                  <h3 className="text-xl font-bold text-white mb-6 font-heading">{skillGroup.category}</h3>
                  <ul className="space-y-3">
                    {skillGroup.items.map((item, idj) => (
                      <li key={idj} className="text-gray-400 flex items-start">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 mr-3 flex-shrink-0"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6 bg-gray-900/30 relative">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center mb-16" data-aos="fade-right">
              <Briefcase className="text-purple-500 mr-4" size={32} />
              <h2 className="text-4xl font-bold font-heading text-white">Work Experience</h2>
              <div className="h-px bg-gray-800 flex-grow ml-8"></div>
            </div>
            <div className="space-y-12">

              <div className="relative pl-8 md:pl-0" data-aos="fade-up">
                <div className="md:grid md:grid-cols-4 gap-8">
                  <div className="md:col-span-1 mb-6 md:mb-0">
                    <div className="text-purple-400 font-bold font-heading text-lg">Nov 2022 – Feb 2026</div>
                    <div className="text-gray-400 text-sm mt-1">Camptra Technologies</div>
                    <div className="text-gray-500 text-sm mt-0.5">Hyderabad</div>
                  </div>
                  <div className="md:col-span-3 glass-card p-8 rounded-2xl relative">
                    <div className="absolute top-8 -left-12 md:hidden w-4 h-4 rounded-full bg-purple-500 border-4 border-gray-900"></div>
                    <h3 className="text-2xl font-bold text-white font-heading mb-6">Cloud Engineer</h3>
                    <ul className="space-y-4 text-gray-300 leading-relaxed">
                      <li><strong className="text-white">Multi-Cloud:</strong> Provisioned scalable IaaS/PaaS environments across Azure (AVD), AWS (EC2), and GCP. Handled IAM & Security Groups.</li>
                      <li><strong className="text-white">DevOps & CI/CD:</strong> Engineered CI/CD pipelines using GitHub Actions; utilized Systemd for service persistence.</li>
                      <li><strong className="text-white">Web Hosting:</strong> Designed secure tech stacks with Nginx (Reverse Proxy), Gunicorn, Load Balancing, and SSL.</li>
                      <li><strong className="text-white">Automation:</strong> Authored Python & Bash scripts to automate audits, reducing operational overhead by 40%.</li>
                      <li><strong className="text-white">Identity & Sec:</strong> Managed Entra ID, Intune (MDM/MAM), Windows Autopilot, CrowdStrike EDR, and Safetica DLP.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 md:pl-0" data-aos="fade-up">
                <div className="md:grid md:grid-cols-4 gap-8">
                  <div className="md:col-span-1 mb-6 md:mb-0">
                    <div className="text-pink-400 font-bold font-heading text-lg">June 2022 – Oct 2022</div>
                    <div className="text-gray-400 text-sm mt-1">StartMySafari Innovations</div>
                    <div className="text-gray-500 text-sm mt-0.5">Pune</div>
                  </div>
                  <div className="md:col-span-3 glass-card p-8 rounded-2xl relative">
                    <div className="absolute top-8 -left-12 md:hidden w-4 h-4 rounded-full bg-pink-500 border-4 border-gray-900"></div>
                    <h3 className="text-2xl font-bold text-white font-heading mb-6">Android Developer</h3>
                    <ul className="space-y-4 text-gray-300 leading-relaxed">
                      <li>Developed core modules using REST APIs and managed Bluetooth hardware connectivity for ticketing systems.</li>
                      <li>Integrated Firebase Auth and Analytics to enhance user engagement tracking and security.</li>
                      <li>Leveraged Firebase Realtime Database for offline sync, achieving a 35% reduction in application latency.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 md:pl-0" data-aos="fade-up">
                <div className="md:grid md:grid-cols-4 gap-8">
                  <div className="md:col-span-1 mb-6 md:mb-0">
                    <div className="text-blue-400 font-bold font-heading text-lg">March 2021 – Nov 2021</div>
                    <div className="text-gray-400 text-sm mt-1">IDelta</div>
                    <div className="text-gray-500 text-sm mt-0.5">Pune</div>
                  </div>
                  <div className="md:col-span-3 glass-card p-8 rounded-2xl relative">
                    <div className="absolute top-8 -left-12 md:hidden w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900"></div>
                    <h3 className="text-2xl font-bold text-white font-heading mb-6">Jr. Android Developer</h3>
                    <ul className="space-y-4 text-gray-300 leading-relaxed">
                      <li><strong className="text-white">Workflow Automation:</strong> Streamlined backend workflows and ticket generation by engineering custom Python scripts.</li>
                      <li><strong className="text-white">UI/UX:</strong> Optimized features using Jetpack Compose and XML to deliver fluid user interfaces.</li>
                      <li><strong className="text-white">Lifecycle Mgmt:</strong> Built, tested, and published 3+ applications to the Google Play Store.</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center mb-16" data-aos="fade-right">
              <Server className="text-pink-500 mr-4" size={32} />
              <h2 className="text-4xl font-bold font-heading text-white">Cloud & DevOps Projects</h2>
              <div className="h-px bg-gray-800 flex-grow ml-8"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="h-48 overflow-hidden relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-transparent transition-all z-10 duration-500"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-4 font-heading">{project.title}</h3>
                    <ul className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow space-y-2">
                      {project.details.map((detail, dIndex) => {
                        const [boldPart, restPart] = detail.split(': ');
                        return (
                          <li key={dIndex} className="flex items-start">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 mr-2 flex-shrink-0"></span>
                            <span><strong className="text-white font-medium">{boldPart}:</strong> {restPart}</span>
                          </li>
                        )
                      })}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-800/80 border border-gray-700 text-xs px-3 py-1.5 rounded-full text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 px-6 bg-gray-900/30">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center mb-16" data-aos="fade-right">
              <GraduationCap className="text-purple-500 mr-4" size={32} />
              <h2 className="text-4xl font-bold font-heading text-white">Education</h2>
              <div className="h-px bg-gray-800 flex-grow ml-8"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-8 rounded-2xl flex items-start hover:-translate-y-2 transition-transform duration-300" data-aos="fade-up">
                <div className="bg-purple-500/20 p-4 rounded-xl mr-6 flex-shrink-0">
                  <GraduationCap className="text-purple-400" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">Master’s in Computer Science</h3>
                  <p className="text-gray-300 mb-3">RBNB College, Shrirampur – Pune University</p>
                  <p className="text-purple-400 font-bold font-heading">2021</p>
                </div>
              </div>
              <div className="glass-card p-8 rounded-2xl flex items-start hover:-translate-y-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay="100">
                <div className="bg-pink-500/20 p-4 rounded-xl mr-6 flex-shrink-0">
                  <GraduationCap className="text-pink-400" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">Bachelor’s in Computer Science</h3>
                  <p className="text-gray-300 mb-3">RBNB College, Shrirampur – Pune University</p>
                  <p className="text-pink-400 font-bold font-heading">2019</p>
                </div>
              </div>
              <div className="glass-card p-8 rounded-2xl flex items-start hover:-translate-y-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-blue-500/20 p-4 rounded-xl mr-6 flex-shrink-0">
                  <GraduationCap className="text-blue-400" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">HSC (Class 12)</h3>
                  <p className="text-gray-300 mb-3">RBNB College, Shrirampur</p>
                  <p className="text-blue-400 font-bold font-heading">2016</p>
                </div>
              </div>
              <div className="glass-card p-8 rounded-2xl flex items-start hover:-translate-y-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay="300">
                <div className="bg-green-500/20 p-4 rounded-xl mr-6 flex-shrink-0">
                  <GraduationCap className="text-green-400" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">SSC (Class 10 / 11th)</h3>
                  <p className="text-gray-300 mb-3">St. Xavier School, Shrirampur</p>
                  <p className="text-green-400 font-bold font-heading">2014</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center mb-16" data-aos="fade-right">
              <Mail className="text-purple-500 mr-4" size={32} />
              <h2 className="text-4xl font-bold font-heading text-white">Get In Touch</h2>
              <div className="h-px bg-gray-800 flex-grow ml-8"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-16">
              <div data-aos="fade-right">
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  I'm currently available for new opportunities in cloud engineering and implementation.
                  If you're looking for someone to optimize your cloud architecture or manage robust deployments, let's talk!
                </p>
                <div className="space-y-6">
                  <a href="mailto:sheefapathan1224@gmail.com" className="flex items-center group">
                    <div className="bg-gray-800 p-4 rounded-xl mr-6 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                      <Mail size={24} />
                    </div>
                    <span className="text-lg text-gray-300 group-hover:text-white transition-colors break-all">sheefapathan1224@gmail.com</span>
                  </a>
                  <a href="https://linkedin.com/in/sheefapathan" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                    <div className="bg-gray-800 p-4 rounded-xl mr-6 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                      <Linkedin size={24} />
                    </div>
                    <span className="text-lg text-gray-300 group-hover:text-white transition-colors break-all">linkedin.com/in/sheefapathan</span>
                  </a>
                  <a href="https://x.com/_sheefa_pathan_" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                    <div className="bg-gray-800 p-4 rounded-xl mr-6 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                      <Twitter size={24} />
                    </div>
                    <span className="text-lg text-gray-300 group-hover:text-white transition-colors break-all">x.com/_sheefa_pathan_</span>
                  </a>
                </div>
              </div>
              <div className="glass-card p-8 rounded-2xl" data-aos="fade-left">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-400 mb-2 text-sm font-medium uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-900 border border-gray-700/50 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-400 mb-2 text-sm font-medium uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-900 border border-gray-700/50 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      placeholder="Your email"
                      required
                    />
                    <ValidationError prefix="Email" field="email" errors={formState.errors} className="text-red-400 text-sm mt-2" />
                  </div>
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-gray-400 mb-2 text-sm font-medium uppercase tracking-wider">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full bg-gray-900 border border-gray-700/50 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      placeholder="Your message"
                      required
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={formState.errors} className="text-red-400 text-sm mt-2" />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold tracking-wide py-4 px-6 rounded-xl transition-all elevate-hover flex items-center justify-center transform hover:-translate-y-1 shadow-lg hover:shadow-purple-500/25"
                    disabled={formState.submitting}
                  >
                    {formState.submitting ? 'Sending...' : formState.succeeded ? 'Message Sent!' : 'Send Message'}
                  </button>
                  {formState.succeeded && (
                    <p className="text-green-400 text-center mt-6">Thanks for reaching out! I'll get back to you shortly.</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900/50 py-10 px-6 border-t border-gray-800">
          <div className="container mx-auto max-w-6xl text-center">
            <a href="#" className="text-2xl font-bold font-heading text-white tracking-wider mb-8 inline-block">SP<span className="text-purple-500">.</span></a>
            <div className="flex justify-center space-x-8 mb-8">
              <a href="https://github.com/Sheefa124" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/sheefapathan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://x.com/_sheefa_pathan_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
            </div>
            <p className="text-gray-500">
              © {new Date().getFullYear()} Sheefa Pathan. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;