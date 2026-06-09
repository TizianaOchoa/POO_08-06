import { Observer } from "./Observer";

export class MetricsServiceObserver
implements Observer {

    update(data: any): void {

        console.log(
            `Ingresos registrados: $${data.amount}`
        );
    }
}