interface PageHeroProps {
  title: string;
  description?: string;
}

const PageHero = ({ title, description }: PageHeroProps) => {
  return (
    <section className="relative py-24 lg:py-28 overflow-hidden bg-background mt-20">
      <div className="absolute inset-0 z-0 p-4">
        <div className="absolute inset-0 rounded-lg" />
        <img 
          src="https://cdn.prod.website-files.com/68a2db4c5dd3ad2de5b3cf0f/68b01cb5237a8c9ca2ca6bad_Abstract%20Fluid%20Forms.avif" 
          alt="" 
          className="w-full h-full object-cover opacity-60 rounded-xl"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground tracking-tighter mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-tight md:leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
