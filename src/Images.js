import React from 'react';
import Axios from 'axios';

class Images extends React.Component {
  state = {
    photos: [],
    mounted : false
  };

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(resultat =>
        this.setState({ photos: resultat.data , mounted: true })
      )
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.mounted ? '' : 'loading...'}
        {this.state.photos.splice(0, 4).map((element, index) =>
          <img key={index} src={element.thumbnailUrl} alt= {element.title} />
        )}
      </div>
    )
  }
}


export default Images;