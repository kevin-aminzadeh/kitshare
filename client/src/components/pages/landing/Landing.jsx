import React, { useEffect } from 'react';
import CTA from '../../cta/CTA';
import Nearby from '../../nearby/Nearby';

function LandingPage() {
  useEffect(() => {
    document.title = `Explore | Kitshare`;
  }, []);

  return (
    <div id="landing" className="container my-4 pb-5">
      <Nearby />

      <CTA />
    </div>
  );
}

export default LandingPage;
