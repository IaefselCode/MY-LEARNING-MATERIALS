import React, { Component } from "react";
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap/dist/js/bootstrap.min.js'

function FragmentDemoChild() {
    return (
        <React.Fragment>
          <td>Index NO</td>
          <td>Full Name</td>
          <td>Course</td>
        </React.Fragment>
    )
}
export default FragmentDemoChild