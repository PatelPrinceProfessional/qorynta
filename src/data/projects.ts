export interface Project {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  image: string;
  result: string;
  overview: string;
  challenge: string[];
  solution: string;
  techStack: string[];
  featuresAndResults: string[];
  businessValue: string;
}

export const allProjects: Project[] = [
  {
    slug: 'cafe-dashboard',
    title: 'Cafe Dashboard & Ordering System',
    category: 'Web Application',
    tags: ['React', 'Node.js', 'FoodTech'],
    image: '/portfolio/cafe-dashboard.webp',
    result: 'Increased order processing speed by 40%',
    overview: 'A leading regional cafe chain needed a unified dashboard to manage online and in-store orders, replacing their fragmented legacy systems.',
    challenge: [
      'Orders from various delivery platforms were manually entered into the POS.',
      'High latency during peak hours resulted in lost revenue and dissatisfied customers.',
      'No centralized reporting system for inventory management across multiple branches.'
    ],
    solution: 'We engineered a high-performance React dashboard backed by a scalable Node.js microservices architecture. By utilizing WebSockets for real-time order syncing and a unified queue logic, we eliminated manual entry. The system features a responsive UI that works flawlessly on kitchen displays and manager tablets.',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redis'],
    featuresAndResults: [
      'Reduced average order processing time by 40%.',
      'Zero downtime during peak weekend hours.',
      'Automated inventory deduction upon order confirmation.'
    ],
    businessValue: 'The client transformed their kitchen operations, drastically reducing human error and freeing up staff to focus on customer service, directly improving their overall customer satisfaction scores.'
  },
  {
    slug: 'Health-professional',
    title: 'Healthcare Professional WebApp',
    category: 'Booking Platform',
    tags: ['Next.js', 'Tailwind CSS', 'Booking'],
    image: '/portfolio/salon-professional.webp',
    result: 'Boosted online bookings by 150%',
    overview: 'A premium Healthcare  chain required a modern, high-converting digital storefront with integrated appointment scheduling to drive digital acquisition.',
    challenge: [
      'High bounce rate on the existing legacy website.',
      'Cumbersome manual booking process via phone calls.',
      'Lack of clear service visualization and pricing transparency.'
    ],
    solution: 'We designed a sleek, brand-aligned Next.js application optimized for core web vitals. We integrated a custom booking engine with automated calendar syncing and SMS reminders, wrapped in an elegant UI utilizing framer-motion for smooth page transitions.',
    techStack: ['Next.js', 'Tailwind CSS', 'Stripe', 'Twilio API'],
    featuresAndResults: [
      'Increased online booking conversion rate by 150%.',
      'Reduced no-show appointments by 35% via automated SMS.',
      'Achieved a 99/100 Google Lighthouse performance score.'
    ],
    businessValue: 'By shifting to a fully automated digital booking flow, the Hospital reduced front-desk administrative overhead by 20 hours a week, allowing them to scale their operations without hiring additional receptionist staff.'
  },
  {
    slug: 'crm-solution',
    title: 'Custom CRM Solution',
    category: 'Enterprise SaaS',
    tags: ['React', 'PostgreSQL', 'Enterprise'],
    image: '/portfolio/crm-solution.webp',
    result: 'Streamlined sales pipeline management',
    overview: 'A mid-sized logistics company was outgrowing their off-the-shelf CRM, facing severe data silos and lack of custom workflow automation.',
    challenge: [
      'Sales reps were using disparate spreadsheets to track leads.',
      'No visibility into pipeline velocity or bottleneck identification.',
      'Integration with existing ERP was non-existent.'
    ],
    solution: 'We built a bespoke, highly secure CRM from the ground up using React and PostgreSQL. We implemented granular role-based access control, custom audit logging, and automated workflow triggers. A custom API integration was developed to sync seamlessly with their legacy ERP system.',
    techStack: ['React', 'Express', 'PostgreSQL', 'Docker', 'AWS'],
    featuresAndResults: [
      'Consolidated 5 disparate databases into a single source of truth.',
      'Automated lead routing based on complex geographic and industry rules.',
      'Generated custom real-time pipeline velocity reports.'
    ],
    businessValue: 'The bespoke CRM empowered the sales team to close deals 20% faster. By providing management with real-time analytics, strategic decisions were made proactively rather than reactively.'
  },
  {
    slug: 'e-commerce-store',
    title: 'E-Commerce Store Website',
    category: 'Retail E-Commerce',
    tags: ['Shopify Plus', 'React', 'E-Commerce'],
    image: '/portfolio/e-commerce-store.webp',
    result: 'Scaled to 10,000+ daily active users',
    overview: 'A fast-growing direct-to-consumer brand needed an enterprise-grade e-commerce platform capable of handling high-volume flash sales.',
    challenge: [
      'Site crashed during previous marketing campaigns due to traffic spikes.',
      'Checkout abandonment rate was above industry average.',
      'Complex shipping logic was handled manually.'
    ],
    solution: 'We architected a headless e-commerce solution using Shopify Plus for the backend and a custom React frontend. We implemented aggressive caching strategies, edge computing for localized pricing, and a streamlined, one-page checkout flow.',
    techStack: ['React', 'Shopify Storefront API', 'Vercel', 'Redis'],
    featuresAndResults: [
      'Successfully handled 10,000+ concurrent users during a major product drop.',
      'Reduced checkout abandonment by 18%.',
      'Automated complex international shipping calculations.'
    ],
    businessValue: 'The brand successfully executed their largest marketing campaign without a hitch, resulting in record-breaking monthly revenue and cementing their position in the market.'
  },
  {
    slug: 'ml-end-to-end',
    title: 'ML End-to-End Project',
    category: 'AI & Machine Learning',
    tags: ['Python', 'TensorFlow', 'React'],
    image: '/portfolio/ml-end-to-end.webp',
    result: 'Reduced fraud detection time by 60%',
    overview: 'A major financial institution required a predictive analytics model to identify fraudulent transactions in real-time without increasing false positives.',
    challenge: [
      'Legacy rule-based systems were catching only 40% of fraudulent activity.',
      'High false-positive rate frustrated legitimate customers.',
      'Lack of a user-friendly interface for the risk assessment team.'
    ],
    solution: 'We developed an end-to-end Machine Learning pipeline using Python and TensorFlow. The model was trained on historical transaction data and deployed via a robust API. We then built a secure React dashboard for analysts to review flagged transactions with explainable AI metrics.',
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'React', 'AWS SageMaker'],
    featuresAndResults: [
      'Increased fraud detection accuracy to 95%.',
      'Reduced false positives by 40%.',
      'Sub-50ms latency on transaction scoring.'
    ],
    businessValue: 'The institution saved millions in potential fraud losses within the first quarter of deployment, while simultaneously improving the customer experience by reducing unnecessary card blockages.'
  },
  {
    slug: 'saas-product',
    title: 'SaaS Based Complete Product',
    category: 'B2B SaaS',
    tags: ['Next.js', 'Node.js', 'AWS'],
    image: '/portfolio/saas-product.webp',
    result: 'Automated 80% of client onboarding',
    overview: 'A startup aimed to disrupt the HR tech space needed an MVP built from scratch, requiring a multi-tenant architecture and robust security compliance.',
    challenge: [
      'Needed a scalable multi-tenant architecture from day one.',
      'Strict data isolation requirements for enterprise clients.',
      'Complex subscription and billing logic based on active seats.'
    ],
    solution: 'We architected a secure, highly available B2B SaaS platform utilizing Next.js and Node.js. We implemented isolated database schemas for tenants, integrated Stripe for complex usage-based billing, and built a comprehensive administrative dashboard for the platform owners.',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS Cognito'],
    featuresAndResults: [
      'Successfully launched the MVP within 4 months.',
      'Automated 100% of the subscription lifecycle.',
      'Achieved SOC2 compliance readiness through strict security protocols.'
    ],
    businessValue: 'The startup secured their Series A funding based on the robust platform architecture and early user adoption, positioning them as a serious contender in the HR tech market.'
  }
];
