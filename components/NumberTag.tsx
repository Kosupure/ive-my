interface NumberTagProps {
  amount: number;
  tagName: string;
  amountPrefix?: string;
  amountSuffix?: string;
}

export default function NumberTag({ amount, tagName, amountPrefix, amountSuffix }: NumberTagProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="font-black text-2xl">{amountPrefix} {new Intl.NumberFormat('en-US').format(amount)} {amountSuffix}</div>
      <div className="font-bold">{tagName}</div>
    </div>
  );
}
