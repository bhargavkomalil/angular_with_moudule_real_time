import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
selector: 'app-no-page',
templateUrl: './no-page.component.html',
styleUrls: ['./no-page.component.scss']
})
export class NoPageComponent implements OnInit {


constructor(private authService: AuthService, private routerNavigate: Router) { }

logoutAction() {
    console.log('sdfghj')
    this.routerNavigate.navigate([''])
if (this.authService.logOutAction()) {
this.routerNavigate.navigate([''])
}
}


ngOnInit() {
}

}
