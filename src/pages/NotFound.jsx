import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="section" style={{ textAlign: 'center', padding: '140px 0' }}>
    <div className="container">
      <h1 style={{ fontSize: 64, marginBottom: 16 }}>404</h1>
      <p className="lead" style={{ margin: '0 auto 28px' }}>That page doesn't exist.</p>
      <Link to="/" className="btn btn-primary">Back to Home →</Link>
    </div>
  </section>
);

export default NotFound;
