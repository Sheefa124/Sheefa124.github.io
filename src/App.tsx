import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, User, Code, Briefcase, GraduationCap, Award, Twitter } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [formState, handleSubmit] = useForm("mpwqjypv");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  const projects = [
    {
      title: "Azure Virtual Desktop Environment",
      description: "Designed and deployed scalable Azure Virtual Desktop environments for remote work capabilities with enhanced security features.",
      technologies: ["Azure", "Virtual Desktop", "Security Center", "Azure AD"],
      image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://azure.microsoft.com/en-us/products/virtual-desktop",
      codeUrl: "https://github.com/sheefa124/azure-virtual-desktop"
    },
    {
      title: "Office 365 Security Implementation",
      description: "Implemented comprehensive DLP policies protecting over 10TB of sensitive data from breaches across the organization.",
      technologies: ["Office 365", "DLP", "SharePoint", "Azure AD"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://www.microsoft.com/en-us/microsoft-365/business/microsoft-365-business-standard",
      codeUrl: "https://github.com/sheefa124/o365-security"
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Implemented automated CI/CD pipelines using Azure DevOps for microservices architecture, reducing deployment time by 60%.",
      technologies: ["Azure DevOps", "Docker", "Kubernetes", "Terraform"],
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://azure.microsoft.com/en-us/products/devops",
      codeUrl: "https://github.com/sheefa124/cicd-pipeline"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-center">
            <ul className="flex space-x-8 whitespace-nowrap">
              <li data-aos="fade-down" data-aos-delay="100"><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
              <li data-aos="fade-down" data-aos-delay="200"><a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a></li>
              <li data-aos="fade-down" data-aos-delay="300"><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
              <li data-aos="fade-down" data-aos-delay="400"><a href="#education" className="hover:text-purple-400 transition-colors">Education</a></li>
              <li data-aos="fade-down" data-aos-delay="500"><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="md:w-2/3" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Sheefa Pathan</span>
            </h2>
            <h3 className="text-2xl md:text-3xl text-gray-300 mb-6">Cloud Engineer</h3>
            <p className="text-gray-400 mb-8 text-lg">
              I build exceptional and accessible digital experiences for the cloud and web.
            </p>
            <div className="flex space-x-4" data-aos="fade-up" data-aos-delay="200">
              <a 
                href="https://github.com/sheefa124" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/sheefapathan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://x.com/_s_k_y_12_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:sheefapathan1224@gmail.com" 
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="flex items-center mb-12" data-aos="fade-right">
            <User className="text-purple-400 mr-4 flex-shrink-0" size={28} />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div data-aos="fade-up">
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a dynamic Cloud Engineer with over 3 years of experience managing Azure and Office 365 environments, 
                deploying secure virtual infrastructures, and optimizing IT systems. My journey in tech began with Android 
                development, which led me to pursue a deeper understanding of cloud technologies.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I specialize in implementing robust data protection measures, conducting compliance audits, and administering 
                Intune for device management. I'm known for streamlining IT operations, enhancing system performance, and 
                fostering seamless user onboarding processes.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not working with cloud technologies, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge through technical writing.
              </p>
            </div>
            <div className="bg-gray-900/80 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Personal Details</h3>
              <ul className="space-y-4">
                <li className="flex flex-wrap">
                  <span className="font-semibold w-32 flex-shrink-0">Name:</span>
                  <span className="text-gray-300">Sheefa Pathan</span>
                </li>
                <li className="flex flex-wrap">
                  <span className="font-semibold w-32 flex-shrink-0">Location:</span>
                  <span className="text-gray-300">Hyderabad, India</span>
                </li>
                <li className="flex flex-wrap">
                  <span className="font-semibold w-32 flex-shrink-0">Experience:</span>
                  <span className="text-gray-300">3+ years</span>
                </li>
                <li className="flex flex-wrap">
                  <span className="font-semibold w-32 flex-shrink-0">Email:</span>
                  <span className="text-gray-300 break-all">sheefapathan1224@gmail.com</span>
                </li>
                <li className="flex flex-wrap">
                  <span className="font-semibold w-32 flex-shrink-0">Phone:</span>
                  <span className="text-gray-300">+91-8793635445</span>
                </li>
                <li className="flex flex-wrap">
                  <span className="font-semibold w-32 flex-shrink-0">Languages:</span>
                  <span className="text-gray-300">English, Hindi, Marathi</span>
                </li>
                <li className="flex flex-wrap">
                  <span className="font-semibold w-32 flex-shrink-0">Availability:</span>
                  <span className="text-gray-300">Full-time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex items-center mb-12" data-aos="fade-right">
            <Code className="text-purple-400 mr-4 flex-shrink-0" size={28} />
            <h2 className="text-3xl font-bold">Skills & Technologies</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Azure Monitor", "Azure Security Center", "Azure Virtual Machines", "Azure Virtual Desktop (AVD)",
              "Office 365 Administration", "SharePoint Management", "Intune", "Autopilot Mode",
              "Azure AD", "Data Loss Prevention (DLP)", "Safetica", "CrowdStrike",
              "Python", "Java", "XML", "Firebase Integration",
              "Android Development", "Git", "AWS IAM", "AWS RDS",
              "AWS EC2", "AWS S3", "Audit Reports", "Compliance Management"
            ].map((skill, index) => (
              <div 
                key={index} 
                className="bg-gray-800/80 p-4 rounded-lg text-center hover:bg-gray-700/80 transition-colors"
                data-aos="zoom-in"
                data-aos-delay={index * 50}
              >
                <span className="text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="flex items-center mb-12" data-aos="fade-right">
            <Briefcase className="text-purple-400 mr-4 flex-shrink-0" size={28} />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/10 transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-gray-800 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 flex items-center"
                    >
                      <span className="mr-1">Demo</span>
                      <ExternalLink size={16} />
                    </a>
                    <a 
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 flex items-center"
                    >
                      <span className="mr-1">Code</span>
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex items-center mb-12" data-aos="fade-right">
            <Briefcase className="text-purple-400 mr-4 flex-shrink-0" size={28} />
            <h2 className="text-3xl font-bold">Work Experience</h2>
          </div>
          <div className="space-y-8">
            <div 
              className="bg-gray-800/80 p-6 rounded-lg"
              data-aos="fade-up"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-semibold">Cloud Support Engineer</h3>
                <span className="text-purple-400">Nov 2022 - Present</span>
              </div>
              <p className="text-gray-300 mb-4">Camptra Technologies, Hyderabad</p>
              <ul className="space-y-2 text-gray-400 list-disc pl-5">
                <li>Monitored Azure instances and virtual networks, ensuring optimal performance and security through Azure Monitor and Security Center.</li>
                <li>Administered Office 365 for user provisioning, licensing, and security compliance.</li>
                <li>Designed and deployed SharePoint sites, optimizing workflows and maintaining content governance.</li>
                <li>Implemented DLP policies, protecting over 10TB of sensitive data from breaches.</li>
                <li>Managed Azure AD for user access, group policies, and compliance audits.</li>
                <li>Deployed and optimized Azure Virtual Machines and Virtual Desktop environments for scalability and reliability.</li>
                <li>Streamlined employee onboarding by automating workstation setup and training.</li>
                <li>Reduced security incidents by 25% through proactive monitoring and DLP policy enforcement.</li>
              </ul>
            </div>
            
            <div 
              className="bg-gray-800/80 p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-semibold">Android Developer</h3>
                <span className="text-purple-400">June 2022 - Oct 2022</span>
              </div>
              <p className="text-gray-300 mb-4">StartMySafari Innovations Pvt. Ltd, Pune</p>
              <ul className="space-y-2 text-gray-400 list-disc pl-5">
                <li>Developed Android applications, including a bus and flight ticketing app, integrating APIs and Bluetooth printer functionality.</li>
                <li>Coordinated with teams to meet client expectations within tight deadlines.</li>
              </ul>
            </div>
            
            <div 
              className="bg-gray-800/80 p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-semibold">Jr Android Developer</h3>
                <span className="text-purple-400">March 2021 - Nov 2021</span>
              </div>
              <p className="text-gray-300 mb-4">IDelta, Pune</p>
              <ul className="space-y-2 text-gray-400 list-disc pl-5">
                <li>Designed and implemented new features for mobile applications, leading to a 20% increase in downloads.</li>
                <li>Worked closely with UI/UX designers to create user-friendly interfaces and ensure seamless functionality.</li>
              </ul>
            </div>
            
            <div 
              className="bg-gray-800/80 p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-semibold">Jr Android Developer</h3>
                <span className="text-purple-400">Dec 2019 - March 2021</span>
              </div>
              <p className="text-gray-300 mb-4">Vidya Infotech, Ahmednagar</p>
              <ul className="space-y-2 text-gray-400 list-disc pl-5">
                <li>Designed and launched mobile apps, leveraging Firebase tools for authentication and analytics.</li>
                <li>Published multiple applications on the Google Play Store, incorporating user feedback to optimize features.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="flex items-center mb-12" data-aos="fade-right">
            <GraduationCap className="text-purple-400 mr-4 flex-shrink-0" size={28} />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-8">
            <div 
              className="bg-gray-900/80 p-6 rounded-lg"
              data-aos="fade-up"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-semibold">Master's in Computer Science</h3>
                <span className="text-purple-400">2021</span>
              </div>
              <p className="text-gray-300 mb-2">RBNB College, Shrirampur (Pune University)</p>
            </div>
            
            <div 
              className="bg-gray-900/80 p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-semibold">Bachelor's in Computer Science</h3>
                <span className="text-purple-400">2019</span>
              </div>
              <p className="text-gray-300 mb-2">RBNB College, Shrirampur (Pune University)</p>
            </div>
            
            <div 
              className="bg-gray-900/80 p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-semibold">HSC (Class 12)</h3>
                <span className="text-purple-400">2016</span>
              </div>
              <p className="text-gray-300 mb-2">RBNB College, Shrirampur</p>
            </div>
            
            <div 
              className="bg-gray-900/80 p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-semibold">SSC (Class 10)</h3>
                <span className="text-purple-400">2014</span>
              </div>
              <p className="text-gray-300 mb-2">St. Xavier School, Shrirampur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex items-center mb-12" data-aos="fade-right">
            <Award className="text-purple-400 mr-4 flex-shrink-0" size={28} />
            <h2 className="text-3xl font-bold">Achievements</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div 
              className="bg-gray-900 p-6 rounded-lg text-center"
              data-aos="zoom-in"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2 counter">25%</div>
              <p className="text-gray-300">Reduced Security Incidents</p>
            </div>
            <div 
              className="bg-gray-900 p-6 rounded-lg text-center"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2 counter">10TB+</div>
              <p className="text-gray-300">Protected Data</p>
            </div>
            <div 
              className="bg-gray-900 p-6 rounded-lg text-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2 counter">3+</div>
              <p className="text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="flex items-center mb-12" data-aos="fade-right">
            <Mail className="text-purple-400 mr-4 flex-shrink-0" size={28} />
            <h2 className="text-3xl font-bold">Get In Touch</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div data-aos="fade-up">
              <p className="text-gray-300 mb-6">
                I'm currently available for new opportunities in cloud engineering and administration. 
                If you have a project that needs cloud expertise, or if you're looking to hire a 
                cloud professional, feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-purple-400 mr-4 flex-shrink-0" size={20} />
                  <a href="mailto:sheefapathan1224@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors break-all">
                    sheefapathan1224@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="text-purple-400 mr-4 flex-shrink-0" size={20} />
                  <a 
                    href="https://github.com/sheefa124" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-purple-400 transition-colors break-all"
                  >
                    github.com/sheefa124
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="text-purple-400 mr-4 flex-shrink-0" size={20} />
                  <a 
                    href="https://linkedin.com/in/sheefapathan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-purple-400 transition-colors break-all"
                  >
                    linkedin.com/in/sheefapathan
                  </a>
                </div>
                <div className="flex items-center">
                  <Twitter className="text-purple-400 mr-4 flex-shrink-0" size={20} />
                  <a 
                    href="https://x.com/_s_k_y_12_" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-purple-400 transition-colors break-all"
                  >
                    x.com/_s_k_y_12_
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="200">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your email"
                    required
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={formState.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message" 
                    rows={4}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your message"
                    required
                  ></textarea>
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={formState.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
                  disabled={formState.submitting}
                >
                  {formState.submitting ? 'Sending...' : formState.succeeded ? 'Message Sent!' : 'Send Message'}
                </button>
                {formState.succeeded && (
                  <p className="text-green-400 text-center mt-4">Thanks for your message! I'll get back to you soon.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Sheefa Pathan. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a 
              href="https://github.com/sheefa124" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/sheefapathan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400  transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://x.com/_s_k_y_12_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:sheefapathan1224@gmail.com" 
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;