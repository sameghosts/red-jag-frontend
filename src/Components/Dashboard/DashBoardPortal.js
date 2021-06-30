import React from 'react';
import { Route, Link } from 'react-router-dom';

import DashBoardNav from './DashBoardNav';
import JobsPortal from '../Jobs/JobsPortal';
import TodoPortal from '../Todo/TodoPortal';
import AnalyticsPortal from '../Analytics/AnalyticsPortal';
import DashBoard from './DashBoard';


import {
    Col,
    Row,
    Container
} from 'react-bootstrap'

function DashBoardPortal() {
    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <DashBoardNav />
                    </Row>
                    <Row>
                        <Link to="/profile">
                            Profile Icon
                        </Link>
                    </Row>
                </Col>
                <Col>
                    <Route
                        path='/dashboard/dashboard'
                        render={() => {
                            return <DashBoard />
                        }}
                    />
                    <Route
                        path='/dashboard/jobs'
                        render={() => {
                            return <JobsPortal />
                        }}
                    />
                    <Route
                        path='/dashboard/todo'
                        render={()=> {
                            return <TodoPortal />
                        }}
                    />
                    <Route
                        path='/dashboard/analytics'
                        render={()=> {
                            return <AnalyticsPortal />
                        }}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default DashBoardPortal
