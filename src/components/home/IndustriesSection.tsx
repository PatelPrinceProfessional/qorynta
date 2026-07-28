import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const techCategories = [
  'Front-end',
  'Back-end',
  'Database',
  'Cloud-Hosting',
  'Testing',
  'Artificial Intelligence'
] as const;

type TechCategory = typeof techCategories[number];

interface TechItem {
  name: string;
  icon: string;
  color: string;
}

const techStack: Record<TechCategory, TechItem[]> = {
  'Front-end': [
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', color: '#61DAFB' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg', color: '#DD0031' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg', color: '#4FC08D' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', color: '#000000' },
    { name: 'Nuxt.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg', color: '#00C58E' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', color: '#3178C6' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', color: '#E34F26' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg', color: '#7952B3' },
  ],
  'Back-end': [
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', color: '#339933' },
    { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg', color: '#E0234E' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', color: '#000000' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', color: '#3776AB' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg', color: '#092E20' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', color: '#007396' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg', color: '#6DB33F' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', color: '#777BB4' },
    { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg', color: '#E10098' },
  ],
  'Database': [
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', color: '#4479A1' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', color: '#4169E1' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', color: '#47A248' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg', color: '#FFCA28' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg', color: '#DC382D' },
    { name: 'Elasticsearch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg', color: '#005571' },
    { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg', color: '#003B57' },
    { name: 'Oracle DB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg', color: '#F80000' },
    { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg', color: '#3ECF8E' },
  ],
  'Cloud-Hosting': [
    { name: 'Amazon AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', color: '#232F3E' },
    { name: 'Microsoft Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg', color: '#0089D6' },
    { name: 'Google GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg', color: '#4285F4' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', color: '#2496ED' },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5' },
    { name: 'DigitalOcean', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg', color: '#0080FF' },
    { name: 'Cloudflare', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg', color: '#F38020' },
    { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg', color: '#009639' },
  ],
  'Testing': [
    { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg', color: '#C21325' },
    { name: 'Cypress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg', color: '#17202C' },
    { name: 'Selenium', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg', color: '#43B02A' },
    { name: 'Mocha', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mocha/mocha-plain.svg', color: '#8D6748' },
    { name: 'BrowserStack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/browserstack/browserstack-original.svg', color: '#000000' },
    { name: 'JUnit', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', color: '#25A162' },
    { name: 'Cucumber', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cucumber/cucumber-plain.svg', color: '#23D96C' },
  ],
  'Artificial Intelligence': [
    { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg', color: '#FF6F00' },
    { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg', color: '#EE4C2C' },
    { name: 'Keras', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg', color: '#D00000' },
    { name: 'OpenAI', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg', color: '#000000' },
    { name: 'Google AI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg', color: '#4285F4' },
    { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg', color: '#5C3EE8' },
    { name: 'spaCy', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/spacy.svg', color: '#09A3D5' },
  ]
};

// Subcomponent: Kinetic 3D Hover Card
const TechCard = ({ tech, index }: { tech: TechItem; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate tilt angles based on mouse position relative to center
    const rotateX = ((y - centerY) / centerY) * -12; // max 12 deg tilt
    const rotateY = ((x - centerX) / centerX) * 12;

    setStyle({
      '--x-rotation': `${rotateX}deg`,
      '--y-rotation': `${rotateY}deg`,
      '--glow-color': tech.color,
    });
  };

  const handleMouseLeave = () => {
    // Reset tilt and glow smoothly
    setStyle({
      '--x-rotation': '0deg',
      '--y-rotation': '0deg',
      '--glow-color': 'transparent',
    });
  };

  return (
    // Outer wrapper handles the "Pop-and-Stagger" entry animation cleanly
    // without overriding the dynamic 3D transform applied on hover.
    <div
      className="pop-entrance"
      style={{ '--card-index': index } as React.CSSProperties}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="tech-card group h-full w-full bg-slate-50 dark:bg-card/40 border border-slate-300 dark:border-border/80/60 shadow-sm hover:bg-white dark:hover:bg-slate-800 rounded-xl p-8 flex flex-col items-center justify-center cursor-default will-change-transform"
        style={style as React.CSSProperties}
      >
        <img src={tech.icon} alt="" aria-hidden="true" width={40} height={40} loading="lazy" className="w-10 h-10 mb-4 object-contain pointer-events-none drop-shadow-sm" />
        <span className="text-sm font-semibold text-slate-700 dark:text-muted-foreground group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors duration-300 text-center pointer-events-none">
          {tech.name}
        </span>
      </div>
    </div>
  );
};

export const IndustriesSection = () => {
  const [activeTab, setActiveTab] = useState<TechCategory>('Front-end');
  const [displayTechs, setDisplayTechs] = useState<TechItem[]>(techStack['Front-end']);
  const [tabBounds, setTabBounds] = useState({ left: 0, width: 0 });

  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Calculate position for the "Liquid Shift" pill
  useEffect(() => {
    const activeIndex = techCategories.indexOf(activeTab);
    const activeElement = tabsRef.current[activeIndex];
    const container = tabsContainerRef.current;

    if (activeElement && container) {
      // Offset relative to the scrolling container
      setTabBounds({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
      });
    }
  }, [activeTab]);

  const handleTabClick = (category: TechCategory) => {
    if (category === activeTab) return;

    // We immediately update state because the entry animation 
    // applies automatically via the React DOM diffing mechanism 
    // when the key is re-mounted.
    setActiveTab(category);
    setDisplayTechs(techStack[category]);
  };

  return (
    <section className="py-24 bg-[#F9FAFB] dark:bg-background transition-colors duration-500 font-sans overflow-hidden">

      <style dangerouslySetInnerHTML={{
        __html: `
        /* Pop-and-Stagger Entry Animation */
        @keyframes popEntrance {
          0% { opacity: 0; transform: scale(0.92); }
          100% { opacity: 1; transform: scale(1); }
        }
        .pop-entrance {
          opacity: 0;
          animation: popEntrance 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          animation-delay: calc(var(--card-index) * 40ms);
          will-change: transform, opacity;
        }

        /* Kinetic Hover Card Mechanics */
        .tech-card {
          transform: perspective(1000px) rotateX(var(--x-rotation, 0deg)) rotateY(var(--y-rotation, 0deg)) scale(1);
          transition: transform 0.15s ease-out, background-color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.02);
        }
        .tech-card:hover {
          /* The Chameleon Shadow Glow */
          box-shadow: 0 20px 50px -15px var(--glow-color, rgba(0,0,0,0.15));
          transform: perspective(1000px) rotateX(var(--x-rotation)) rotateY(var(--y-rotation)) scale(1.04);
          z-index: 10;
        }
      `}} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Header Layout (Split Flex) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-sm font-semibold tracking-wider text-blue-700 dark:text-blue-500 uppercase">
                Our Tech Stack
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-foreground leading-tight transition-colors duration-500">
              Empowering Ambition,<br />Transforming Potential.
            </h2>
          </div>
          <div className="md:w-1/3">
            <p className="text-lg text-slate-500 dark:text-muted-foreground font-medium leading-relaxed pb-2 transition-colors duration-500">
              Explore our recent case studies in our <Link to="/case-studies" className="font-bold text-blue-600 dark:text-blue-400 hover:underline">Portfolio</Link> to see how we build enterprise software, or <Link to="/contact" className="font-bold text-blue-600 dark:text-blue-400 hover:underline">Contact Us</Link> to get a free technical scoping call.
            </p>
          </div>
        </div>

        {/* Tab Navigation with Liquid Shift */}
        <div className="mb-12 overflow-x-auto pb-4 scrollbar-hide relative" ref={tabsContainerRef}>
          <div className="flex items-center gap-2 p-1 w-max relative rounded-full border border-slate-200/60 dark:border-border/80/60 bg-white dark:bg-card/50 shadow-sm transition-colors duration-500">

            {/* The Liquid Shift Pill Background */}
            <div
              className="absolute top-1 bottom-1 bg-blue-600 rounded-full shadow-md shadow-blue-600/20 will-change-transform"
              style={{
                left: 0,
                width: '1px',
                transform: `translateX(${tabBounds.left}px) scaleX(${tabBounds.width})`,
                transformOrigin: 'left center',
                transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            />

            {techCategories.map((category, idx) => {
              const isActive = activeTab === category;
              return (
                <button
                  key={category}
                  ref={(el) => { tabsRef.current[idx] = el; }}
                  onClick={() => handleTabClick(category)}
                  className={`
                    relative z-10 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ease-out whitespace-nowrap
                    ${isActive ? 'text-white' : 'text-slate-600 dark:text-muted-foreground hover:text-slate-900 dark:hover:text-slate-100'}
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid System with Staggered Remount */}
        <div
          key={activeTab} // Force remount on tab change to trigger pop-entrance animations reliably
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6"
        >
          {displayTechs.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};
