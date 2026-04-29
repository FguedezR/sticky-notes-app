import { useColor } from "../context/ColorContext";

export function ColorSelector() {
  const { defaultColor, setDefaultColor } = useColor();

  return (
    <div className="color-selector">
      <label htmlFor="colorPicker">Color de nueva nota</label>
      <input
        id="colorPicker"
        type="color"
        value={defaultColor}
        onChange={(e) => setDefaultColor(e.target.value)}
      />
      <span
        className="color-preview"
        style={{ backgroundColor: defaultColor }}
      />
    </div>
  );
}
