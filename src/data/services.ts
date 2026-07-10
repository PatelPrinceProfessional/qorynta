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
}

export const services: ServiceData[] = [
  // ==========================================
  // CORE SERVICES
  // ==========================================
  {
    slug: 'custom-web-development',
    icon: Code,
    title: 'Custom Web Development',
    description: 'Pixel-perfect, performance-optimised websites and web apps built with React, Next.js, and Node.js.',
    longDescription: 'We build fast, secure, and scalable web applications tailored to your exact business needs. Leveraging modern JavaScript frameworks like React and Next.js, we ensure your web presence is not only visually stunning but also technically robust. Our development process prioritizes SEO, accessibility, and exceptional user experience across all devices.',
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
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Redis'],
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
    description: 'Native iOS & Android apps and cross-platform solutions using React Native and Flutter.',
    longDescription: 'Our mobile development team crafts native and cross-platform applications that deliver seamless experiences on iOS and Android. Whether you need a high-performance native app built with Swift/Kotlin or a cost-effective cross-platform solution using React Native or Flutter, we handle everything from UI/UX design to App Store deployment.',
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
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'SQLite'],
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
    longDescription: 'Design is more than just aesthetics; it\'s about solving problems and guiding users to their goals. Our UI/UX design process is rooted in user research and behavioral psychology. We create wireframes, interactive prototypes, and comprehensive design systems that ensure brand consistency and drive meaningful user interactions.',
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
    techStack: ['Figma', 'Adobe Creative Suite', 'Framer', 'Webflow'],
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
    description: 'Production-grade ML models, LLM integrations, fraud detection systems, and data pipelines.',
    longDescription: 'Transform your business operations with cutting-edge Artificial Intelligence and Machine Learning. We specialize in building and deploying custom ML models, integrating Large Language Models (LLMs) like OpenAI into existing workflows, and developing intelligent automation systems that save time and uncover hidden insights in your data.',
    tags: ['Python', 'TensorFlow', 'LLMs', 'FinTech'],
    features: [
      'Custom Machine Learning Model Development',
      'LLM (ChatGPT/Claude) Integration & Fine-tuning',
      'Predictive Analytics & Forecasting',
      'Computer Vision & Image Processing',
      'Natural Language Processing (NLP)',
      'Automated Data Pipelines & ETL'
    ],
    benefits: [
      'Automate repetitive tasks and reduce operational costs',
      'Gain competitive advantages through predictive insights',
      'Enhance customer service with intelligent chatbots',
      'Improve decision-making with data-driven models'
    ],
    process: [
      { title: 'Data Audit', desc: 'Assessing your current data quality and availability.' },
      { title: 'Model Selection', desc: 'Choosing the right algorithms or foundational models for the task.' },
      { title: 'Training & Fine-tuning', desc: 'Training the models on your proprietary datasets.' },
      { title: 'Integration', desc: 'Building the API layer to connect the AI with your software.' },
      { title: 'Monitoring', desc: 'Tracking model accuracy and preventing drift in production.' }
    ],
    techStack: ['Python', 'PyTorch', 'TensorFlow', 'OpenAI API', 'LangChain', 'Hugging Face'],
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
    longDescription: 'Ensure your applications are always online, secure, and ready to scale. Our DevOps engineers design robust cloud architectures on AWS, Google Cloud, and Azure. We implement modern CI/CD pipelines to automate testing and deployment, allowing your development team to ship features faster and more reliably.',
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
    techStack: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Jenkins'],
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
    description: 'High-converting online stores built on Shopify, WooCommerce, or custom stacks.',
    longDescription: 'Build a powerful online storefront that turns visitors into loyal customers. Whether you need a highly customized Shopify Plus setup, a robust WooCommerce integration, or a completely bespoke headless e-commerce platform, we deliver solutions optimized for speed, conversion, and seamless inventory management.',
    tags: ['Shopify', 'WooCommerce', 'Stripe', 'Razorpay'],
    features: [
      'Custom Theme Design & Development',
      'Headless E-commerce Architecture',
      'Secure Payment Gateway Integration (Stripe, Razorpay)',
      'Inventory & Order Management Systems (ERP syncing)',
      'Conversion Rate Optimization (CRO)',
      'B2B & Wholesale Portal Development'
    ],
    benefits: [
      'Frictionless checkout experiences increase sales',
      'Scalable platforms handle Black Friday traffic levels',
      'Automated inventory syncing reduces manual errors',
      'Deep analytics integration provides actionable sales data'
    ],
    process: [
      { title: 'Platform Selection', desc: 'Choosing between Shopify, Medusa, or custom builds based on SKU volume.' },
      { title: 'UI/UX Design', desc: 'Designing high-conversion product pages and checkout flows.' },
      { title: 'Development', desc: 'Building the frontend and integrating headless APIs.' },
      { title: 'ERP/CRM Integration', desc: 'Connecting inventory and customer data to your back office.' },
      { title: 'Launch & CRO', desc: 'Deploying the store and running A/B tests to maximize sales.' }
    ],
    techStack: ['Shopify Liquid', 'Next.js Commerce', 'Medusa.js', 'Stripe', 'Sanity CMS'],
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
    longDescription: 'We help enterprises harness the power of Generative AI. By utilizing advanced Retrieval-Augmented Generation (RAG) and fine-tuning techniques, we build secure, context-aware LLM applications that converse directly with your proprietary data—without leaking information to public models.',
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
    techStack: ['OpenAI API', 'Anthropic Claude', 'LangChain', 'Pinecone', 'Weaviate', 'Python'],
    faqs: [
      { q: 'Will the AI hallucinate?', a: 'By utilizing RAG, we force the AI to cite sources from your actual data, drastically reducing hallucinations.' },
      { q: 'Is our data secure?', a: 'Yes, we deploy inside your secure cloud VPC and use APIs that guarantee zero data retention for training.' }
    ],
    category: 'AI'
  },
  {
    slug: 'computer-vision',
    icon: Eye,
    title: 'Computer Vision',
    description: 'Automated image processing, object detection, and visual QA systems.',
    longDescription: 'Transform visual data into actionable insights. We build custom computer vision models for manufacturing QA, medical imaging, retail analytics, and autonomous monitoring. From edge device deployment to massive cloud-based image processing pipelines, we bring sight to your software.',
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
    techStack: ['PyTorch', 'OpenCV', 'YOLOv8', 'TensorRT', 'NVIDIA DeepStream'],
    faqs: [
      { q: 'Can you deploy on edge devices?', a: 'Yes, we optimize models to run efficiently on low-power devices like Raspberry Pi or NVIDIA Jetson.' }
    ],
    category: 'AI'
  },
  {
    slug: 'nlp-text-analysis',
    icon: Bot,
    title: 'NLP & Text Analysis',
    description: 'Sentiment analysis, entity extraction, and automated document processing.',
    longDescription: 'Unlock the value hidden in unstructured text. Our Natural Language Processing solutions can automatically classify support tickets, extract key entities from legal contracts, summarize financial reports, and gauge brand sentiment across social media.',
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
    techStack: ['spaCy', 'Hugging Face Transformers', 'NLTK', 'FastAPI'],
    faqs: [
      { q: 'Does this work for non-English languages?', a: 'Yes, we utilize multilingual models capable of processing dozens of languages accurately.' }
    ],
    category: 'AI'
  },
  {
    slug: 'ai-chatbots',
    icon: MessageSquare,
    title: 'AI Chatbots & Agents',
    description: 'Next-generation conversational interfaces that actually solve customer problems.',
    longDescription: 'Move beyond frustrating decision-tree bots. We build autonomous AI agents capable of understanding intent, executing API calls (like processing a refund or booking a flight), and conversing naturally with your customers across web, WhatsApp, and Slack.',
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
    techStack: ['Dialogflow', 'LangChain Agents', 'Twilio', 'WhatsApp Business API', 'React'],
    faqs: [
      { q: 'What happens if the AI does not know the answer?', a: 'We implement strict confidence thresholds. If the AI is unsure, it smoothly transitions the chat to a live human agent with full context.' }
    ],
    category: 'AI'
  }
];
