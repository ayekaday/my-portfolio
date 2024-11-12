"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/useInView";
import SubmitBtn from "./submit-btn";
import Image from "next/image";

import { Fade } from "react-awesome-reveal";

export default function Contact() {
  const { ref } = useSectionInView("#contact");
  return (
    <motion.section id="contact" ref={ref}>
      <Fade
        direction="up"
        delay={400}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        {" "}
        <SectionHeading>{"Contact Me"}</SectionHeading>
      </Fade>
      <Fade
        direction="up"
        delay={600}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        {" "}
        <p className="text-gray-700 -mt-6 dark:text-white/80">
          {"You're welcome to contact me directly here."}
        </p>
      </Fade>
      <div className="grid lg:grid-cols-2 lg:text-start">
        <Fade
          direction="up"
          delay={800}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <form className="mt-10 flex flex-col dark:text-black">
            <input
              className="h-14 px-4 rounded-lg outline-none dark:bg-white dark:bg-opacity-10  "
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder={"Your Email"}
            />
            <textarea
              className="h-52 my-3 rounded-lg resize-none p-4 outline-none dark:bg-white dark:bg-opacity-10 "
              name="message"
              placeholder={"Your email"}
              required
              maxLength={5000}
            />
            <SubmitBtn text={"Submit"} />
          </form>
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
                src="/happygirl-removebg1.png"
                alt="About Me"
                width="600"
                height="600"
                quality="100"
                priority={true}
                className="rounded-full mt-8 object-cover"
              />
            </Fade>
          </div>
        </Fade>
      </div>
    </motion.section>
  );
}
