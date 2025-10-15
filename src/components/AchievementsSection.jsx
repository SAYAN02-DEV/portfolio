// Achievements section shows only real achievements provided via images.

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 relative bg-gradient-to-b from-background to-secondary/10 section-divider">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center mb-6">
          <span className="section-eyebrow">Highlights</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center heading-gradient">Achievements</h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Real achievements only. As I grow, this section grows with me.
        </p>

        {/* Single achievement: unified card with text left and photo right */}
        <div className="glass-card rounded-2xl border border-border/60 overflow-hidden card-hover">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            <div className="p-8 flex flex-col justify-center">
              <span className="section-eyebrow mb-4 w-fit">2025</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Flipkart Grid 7.0 Semifinalist</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced to the Semifinals of Flipkart Grid 7.0, showcasing system design,
                problem solving, and full‑stack engineering skills in a highly competitive
                national challenge.
              </p>
            </div>
            <div className="relative lg:border-l lg:border-border/60">
              <div className="aspect-video lg:aspect-auto lg:h-full overflow-hidden">
                <img
                  src="/acheivments/flipkartgrid_semifinal.png"
                  alt="Flipkart Grid 7.0 Semifinalist Certificate"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Adobe India Hackathon: unified card with photo left and text right */}
        <div className="glass-card rounded-2xl border border-border/60 overflow-hidden card-hover mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            <div className="relative lg:border-r lg:border-border/60 order-last lg:order-none">
              <div className="aspect-video lg:aspect-auto lg:h-full overflow-hidden">
                <img
                  src="/acheivments/adobeindiahackathon_participation_certificate.png"
                  alt="Adobe India Hackathon Certificate"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="section-eyebrow mb-4 w-fit">2025</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Adobe India Hackathon</h3>
              <p className="text-muted-foreground leading-relaxed">
                Participated in Adobe India Hackathon, collaborating on rapid prototyping,
                design thinking, and end‑to‑end implementation under time constraints.
              </p>
            </div>
          </div>
        </div>

        {/* DTU Speedathon: unified card with text left and photo right */}
        <div className="glass-card rounded-2xl border border-border/60 overflow-hidden card-hover mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            <div className="p-8 flex flex-col justify-center">
              <span className="section-eyebrow mb-4 w-fit">2024</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">DTU Speedathon</h3>
              <p className="text-muted-foreground leading-relaxed">
                Secured a notable position at the DTU Speedathon, demonstrating fast-paced
                problem solving, algorithmic efficiency, and teamwork under strict time limits.
              </p>
            </div>
            <div className="relative lg:border-l lg:border-border/60">
              <div className="aspect-video lg:aspect-auto lg:h-full overflow-hidden">
                <img
                  src="/acheivments/DTU_speedathon.jpg"
                  alt="DTU Speedathon Certificate"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



