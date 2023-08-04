import { Navigate } from 'react-router-dom';
import MainView from '../main/MainView';
import MainLayout from '../main/MainLayout'
import PageNotFoundView from '../errror/PageNotFoundView'
import AccountLayout from '../account/AccountLayout'
import AccountDetailView from '../account/AccountDetailView'
import AccountAddView from '../account/AccountAddView'
import AccountListView from '../account/AccountListView'

export const mainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        { path: '*', element: <Navigate to='/404' /> },
        { path: '/', element: <MainView /> },
        { path: '404', element: <PageNotFoundView /> },
        { path: 'account', element: <Navigate to='/account/list' /> },
    ]
}
export const accountRoutes = {
    path: 'account',
    element: <AccountLayout />,
    children: [
        { path: '*', element: <Navigate to='/404' /> },
        // :id 动态参数。
        { path: ':id', element: <AccountDetailView /> },
        { path: 'add', element: <AccountAddView /> },
        { path: 'list', element: <AccountListView /> },
    ]
}