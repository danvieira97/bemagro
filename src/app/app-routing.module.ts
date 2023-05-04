import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';

const routes: Routes = [
	{
		path: '',
		component: LoginComponent,
		pathMatch: 'full',
	},
	{
		path: 'register',
		component: RegisterComponent,
	},
	{
		path: 'home',
		component: HomeComponent,
	},
	{
		path: 'user/:username',
		component: UserInfoComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
