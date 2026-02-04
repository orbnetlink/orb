import heroTech from "@/assets/hero-tech.jpg";
import advancedRouter from "@/assets/advanced-router.jpg";
import videoCallPro from "@/assets/video-call-pro.jpg";
import smartLivingRoom from "@/assets/smart-living-room.jpg";
import gamingPro from "@/assets/gaming-pro.jpg";
import dataCenter from "@/assets/data-center.jpg";
import remoteWork from "@/assets/remote-work.jpg";
import smartControl from "@/assets/smart-control.jpg";

const galleryImages = [
  { src: heroTech, alt: "Smart home command center", span: "col-span-2 row-span-2" },
  { src: advancedRouter, alt: "Advanced mesh router system", span: "col-span-1" },
  { src: videoCallPro, alt: "Professional video conferencing", span: "col-span-1" },
  { src: smartLivingRoom, alt: "Family streaming entertainment", span: "col-span-1" },
  { src: gamingPro, alt: "Low-latency gaming setup", span: "col-span-1" },
  { src: dataCenter, alt: "Enterprise network infrastructure", span: "col-span-1" },
  { src: remoteWork, alt: "Remote work connectivity", span: "col-span-1" },
  { src: smartControl, alt: "IoT device management", span: "col-span-2" },
];

export const ImageGallery = () => {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Connected Lifestyle
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            Connectivity in the Digital Age
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground mt-4">
            From smart homes to gaming setups, modern connectivity touches every aspect of digital life.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${image.span} relative rounded-xl overflow-hidden group`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover min-h-[150px] lg:min-h-[200px] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs lg:text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
