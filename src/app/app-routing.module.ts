
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactComponent } from './shared/pages/contact/contact.component';

import { HomePageComponent } from './shared/pages/home-page/home-page.component';

const routes:Routes = [
    {
        path: 'countries',
        loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)

    },


]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    //ojo, no exporta el nombre de la clase, sino el nombre del modulo que importe!!, es como si exportara un componente
    exports: [RouterModule]
})
export class appRoutingModule { }
