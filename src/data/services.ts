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
}

export const services: ServiceData[] = [
  {
    slug: 'custom-web-development',
    icon: Code,
    title: 'Custom Web Development',
    description: 'Pixel-perfect, performance-optimised websites and web apps built with React, Next.js, and Node.js. From landing pages to full SaaS platforms.',
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
    ]
  },
  {
    slug: 'mobile-app-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native iOS & Android apps and cross-platform solutions using React Native and Flutter. Built for speed, scale, and user delight.',
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
    ]
  },
  {
    slug: 'ui-ux-design',
    icon: Palette,
    title: 'UI/UX Design & Prototyping',
    description: 'Research-driven design that converts. We craft intuitive interfaces, design systems, and interactive prototypes in Figma.',
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
    ]
  },
  {
    slug: 'ai-machine-learning',
    icon: Brain,
    title: 'AI & Machine Learning Solutions',
    description: 'Production-grade ML models, LLM integrations, fraud detection systems, and data pipelines — specifically for FinTech and enterprise teams.',
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
    ]
  },
  {
    slug: 'cloud-devops',
    icon: Cloud,
    title: 'Cloud Infrastructure & DevOps',
    description: 'Scalable AWS/GCP/Azure architecture, CI/CD pipelines, Docker/Kubernetes deployments, and 24/7 monitoring.',
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
    ]
  },
  {
    slug: 'e-commerce-solutions',
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'High-converting online stores built on Shopify, WooCommerce, or custom stacks — with payment gateway integration and inventory management.',
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
    ]
  },
  {
    slug: 'saas-development',
    icon: Package,
    title: 'SaaS Product Development',
    description: 'Full-cycle SaaS builds from MVP to scale — architecture, auth, billing, multi-tenancy, admin dashboards, and API development.',
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
    ]
  },
  {
    slug: 'api-integration',
    icon: LinkIcon,
    title: 'API Development & Integration',
    description: 'RESTful and GraphQL APIs, third-party integrations (payment, CRM, ERP, WhatsApp, Twilio), and microservice architecture.',
    longDescription: 'Connect your disparate systems into a unified ecosystem. We build robust, well-documented RESTful and GraphQL APIs that allow your internal services to communicate seamlessly. Additionally, we integrate powerful third-party tools like CRMs (Salesforce, HubSpot), ERPs, and communication platforms (Twilio, WhatsApp) to automate your business workflows.',
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
    ]
  },
  {
    slug: 'it-consulting',
    icon: Target,
    title: 'IT Consulting & Digital Strategy',
    description: 'Technology audits, digital transformation roadmaps, tech stack advisory, and CTO-as-a-service for startups and SMEs.',
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
    ]
  }
];
