export interface Project {
  slug: string;
  title: string;
  client?: string;
  category: string;
  tags: string[];
  image: string;
  result: string; // Keep for backward compatibility or short summary
  metrics: { label: string; value: string }[];
  overview: string;
  challenge: string[];
  solution: string;
  techStack: string[];
  featuresAndResults: string[];
  businessValue: string;
}

export const allProjects: Project[] = [
  {
    slug: 'nexus-logistics-crm',
    title: 'Enterprise Custom CRM Solution',
    client: 'Nexus Logistics',
    category: 'Enterprise SaaS',
    tags: ['React', 'PostgreSQL', 'Node.js', 'AWS'],
    image: '/portfolio/crm-solution.webp',
    result: 'Streamlined sales pipeline management and accelerated close rates',
    metrics: [
      { label: 'Sales Velocity Increase', value: '35%' },
      { label: 'Data Silos Eliminated', value: '100%' },
      { label: 'Time Saved per Week', value: '40 hrs' }
    ],
    overview: 'A mid-sized logistics company was outgrowing their off-the-shelf CRM, facing severe data silos and a complete lack of custom workflow automation, leading to lost deals and inaccurate forecasting.',
    challenge: [
      'Sales representatives were using disparate spreadsheets to track high-value leads.',
      'No visibility into pipeline velocity or bottleneck identification across 5 regional offices.',
      'Integration with their existing legacy ERP was completely non-existent.'
    ],
    solution: 'We built a bespoke, highly secure CRM from the ground up using React and PostgreSQL. We implemented granular role-based access control (RBAC), custom audit logging for compliance, and automated workflow triggers. A custom REST API layer was developed to sync seamlessly with their legacy ERP system without replacing it.',
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'AWS ECS'],
    featuresAndResults: [
      'Consolidated 5 disparate databases into a single secure source of truth.',
      'Automated lead routing based on complex geographic and industry-specific rules.',
      'Generated custom real-time pipeline velocity reports for the C-Suite.'
    ],
    businessValue: 'The bespoke CRM empowered the sales team to close deals 35% faster. By providing executive management with real-time analytics, strategic decisions were made proactively, resulting in a record-breaking Q4 revenue.'
  },
  {
    slug: 'finstream-ml-fraud',
    title: 'Real-Time ML Fraud Detection',
    client: 'FinStream',
    category: 'AI & Machine Learning',
    tags: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    image: '/portfolio/ml-end-to-end.webp',
    result: 'Reduced fraud detection time by 60%',
    metrics: [
      { label: 'Fraud Detection Accuracy', value: '98.5%' },
      { label: 'False Positives Reduced', value: '40%' },
      { label: 'Inference Latency', value: '<50ms' }
    ],
    overview: 'A major digital payment provider required a predictive analytics model to identify fraudulent transactions in real-time, aiming to stop chargebacks without increasing false positives that frustrated legitimate users.',
    challenge: [
      'Legacy rule-based systems were catching only 45% of fraudulent activity.',
      'An unacceptably high false-positive rate resulted in blocked cards and increased customer support tickets.',
      'Lack of a user-friendly interface for the risk assessment team to review flagged anomalies.'
    ],
    solution: 'We developed an end-to-end Machine Learning pipeline using Python and TensorFlow. The Deep Learning model was trained on millions of historical transactions and deployed via a highly available FastAPI microservice. We subsequently built a secure React dashboard utilizing explainable AI metrics (SHAP values) so analysts could understand exactly why a transaction was flagged.',
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'React', 'AWS SageMaker', 'Kafka'],
    featuresAndResults: [
      'Increased overall fraud detection accuracy to 98.5% within the first month.',
      'Reduced false positives by 40%, drastically improving customer satisfaction.',
      'Achieved sub-50ms latency on transaction scoring to avoid checkout friction.'
    ],
    businessValue: 'The institution saved an estimated $2.4M in potential fraud losses within the first quarter of deployment, while simultaneously reducing the burden on their customer support center.'
  },
  {
    slug: 'medisync-booking',
    title: 'Automated Healthcare Booking Platform',
    client: 'MediSync Clinics',
    category: 'Web Application',
    tags: ['Next.js', 'Tailwind CSS', 'Stripe', 'Twilio'],
    image: '/portfolio/salon-professional.webp',
    result: 'Boosted online bookings by 150%',
    metrics: [
      { label: 'Booking Conversion', value: '+150%' },
      { label: 'No-Shows Reduced', value: '35%' },
      { label: 'Admin Overhead Saved', value: '25 hrs/wk' }
    ],
    overview: 'A premium healthcare clinic chain required a modern, HIPAA-compliant digital storefront with integrated appointment scheduling to drive patient acquisition and reduce front-desk administrative load.',
    challenge: [
      'High bounce rate on the existing legacy website due to poor mobile optimization.',
      'Cumbersome manual booking process reliant entirely on phone calls.',
      'Lack of clear service visualization and pricing transparency for elective procedures.'
    ],
    solution: 'We designed a sleek, brand-aligned Next.js application optimized for core web vitals. We integrated a custom booking engine with automated calendar syncing (Google Workspace) and SMS reminders via Twilio, all wrapped in an elegant UI utilizing framer-motion for a premium feel.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Twilio API', 'PostgreSQL'],
    featuresAndResults: [
      'Increased online booking conversion rate by 150% in the first two months.',
      'Reduced no-show appointments by 35% via automated two-way SMS.',
      'Achieved a perfect 100/100 Google Lighthouse performance and accessibility score.'
    ],
    businessValue: 'By shifting to a fully automated digital booking flow, the clinic reduced front-desk administrative overhead by 25 hours a week, allowing them to scale their operations across three new locations without hiring additional receptionist staff.'
  },
  {
    slug: 'aurora-ecommerce-scale',
    title: 'High-Volume Headless E-Commerce',
    client: 'Aurora Direct',
    category: 'Retail E-Commerce',
    tags: ['Shopify Plus', 'Next.js', 'E-Commerce'],
    image: '/portfolio/e-commerce-store.webp',
    result: 'Scaled to handle 50,000+ concurrent flash-sale users',
    metrics: [
      { label: 'Concurrent Users Supported', value: '50k+' },
      { label: 'Checkout Abandonment', value: '-18%' },
      { label: 'Page Load Speed', value: '0.8s' }
    ],
    overview: 'A fast-growing direct-to-consumer apparel brand needed an enterprise-grade e-commerce platform capable of handling extreme high-volume traffic spikes during influencer-driven product drops.',
    challenge: [
      'The previous monolithic site crashed during major marketing campaigns due to database locks.',
      'Checkout abandonment rate was significantly above the industry average on mobile.',
      'Complex international shipping and tax logic was handled manually.'
    ],
    solution: 'We architected a modern headless e-commerce solution using Shopify Plus as the backend commerce engine and a custom Next.js frontend. We implemented aggressive CDN caching strategies via Vercel, edge computing for localized pricing, and a streamlined, single-page checkout flow.',
    techStack: ['Next.js', 'Shopify Storefront API', 'Vercel Edge Functions', 'Redis', 'Tailwind CSS'],
    featuresAndResults: [
      'Successfully handled 50,000+ concurrent users during a major product drop with zero downtime.',
      'Reduced checkout abandonment by 18% through a localized, frictionless flow.',
      'Automated complex international shipping calculations using third-party API integration.'
    ],
    businessValue: 'The brand successfully executed their largest marketing campaign in company history without technical hitches, resulting in record-breaking monthly revenue and cementing their position in a highly competitive market.'
  }
];
