import React from 'react';

interface ResourceSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  unit: string;
  onChange: (value: number) => void;
}

export const ResourceSlider: React.FC<ResourceSliderProps> = ({
  label,
  value,
  min,
  max,
  unit,
  onChange,
}) => {
  return (
    <div className="slider-container">
      <div className="slider-header">
        <span className="slider-label">{label}</span>
        <span className="slider-value-badge">
          {value} {unit}
        </span>
      </div>
      <input
        type="range"
        className="slider"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
};
