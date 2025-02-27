export class UserClass {
    userId: number;
    userName: string;
    emailId ?: string;
    fullName: string;
    password: string;

    constructor() {
        this.userId = 0;
        this.fullName = '';
        this.userName = '';
        this.password = '';
    }
}

