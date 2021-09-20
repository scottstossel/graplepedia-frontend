import {Card, Button} from 'react-bootstrap';

const EditTechniqueCard = ({ props: {name, img, _id}}) => {
  return (
    <Card style={{ width: "18rem", backgroundColor: "#B1A296" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button variant="primary" style={{backgroundColor: "#557a95", border: 'none'}} href={`/edittechniques/${_id}`}>Edit Technique</Button>
      </Card.Body>
    </Card>
  );
};

export default EditTechniqueCard;