import React from "react";
import Modal from 'react-bootstrap/Modal'
import data from './data.json';

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heart: 'test',
      selectedBeast: '',
      selectedDescription: '',
      selectedImg: '#',
      selectedLikes: 0,
      allBeasts: data,
    }
  };

  render() {
    return(
      <>
      <Modal
          // show={true}
          show={this.props.showModal}
          onHide={this.props.handleOnHide}>
          <Modal.Header closeButton>
            <Modal.Title>
              {this.props.selectedBeast.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.selectedLikes} ❤️ Likes
            <hr></hr>
            {this.props.selectedBeast.description}
            <hr></hr>
            <img src={this.props.selectedBeast.image_url} alt="" width="100%"/>
          </Modal.Body>
          <Modal.Footer>

          </Modal.Footer>
        </Modal>
      </>
    )
  }
};


export default SelectedBeast;