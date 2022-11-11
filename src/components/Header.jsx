import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to="/preview">
          <button>
            Show card preview
          </button>
        </Link>
        <Link to="/deck">
          <button>
            Show card preview
          </button>
        </Link>
      </header>
    )
  }
}