import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ToolDetailsProps {
  title: string;
  description: string;
  features: { title: string; description: string }[];
  icon: IconDefinition; // IconDefinition type from FontAwesome
}

const ToolDetails = ({ title, description, features, icon }: ToolDetailsProps) => {
  return (
    <div className="tool-details-card">
      <div className="card-header">
        <span className="icon">
          {/* Use FontAwesomeIcon component to render the icon */}
          <FontAwesomeIcon icon={icon} />
        </span>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <strong>{feature.title}</strong>: {feature.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToolDetails;
