import HomePage from './pages/HomePage';
import ChildPage from './pages/ChildPage';

export default {
    home: {
        component: HomePage,

        children: {
            'child-page': {
                component: ChildPage,
                title: 'Child Page',
            },
        }
    },
};