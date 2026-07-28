import { ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '@/data/projects';

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link 
      to={`/case-studies/${project.slug}`}
      className="project-card-item group relative h-full flex flex-col bg-[#FFFFFF] dark:bg-[#0F2344] rounded-[20px] overflow-hidden border border-[#99CAFF]/50 dark:border-white/10 shadow-[0px_10px_30px_rgba(5,22,80,0.05)] dark:shadow-sm transition-all duration-[350ms] ease-out hover:-translate-y-[6px] hover:border-[1.5px] hover:border-[#004EE0] dark:hover:border-white/20 hover:shadow-[0px_20px_40px_rgba(0,78,224,0.16)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] will-change-transform"
    >
      {/* Thumbnail Section */}
      <div className="relative w-full h-56 md:h-64 overflow-hidden bg-slate-100 dark:bg-[#0A192F]">
        <img 
          src={project.image} 
          alt={`Screenshot of ${project.title} project`}
          width={600}
          height={400}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03] will-change-transform"
        />
        {/* Overlay gradient for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 dark:from-[#0A192F]/90 to-transparent opacity-100 transition-opacity duration-500" />
        
        {/* Highlight Metric Overlay */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <div className="flex items-center gap-2 bg-[#00072D]/85 dark:bg-white/10 backdrop-blur-[12px] border border-[#99CAFF]/40 dark:border-white/20 rounded-xl p-3 shadow-lg transform transition-transform duration-500 group-hover:-translate-y-1">
              <div className="bg-primary/20 text-primary p-1.5 rounded-lg shrink-0">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[#F2FAF4] font-[800] text-lg leading-none">{project.metrics[0].value}</p>
                <p className="text-[#F2FAF4] font-[600] text-xs uppercase tracking-wider mt-0.5">{project.metrics[0].label}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6 md:p-8 relative z-10 transition-colors duration-500">
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4 items-center">
          <span className="px-3 py-1 bg-[#E3F2FF] dark:bg-blue-500/10 text-[#004EE0] dark:text-blue-400 text-xs font-[700] rounded-full uppercase tracking-wide border border-[#99CAFF] dark:border-transparent transition-colors">
            {project.category}
          </span>
          <span className="px-3 py-1 bg-[#F2FAF4] dark:bg-white/5 text-[#051650] dark:text-foreground/90 border border-[#99CAFF]/40 dark:border-white/10 text-xs font-[600] rounded-full transition-colors">
            {project.tags[0]}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-[700] text-[#00072D] dark:text-foreground mb-3 leading-tight line-clamp-2 transition-colors duration-[350ms] group-hover:text-[#004EE0] dark:group-hover:text-blue-400">
          {project.title}
        </h3>
        
        {/* Short description */}
        <p className="text-[#051650] dark:text-muted-foreground text-sm leading-[1.5] line-clamp-2 mb-6 flex-1 transition-colors duration-[350ms]">
          {project.overview}
        </p>

        {/* Metrics Footer */}
        <div className="mt-auto flex items-center justify-between border-t border-slate-100 dark:border-white/10 pt-4 transition-colors duration-[350ms]">
          <span className="text-sm font-[700] text-[#004EE0] dark:text-blue-400 inline-flex items-center group-hover:text-[#0A2472] dark:group-hover:text-blue-300 transition-colors">
            Read Case Study
          </span>
          <ArrowRight className="w-5 h-5 text-[#004EE0] dark:text-blue-400 transform transition-transform duration-[350ms] group-hover:translate-x-[4px] group-hover:text-[#0A2472] dark:group-hover:text-blue-300" />
        </div>
      </div>
    </Link>
  );
};
