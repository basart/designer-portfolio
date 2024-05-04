import { AboutMeAccordion } from './@components';

const ABOUT_ME_DATA = [
  {
    title: 'Skills',
    content: [
      {
        description:
          'Prototyping, wireframing, user flows, mockups, design systems, UI kits, UX writing, UX research, empathy, critical thinking, great collaborative and communicative skills, business process thinking',
      },
    ],
  },
  {
    title: 'Experience',
    content: [
      {
        title: 'Ingenious',
        description: 'UX/UI Designer (part-time)',
        period: 'January 2024 - May 2024',
      },
      {
        title: 'Remedy Product Studio',
        description: 'UX/UI Designer',
        period: 'November 2020 - January 2024',
      },
    ],
  },
  {
    title: 'Education',
    content: [
      {
        title:
          'Educational Center<br/>for Programming and High Tech<br/>(IT-Academy)',
        description: 'UX/UI Design',
        period: '2019 - 2020',
      },
      {
        title: 'Minsk State Linguistic<br/>University',
        description: 'Bachelor’s Degree, Linguistics',
        period: '2016 - 2021',
      },
    ],
  },
] as const;

function AboutMe() {
  return (
    <div className="container flex justify-between">
      <div className="even-columns pb-16 pt-12 lg:pt-32">
        <AboutMeAccordion />

        <div className="order-first mb-24 lg:order-none lg:mb-0 lg:pl-10">
          <div className="mb-10 flex flex-col gap-3">
            <p className="font-regular text-2xl text-white">Hello!</p>
            <p className="font-regular text-2xl text-white">
              I&apos;m a dedicated UX/UI Designer with over 3 years
              of&nbsp;experience specializing in creating intuitive
              and&nbsp;user&#8209;centered design solutions particularly
              for&nbsp;projects&nbsp;in healthcare domain.
            </p>
            <p className="font-regular text-2xl text-white">
              I strive to design solutions that are not only
              functional&nbsp;but&nbsp;also enrich the user experience,
              aiming&nbsp;to&nbsp;deliver products that people love and trust.
            </p>
          </div>

          <div className="flex">
            <a href="#all-projects">
              <div className="button-container outline-btn-container">
                <div className="button outline-btn text-2xl">Download CV</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
