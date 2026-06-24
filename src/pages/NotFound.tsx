import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-bg-primary flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-blue/10 blur-[120px] rounded-full -z-10" />

      <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet font-display mb-4">
        404
      </h1>
      
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
      
      <p className="text-text-secondary mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved. Let's get you back on track.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/">
          <Button size="lg">Return Home</Button>
        </Link>
        <Link to="/contact">
          <Button variant="outline" size="lg">Contact Support</Button>
        </Link>
      </div>
      
    </div>
  );
}
