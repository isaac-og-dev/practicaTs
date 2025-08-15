import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

const PublicRoute: FC = () => {
    return <Outlet/>;
}

export default PublicRoute;