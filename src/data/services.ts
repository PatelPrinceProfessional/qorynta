import { 
  Code, 
  Smartphone, 
  Palette, 
  Brain, 
  Cloud, 
  ShoppingCart, 
  Package, 
  Link as LinkIcon, 
  Target,
  Shield,
  Bot,
  Eye,
  MessageSquare,
  Cpu,
  LucideIcon
} from 'lucide-react';

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  benefits: string[];
  process: { title: string; desc: string }[];
  techStack: string[];
  faqs: { q: string; a: string }[];
  category?: 'Core' | 'AI';
  seoTitle?: string;
  seoDescription?: string;
  seoSchema?: any;
}

export const services: ServiceData[] = [
  // ==========================================
  // CORE SERVICES
  // ==========================================
  {
    slug: 'custom-web-development',
    icon: Code,
    title: 'Custom Web Development',
    seoTitle: 'Custom Web Development Company India | React & Next.js | From $5K | Qorynta',
    seoDescription: 'Custom web apps built in React, Next.js & Node.js. 50+ delivered globally. From $5,000. 8-week delivery. Clutch verified at $25–49/hr. Get a free 30-min technical consultation.',
    description: 'Pixel-perfect, performance-optimised websites and web apps built with React, Next.js, and Node.js.',
    longDescription: 'We engineer lightning-fast, highly secure <mark class="bg-violet-500/15 text-violet-700 dark:text-violet-300 border border-violet-500/30 px-2 py-0.5 rounded-lg font-bold">Enterprise Web Applications</mark> tailored to your precise operational workflows. Leveraging <mark class="bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-lg font-bold">React & Next.js SSR Architectures</mark>, we guarantee sub-second load speeds, 100/100 Lighthouse performance, and <mark class="bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-lg font-bold">Maximum Conversion Rates</mark>.',
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    features: [
      'Single Page Applications (SPAs)',
      'Server-Side Rendering (SSR) for SEO',
      'Progressive Web Apps (PWAs)',
      'Custom Content Management Systems',
      'API-first Architecture',
      'Performance Optimization & Caching'
    ],
    benefits: [
      'Lightning-fast load times improve conversion rates',
      'Scalable architecture grows with your user base',
      'Secure backend protects sensitive customer data',
      'Accessible design expands your potential audience'
    ],
    process: [
      { title: 'Discovery & Architecture', desc: 'We map out your requirements and design a scalable database and system architecture.' },
      { title: 'UI/UX Design', desc: 'Our design team creates interactive prototypes tailored to your brand identity.' },
      { title: 'Agile Development', desc: 'We build the application in two-week sprints, providing regular demos.' },
      { title: 'Testing & QA', desc: 'Rigorous automated and manual testing across browsers and devices.' },
      { title: 'Deployment', desc: 'Seamless deployment to production with zero downtime.' }
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    faqs: [
      { q: 'How long does a custom web app take to build?', a: 'Depending on complexity, a standard web application takes 8-12 weeks from kickoff to launch.' },
      { q: 'Will the website be SEO friendly?', a: 'Yes, we use Next.js for server-side rendering, ensuring your site is fully optimized for search engines.' },
      { q: 'Do you provide hosting?', a: 'We typically deploy on AWS, Vercel, or Google Cloud, setting up the infrastructure under your own accounts.' }
    ],
    category: 'Core'
  },
  {
    slug: 'mobile-app-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    seoTitle: 'Mobile App Development Company India | Flutter & React Native | Qorynta',
    seoDescription: 'iOS & Android apps built with Flutter and React Native. 8-week delivery to App Store & Play Store. 50+ apps shipped for US, UK & UAE clients. Clutch verified. Free quote today.',
    description: 'Native iOS & Android apps and cross-platform solutions using React Native and Flutter.',
    longDescription: 'Our team crafts native and cross-platform mobile apps that deliver seamless UI/UX across iOS and Android. Utilizing <mark class="bg-violet-500/15 text-violet-700 dark:text-violet-300 border border-violet-500/30 px-2 py-0.5 rounded-lg font-bold">React Native & Flutter</mark>, we achieve 60fps performance and <mark class="bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-lg font-bold">Native Hardware Integration</mark> while cutting overall time-to-market by 40%.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
    features: [
      'Native iOS & Android Development',
      'Cross-Platform Frameworks (React Native, Flutter)',
      'Offline Support & Data Synchronization',
      'Push Notification Integration',
      'App Store & Play Store Deployment',
      'Post-Launch Maintenance & Updates'
    ],
    benefits: [
      'Reach users on their preferred devices',
      'Increase customer engagement and retention',
      'Leverage device-specific features (Camera, GPS)',
      'Streamlined development with cross-platform codebases'
    ],
    process: [
      { title: 'Requirements & Prototyping', desc: 'Defining app features and building a clickable prototype.' },
      { title: 'UI/UX Design', desc: 'Creating native-feeling interfaces that comply with Apple/Google guidelines.' },
      { title: 'Development', desc: 'Writing clean, efficient code for optimal performance.' },
      { title: 'QA & Device Testing', desc: 'Testing on real physical devices for varied screen sizes.' },
      { title: 'App Store Submission', desc: 'Handling the complex approval process for App Store and Google Play.' }
    ],
    techStack: ['React Native', 'Flutter', 'iOS Swift', 'Android Kotlin', 'GraphQL'],
    faqs: [
      { q: 'Should I choose Native or Cross-Platform?', a: 'For most B2B and consumer apps, React Native or Flutter is incredibly cost-effective. Native is best for heavy 3D rendering or deep hardware integration.' },
      { q: 'Do you handle App Store rejections?', a: 'Yes, we ensure all guidelines are followed and handle any appeals or necessary changes during submission.' }
    ],
    category: 'Core'
  },
  {
    slug: 'ui-ux-design',
    icon: Palette,
    title: 'UI/UX Design & Prototyping',
    description: 'Research-driven design that converts. We craft intuitive interfaces and design systems in Figma.',
    longDescription: 'We transform complex enterprise software into simple, intuitive user experiences through <mark class="bg-violet-500/15 text-violet-700 dark:text-violet-300 border border-violet-500/30 px-2 py-0.5 rounded-lg font-bold">Behavioral Psychology & User Research</mark>. We build production-ready <mark class="bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-lg font-bold">Figma Design Systems</mark> that accelerate engineering velocity and reduce user churn.',
    tags: ['Figma', 'Design Systems', 'Wireframing'],
    features: [
      'User Research & Persona Development',
      'Information Architecture & Wireframing',
      'High-Fidelity UI Design in Figma',
      'Interactive Prototyping & User Testing',
      'Scalable Design Systems & Component Libraries',
      'Accessibility (WCAG) Compliance Audits'
    ],
    benefits: [
      'Higher user satisfaction and reduced churn',
      'Increased conversion rates through intuitive flows',
      'Reduced development time with clear prototypes',
      'Consistent brand identity across all digital touchpoints'
    ],
    process: [
      { title: 'User Research', desc: 'Understanding your target audience through interviews and analytics.' },
      { title: 'Wireframing', desc: 'Mapping out the user journey and basic layout structure.' },
      { title: 'Visual Design', desc: 'Applying color theory, typography, and brand identity.' },
      { title: 'Prototyping', desc: 'Creating interactive Figma prototypes for stakeholder review.' },
      { title: 'Handoff', desc: 'Providing developers with pixel-perfect specs and a component library.' }
    ],
    techStack: ['Figma', 'Design Systems', 'Wireframing', 'Usability Testing', 'Prototyping'],
    faqs: [
      { q: 'Do you do branding as well?', a: 'Yes, we can establish brand guidelines, logos, and color palettes as part of the UX package.' },
      { q: 'Can I just hire you for design, without development?', a: 'Absolutely. We frequently act as the design arm for internal engineering teams.' }
    ],
    category: 'Core'
  },
  {
    slug: 'ai-machine-learning',
    icon: Brain,
    title: 'AI & Machine Learning Solutions',
    seoTitle: 'AI & Machine Learning Development India | 99.2% Model Accuracy | Qorynta',
    seoDescription: 'Production-grade AI and ML solutions: fraud detection (99.2% accuracy), LLM integrations, AI agents & generative AI for FinTech, SaaS & healthcare. Free architecture audit. $25–49/hr.',
    seoSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question", "name": "How much does AI development cost at Qorynta?", "acceptedAnswer": {"@type": "Answer", "text": "Qorynta offers AI and machine learning development at $25–49/hr (Clutch verified). Project-based pricing starts from $8,000 for custom ML models. Contact us for a free architecture audit."}},
        {"@type": "Question", "name": "How long does it take to build an AI model?", "acceptedAnswer": {"@type": "Answer", "text": "A basic ML model takes 4–8 weeks. Complex AI systems with custom training data and production deployment pipelines take 12–20 weeks."}},
        {"@type": "Question", "name": "Does Qorynta build generative AI and LLM integrations?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Qorynta builds custom ChatGPT-powered tools, LangChain pipelines, RAG systems, and AI agents using OpenAI, Anthropic, and open-source models."}},
        {"@type": "Question", "name": "What industries does Qorynta build AI for?", "acceptedAnswer": {"@type": "Answer", "text": "We specialize in AI for FinTech (fraud detection, risk scoring), healthcare (diagnostic tools, patient data analysis), SaaS (recommendation engines, churn prediction), and e-commerce (personalization, inventory forecasting)."}},
        {"@type": "Question", "name": "Can Qorynta deploy AI models to production on AWS or GCP?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Every AI model we build includes production deployment on your choice of AWS SageMaker, GCP Vertex AI, or Azure ML, with monitoring, logging, and CI/CD pipelines included."}}
      ]
    },
    description: 'Production-grade ML models, LLM integrations, fraud detection systems, and scalable data pipelines designed to optimize business operations.',
    longDescription: 'We deploy custom <mark class="bg-violet-500/15 text-violet-700 dark:text-violet-300 border border-violet-500/30 px-2 py-0.5 rounded-lg font-bold">Predictive Machine Learning Models</mark> that automate operational decision-making. From data prep to production MLOps, we build models that deliver <mark class="bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-lg font-bold">99%+ Accuracy</mark> for fraud detection and user analytics.',
    tags: ['Python', 'TensorFlow', 'LLMs', 'FinTech', 'Generative AI', 'Predictive Analytics'],
    features: [
      'Custom Machine Learning Model Development & Hyperparameter Optimization',
      'LLM (ChatGPT/Claude/Llama) Integration, Fine-tuning & Prompt Engineering',
      'Advanced Predictive Analytics, Demand Forecasting & Risk Assessment',
      'Computer Vision, Image Processing, & Automated Quality Inspection',
      'Natural Language Processing (NLP) & Sentiment Analysis Pipelines',
      'Automated Data Pipelines, ETL Workflows, & Big Data Processing'
    ],
    benefits: [
      'Dramatically automate repetitive operational workflows and reduce manual labor costs by up to 80%',
      'Empower leadership to make rapid, data-driven decisions utilizing real-time predictive analytics and forecasting',
      'Significantly enhance customer experience and satisfaction metrics with intelligent, context-aware AI support agents',
      'Maintain an industry-leading 99.2% model accuracy rate with our continuous production drift monitoring systems'
    ],
    process: [
      { title: 'Comprehensive Data Audit & Strategy', desc: 'We begin by rigorously assessing your current data infrastructure, evaluating data quality, volume, and availability to ensure it can support advanced machine learning models.' },
      { title: 'Algorithm & Foundation Model Selection', desc: 'Our AI architects select the optimal deep learning algorithms or foundational LLMs (open-source or proprietary) tailored specifically to your exact use case and budget.' },
      { title: 'Model Training, Fine-Tuning & Validation', desc: 'We iteratively train and heavily fine-tune the selected models utilizing your secure, proprietary datasets, continually testing against strict validation sets to prevent overfitting.' },
      { title: 'Seamless System Integration & API Development', desc: 'We engineer secure, high-performance API layers to seamlessly connect the newly trained AI models directly into your existing software ecosystem, web apps, or mobile platforms.' },
      { title: 'Production Deployment & Continuous Monitoring', desc: 'We deploy your models to highly scalable cloud environments and establish continuous monitoring protocols to track real-time accuracy and immediately correct any concept drift.' }
    ],
    techStack: ['Python', 'PyTorch', 'Scikit-Learn', 'MLOps', 'FastAPI'],
    faqs: [
      { q: 'Is my data safe when using LLMs?', a: 'We use enterprise-grade APIs (like Azure OpenAI) which guarantee your data is not used to train public models.' },
      { q: 'Do we need a massive dataset?', a: 'Not necessarily. With techniques like fine-tuning and RAG (Retrieval-Augmented Generation), we can leverage powerful models using relatively small amounts of your specific data.' }
    ],
    category: 'Core'
  },
  {
    slug: 'cloud-devops',
    icon: Cloud,
    title: 'Cloud Infrastructure & DevOps',
    description: 'Scalable AWS/GCP/Azure architecture, CI/CD pipelines, Docker/Kubernetes deployments.',
    longDescription: 'Architect resilient, auto-scaling cloud environments with <mark class="bg-violet-500/15 text-violet-700 dark:text-violet-300 border border-violet-500/30 px-2 py-0.5 rounded-lg font-bold">Kubernetes & Terraform IaC</mark>. We eliminate deployment downtime, enforce zero-trust security, and achieve <mark class="bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-lg font-bold">99.99% Infrastructure Uptime</mark>.',
    tags: ['AWS', 'GCP', 'Docker', 'Kubernetes'],
    features: [
      'Cloud Architecture Design (AWS, GCP, Azure)',
      'Containerization (Docker) & Orchestration (Kubernetes)',
      'Continuous Integration / Continuous Deployment (CI/CD)',
      'Infrastructure as Code (Terraform, CloudFormation)',
      '24/7 Monitoring & Incident Response Configuration',
      'Security Audits & Compliance Implementation'
    ],
    benefits: [
      'Zero-downtime deployments ensure uninterrupted service',
      'Auto-scaling infrastructure handles traffic spikes effortlessly',
      'Reduced server costs through resource optimization',
      'Enhanced security posture and compliance'
    ],
    process: [
      { title: 'Infrastructure Audit', desc: 'Evaluating current hosting for bottlenecks and security risks.' },
      { title: 'Architecture Design', desc: 'Designing a scalable, fault-tolerant cloud architecture.' },
      { title: 'CI/CD Implementation', desc: 'Automating the build, test, and deployment phases.' },
      { title: 'Migration', desc: 'Safely moving databases and applications with minimal downtime.' },
      { title: 'Monitoring Setup', desc: 'Configuring Datadog, CloudWatch, or Grafana alerts.' }
    ],
    techStack: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD GitHub Actions'],
    faqs: [
      { q: 'Can you help us migrate from on-premise to the cloud?', a: 'Yes, we specialize in lift-and-shift as well as cloud-native refactoring.' },
      { q: 'How do you handle security?', a: 'We implement zero-trust networking, regular vulnerability scanning, and strict IAM policies.' }
    ],
    category: 'Core'
  },
  {
    slug: 'e-commerce-solutions',
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'High-converting online stores built on Shopify Plus, WooCommerce, or highly scalable custom headless stacks.',
    longDescription: 'Construct a formidable, high-converting online storefront that seamlessly transforms casual visitors into highly loyal, repeat customers. At Qorynta, we recognize that modern e-commerce is about much more than a digital catalog; it requires a lightning-fast, ultra-secure, and highly intuitive user experience. Whether your enterprise requires a highly customized Shopify Plus ecosystem designed for massive global traffic, a robust WooCommerce integration tailored for complex product variations, or a completely bespoke, headless e-commerce architecture utilizing Next.js and Medusa.js for unparalleled frontend performance, we deliver end-to-end solutions. We optimize every pixel for speed, conversion rate optimization (CRO), and seamless mobile responsiveness. Furthermore, we deeply integrate your storefront with critical backend systems, including third-party logistics (3PL) providers, Enterprise Resource Planning (ERP) software, and Customer Relationship Management (CRM) tools to ensure your inventory management and fulfillment pipelines are fully automated and utterly flawless.',
    tags: ['Shopify Plus', 'WooCommerce', 'Headless E-commerce', 'Stripe', 'Next.js Commerce'],
    features: [
      'Bespoke Theme Design, Development, and Advanced UI/UX Optimization',
      'High-Performance Headless E-commerce Architecture utilizing Next.js and Vercel',
      'Highly Secure, PCI-Compliant Payment Gateway Integrations (Stripe, Razorpay, PayPal)',
      'Complex Inventory, ERP, and Order Management System (OMS) API Synchronizations',
      'Data-Driven Conversion Rate Optimization (CRO) and A/B Testing Implementation',
      'Robust B2B Wholesale Portal Development with Custom Tiered Pricing Logic'
    ],
    benefits: [
      'Deliver frictionless, one-click checkout experiences that drastically reduce cart abandonment and increase top-line sales',
      'Rely on infinitely scalable, cloud-native platforms that effortlessly handle massive Black Friday and holiday traffic spikes',
      'Eliminate manual data entry errors and reduce overhead through automated, real-time inventory and fulfillment syncing',
      'Unlock deep, actionable business intelligence through comprehensive analytics and customized sales dashboard integrations'
    ],
    process: [
      { title: 'Platform Evaluation & Strategic Architecture Selection', desc: 'We consult deeply with your team to evaluate and select the optimal platform (Shopify, Medusa, WooCommerce, or Custom) based on your exact SKU volume, traffic projections, and integration needs.' },
      { title: 'Conversion-Centric UI/UX Design & Prototyping', desc: 'Our elite design team crafts visually stunning, high-conversion product landing pages, intuitive navigation structures, and optimized, multi-step checkout flows.' },
      { title: 'Frontend Engineering & Headless API Integration', desc: 'Our developers rapidly build the lightning-fast frontend application and seamlessly integrate it with highly secure, scalable headless backend APIs and database systems.' },
      { title: 'Complex ERP, CRM & Logistics Integration', desc: 'We meticulously connect your new storefront to your existing back-office software, ensuring customer data, inventory levels, and shipping logistics synchronize flawlessly.' },
      { title: 'Rigorous Testing, Deployment & Ongoing CRO', desc: 'We subject the platform to extreme load testing and security audits prior to launch, followed by continuous A/B testing post-launch to continually maximize your digital sales.' }
    ],
    techStack: ['Shopify Liquid', 'Next.js Commerce', 'Medusa.js', 'Stripe API', 'Sanity CMS', 'PostgreSQL', 'Redis'],
    faqs: [
      { q: 'Do you build headless e-commerce?', a: 'Yes, we frequently build Next.js frontends powered by Shopify or Medusa.js backends for maximum performance.' },
      { q: 'Can you migrate our store from Magento?', a: 'Absolutely. We handle secure data migration for products, customers, and order history.' }
    ],
    category: 'Core'
  },
  {
    slug: 'saas-development',
    icon: Package,
    title: 'SaaS Product Development',
    description: 'Full-cycle SaaS builds from MVP to scale — architecture, auth, billing, multi-tenancy.',
    longDescription: 'Launch your Software-as-a-Service product with a solid foundation. We handle the complexities of SaaS development, including multi-tenant architectures, subscription billing, role-based access control (RBAC), and comprehensive admin dashboards, allowing you to focus on acquiring customers.',
    tags: ['Subscription', 'Multi-tenant', 'REST APIs'],
    features: [
      'Multi-tenant Database Architecture',
      'Subscription Billing & Invoicing (Stripe Billing)',
      'Secure Authentication & Role-Based Access Control',
      'Comprehensive Admin & Analytics Dashboards',
      'Automated Onboarding Flows',
      'Third-party App Integrations'
    ],
    benefits: [
      'Faster time-to-market for your MVP',
      'Enterprise-grade security builds trust with large clients',
      'Flexible billing engines support complex pricing tiers',
      'Scalable architecture supports rapid user growth'
    ],
    process: [
      { title: 'Scoping the MVP', desc: 'Defining the core features needed to validate your product.' },
      { title: 'Architecture Planning', desc: 'Designing multi-tenant databases and auth layers.' },
      { title: 'Development', desc: 'Building the core SaaS logic, dashboard, and billing engine.' },
      { title: 'Security Audit', desc: 'Testing for data isolation and vulnerability flaws.' },
      { title: 'Launch', desc: 'Deploying the MVP and setting up analytics.' }
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe Billing', 'Auth0', 'AWS'],
    faqs: [
      { q: 'How long does a SaaS MVP take?', a: 'Typically 10-14 weeks depending on the feature set.' },
      { q: 'Who owns the IP?', a: 'You retain 100% ownership of the codebase and intellectual property upon final payment.' }
    ],
    category: 'Core'
  },
  {
    slug: 'api-integration',
    icon: LinkIcon,
    title: 'API Development & Integration',
    description: 'RESTful and GraphQL APIs, third-party integrations, and microservice architecture.',
    longDescription: 'Connect your disparate systems into a unified ecosystem. We build robust, well-documented RESTful and GraphQL APIs that allow your internal services to communicate seamlessly. Additionally, we integrate powerful third-party tools like CRMs, ERPs, and communication platforms to automate your business workflows.',
    tags: ['REST', 'GraphQL', 'Webhooks', 'OAuth'],
    features: [
      'Custom RESTful & GraphQL API Design',
      'Legacy System Modernization & API Wrapping',
      'Third-Party API Integration (CRM, ERP, Payment)',
      'Microservices Architecture Setup',
      'API Documentation (Swagger/OpenAPI)',
      'Rate Limiting, Caching & Security'
    ],
    benefits: [
      'Eliminate data silos by connecting different software',
      'Automate workflows across departments',
      'Provide secure access to your data for partners',
      'Future-proof architecture with decoupled services'
    ],
    process: [
      { title: 'System Analysis', desc: 'Mapping out data flow and integration points.' },
      { title: 'API Design', desc: 'Drafting Swagger/OpenAPI specifications.' },
      { title: 'Development', desc: 'Building endpoints with strict validation and error handling.' },
      { title: 'Testing', desc: 'Automated integration testing and load testing.' },
      { title: 'Documentation', desc: 'Providing clear docs for your internal team or third parties.' }
    ],
    techStack: ['Node.js', 'NestJS', 'GraphQL', 'Postman', 'Swagger', 'Redis'],
    faqs: [
      { q: 'Can you integrate with legacy ERPs?', a: 'Yes, if the ERP lacks a modern API, we can often build a wrapper or use database triggers to sync data securely.' }
    ],
    category: 'Core'
  },
  {
    slug: 'it-consulting',
    icon: Target,
    title: 'IT Consulting & Digital Strategy',
    description: 'Technology audits, digital transformation roadmaps, tech stack advisory.',
    longDescription: 'Make informed technology decisions that align with your business goals. Our strategic consulting services help startups and enterprises navigate the complex digital landscape. From providing Fractional CTO services to conducting deep-dive code audits, we provide the technical leadership needed to ensure your investments yield maximum returns.',
    tags: ['Tech Audit', 'CTO-as-a-Service', 'Roadmapping'],
    features: [
      'Fractional CTO / Technical Leadership',
      'Comprehensive Codebase & Security Audits',
      'Digital Transformation Roadmapping',
      'Technology Stack Selection & Evaluation',
      'Agile Methodology Implementation',
      'Vendor & Team Assessment'
    ],
    benefits: [
      'Avoid costly technical debt with expert guidance',
      'Align your technology roadmap with business objectives',
      'Accelerate development velocity with optimized processes',
      'Gain executive-level tech leadership without the full-time cost'
    ],
    process: [
      { title: 'Discovery', desc: 'Understanding your business goals and current tech landscape.' },
      { title: 'Deep Audit', desc: 'Reviewing code, architecture, and team workflows.' },
      { title: 'Strategy Formulation', desc: 'Creating a 6-12 month technical roadmap.' },
      { title: 'Execution Guidance', desc: 'Advising your team on implementation or taking it over directly.' },
      { title: 'Ongoing Advisory', desc: 'Regular check-ins to steer technology decisions.' }
    ],
    techStack: ['Jira', 'Confluence', 'Lucidchart', 'SonarQube', 'Datadog'],
    faqs: [
      { q: 'Do you offer Fractional CTO services?', a: 'Yes, we can provide senior technical leadership on a part-time basis.' }
    ],
    category: 'Core'
  },
  {
    slug: 'cybersecurity-solutions',
    icon: Shield,
    title: 'Cybersecurity Solutions',
    description: 'Enterprise-grade security audits, penetration testing, compliance implementation.',
    longDescription: 'Protect your digital assets with our comprehensive cybersecurity services. We conduct rigorous penetration testing, vulnerability assessments, and implement robust security protocols to safeguard your infrastructure. From ensuring SOC2 and GDPR compliance to real-time threat monitoring and mitigation, we provide the peace of mind you need to scale securely.',
    tags: ['Pen Testing', 'Compliance', 'Audits'],
    features: [
      'Comprehensive Vulnerability Assessments',
      'Advanced Penetration Testing (Web & API)',
      'SOC2, HIPAA, & GDPR Compliance Readiness',
      'Zero-Trust Architecture Implementation',
      'Real-Time Threat Monitoring & SIEM',
      'Incident Response & Disaster Recovery Planning'
    ],
    benefits: [
      'Mitigate financial and reputational risks of data breaches',
      'Build trust with enterprise clients through proven compliance',
      'Identify and patch vulnerabilities before they are exploited',
      'Ensure rapid recovery in the event of an incident'
    ],
    process: [
      { title: 'Initial Assessment', desc: 'Running automated vulnerability scans across your infrastructure.' },
      { title: 'Penetration Testing', desc: 'Manual ethical hacking to find logical flaws.' },
      { title: 'Remediation Plan', desc: 'Providing a prioritized list of patches and fixes.' },
      { title: 'Compliance Mapping', desc: 'Aligning security controls with SOC2 or HIPAA requirements.' },
      { title: 'Final Certification', desc: 'Re-testing to ensure all vulnerabilities are closed.' }
    ],
    techStack: ['Burp Suite', 'OWASP ZAP', 'Metasploit', 'Nessus', 'AWS GuardDuty'],
    faqs: [
      { q: 'Can you help us get SOC2 Type II?', a: 'Yes, we help implement the technical controls and logging required for a successful SOC2 audit.' }
    ],
    category: 'Core'
  },

  // ==========================================
  // AI SUB-SERVICES
  // ==========================================
  {
    slug: 'generative-ai',
    icon: Cpu,
    title: 'Generative AI & LLMs',
    description: 'Fine-tuned Large Language Models, RAG systems, and custom AI agents.',
    longDescription: 'Harness enterprise LLMs with secure <mark class="bg-violet-500/15 text-violet-700 dark:text-violet-300 border border-violet-500/30 px-2 py-0.5 rounded-lg font-bold">Retrieval-Augmented Generation (RAG)</mark> pipelines. Query your proprietary company data with complete privacy, zero hallucinations, and <mark class="bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-lg font-bold">Sub-100ms Vector DB Searches</mark>.',
    tags: ['OpenAI', 'RAG', 'LangChain', 'Vector DBs'],
    features: [
      'Retrieval-Augmented Generation (RAG) Systems',
      'Proprietary Data Ingestion & Vector Search',
      'Fine-Tuning Open Source Models (Llama, Mistral)',
      'Multi-Agent System Architecture',
      'Prompt Engineering & Guardrails',
      'Enterprise Security & Data Isolation'
    ],
    benefits: [
      'Instantly query thousands of internal documents',
      'Automate content generation and reporting',
      'Maintain strict data privacy and IP security',
      'Reduce hallucination through grounded contextual data'
    ],
    process: [
      { title: 'Use Case Definition', desc: 'Identifying the highest ROI opportunity for Generative AI.' },
      { title: 'Data Prep & Vectorization', desc: 'Cleaning your data and storing it in a vector database.' },
      { title: 'RAG Architecture', desc: 'Building the retrieval pipeline with LangChain/LlamaIndex.' },
      { title: 'Testing Guardrails', desc: 'Ensuring the AI does not hallucinate or output unsafe content.' },
      { title: 'Deployment', desc: 'Hosting securely on AWS/Azure.' }
    ],
    techStack: ['OpenAI', 'RAG Architecture', 'LangChain', 'Pinecone', 'Vector DBs'],
    faqs: [
      { q: 'Will the AI hallucinate?', a: 'By utilizing RAG, we force the AI to cite sources from your actual data, drastically reducing hallucinations.' },
      { q: 'Is our data secure?', a: 'Yes, we deploy inside your secure cloud VPC and use APIs that guarantee zero data retention for training.' }
    ],
    category: 'AI'
  },
  {
    slug: 'computer-vision',
    icon: Eye,
    title: 'Computer Vision & Video Analytics',
    description: 'Automated image processing, object detection, and visual QA systems.',
    longDescription: 'Automate visual inspections and real-time tracking using <mark class="bg-violet-500/15 text-violet-700 dark:text-violet-300 border border-violet-500/30 px-2 py-0.5 rounded-lg font-bold">OpenCV & YOLOv8 Neural Networks</mark>. Process high-definition video feeds at the edge with <mark class="bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-lg font-bold">Zero Latency Processing</mark>.',
    tags: ['OpenCV', 'YOLO', 'Image Processing'],
    features: [
      'Object Detection & Tracking',
      'Facial Recognition & Biometrics (Privacy-compliant)',
      'Optical Character Recognition (OCR)',
      'Defect Detection in Manufacturing',
      'Edge AI Deployment (NVIDIA Jetson)',
      'Video Stream Analytics'
    ],
    benefits: [
      'Automate visual inspection with 99.9% accuracy',
      'Extract structured data from thousands of scanned documents',
      'Monitor physical environments in real-time',
      'Reduce manual labor in QA processes'
    ],
    process: [
      { title: 'Dataset Gathering', desc: 'Collecting representative images/video for the task.' },
      { title: 'Annotation', desc: 'Labeling the data to train the model.' },
      { title: 'Model Training', desc: 'Training CNNs or Transformer models on the dataset.' },
      { title: 'Optimization', desc: 'Compressing the model for speed (TensorRT/ONNX).' },
      { title: 'Integration', desc: 'Deploying the vision pipeline to the edge or cloud.' }
    ],
    techStack: ['OpenCV', 'YOLOv8', 'TensorFlow', 'Edge AI', 'CUDA'],
    faqs: [
      { q: 'Can you deploy on edge devices?', a: 'Yes, we optimize models to run efficiently on low-power devices like Raspberry Pi or NVIDIA Jetson.' }
    ],
    category: 'AI'
  },
  {
    slug: 'nlp-text-analysis',
    icon: Bot,
    title: 'NLP & Sentiment Analysis',
    description: 'Sentiment analysis, entity extraction, and automated document processing.',
    longDescription: 'Extract structured insights from unstructured documents with <mark class="bg-violet-500/15 text-violet-700 dark:text-violet-300 border border-violet-500/30 px-2 py-0.5 rounded-lg font-bold">BERT & Transformer Models</mark>. Automate document parsing, sentiment classification, and <mark class="bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-lg font-bold">Multilingual Data Extraction</mark>.',
    tags: ['Spacy', 'Hugging Face', 'BERT'],
    features: [
      'Automated Text Classification & Routing',
      'Named Entity Recognition (NER)',
      'Sentiment & Emotion Analysis',
      'Document Summarization',
      'Language Translation Pipelines',
      'Topic Modeling'
    ],
    benefits: [
      'Instantly route customer support tickets to the right department',
      'Process thousands of documents in seconds',
      'Monitor brand health across the web automatically',
      'Standardize unstructured data inputs'
    ],
    process: [
      { title: 'Corpus Analysis', desc: 'Analyzing your specific text formats and jargon.' },
      { title: 'Pipeline Design', desc: 'Setting up the tokenization and extraction steps.' },
      { title: 'Model Fine-tuning', desc: 'Adapting models like BERT to your domain.' },
      { title: 'Validation', desc: 'Measuring Precision, Recall, and F1 scores.' },
      { title: 'API Delivery', desc: 'Deploying the NLP model as a scalable REST API.' }
    ],
    techStack: ['Hugging Face', 'BERT', 'SpaCy', 'Entity Recognition', 'FastAPI'],
    faqs: [
      { q: 'Does this work for non-English languages?', a: 'Yes, we utilize multilingual models capable of processing dozens of languages accurately.' }
    ],
    category: 'AI'
  },
  {
    slug: 'ai-chatbots',
    icon: Bot,
    title: 'AI Chatbots & Agents',
    seoTitle: 'AI Chatbot Development Company India | Custom LLM Bots | Qorynta',
    seoDescription: 'Custom AI chatbots powered by GPT-4, Claude & open-source LLMs. Deployed for customer support, lead gen & internal tools. 80% support ticket reduction for clients. Free demo.',
    description: 'Intelligent, context-aware chatbots powered by Large Language Models (LLMs).',
    longDescription: 'Deploy autonomous customer support agents that resolve <mark class="bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-lg font-bold">80%+ of Inbound Inquiries</mark> automatically. Integrated directly into CRM systems with human-in-the-loop fallback and <mark class="bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-lg font-bold">Contextual Multi-Turn Memory</mark>.',
    tags: ['Conversational AI', 'Agents', 'WhatsApp'],
    features: [
      'Intent Recognition & Dialog Management',
      'Multi-channel Deployment (Web, WhatsApp, Slack)',
      'Action Execution (API Integration)',
      'Human Handoff Protocols',
      'Voice-to-Text Integration',
      'Analytics & Conversation Mining'
    ],
    benefits: [
      'Deflect 60%+ of routine support queries',
      'Provide 24/7 instant customer service',
      'Increase lead generation and qualification speed',
      'Seamlessly hand off complex issues to human agents'
    ],
    process: [
      { title: 'Persona Design', desc: 'Defining the tone and personality of your AI agent.' },
      { title: 'Knowledge Base Setup', desc: 'Ingesting your FAQs and support docs.' },
      { title: 'Tool Integration', desc: 'Giving the AI agent API access to internal systems.' },
      { title: 'Simulated Testing', desc: 'Testing edge cases and adversarial inputs.' },
      { title: 'Deployment', desc: 'Pushing to WhatsApp Business API or Web Widget.' }
    ],
    techStack: ['LangGraph', 'LlamaIndex', 'Zendesk API', 'WebSockets', 'Python'],
    faqs: [
      { q: 'What happens if the AI does not know the answer?', a: 'We implement strict confidence thresholds. If the AI is unsure, it smoothly transitions the chat to a live human agent with full context.' }
    ],
    category: 'AI'
  },
  {
    slug: 'ecommerce-solutions',
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    seoTitle: 'E-Commerce Development Company India | Shopify & Custom Platforms | Qorynta',
    seoDescription: 'Custom e-commerce platforms that generate revenue 24/7. Shopify, WooCommerce & bespoke builds. Average 3.2x conversion uplift for clients. From $5,000. Get a free audit.',
    description: 'Custom e-commerce platforms that generate revenue 24/7. Shopify, WooCommerce & bespoke builds.',
    longDescription: 'We build highly scalable e-commerce platforms designed to maximize conversion rates and revenue. From headless Shopify setups to fully custom bespoke marketplaces, our solutions integrate deeply with your CRM, inventory, and payment gateways to deliver a frictionless shopping experience.',
    tags: ['Shopify', 'React', 'Next.js', 'Stripe'],
    features: [
      'Custom Storefront Development',
      'Headless E-Commerce Architecture',
      'Payment Gateway Integration',
      'Inventory & CRM Sync',
      'Performance & Conversion Optimization'
    ],
    benefits: [
      'Increase conversion rates and average order value',
      'Handle high traffic during sales events effortlessly',
      'Streamline back-office operations with automation',
      'Deliver lightning-fast shopping experiences'
    ],
    process: [
      { title: 'Strategy', desc: 'Analyzing your target audience and product catalog.' },
      { title: 'Design', desc: 'Creating a high-converting UI/UX optimized for mobile.' },
      { title: 'Development', desc: 'Building the storefront and integrating backend APIs.' },
      { title: 'Testing', desc: 'End-to-end testing of the checkout flow.' }
    ],
    techStack: ['Next.js', 'Shopify Plus', 'Stripe', 'Node.js'],
    faqs: [
      { q: 'Do you work with Shopify?', a: 'Yes, we specialize in both standard Shopify development and Headless Shopify builds using Next.js.' },
      { q: 'Can you migrate my existing store?', a: 'Absolutely. We safely migrate data, customers, and orders from legacy platforms to modern stacks.' }
    ],
    category: 'Core'
  }
];

