import {Card, Button} from 'react-bootstrap';

const TechniqueCard = ({ props: {name, img, _id}}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button variant="primary" href={`/techniques/${_id}`}>See Technique</Button>
      </Card.Body>
    </Card>
  );
};

export default TechniqueCard;