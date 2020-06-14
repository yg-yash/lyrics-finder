import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="row">
    <div className="col bg-dark text-center ">
      <Link to="/">
        <p className="text-white pt-2 lead">Lyrics Finder </p>
      </Link>
    </div>
  </div>
);

export default Header;
