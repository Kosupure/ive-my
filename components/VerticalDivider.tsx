interface VerticalDividerProps {
  heightClass?: string;
}

export default function VerticalDivider({ heightClass = "h-4" }: VerticalDividerProps) {
  return <div className={`bg-black ${heightClass} w-[1px]`}></div>;
}
