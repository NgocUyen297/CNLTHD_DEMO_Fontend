import React from 'react'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({obj, type}) => {
    let url  = `/courses/${obj.id}/lessons`
    if(type === 'lesson'){
         url = `lessons/${obj.id}`
    }

    return (
        <>
            <Col md={3} xs={12}>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={obj.image} />
                <Card.Body>
                    <Card.Title>{obj.subject}</Card.Title>
                    <Card.Text>
                    {obj.created_date}
                    </Card.Text>
                    <Link to={url} className="btn btn-primary">Xem chi tiết</Link>
                </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default Item