interface ColorSwatchProps {
  color: string;
}

export function ColorSwatch({ color }: ColorSwatchProps) {
  return (
    <div
      className="w-6 h-6 rounded-full border border-gray-200"
      style={{ backgroundColor: color }}
      title={color}
    />
  );
}