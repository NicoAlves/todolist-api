import {Router} from 'express';
import authController from '../controllers/authController'


class authRoutes {
    router = Router();
    authController = new authController();

    constructor() {
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route(`/auth/user`).get(this.authController.getUser);
/*        this.router.route('/:id').get(this.authController.getCourseDetails);*/
    }
}
export default new authRoutes().router;