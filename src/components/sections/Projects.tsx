// local
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <>
      <style>
        {`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .slide-up {
            animation: slideUp 1s ease-out forwards;
          }
        `}
      </style>

      <section className="space-y-8 mb-12 slide-up">
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#d0486e] to-[#7560c9] bg-clip-text text-transparent inline-block">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <Dialog key={`${project.title}-${index}`}>
              <DialogTrigger>
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <img
                      src={project.image}
                      alt={`${project.title} image`}
                      className="w-full h-80 md:h-32 object-cover rounded-lg mb-4"
                    />

                    <div className="flex items-center justify-between">
                      <div className="w-full space-y-2">
                        <h3 className="font-medium">{project.title}</h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {project.stack.map((tech, index) => (
                            <span
                              key={`${tech}-${index}`}
                              className="bg-gray-200 dark:bg-gray-700 text-sm px-2 py-1 rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader className="gap-4">
                  <DialogTitle className="self-center">
                    {project.title}
                  </DialogTitle>
                  <DialogDescription>{project.summary}</DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
