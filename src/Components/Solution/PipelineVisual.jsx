const PipelineVisual = () => {
  return (
    <div className="p-6 rounded-xl border border-neutral-800 bg-[#0a0a0a] font-mono text-xs space-y-3">

      <div className="flex items-center justify-between text-neutral-500 pb-2 border-b border-neutral-800">
        <span>PIPELINE: PROD-DEPLOY-442</span>
        <span className="text-emerald-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> ONLINE
        </span>
      </div>

      <div className="p-3 rounded-lg border border-neutral-800 bg-[#111111] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/icons/zap.svg" alt="" className="w-4 h-4 invert" />
          <span className="text-neutral-200">git push origin main</span>
        </div>
        <span className="text-neutral-500">Triggered</span>
      </div>

      <div className="p-3 rounded-lg border border-neutral-700 bg-[#141414] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/icons/sparkles.svg" alt="" className="w-4 h-4 invert" />
          <span className="text-white">AI Agent: Generate Release Specs</span>
        </div>
        <span className="text-emerald-400">Completed (0.8s)</span>
      </div>

      <div className="p-3 rounded-lg border border-neutral-800 bg-[#111111] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/icons/globe.svg" alt="" className="w-4 h-4 invert" />
          <span className="text-neutral-200">Deploy Global Edge Network</span>
        </div>
        <span className="text-emerald-400">200 OK (14ms)</span>
      </div>

    </div>
  );
};

export default PipelineVisual;