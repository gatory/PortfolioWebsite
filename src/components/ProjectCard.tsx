import Link from "next/link";
import Image from "next/image";
import StatusBadge, { StatusBadgeProps } from "./StatusBadge";

export interface ProjectCardProps {
  projectName?: string;
  route?: string;
  thumbnail?: string;
  bgColor?: string;
  icon?: string;
  stack?: string[];
  status?: StatusBadgeProps["status"];
}

export default function ProjectCard({
  projectName = "Project Name",
  route = "/",
  thumbnail,
  bgColor = "#7B46B4",
  icon = "/images/icons/default-icon.png",
  stack = [],
  status = "complete",
}: ProjectCardProps) {
  return (
    <div
      className="debug-layout relative w-40 h-60 overflow-hidden p-4 font-bebas"
      style={{ backgroundColor: thumbnail ? undefined : bgColor }}
    >
      {thumbnail && (
        <Image
          src={thumbnail}
          alt={projectName}
          fill
          className="object-cover -z-10"
        />
      )}
        
      {/* Status Badge */}
      <StatusBadge status={status} />

      {/* Background Overlay */}
      <div
        className={`absolute inset-0 ${
          thumbnail
            ? "bg-linear-to-t from-black via-black/60 to-transparent"
            : "bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.6)_100%)]"
        }`}
      />

      {/* Icon */}
      {!thumbnail && (
          <Image
            src={icon}
            alt={`${projectName} icon`}
            width={64}
            height={64}
            className="absolute top-16 left-1/2 -translate-x-1/2 z-0"
          />
      )}

      {/* Text */}
      <div
        className="absolute bottom-0 left-0 w-full h-45/100 flex flex-col items-center justify-center z-10 px-2 text-center"
      >
        <h2 className="text-xl leading-tight line-clamp-2">{projectName}</h2>
        {stack && stack.length > 0 && (
          <p className="text-xs tracking-wide text-secondary mt-1">
            {stack.join(" · ")}
          </p>
        )}
      </div>
    </div>
  );
}
