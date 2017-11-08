import { User } from './models/user.models';

export function isUser(obj: any): obj is User {
    if (obj && (obj instanceof User || obj.eMail !== undefined)) {
        return true;
    }

    return false;
}
