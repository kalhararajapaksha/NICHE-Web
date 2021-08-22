import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import Menu from '../Menu/Menu';
import Hamburger from '../Hamburger/Hamburger';
import MenuMobile from '../MenuMobile/MenuMobile';

import Logo from '../../images/download.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false
    };
  }

  toggleMenu = menuActive => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive
    }));
  };

  render() {
    const config = this.props.data.configJson;
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img className="nav-logo" alt={config.logo.alt} src={Logo} />
            </Link>
          </div>
           
          <MenuMobile active={this.state.menuActive} />
          <Menu />
        
          <Hamburger toggleMenu={this.toggleMenu} />
        </div>
      </div>
    );
  }
}

const props = () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        configJson {
          logo {
            alt
            desktop
            mobile
          }
        }
      }
    `}
    render={data => <Header data={data} />}
  />
);

export default props;