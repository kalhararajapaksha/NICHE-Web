import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const Menu = props => {
  const data = useStaticQuery(graphql`
    query MainMenuQuery {
      allMainMenuJson {
        edges {
          node {
            name
            url
            weight
          }
        }
      }
    }
  `);
  return (
    <div id="main-menu" className="main-menu">
      <ul>
        {data.allMainMenuJson.edges.map(({ node }) => (
          <li key={node.name}>
            <Link className="menu-link" to={node.url} activeClassName="active">{node.name}</Link>
          </li>
        ))}
        <li key="Sell With Us">
            <Link className="menu-link btn btn-primary" to="/sellwithus" activeClassName="active">Sell With Us</Link>
          </li>
      </ul>
    </div>
  );
};

export default Menu;
