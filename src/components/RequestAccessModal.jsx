import { useState, useEffect } from 'react';
import { useRequestAccess } from '../context/RequestAccessContext';
import './RequestAccessModal.css';

// Google Apps Script Web App URL — set once the script is deployed.
// See apps-script/request-access.gs for the script to paste into Google Sheets.
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

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

    if (!GOOGLE_SCRIPT_URL) {
      console.warn('VITE_GOOGLE_SCRIPT_URL not configured — submitting locally for demo.');
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('sent');
      return;
    }

    try {
      const params = new URLSearchParams();
      params.append('package', activePackage);
      params.append('name', form.name);
      params.append('email', form.email);
      params.append('company', form.company);
      params.append('message', form.message);
      params.append('source', 'Contentedly.ai Request Access');

      // Apps Script requires no-cors for simple POST — we can't read the
      // response body, but we treat a non-throwing fetch as success.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
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
