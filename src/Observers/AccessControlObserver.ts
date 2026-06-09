import { Observer } from "./Observer";

export class AccessControlObserver
implements Observer {

    update(data: any): void {

        data.user.premiumAccess = true;

        console.log(
            `Acceso premium habilitado para ${data.user.name}`
        );
    }
}