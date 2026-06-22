import React from 'react';

interface UsageGraphProps {
  percentage: number;
  label: string;
}

export const UsageGraph: React.FC<UsageGraphProps> = ({ percentage, label }) => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="progress-ring-container">
      <svg className="progress-ring" width="150" height="150">
        <circle
          className="progress-ring-circle-bg"
          r={radius}
          cx="75"
          cy="75"
        />
        <circle
          className="progress-ring-circle"
          r={radius}
          cx="75"
          cy="75"
          style={{ strokeDashoffset, strokeDasharray: circumference }}
        />
      </svg>
      <div className="progress-text">
        <span className="progress-percentage">{Math.round(percentage)}%</span>
        <span className="progress-label">{label}</span>
      </div>
    </div>
  );
};
