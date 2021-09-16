import {useState, useEffect} from 'react';
import {getSinglePositionFromApi} from '../services/positionService';
import ReactPlayer from 'react-player';
import './SinglePosition.css'
import { getSingleTechniqueFromApi } from '../services/techniqueService';

const SingleTechniqueView = ({match}) => {
  const [technique, setTechnique] = useState([]);
  const {id} = match.params;

  useEffect(() => {
    getSingleTechnique();
  }, [id])

  const getSingleTechnique = async () => {
    const response = await getSingleTechniqueFromApi(id);
    setTechnique(response.data);
  }

  return (
    <div className="container">
      <h2>{technique.name}</h2>
      <img src={technique.img} alt="" className="singleImage" />
      <p className="description">{technique.description}</p>
      <ReactPlayer url={technique.video} style={{margin: 'auto'}}/>
      {/* <p><a href={`/${technique.position}`}>{technique.position}</a></p> */}
    </div>
  )
}

export default SingleTechniqueView;