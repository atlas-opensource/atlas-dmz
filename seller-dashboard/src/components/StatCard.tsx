import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, subtitle }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <div className="card-value">{value}</div>
      <div className="card-subtitle">{subtitle}</div>
    </div>
  );
};
