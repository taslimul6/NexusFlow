import { solutions } from "../../data/solutions";
import SolutionSpotlight from "./SolutionSpotlight";
import PipelineVisual from "./PipelineVisual";
import VelocityVisual from "./VelocityVisual";

const visualMap = {
  1: <PipelineVisual />,
  2: <VelocityVisual />,
};

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 border-b border-neutral-800 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        {solutions.map((solution) => (
          <SolutionSpotlight
            key={solution.id}
            tag={solution.tag}
            title={solution.title}
            description={solution.description}
            bullets={solution.bullets}
            ctaText={solution.ctaText}
            ctaLink={solution.ctaLink}
            reverse={solution.reverse}
          >
            {visualMap[solution.id]}
          </SolutionSpotlight>
        ))}
      </div>
    </section>
  );
};

export default Solutions;