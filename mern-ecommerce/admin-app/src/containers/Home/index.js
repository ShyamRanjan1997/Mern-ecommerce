import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout";
import "./style.css";

/**
 * @author
 * @function Home
 **/

export const Home = (props) => {
  return (
    <Layout sidebar>
       
      {/* <Jumbotron style={{ margin: '5rem' }} className='text-center'>
            <h1>Welcome to Admin Dashboard</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Jumbotron> */}
    </Layout>
  );
};

export default Home;
