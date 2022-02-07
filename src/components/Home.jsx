import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { UsuariosAcceso } from '../data/UsuariosAcceso';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '', correo: '', apellido: '', nota: '' };
    this.login = this.login.bind(this);
  }

  login() {
    var encontrado = false;
    UsuariosAcceso.map((item) => {
      if (
        item.correo === this.valorCorreo.value &&
        item.pass === this.valorContraseña.value
      ) {
        this.setState({
          user: item.nombre,
          password: item.pass,
          correo: item.correo,
          apellido: item.apellido,
          nota: item.notaMedia,
        });
        localStorage.setItem('user', item.nombre);
        localStorage.setItem('nombre', item.nombre);
        localStorage.setItem('password', item.pass);
        localStorage.setItem('correo', item.correo);
        localStorage.setItem('apellido', item.apellido);
        localStorage.setItem('nota', item.notaMedia);
        localStorage.setItem('imagen', item.imagen);
        encontrado = true;
      }
    });
    if (!encontrado) {
      alert(
        'El usuario y la contraseña introducidos no se corresponden con ningún registro'
      );
    }
  }

  /*Se ejecuta la primera vez que se ejecuta el componente*/
  componentDidMount() {
    this.setState({
      user: localStorage.getItem('user'),
      password: localStorage.getItem('password'),
    });
  }

  render() {
    if (
      this.state != null &&
      this.state.user != null &&
      this.state.user != ''
    ) {
      return (
        <div className="main-site">
          <h1>Bienvenido {this.state.user}!</h1>
        </div>
      );
    } else {
      return (
        <div className="main-site">
          <h1>Bienvenido!</h1>
          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Correo"
                  ref={(correo) => (this.valorCorreo = correo)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  ref={(contraseña) => (this.valorContraseña = contraseña)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordarme" />
              </Form.Group>
              <Button variant="primary" type="button" onClick={this.login}>
                Entrar
              </Button>
            </Form>
          </Container>
        </div>
      );
    }
  }

  /*Se ejecuta cuando se destruye el componente
  componentWillUnmount() {
    localStorage.setItem('user', this.state.user);
    localStorage.setItem('password', this.state.password);
    localStorage.setItem('correo', this.state.correo);
    localStorage.setItem('apellido', this.state.apellido);
    localStorage.setItem('nota', this.state.nota);
  }*/
}
export default Home;
