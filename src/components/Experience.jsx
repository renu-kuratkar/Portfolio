import { experience } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from '../assets/svg/Arrow';
import { GradientLight } from "./design/Benefits";
import ClipPath from '../assets/svg/ClipPath';

const Experience = () => {
  return (
    <Section id="experience" crosses>
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Delivering Excellence Through Experience!"
        />

        <div className="flex flex-wrap gap-10 mb-10 mx-auto">
          {experience.map((item) => (
            <div
              key={item.id}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-2">{item.title}</h5>
                <p className="text-sm font-semibold text-n-1 mb-1">{item.company}</p>
                <p className="text-xs text-n-2 mb-4">
                  {item.duration} | {item.location}
                </p>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              ></div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
