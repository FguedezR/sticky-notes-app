import { useColor } from "../context/ColorContext";

export function ColorSelector() {
  const { defaultColor, setDefaultColor } = useColor();

  return (
    <div className="color-selector">
      <label htmlFor="colorPicker">Color de la nueva nota</label>
      <input
        type="color"
        id="colorPicker"
        value={defaultColor}
        onChange={(e) => setDefaultColor(e.target.value)}
      />
      <span
        className="color-preview"
        style={{ backgroundColor: defaultColor }}
      ></span>
    </div>
  );
}
