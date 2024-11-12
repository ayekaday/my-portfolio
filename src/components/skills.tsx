"use client";
import { skillsData } from "@/lib/data";
import Image from "next/image";
import SectionHeading from "./section-heading";
// import { animate, UseInViewOptions } from "framer-motion";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import { Fade } from "react-awesome-reveal";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};
export default function Skills() {
  const { ref } = useSectionInView("#skills");
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>{"My Skills"}</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            key={index}
            className="bg-white border-black rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
      <div>
        <Fade
          direction="right"
          delay={600}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <div className="relative w-full h-[40rem]">
            <Image
              src="/skill3-removebg.png"
              alt="Laptop Light Color"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </Fade>
      </div>
    </section>
  );
}
