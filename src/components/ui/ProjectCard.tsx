import { ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '@/data/projects';

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link 
      to={`/case-studies/${project.slug}`}
      className="project-card-item group relative h-full flex flex-col bg-white dark:bg-[#0F2344] rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] will-change-transform"
    >
      {/* Thumbnail Section */}
      <div className="relative w-full h-56 md:h-64 overflow-hidden bg-slate-100 dark:bg-[#0A192F]">
        <img 
          src={project.image} 
          alt="" 
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.05] will-change-transform"
        />
        {/* Overlay gradient for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 dark:from-[#0A192F]/90 to-transparent opacity-100 transition-opacity duration-500" />
        
        {/* Highlight Metric Overlay */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-lg transform transition-transform duration-500 group-hover:-translate-y-1">
              <div className="bg-primary/20 text-primary p-1.5 rounded-lg shrink-0">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-extrabold text-lg leading-none">{project.metrics[0].value}</p>
                <p className="text-white/80 text-xs font-semibold uppercase tracking-wider mt-0.5">{project.metrics[0].label}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6 md:p-8 relative z-10 transition-colors duration-500">
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4 items-center">
          <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full uppercase tracking-wide transition-colors">
            {project.category}
          </span>
          <span className="px-3 py-1 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-foreground/90 border border-transparent dark:border-white/10 text-xs font-semibold rounded-full transition-colors">
            {project.tags[0]}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] dark:text-foreground mb-3 leading-tight line-clamp-2 transition-colors duration-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {project.title}
        </h3>
        
        {/* Short description */}
        <p className="text-slate-600 dark:text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-6 flex-1 transition-colors duration-500">
          {project.overview}
        </p>

        {/* Metrics Footer */}
        <div className="mt-auto flex items-center justify-between border-t border-slate-100 dark:border-white/10 pt-4 transition-colors duration-500">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 inline-flex items-center group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
            Read Case Study
          </span>
          <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 transform transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};
