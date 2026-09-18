const Stats = () => {
  return (
    <section className="py-20 border-b border-neutral-800 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-mono">
              99.99%
            </div>
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
              UPTIME SLA
            </div>
            <p className="text-xs text-neutral-400">Enterprise grade availability</p>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-mono">
              250K+
            </div>
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
              DEVELOPERS
            </div>
            <p className="text-xs text-neutral-400">Building across 140+ countries</p>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-mono">
              15M+
            </div>
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
              BUILDS / MO
            </div>
            <p className="text-xs text-neutral-400">Automated with zero failures</p>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-mono">
              4.9 / 5
            </div>
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
              SATISFACTION
            </div>
            <p className="text-xs text-neutral-400">From over 3,000+ verified teams</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;