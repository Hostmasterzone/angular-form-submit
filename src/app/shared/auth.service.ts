import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    private user = {
        firstName: 'Jagadesh',
        lastName: 'Kannan',
        role: 'SUPPORT'
    };

    constructor() { }

    getUser() {
        return this.user;
    }
}
