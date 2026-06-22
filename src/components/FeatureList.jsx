import './FeatureList.css';

const FeatureList = ({ items }) => (
  <ul className="feature-list">
    {items.map((item) => (
      <li key={item}>
        <span className="feature-tick">✓</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default FeatureList;
