import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '@/data/projects';

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link 
      to={`/case-studies/${project.slug}`}
      className="project-card-item group relative h-full flex flex-col bg-card rounded-3xl overflow-hidden border border-border/50 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] will-change-transform"
    >
      {/* Thumbnail Section */}
      <div className="relative w-full h-56 md:h-64 overflow-hidden bg-muted">
        <img 
          src={project.image} 
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.05] will-change-transform"
        />
        {/* Overlay gradient for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6 md:p-8 bg-card relative z-10">
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wide">
            {project.category}
          </span>
          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded-full">
            {project.tags[0]}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 leading-tight line-clamp-2">
          {project.title}
        </h3>
        
        {/* Short description */}
        <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-1">
          {project.overview}
        </p>

        {/* CTA */}
        <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-4">
          <span className="text-sm font-semibold text-primary inline-flex items-center group-hover:text-primary/80 transition-colors">
            Read Case Study
          </span>
          <ArrowRight className="w-5 h-5 text-primary transform transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};
