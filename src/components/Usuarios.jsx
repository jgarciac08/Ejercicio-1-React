import React from 'react';
import uuid from 'react-uuid';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { ElementosTabla } from '../data/ElementosTabla';

class Usuarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagenPulsado: ElementosTabla[0].imagen,
      nombrePulsado: ElementosTabla[0].nombre,
      apellidoPulsado: ElementosTabla[0].apellido,
      notaMediaPulsado: ElementosTabla[0].notaMedia
    };
  }

  changeStateClicked(item) {
    this.setState({
      imagenPulsado: item.imagen,
      nombrePulsado: item.nombre,
      apellidoPulsado: item.apellido,
      notaMediaPulsado: item.notaMedia
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <h1>Listado de usuarios</h1>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Usuario</th>
                  </tr>
                </thead>
                <tbody>
                  {ElementosTabla.map((item) => {
                    return (
                      <tr key={uuid()} onClick={ () => this.changeStateClicked(item)}>
                        <td>{item.id}</td>
                        <td>{item.nombre}</td>
                        <td>{item.apellido}</td>
                        <td>{item.usuario}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={this.state.imagenPulsado} />
              <Card.Body>
                <Card.Title>
                  {this.state.nombrePulsado} {this.state.apellidoPulsado}
                </Card.Title>
                <Card.Text>{this.state.notaMediaPulsado}</Card.Text>
              </Card.Body>
            </Card>
            <Col lg={4} md={6}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Usuarios;
