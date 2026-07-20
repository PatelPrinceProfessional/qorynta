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
  Cpu,
  Eye,
  Bot,
  MessageSquare,
  type LucideIcon
} from 'lucide-react';

export type Service = {
  id: string;
  order: number;
  name: string;
  tagline: string; // one sentence, ~14 words max
  description: string; // longer copy for detail layer, 2-3 sentences
  icon: LucideIcon; // icon component
  tags: string[]; // 2-4 short tags
  accent: 'blue' | 'teal' | 'coral' | 'purple' | 'amber' | 'emerald'; // maps to color role
  flagship?: boolean; // true for exactly one service
  href: string; // link target
};

export const servicesConfig: Service[] = [
  {
    id: 'custom-web-development',
    order: 1,
    name: 'Custom Web Development',
    tagline: 'Pixel-perfect, performance-optimised websites and web apps built with modern frameworks.',
    description: 'We build fast, secure, and scalable web applications tailored to your exact business needs. Leveraging modern JavaScript frameworks like React and Next.js, we ensure your web presence is visually stunning and technically robust.',
    icon: Code,
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    accent: 'blue',
    flagship: true,
    href: '/services/custom-web-development'
  },
  {
    id: 'mobile-app-development',
    order: 2,
    name: 'Mobile App Development',
    tagline: 'Native iOS & Android apps and cross-platform solutions for a seamless mobile experience.',
    description: 'Our mobile development team crafts native and cross-platform applications that deliver seamless experiences on iOS and Android. Whether you need a high-performance native app or a cost-effective cross-platform solution, we handle everything from UI/UX design to App Store deployment.',
    icon: Smartphone,
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
    accent: 'purple',
    href: '/services/mobile-app-development'
  },
  {
    id: 'ui-ux-design',
    order: 3,
    name: 'UI/UX Design & Prototyping',
    tagline: 'Research-driven design that converts. We craft intuitive interfaces and scalable design systems.',
    description: 'Our UI/UX design process is rooted in user research and behavioral psychology. We create interactive prototypes and comprehensive design systems that ensure brand consistency and drive meaningful user interactions.',
    icon: Palette,
    tags: ['Figma', 'Design Systems', 'Wireframing'],
    accent: 'coral',
    href: '/services/ui-ux-design'
  },
  {
    id: 'ai-machine-learning',
    order: 4,
    name: 'AI & Machine Learning Solutions',
    tagline: 'Production-grade ML models, LLM integrations, fraud detection systems, and automated data pipelines.',
    description: 'Transform your business operations with cutting-edge Artificial Intelligence. We specialize in building custom ML models and integrating Large Language Models (LLMs) to automate workflows and uncover insights.',
    icon: Brain,
    tags: ['Python', 'LLMs', 'TensorFlow'],
    accent: 'amber',
    href: '/services/ai-machine-learning'
  },
  {
    id: 'cloud-devops',
    order: 5,
    name: 'Cloud Infrastructure & DevOps',
    tagline: 'Scalable cloud architecture, modern CI/CD pipelines, and robust Kubernetes deployments.',
    description: 'Ensure your applications are always online, secure, and ready to scale. Our DevOps engineers design robust cloud architectures on AWS, Google Cloud, and Azure, implementing automated testing and deployment.',
    icon: Cloud,
    tags: ['AWS', 'GCP', 'Docker', 'Kubernetes'],
    accent: 'teal',
    href: '/services/cloud-devops'
  },
  {
    id: 'e-commerce-solutions',
    order: 6,
    name: 'E-Commerce Solutions',
    tagline: 'High-converting online stores built on headless stacks or robust e-commerce platforms.',
    description: 'Build a powerful online storefront that turns visitors into loyal customers. We deliver custom solutions optimized for speed, conversion, and seamless inventory management across all channels.',
    icon: ShoppingCart,
    tags: ['Shopify', 'Next.js', 'Stripe'],
    accent: 'emerald',
    href: '/services/e-commerce-solutions'
  },
  {
    id: 'saas-development',
    order: 7,
    name: 'SaaS Product Development',
    tagline: 'Full-cycle SaaS builds from MVP to scale — architecture, auth, billing, multi-tenancy.',
    description: 'Launch your Software-as-a-Service product with a solid foundation. We handle the complexities of SaaS development, including multi-tenant architectures, subscription billing, and role-based access control.',
    icon: Package,
    tags: ['Subscription', 'Multi-tenant', 'REST APIs'],
    accent: 'blue',
    href: '/services/saas-development'
  },
  {
    id: 'api-integration',
    order: 8,
    name: 'API Development & Integration',
    tagline: 'RESTful and GraphQL APIs, third-party integrations, and microservice architecture.',
    description: 'Connect your disparate systems into a unified ecosystem. We build robust, well-documented RESTful and GraphQL APIs that allow your internal services to communicate seamlessly.',
    icon: LinkIcon,
    tags: ['REST', 'GraphQL', 'Webhooks', 'OAuth'],
    accent: 'purple',
    href: '/services/api-integration'
  },
  {
    id: 'it-consulting',
    order: 9,
    name: 'IT Consulting & Digital Strategy',
    tagline: 'Technology audits, digital transformation roadmaps, tech stack advisory.',
    description: 'Make informed technology decisions that align with your business goals. Our strategic consulting services help startups and enterprises navigate the complex digital landscape.',
    icon: Target,
    tags: ['Tech Audit', 'CTO-as-a-Service', 'Roadmapping'],
    accent: 'coral',
    href: '/services/it-consulting'
  },
  {
    id: 'cybersecurity-solutions',
    order: 10,
    name: 'Cybersecurity Solutions',
    tagline: 'Enterprise-grade security audits, penetration testing, compliance implementation.',
    description: 'Protect your digital assets with our comprehensive cybersecurity services. We conduct rigorous penetration testing, vulnerability assessments, and implement robust security protocols.',
    icon: Shield,
    tags: ['Pen Testing', 'Compliance', 'Audits'],
    accent: 'teal',
    href: '/services/cybersecurity-solutions'
  },
  {
    id: 'generative-ai',
    order: 11,
    name: 'Generative AI & LLMs',
    tagline: 'Fine-tuned Large Language Models, RAG systems, and custom AI agents.',
    description: 'We help enterprises harness the power of Generative AI. By utilizing advanced Retrieval-Augmented Generation (RAG) and fine-tuning techniques, we build secure, context-aware LLM applications.',
    icon: Cpu,
    tags: ['OpenAI', 'RAG', 'LangChain', 'Vector DBs'],
    accent: 'amber',
    href: '/services/generative-ai'
  },
  {
    id: 'computer-vision',
    order: 12,
    name: 'Computer Vision',
    tagline: 'Automated image processing, object detection, and visual QA systems.',
    description: 'Transform visual data into actionable insights. We build custom computer vision models for manufacturing QA, medical imaging, retail analytics, and autonomous monitoring.',
    icon: Eye,
    tags: ['OpenCV', 'YOLO', 'Image Processing'],
    accent: 'emerald',
    href: '/services/computer-vision'
  },
  {
    id: 'nlp-text-analysis',
    order: 13,
    name: 'NLP & Text Analysis',
    tagline: 'Sentiment analysis, entity extraction, and automated document processing.',
    description: 'Unlock the value hidden in unstructured text. Our Natural Language Processing solutions can automatically classify support tickets, extract key entities, summarize reports, and gauge sentiment.',
    icon: Bot,
    tags: ['Spacy', 'Hugging Face', 'BERT'],
    accent: 'blue',
    href: '/services/nlp-text-analysis'
  },
  {
    id: 'ai-chatbots',
    order: 14,
    name: 'AI Chatbots & Agents',
    tagline: 'Next-generation conversational interfaces that actually solve customer problems.',
    description: 'Move beyond frustrating decision-tree bots. We build autonomous AI agents capable of understanding intent, executing API calls, and conversing naturally with your customers.',
    icon: MessageSquare,
    tags: ['Conversational AI', 'Agents', 'WhatsApp'],
    accent: 'purple',
    href: '/services/ai-chatbots'
  }
];
