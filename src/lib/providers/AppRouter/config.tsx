import { RouteProps } from 'react-router-dom'
import { HomePage } from '../../../pages/HomePage'


const enum commonRoutes {
  HOME = '/',
}

export const routesConfig: Record<commonRoutes, RouteProps> = {
  [commonRoutes.HOME]: {
    path: commonRoutes.HOME,
    element: <HomePage/>,
  },
}