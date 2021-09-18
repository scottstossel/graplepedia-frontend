import {Card, Button} from 'react-bootstrap';

const PositionCard = ({ props: {name, img, _id}}) => {
  return (
    <Card style={{ width: "18rem" }} className="text-center">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button variant="primary" href={`/positions/${_id}`}>See Position</Button>
      </Card.Body>
    </Card>
  );
};

export default PositionCard;