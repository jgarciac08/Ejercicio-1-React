import Home from '../components/Home';
import { PaginaListas } from '../components/PaginaListas';
import Perfil from '../components/Perfil';
import Usuarios from '../components/Usuarios';
import FotosNasa from '../components/FotosNasa';

export const MenuItems = [
  {
    id: 1,
    path: '/',
    title: 'Home',
    component: Home,
  },
  {
    id: 2,
    path: '/listas',
    title: 'Listas de tareas',
    component: PaginaListas,
  },
  {
    id: 3,
    path: '/perfil',
    title: 'Perfil',
    component: Perfil,
  },
  {
    id: 4,
    path: '/Usuarios',
    title: 'Usuarios',
    component: Usuarios,
  },
  {
    id: 4,
    path: '/FotosNasa',
    title: 'Fotos NASA',
    component: FotosNasa,
  },
];

/*
  path
  id
  title
  component
*/
