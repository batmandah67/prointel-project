// app/portfolio/[id]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaGooglePlusG,
} from "react-icons/fa";
import { portfolioProjects, Project } from "../portfolioData";

interface PageProps {
  params: { id: string };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const projectId = parseInt(params.id);
  const project: Project | undefined = portfolioProjects.find(
    (p) => p.id === projectId
  );

  if (!project) return notFound();

  return (
    <div>
      <section
        className="h-[35vh] bg-fixed bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center text-white text-center px-4"
        style={{ backgroundImage: "url('/heroblog-bg.png')" }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight max-w-3xl mb-6">
          PROJECT DETAIL
        </h1>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <Image
            src={project.image}
            alt={project.title}
            width={770}
            height={468}
            className="rounded"
          />
          <Image
            src={project.extraImage || project.image}
            alt="additional"
            width={770}
            height={468}
            className="rounded"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
          <p className="text-gray-700 text-base leading-relaxed">
            {project.description}
          </p>
          <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-800 pt-4">
            <div>
              <span className="font-semibold">Client :</span>
              <div>{project.client}</div>
            </div>
            <div>
              <span className="font-semibold">Date :</span>
              <div>{project.date}</div>
            </div>
            <div>
              <span className="font-semibold">Budget :</span>
              <div>{project.budget}</div>
            </div>
            <div>
              <span className="font-semibold">Category :</span>
              <div>{project.category}</div>
            </div>
          </div>

          <div className="pt-6">
            <span className="font-semibold block mb-2">Share us on :</span>
            <div className="flex space-x-4 text-lg text-gray-700">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
              <FaPinterestP className="hover:text-red-600 cursor-pointer" />
              <FaGooglePlusG className="hover:text-red-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    id: project.id.toString(),
  }));
}
