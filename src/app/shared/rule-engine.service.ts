import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class RuleEngineService {

    private RULES_BY_ROLE = {
        ADMIN: {
            personal: {
                canEdit: true
            },
            contact: {
                canEdit: true
            },
            payment: {
                canEdit: true
            }
        },
        SUPPORT: {
            personal: {
                canEdit: false
            },
            contact: {
                canEdit: false
            },
            payment: {
                canEdit: false
            }
        },
        OWNER: {
            personal: {
                canEdit: true
            },
            contact: {
                canEdit: true
            },
            payment: {
                canEdit: true
            }
        }
    };

    constructor(private authService: AuthService) { }

    doCheckPageAcess(pageName: string): boolean {
        if (!pageName) {
            return false;
        }
        const role = this.authService.getUser().role;
        const matchedRule = this.RULES_BY_ROLE[role];
        if (!matchedRule) {
            return;
        }
        const pageRule = matchedRule[pageName];
        return pageRule.canEdit;
    }

}
