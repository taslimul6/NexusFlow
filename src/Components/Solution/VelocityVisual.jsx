const VelocityVisual = () => {
  return (
    <div className="p-6 rounded-xl border border-neutral-800 bg-[#0a0a0a] font-mono text-xs space-y-4">
      <div className="text-neutral-400 flex items-center justify-between">
        <span>TEAM SPRINT VELOCITY</span>
        <span className="text-white">Q3-CYCLE-12</span>
      </div>

      <div className="space-y-3 pt-2">
        <div>
          <div className="flex justify-between text-neutral-300 text-[11px] mb-1">
            <span>Sprint Completion Rate</span>
            <span className="text-white font-semibold">98.4%</span>
          </div>
          <div className="w-full bg-neutral-900 h-2 rounded-full overflow-hidden">
            <div className="bg-white h-full rounded-full w-[98.4%]"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-neutral-300 text-[11px] mb-1">
            <span>PR Cycle Latency</span>
            <span className="text-emerald-400 font-semibold">-64% (Fast)</span>
          </div>
          <div className="w-full bg-neutral-900 h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-400 h-full rounded-full w-[82%]"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-2">
        <div className="p-3 bg-[#111111] rounded border border-neutral-800">
          <div className="text-neutral-500 text-[10px]">TIME TO MERGE</div>
          <div className="text-base font-bold text-white mt-0.5">38m avg</div>
        </div>
        <div className="p-3 bg-[#111111] rounded border border-neutral-800">
          <div className="text-neutral-500 text-[10px]">AI AGENT RUNS</div>
          <div className="text-base font-bold text-white mt-0.5">14,290 / wk</div>
        </div>
      </div>
    </div>
  );
};

export default VelocityVisual;