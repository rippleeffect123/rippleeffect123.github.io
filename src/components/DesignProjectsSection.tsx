import { designProjects } from "@/lib/data";
import { motion } from "framer-motion";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";

export default function DesignProjectsSection() {
  return (
    <section id="design" className="py-12 bg-gradient-to-b from-muted/20 to-background">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🎨 Design Projects
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 gap-6">
          {designProjects.map((project) => (
            <MotionWrapper key={project.title}>
              <GlassCard className="overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="bg-muted/40 p-4 flex items-center justify-center">
                    <motion.img
                      src={project.image}
                      alt={project.alt}
                      className="w-full max-w-md rounded-md border border-border/30 shadow-md"
                      loading="lazy"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <p className="text-sm text-purple-500 font-medium mb-2">
                      {project.period}
                    </p>
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <ul className="list-disc ml-4 space-y-2 text-sm text-muted-foreground">
                      {project.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
