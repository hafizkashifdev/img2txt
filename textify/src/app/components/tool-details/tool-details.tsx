const DetailsComponent = ({
  title,
  description,
  // features,
  details,
  icon,
}: {
  title: string;
  description: string;
  // features: Array<{ title: string; description: string }>;
  details: any;
  icon: any;
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      {/* Render the features */}
      {/* {features.map((feature, index) => (
        <div key={index}>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))} */}
      {/* Render the details */}
      {details && <div>{typeof details === 'string' ? details : details}</div>}
    </div>
  );
};

export default DetailsComponent;
