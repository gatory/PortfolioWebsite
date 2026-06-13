export interface StatusBadgeProps {
  status: "complete" | "live" | "in-dev" | "upcoming";
  customLetterColor?: string;
  customBackgroundColor?: string;
}

export default function StatusBadge({
  status,
  customLetterColor,
  customBackgroundColor,
}: StatusBadgeProps) {
  let colorClasses = "";

  switch (status) {
    case "complete":
      colorClasses = "bg-blue-900 text-blue-400";
      break;
    case "live":
      colorClasses = "bg-green-900 text-green-400";
      break;
    case "in-dev":
      colorClasses = "bg-yellow-900 text-yellow-400";
      break;
    case "upcoming":
      colorClasses = "bg-purple-900 text-purple-400";
      break;
    default:
      colorClasses = "bg-gray-900 text-gray-400";
  }

  return (
    status && (
      <div 
        className={`absolute w-fit top-2 right-2 text-[10px] uppercase tracking-widest px-2 py-0.1 rounded-xs z-10 ${colorClasses} text-center`}
        style={{
          backgroundColor: customBackgroundColor,
          color: customLetterColor,
        }}
      >
        {status}
      </div>
    )
  );
}
