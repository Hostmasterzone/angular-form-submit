import { Directive, OnInit, Input, HostBinding } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RuleEngineService } from '../rule-engine.service';

@Directive({ selector: '[appCanAccess]' })
export class CanAccessDirective implements OnInit {

    private navStart: Observable<NavigationEnd>;

    @HostBinding('class.protected') canBlock = false;

    constructor(private router: Router, private rulesEngine: RuleEngineService) {
        this.navStart = router.events.pipe(
            filter(evt => evt instanceof NavigationEnd)
        ) as Observable<NavigationEnd>;
    }

    ngOnInit() {
        this.doAccessCheck();

        this.navStart.subscribe(() => {
            this.doAccessCheck();
        });
    }

    private doAccessCheck() {
        const urlTree = this.router.routerState.snapshot.url;
        // Extract the page name from url
        const pageName = urlTree.split('/').pop();
        // If page has access, dont add 'protected' class to host element
        this.canBlock = !this.rulesEngine.doCheckPageAcess(pageName);
    }
}
