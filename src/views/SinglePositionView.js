import {useState, useEffect} from 'react';
import {getSinglePositionFromApi} from '../services/positionService';
import ReactPlayer from 'react-player';
import './SinglePosition.css'

const SinglePositionView = ({match}) => {
  const [position, setPosition] = useState([]);
  const {id} = match.params;

  useEffect(() => {
    getSinglePosition();
  }, [id])

  const getSinglePosition = async () => {
    const response = await getSinglePositionFromApi(id);
    setPosition(response.data);
  }

  return (
    <div className="container">
      <h2>{position.name}</h2>
      <img src={position.img} alt="" className="singleImage" />
      <p className="description">{position.description}</p>
      <ReactPlayer url={position.video} style={{margin: 'auto'}}/>
    </div>
  )
}

export default SinglePositionView;