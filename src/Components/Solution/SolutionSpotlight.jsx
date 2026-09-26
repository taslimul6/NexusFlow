const SolutionSpotlight = ({
  tag,
  title,
  description,
  bullets,
  ctaText,
  ctaLink,
  reverse,
  children,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

      {/* Text Content */}
      <div className={`lg:col-span-6 space-y-6 ${reverse ? "order-1 lg:order-2" : ""}`}>
        <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
          {tag}
        </div>
        <h3 className="text-3xl font-bold tracking-tight text-white leading-tight">
          {title}
        </h3>
        <p className="text-sm text-neutral-400 leading-relaxed">
          {description}
        </p>

        {bullets.length > 0 && (
          <div className="space-y-3 pt-2 font-mono text-xs text-neutral-300">
            {bullets.map((bullet, index) => (
              <div key={index} className="flex items-center gap-3">
                <img src="/icons/check.svg" alt="" className="w-4 h-4 invert" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        )}

        {ctaText && (
          <div className="pt-2">
            <a
              href={ctaLink}
              className="inline-flex items-center gap-2 text-xs font-mono text-white hover:text-neutral-300 border-b border-neutral-700 pb-0.5 transition-colors"
            >
              <span>{ctaText}</span>
              <img src="/icons/arrow-right.svg" alt="" className="w-3.5 h-3.5 invert" />
            </a>
          </div>
        )}
      </div>

      {/* Visual Content (passed as children) */}
      <div className={`lg:col-span-6 ${reverse ? "order-2 lg:order-1" : ""}`}>
        {children}
      </div>

    </div>
  );
};

export default SolutionSpotlight;