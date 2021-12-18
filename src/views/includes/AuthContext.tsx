import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthRoutes } from 'features/app/selectors';
import { getRoutesComponent } from 'helpers/router';
import GuardContext from './GuardContext';

const AuthContext: FC = () => {

  const AuthRoutes = useSelector(getAuthRoutes);

  return <Routes>
    <Route path="/*" element={ <GuardContext /> } />
    { getRoutesComponent(AuthRoutes) }
  </Routes>

}

export default AuthContext;