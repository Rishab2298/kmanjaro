import { useState, useEffect } from 'react';
import VariantM from './VariantM.jsx';
import ContactPage from './ContactPage.jsx';
import { ScrollProgress } from './shared.jsx';

function getPage() {
  return window.location.pathname === '/contact' ? 'contact' : 'home';
}

export default function App() {
  const [page, setPage] = useState(getPage);

  useEffect(() => {
    const fn = () => setPage(getPage());
    window.addEventListener('popstate', fn);
    return () => window.removeEventListener('popstate', fn);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setPage(getPage());
  };

  if (page === 'contact') {
    return <ContactPage onNavigateHome={() => navigate('/')} />;
  }

  return (
    <>
      <ScrollProgress />
      <VariantM onNavigateContact={() => navigate('/contact')} />
    </>
  );
}
