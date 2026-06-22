import { useState, useEffect } from 'react';
import { useRequestAccess } from '../context/RequestAccessContext';
import './RequestAccessModal.css';

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const RequestAccessModal = () => {
  const { isOpen, activePackage, closeRequestForm } = useRequestAccess();
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
      setForm({ name: '', email: '', company: '', message: '' });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeRequestForm(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeRequestForm]);

  if (!isOpen) return null;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'request-access', package: activePackage, ...form }),
      });
      setStatus('sent');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="ram-overlay" onClick={closeRequestForm}>
      <div className="ram-modal" onClick={(e) => e.stopPropagation()}>
        <button className="ram-close" onClick={closeRequestForm} aria-label="Close">×</button>

        {status === 'sent' ? (
          <div className="ram-success">
            <div className="ram-success-icon">✓</div>
            <h3>Request received</h3>
            <p>Thanks — we'll be in touch within 1 business day to confirm next steps for the {activePackage || 'package'}.</p>
            <button className="btn btn-secondary" onClick={closeRequestForm}>Close</button>
          </div>
        ) : (
          <>
            <span className="eyebrow">Request access</span>
            <h3>{activePackage ? `Get started — ${activePackage}` : 'Get started'}</h3>
            <p className="ram-sub">
              We're onboarding a limited number of businesses while we publish full results from the live system.
              Tell us about your business and we'll be in touch.
            </p>

            <form onSubmit={handleSubmit} className="ram-form">
              <input type="hidden" name="form-name" value="request-access" />
              <input type="hidden" name="package" value={activePackage} />

              <label>
                Name
                <input type="text" name="name" required value={form.name} onChange={handleChange} />
              </label>
              <label>
                Email
                <input type="email" name="email" required value={form.email} onChange={handleChange} />
              </label>
              <label>
                Company
                <input type="text" name="company" value={form.company} onChange={handleChange} />
              </label>
              <label>
                Anything we should know? (optional)
                <textarea name="message" rows="3" value={form.message} onChange={handleChange} />
              </label>

              <button type="submit" className="btn btn-primary btn-block" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Request Access →'}
              </button>
              {status === 'error' && <p className="ram-error">Something went wrong — please email hello@contentedly.ai directly.</p>}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default RequestAccessModal;
