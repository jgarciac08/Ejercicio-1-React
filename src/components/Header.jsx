import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from '../data/MenuItems';

import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  changeClicked() {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <nav className="header-navbar">
        <div className="navbar-logo">
          <img
            className="logo-image"
            src="https://eu01.edcwb.com/buscador/img/centros/logogrande/7348-a9c730d6b2b644f5b9910364ba6af277.jpg"
          />
          <i className="fas fa-user-graduate" />
        </div>
        {/*
        <ul>{this.createMenuLinks()}</ul>
        <ul>
          Forma 2: map (función) 
          {MenuItems.map(function (item) {
            return (
              <li>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        */}
        <ul
          className={this.state.clicked ? 'navbar-menu active' : 'navbar-menu'}
        >
          {/* Forma 3: map (función flecha) */}
          {MenuItems.map((item) => {
            return (
              <li key={item.id}>
                <Link className="navbar-link" to={item.path} onClick={this.changeClicked.bind(this)}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="menu-icon" onClick={this.changeClicked.bind(this)}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
      </nav>
    );
  }

  /**
   * Forma menú nº 1: bucle for
   */
  createMenuLinks() {
    const listComponents = [];
    for (let i = 0; i < MenuItems.length; i++) {
      listComponents.push(
        <li>
          <Link to={MenuItems[i].path}>{MenuItems[i].title}</Link>
        </li>
      );
    }
    return listComponents;
  }
}

export default Header;
