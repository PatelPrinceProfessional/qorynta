import { SectionLabel } from '@/components/ui/SectionLabel';
import { GlassCard } from '@/components/ui/GlassCard';

const techCategories = [
  {
    category: 'Frontend & Mobile',
    items: ['React', 'Next.js', 'React Native', 'Flutter', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend & APIs',
    items: ['Node.js', 'Python', 'Go', 'Express', 'GraphQL', 'REST APIs'],
  },
  {
    category: 'Database & Cloud',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Google Cloud', 'Firebase'],
  },
  {
    category: 'AI / ML & DevOps',
    items: ['TensorFlow', 'PyTorch', 'Docker', 'Kubernetes', 'GitHub Actions', 'Vercel'],
  },
];

export const TechStackSection = () => {
  return (
    <section className="py-24 md:py-32 relative bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <SectionLabel text="TECHNOLOGIES" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Modern Stack for Modern Scale
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't use legacy tech. We build with the same tools used by top tech companies.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((cat, index) => (
            <GlassCard key={index} hover className="p-6">
              <h3 className="text-xl font-bold text-primary mb-6 pb-4 border-b border-border/50">
                {cat.category}
              </h3>
              <ul className="space-y-4">
                {cat.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};
