"use client";

import SectionHeading from "./section-heading";
import Image from "next/image";
import { useSectionInView } from "@/lib/useInView";
//Animation
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

export default function About() {
  const { ref } = useSectionInView("#about");
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
      className="max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28"
    >
      <div className="container mx-auto">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          {" "}
          <SectionHeading>About Me </SectionHeading>
        </Fade>
      </div>
      <div className="grid lg:grid-cols-2 lg:text-start">
        <div className="flex-1">
          <div className="text-lg mt-12 xl:mt-3">
            {" "}
            <div className="flex justify-start flex-col">
              <Fade
                direction="up"
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
                {" "}
                <h3 className="font-bold mt-6">Our Mission</h3>
              </Fade>
              <Fade
                direction="up"
                delay={600}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
                {" "}
                <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                  "Our mission is to continuously grow and enhance our skills in
                  web development, creating innovative and user-friendly digital
                  solutions. We aim to contribute to impactful projects while
                  learning from experienced developers, building clean,
                  efficient, and accessible web applications that improve the
                  user experience."
                </p>
              </Fade>
              <Fade
                direction="up"
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
                {" "}
                <h3 className="font-bold mt-6">Our Vision</h3>
              </Fade>
              <Fade
                direction="up"
                delay={600}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
                {" "}
                <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                  "Our vision is to become a proficient web developer, dedicated
                  to building innovative, scalable, and accessible web
                  applications. We aim to stay at the forefront of emerging
                  technologies, continually improving our skills to deliver
                  impactful digital experiences that empower users and solve
                  real-world problems."
                </p>
              </Fade>
            </div>
          </div>
        </div>

        <div>
          <Fade
            direction="right"
            delay={600}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            {/* Right Image */}
            <Image
              src="/happygirl.jpg"
              alt="About Me"
              width="600"
              height="600"
              quality="100"
              priority={true}
              className="rounded-full mt-8 object-cover"
            />
          </Fade>
        </div>
      </div>
    </motion.section>
  );
}
