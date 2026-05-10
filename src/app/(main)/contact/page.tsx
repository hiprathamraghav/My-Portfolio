import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";
import { MotionDiv } from "@/components/motion-div";
import { containerVariants, itemVariants } from "@/lib/stagger-animate";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <MotionDiv
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className="section-seprate flex flex-col px-4 py-7 pb-10"
    >
      <div className="flex flex-col items-center gap-2 py-3 pb-8 text-center">
        <MotionDiv variants={itemVariants} className="text-[12px] md:text-xs">
          Let's connect
        </MotionDiv>
        <div className="flex flex-col items-center gap-1 text-xl tracking-tight text-neutral-700 md:text-2xl dark:text-neutral-200">
          <MotionDiv variants={itemVariants}>
            Got a Project in Mind?
          </MotionDiv>
          <MotionDiv
            variants={itemVariants}
            className="text-xs before:mr-2 before:text-neutral-400 before:content-['--------'] after:ml-2 after:text-neutral-400 after:content-['--------']"
          >
            or
          </MotionDiv>
          <MotionDiv variants={itemVariants}>Just Say Hi</MotionDiv>
        </div>
      </div>
      <div className="flex justify-center p-3">
        <MotionDiv
          variants={itemVariants}
          className="flex w-full max-w-lg flex-col gap-4 rounded-3xl border border-neutral-200 bg-white/50 p-8 text-center shadow-xl shadow-neutral-200/40 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/50 dark:shadow-none"
        >
          <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
            The fastest way to reach me is email. I am open to full stack
            development roles, internships, freelance projects, and
            collaboration opportunities.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="mailto:raghavpratham03@gmail.com">
              <Button className="w-full gap-2 sm:w-auto">
                <Mail className="size-4" />
                Email Me
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/pratham-raghav-5b221a216/"
              target="_blank"
            >
              <Button variant="outline" className="w-full gap-2 sm:w-auto">
                <Linkedin className="size-4" />
                LinkedIn
              </Button>
            </Link>
            <Link href="https://github.com/hiprathamraghav" target="_blank">
              <Button variant="outline" className="w-full gap-2 sm:w-auto">
                <Github className="size-4" />
                GitHub
              </Button>
            </Link>
          </div>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
}
