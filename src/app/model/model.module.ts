import { NgModule } from '@angular/core';
// import { StaticDataSource } from './static.datasource';
import { Model } from './repository.model';
import { RestDataSource, REST_URL } from './rest.datasource';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
    imports: [HttpClientModule, HttpClientJsonpModule],
    providers: [Model, RestDataSource,
        { provide: REST_URL, useValue: `https://cloud-app-rest-api.herokuapp.com/api/products/` }]
})
export class ModelModule { }
