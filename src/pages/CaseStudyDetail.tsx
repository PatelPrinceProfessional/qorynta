import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, CheckCircle2, ChevronRight, Terminal } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { allProjects } from '@/data/projects';
import { CTABanner } from '@/components/home/CTABanner';
import { motion } from 'framer-motion';

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = allProjects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Case Study | Qorynta Services</title>
        <meta name="description" content={project.overview} />
      </Helmet>

      <Navbar />
      
      <main className="min-h-screen bg-background pt-24 pb-20">
        
        {/* Breadcrumb & Back */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link to="/case-studies" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/case-studies" className="hover:text-primary">Case Studies</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium">{project.title}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-6">
              {project.category}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              {project.overview}
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-border/50 relative"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </section>

        {/* Deep Dive Content */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Main Content (Left) */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Challenge */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm">01</span>
                  The Challenge
                </h2>
                <ul className="space-y-4">
                  {project.challenge.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-2 h-2 mt-2 rounded-full bg-red-500 shrink-0" />
                      <p className="text-lg text-muted-foreground leading-relaxed">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">02</span>
                  Our Engineered Solution
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                  <p className="leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Key Features & Results */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">03</span>
                  Key Features & Results
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.featuresAndResults.map((feature, idx) => (
                    <div key={idx} className="bg-muted/50 rounded-2xl p-6 border border-border/50 flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                      <p className="text-foreground font-medium">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Value */}
              <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
                <h2 className="text-3xl font-bold text-foreground mb-6">Strategic Business Impact</h2>
                <p className="text-xl text-foreground/80 leading-relaxed font-medium italic">
                  "{project.businessValue}"
                </p>
              </div>

            </div>

            {/* Sidebar (Right) */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 bg-card rounded-3xl p-8 border border-border shadow-sm">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-primary" />
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-4 py-2 bg-muted text-foreground rounded-lg text-sm font-semibold border border-border/50">
                      {tech}
                    </span>
                  ))}
                </div>

                <hr className="my-8 border-border" />

                <h3 className="text-xl font-bold text-foreground mb-4">Project Highlights</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Primary Outcome</p>
                    <p className="font-bold text-primary text-lg">{project.result}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Industry</p>
                    <p className="font-medium text-foreground">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <div className="mt-24">
          <CTABanner />
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default CaseStudyDetail;
