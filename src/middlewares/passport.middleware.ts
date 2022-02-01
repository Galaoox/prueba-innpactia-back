import { Strategy, ExtractJwt } from 'passport-jwt';
import { JWT_KEY } from '../config/env';
import { User } from '../entity/user';

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_KEY
};

export default new Strategy(options, async (payload: any, done: any) => {
    try {
        const user = await User.findOne(payload);
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (error) {
        console.log("Passport" + error);
    }
});