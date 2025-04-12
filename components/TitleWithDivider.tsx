interface TitleWithDividerProps {
  title: string;
  widthClass?: string;
  alignEnd?: boolean;
}

export default function TitleWithDivider({
  title,
  widthClass = "w-10",
  alignEnd = false,
}: TitleWithDividerProps) {
  return (
    <div className={`${alignEnd ? "text-end items-end" : ""} flex flex-col`}>
      <div className="font-bold text-xl italic">{title}</div>
      <div className={`${widthClass} h-1 bg-black`}></div>
    </div>
  );
}
