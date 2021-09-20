import {Card, Button} from 'react-bootstrap';

const TechniqueCard = ({ props: {name, img, _id}}) => {
  return (
    <Card style={{ width: "18rem", backgroundColor: "#B1A296" }} className="text-center">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button variant="primary" style={{backgroundColor: "#557a95", border: 'none'}} href={`/techniques/${_id}`}>See Technique</Button>
      </Card.Body>
    </Card>
  );
};

export default TechniqueCard;