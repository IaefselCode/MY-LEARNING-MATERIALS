import React, { Component } from "react";
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form, Table } from 'react-bootstrap'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap/dist/js/bootstrap.min.js'
import FragmentDemoChild from "./FragmentDemo Child";

function FragmentDemo() {
    return (
        <React.Fragment>
            <p className="lead">This Describes the Fragment Demo Component</p>
            <Table className="table-info table-striped">
                <tbody>
                    <tr><FragmentDemoChild/></tr>
                </tbody>
            </Table>
        </React.Fragment>
    )
}
export default FragmentDemo