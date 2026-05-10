import Link from "next/link";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import {MotionDiv} from "../motion-div";
import { containerVariants, itemVariants } from "@/lib/stagger-animate";

export default function Contact() {
  return (
    <MotionDiv
      className="section-seprate font-poppins px-6 py-20"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }} // Triggers slightly before reaching the element
    >
      <div className="flex flex-col items-center">
        <MotionDiv variants={itemVariants} className="text-sm text-neutral-400">
          Scrolled this far?
        </MotionDiv>

        <MotionDiv
          variants={itemVariants}
          className="text-4xl font-bold text-neutral-800 dark:text-neutral-100"
        >
          Lets Connect
        </MotionDiv>

        <MotionDiv
          variants={itemVariants}
          className="flex flex-col items-center py-6 text-center text-lg text-neutral-600 dark:text-neutral-400"
        >
          <div>Want to discuss a project or just want to say hi?</div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            just reach out to me via{" "}
            <Link href="mailto:raghavpratham03@gmail.com">
              <MotionDiv
                whileHover={{ scale: 1.05 }}
                className="about-skill-span flex cursor-pointer items-center gap-2 text-sm font-semibold"
              >
                <Mail className="size-4" />
                Email
              </MotionDiv>
            </Link>
            or{" "}
            <Link href="https://www.linkedin.com/in/pratham-raghav-5b221a216/" target="_blank">
              <MotionDiv
                whileHover={{ scale: 1.05 }}
                className="about-skill-span flex cursor-pointer items-center gap-2 text-sm font-semibold"
              >
                LinkedIn
              </MotionDiv>
            </Link>
          </div>
        </MotionDiv>

        <MotionDiv
          variants={itemVariants}
          className="text-lg before:mr-2 before:text-neutral-400 before:content-['--------'] after:ml-2 after:text-neutral-400 after:content-['--------']"
        >
          OR
        </MotionDiv>

        <MotionDiv
          variants={itemVariants}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6"
        >
          <Link href="mailto:raghavpratham03@gmail.com">
            <Button className="links-span flex items-center gap-2">
              <Mail className="size-4" />
              <span>Send an email</span>
            </Button>
          </Link>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
}
