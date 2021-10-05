import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout";

const category = (props) => {
  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Category</h3>
              <button>Add</button>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default category;
