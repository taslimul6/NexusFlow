import { stats } from "../data/stats";
import CountUp from "./ui/CountUp";

const Stats = () => {
  return (
    <section className="py-20 border-b border-neutral-800 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-mono">
                <CountUp value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                {stat.label}
              </div>
              <p className="text-xs text-neutral-400">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
