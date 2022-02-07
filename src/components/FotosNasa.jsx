import React from 'react';
import uuid from 'react-uuid';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';

class FotosNasa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      /*selectedItem: '',*/
      imagenId: '',
      camera: '',
      fecha: '',
    };
  }

  changeStateClicked(item) {
    this.setState({
      /*selectedItem: item,*/
      imagenId: item.id,
      camera: item.camera,
      fecha: item.earth_date,
      imagen: item.img_src
    });
  }

  async componentDidMount() {
    const response = await fetch(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=nf0Ch1m23QtORxmFL0RjeUZ6bBnciP7zqa46fhOf'
    );
    const responseData = await response.json();
    this.setState({
      tableData: responseData['photos'],
      /*selectedItem: responseData['photos'][0], 
      Para Card se obtienen los elementos específicos, para poder coger de los arrays del elemento
      (por ejemplo de cámara)*/
      imagenId: responseData['photos'][0].id,
      camera: responseData['photos'][0].camera,
      fecha: responseData['photos'][0].earth_date,
      imagen: responseData['photos'][0].img_src,
    });
  }

  render() {
    return (
      <div>
        <Container>
        <h1>Fotos NASA</h1>
          <Row>
            <Col lg={8} md={6}>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>ID Foto</th>
                    <th>Cámara</th>
                    <th>Fecha foto</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr key={uuid()} onClick={() => this.changeStateClicked(item)}>
                        <td>{item.id}</td>
                        <td>{item.camera.full_name}</td>
                        <td>{item.earth_date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={8}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>ID Foto: {this.state.imagenId}</Card.Title>
                  <Card.Text>
                    Fecha de la foto: {this.state.fecha}
                    <p />
                    Cámara: {this.state.camera.full_name}
                  </Card.Text>
                  <Card.Img src={this.state.imagen}></Card.Img>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FotosNasa;
