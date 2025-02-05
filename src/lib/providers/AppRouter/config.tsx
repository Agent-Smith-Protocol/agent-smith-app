import { RouteProps } from 'react-router-dom'
import { HomePage } from '../../../pages/HomePage'
import { DashboardPage } from '../../../pages/DashboardPage.tsx';
import { AgentPage } from '../../../pages/AgentPage.tsx';
import { TerminalPage } from '../../../pages/TerminalPage.tsx';


const enum commonRoutes {
  HOME = '/',
  DASHBOARD = '/dashboard',
  AGENT = '/agent',
  TERMINAL = '/terminal'
}

export const routesConfig: Record<commonRoutes, RouteProps> = {
  [commonRoutes.HOME]: {
    path: commonRoutes.HOME,
    element: <HomePage/>,
  },
  [commonRoutes.DASHBOARD]: {
    path: commonRoutes.DASHBOARD,
    element: <DashboardPage/>,
  },
  [commonRoutes.AGENT]: {
    path: commonRoutes.AGENT,
    element: <AgentPage/>,
  },
  [commonRoutes.TERMINAL]: {
    path: commonRoutes.TERMINAL,
    element: <TerminalPage/>,
  },
}