import Home from '../pages/Home';
import SignUp from '../pages/Signup';
import Payment from '../pages/Payment';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/SignUp', component: SignUp },
    { path: '/Payment', component: Payment },
    { path: '/Contact' },
    { path: '/AboutUs' },
];
const privateRoutes = [];
export { privateRoutes, publicRoutes };
