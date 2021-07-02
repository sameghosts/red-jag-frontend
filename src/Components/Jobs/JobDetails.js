/*called by JobPortal*/

import React from 'react'
import { FaStar } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function JobDetails({data}) {
    return data.jobs.map((job, index) => (
        // maybe approach as e-card component?

        <Card className="jobCard">
            <Card.Body>
            <Button id="star-btn"><FaStar/></Button>
                <Card.Title> {job.title}</Card.Title>
                <Card.Text> {job.company_name}</Card.Text>
                <Card.Text> {job.location}</Card.Text>
                <Card.Text> {job.via}</Card.Text>
                <Card.Text> {job.detected_extensions.posted_at}</Card.Text>
                <Card.Text> {job.detected_extensions.schedule_type}</Card.Text>
            </Card.Body>
        </Card>
    ))
}
