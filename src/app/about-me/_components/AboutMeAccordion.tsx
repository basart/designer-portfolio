import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/Accordion';

function AboutMeAccordion() {
  return (
    <Accordion className="flex w-full flex-col gap-12 lg:w-[485px]">
      <AccordionItem value="skills">
        <AccordionTrigger className="text-2xl text-white">
          Skills
        </AccordionTrigger>
        <AccordionContent>
          <div className="pb-4">
            Prototyping, wireframing, user flows, mockups, design systems, UI
            kits, UX writing, UX research, empathy, critical thinking, great
            collaborative and communicative skills, business process thinking
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="experience">
        <AccordionTrigger className="text-2xl text-white">
          Experience
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid gap-4">
            <div className="grid-rows-min-2 grid grid-cols-2 grid-rows-2 gap-y-2">
              <div className="text-base font-bold text-white">Ingenious</div>
              <div className="font-regular text-right text-base text-white">
                January 2024 - May 2024
              </div>
              <div className="font-regular text-base text-white">
                UX/UI Designer (part-time)
              </div>
            </div>
            <div className="grid-rows-min-2 grid grid-cols-2 grid-rows-2 gap-y-2 pb-4">
              <div className="text-base font-bold text-white">
                Remedy Product Studio
              </div>
              <div className="font-regular text-right text-base text-white">
                November 2020 - January 2024
              </div>
              <div className="font-regular text-base text-white">
                UX/UI Designer
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="education">
        <AccordionTrigger className="text-2xl text-white">
          Education
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid gap-4">
            <div className=" grid-rows-min-2 grid grid-cols-2 grid-rows-2 gap-y-2">
              <div className="text-base font-bold text-white">
                Educational Center
                <br />
                for Programming and High Tech
                <br />
                (IT-Academy)
              </div>
              <div className="font-regular text-right text-base text-white">
                2019 - 2020
              </div>
              <div className="font-regular col-span-2 text-base text-white">
                UX/UI Design
              </div>
            </div>
            <div className="grid-rows-min-2 grid grid-cols-2 grid-rows-2 gap-y-2 pb-4">
              <div className="text-base font-bold text-white">
                Minsk State Linguistic
                <br />
                University
              </div>
              <div className="font-regular text-right text-base text-white">
                2016 - 2021
              </div>
              <div className="font-regular col-span-2 text-base text-white">
                Bachelor’s Degree, Linguistics
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default AboutMeAccordion;
