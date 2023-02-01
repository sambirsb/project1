import React from 'react'
import c from './Header.module.css'
import AccountContainer from './HeaderElements/Account/AccountContainer';
import HeaderBrand from './HeaderElements/HeaderBrand';
import HeaderEmpty from './HeaderElements/HeaderEmpty';
import HeaderNav from './HeaderElements/HeaderNav/HeaderNav';

let Header = () => {
  return (
    <header className={c.header}>
      <div className={c.left}></div>
      <div className={c.center}>
        <div className="row">
          <HeaderBrand />
          <HeaderEmpty />
          <HeaderNav />
        </div>
      </div>
      <div className={c.account}>
        <AccountContainer />
      </div>
    </header>
  );
}

export default Header