import React, { useEffect } from 'react';
import BottomNav from '../../bottomNav/BottomNav';
import CTA from '../../cta/CTA';
import Nearby from '../../nearby/Nearby';
import TopNav from '../../topNav/TopNav';

function LandingPage() {
  useEffect(() => {
    document.title = `Explore | Kitshare`;
  }, []);

  return (
    <>
      <TopNav>
        <div className="col">
          <form className="d-flex mx-auto w-100">
            <input
              className="form-control rounded-pill text-center text-xl-start"
              type="search"
              placeholder="Start your search"
              aria-label="Search"
            />
          </form>
        </div>
      </TopNav>
      <div id="landing" className="container my-4 pb-5">
        <Nearby />

        <CTA />
      </div>
      <BottomNav />
    </>
  );
}

export default LandingPage;
