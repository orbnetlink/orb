import remoteWork from "@/assets/remote-work.jpg";

export const LifestyleSection = () => {
  return (
    <section className="py-16 lg:py-24 gradient-section">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden min-h-[400px] lg:min-h-[500px] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={remoteWork}
              alt="Professional working remotely with seamless connectivity"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30 lg:to-transparent" />
          </div>
          
          {/* Content Card */}
          <div className="relative z-10 max-w-lg mx-4 lg:ml-8 xl:ml-16 p-6 md:p-8 lg:p-10 glass-card rounded-xl lg:rounded-2xl">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Stay Connected
            </span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mt-3 lg:mt-4">
              Understanding Modern Connectivity
            </h2>
            <p className="text-sm lg:text-base text-primary-foreground/80 mt-3 lg:mt-4 leading-relaxed">
              Whether you're working from home, streaming in 4K, gaming online, or managing smart devices, 
              understanding your connectivity options is crucial. Our independent advisors help you navigate 
              the technology landscape with confidence.
            </p>
            <p className="text-xs text-primary-foreground/60 mt-4 lg:mt-6">
              Independent guidance only. We do not sell or provide any services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
