export class User {

    constructor(
        public id: number,
        public name: string,
        public email: string,
        public notificationType: string,
        public premiumAccess: boolean = false
    ) {}
}