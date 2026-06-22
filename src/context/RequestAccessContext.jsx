import { createContext, useContext, useState, useCallback } from 'react';

const RequestAccessContext = createContext(null);

export const RequestAccessProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePackage, setActivePackage] = useState('');

  const openRequestForm = useCallback((packageName = '') => {
    setActivePackage(packageName);
    setIsOpen(true);
  }, []);

  const closeRequestForm = useCallback(() => setIsOpen(false), []);

  return (
    <RequestAccessContext.Provider value={{ isOpen, activePackage, openRequestForm, closeRequestForm }}>
      {children}
    </RequestAccessContext.Provider>
  );
};

export const useRequestAccess = () => {
  const ctx = useContext(RequestAccessContext);
  if (!ctx) throw new Error('useRequestAccess must be used within RequestAccessProvider');
  return ctx;
};
