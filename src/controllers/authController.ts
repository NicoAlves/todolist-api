
import {Request, Response, NextFunction} from 'express';

export default class CoursesCtrl {
    constructor() {
    }

    getUser(req: Request, res: Response, next: NextFunction) {
        try {
            let user = {
                "firstname": "nicolas",
                "lastname": "alves"
            }
            res.json(user);
        } catch (error) {

        }
    }
}