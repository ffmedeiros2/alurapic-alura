import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { AuthGuard } from './core/auth/auth.guard';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        loadChildren: () =>
            import('./home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'user/:userName',
        component: PhotoListComponent,
        resolve: {
            photos: PhotoListResolver,
        },
    },
    {
        path: 'photo/add',
        component: PhotoFormComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'photo/:id',
        component: PhotoDetailsComponent,
        canActivate: [AuthGuard],
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

@NgModule({
    // imports: [RouterModule.forRoot(routes)],
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
