import { useState, useEffect } from "react";
import { Zap, Wifi, Activity, TrendingUp, Network, Shield } from "lucide-react";

const speedMetrics = [
  { label: "Download Speed", value: 1000, unit: "Mbps", color: "hsl(var(--primary))" },
  { label: "Upload Speed", value: 500, unit: "Mbps", color: "hsl(var(--accent))" },
  { label: "Latency", value: 5, unit: "ms", color: "hsl(var(--secondary))" },
];

const bandwidthComparisons = [
  { type: "Fiber Optic", speed: 100, label: "1 Gbps" },
  { type: "Cable", speed: 45, label: "450 Mbps" },
  { type: "DSL", speed: 10, label: "100 Mbps" },
  { type: "Satellite", speed: 3, label: "30 Mbps" },
];

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Fiber",
    description: "Symmetrical speeds up to 1 Gbps for seamless streaming and gaming",
  },
  {
    icon: Activity,
    title: "Ultra-Low Latency",
    description: "As low as 5ms ping for competitive gaming and video conferencing",
  },
  {
    icon: Shield,
    title: "99.9% Uptime",
    description: "Enterprise-grade reliability for uninterrupted connectivity",
  },
  {
    icon: Network,
    title: "Mesh Coverage",
    description: "Whole-home Wi-Fi 6E coverage eliminating dead zones",
  },
];

export const TechFeaturesSection = () => {
  const [animatedSpeeds, setAnimatedSpeeds] = useState(speedMetrics.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const [pulseIndex, setPulseIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("tech-features-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    speedMetrics.forEach((metric, index) => {
      const duration = 2000;
      const steps = 60;
      const stepValue = metric.value / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += stepValue;
        if (current >= metric.value) {
          current = metric.value;
          clearInterval(interval);
        }
        setAnimatedSpeeds((prev) => {
          const newSpeeds = [...prev];
          newSpeeds[index] = Math.round(current);
          return newSpeeds;
        });
      }, duration / steps);
    });
  }, [isVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % 4);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="tech-features-section" className="py-16 lg:py-24 bg-gradient-to-br from-slate-dark via-background to-slate-dark relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Wifi className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Advanced Network Technology</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Next-Gen Fiber Optic <span className="text-gradient">Performance</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience blazing-fast internet with cutting-edge fiber technology designed for modern digital lifestyles.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Network Visualization */}
          <div className="relative">
            {/* Central Hub */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-4 rounded-full border-2 border-primary/20 animate-pulse" />
              <div className="absolute inset-12 rounded-full border-2 border-accent/30" />
              <div className="absolute inset-20 rounded-full border-2 border-secondary/40" />

              {/* Center node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 lg:w-32 lg:h-32">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent animate-pulse" />
                <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                  <Network className="w-10 h-10 lg:w-14 lg:h-14 text-primary" />
                </div>
              </div>

              {/* Orbiting nodes */}
              {[0, 1, 2, 3].map((i) => {
                const angle = (i * 90 + 45) * (Math.PI / 180);
                const radius = 42;
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                
                return (
                  <div
                    key={i}
                    className={`absolute w-12 h-12 lg:w-16 lg:h-16 transition-all duration-500 ${
                      pulseIndex === i ? "scale-125" : "scale-100"
                    }`}
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className={`w-full h-full rounded-full ${
                      pulseIndex === i 
                        ? "bg-gradient-to-br from-accent to-primary shadow-lg shadow-primary/50" 
                        : "bg-gradient-to-br from-primary/50 to-accent/50"
                    } flex items-center justify-center transition-all duration-500`}>
                      {i === 0 && <Zap className="w-5 h-5 lg:w-7 lg:h-7 text-white" />}
                      {i === 1 && <Activity className="w-5 h-5 lg:w-7 lg:h-7 text-white" />}
                      {i === 2 && <TrendingUp className="w-5 h-5 lg:w-7 lg:h-7 text-white" />}
                      {i === 3 && <Shield className="w-5 h-5 lg:w-7 lg:h-7 text-white" />}
                    </div>
                  </div>
                );
              })}

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                {[0, 1, 2, 3].map((i) => {
                  const angle = (i * 90 + 45) * (Math.PI / 180);
                  const radius = 42;
                  const x = 50 + radius * Math.cos(angle);
                  const y = 50 + radius * Math.sin(angle);
                  
                  return (
                    <line
                      key={i}
                      x1="50"
                      y1="50"
                      x2={x}
                      y2={y}
                      stroke={pulseIndex === i ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.3)"}
                      strokeWidth={pulseIndex === i ? "0.5" : "0.3"}
                      strokeDasharray="2,2"
                      className="transition-all duration-500"
                    />
                  );
                })}
              </svg>

              {/* Data packets animation */}
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-accent animate-ping"
                  style={{
                    left: `${30 + i * 20}%`,
                    top: `${40 + i * 10}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: "2s",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: Speed Metrics */}
          <div className="space-y-8">
            {/* Speed Gauges */}
            <div className="grid gap-4 sm:gap-6">
              {speedMetrics.map((metric, index) => (
                <div key={metric.label} className="bg-card/50 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-border">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-muted-foreground text-sm lg:text-base">{metric.label}</span>
                    <span className="font-display font-bold text-xl lg:text-2xl text-foreground">
                      {animatedSpeeds[index]} <span className="text-sm lg:text-base text-muted-foreground">{metric.unit}</span>
                    </span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${(animatedSpeeds[index] / metric.value) * 100}%` : "0%",
                        background: metric.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Bandwidth Comparison Chart */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-4 text-sm lg:text-base">Technology Comparison</h3>
              <div className="space-y-3">
                {bandwidthComparisons.map((item, index) => (
                  <div key={item.type} className="flex items-center gap-3 lg:gap-4">
                    <span className="text-muted-foreground text-xs lg:text-sm w-16 lg:w-20 flex-shrink-0">{item.type}</span>
                    <div className="flex-1 h-6 lg:h-8 bg-muted rounded-full overflow-hidden relative">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2 lg:pr-3"
                        style={{
                          width: isVisible ? `${item.speed}%` : "0%",
                          transitionDelay: `${index * 200}ms`,
                          background: index === 0 
                            ? "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))" 
                            : `hsl(var(--muted-foreground) / ${0.5 - index * 0.1})`,
                        }}
                      >
                        <span className="text-xs font-medium text-white">{item.label}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-12 lg:mt-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card/50 backdrop-blur-sm rounded-2xl p-5 lg:p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-sm lg:text-base">{feature.title}</h3>
              <p className="text-muted-foreground text-xs lg:text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
