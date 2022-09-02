import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import {Col, ListGroup ,Row, Tab} from 'react-bootstrap';



function Dashboard() {
  return (
    <Tab.Container id="list-group-tabs-example" >
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action as={NavLink} to="profile">
              Profile
            </ListGroup.Item>
            <ListGroup.Item action as={NavLink} to="contacts">
              Contacts
            </ListGroup.Item>
            <ListGroup.Item action as={NavLink} to="manage-password">
              Manage Password
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Outlet />
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Dashboard