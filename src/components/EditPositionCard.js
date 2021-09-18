import {Card, Button} from 'react-bootstrap';

const EditPositionCard = ({ props: {name, img, _id}}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button variant="primary" href={`/editpositions/${_id}`}>Edit Position</Button>
      </Card.Body>
    </Card>
  );
};

export default EditPositionCard;