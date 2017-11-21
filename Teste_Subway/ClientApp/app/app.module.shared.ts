import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { AccountListComponent } from './components/account/account.list.component';
import { AccountCreateComponent } from './components/account/account.create.component';
import { AccountUpdateComponent } from './components/account/account.update.component';
import { PurchaseListComponent } from './components/purchase/purchase.list.component';
import { PurchaseCreateComponent } from './components/purchase/purchase.create.component';
import { PurchaseUpdateComponent } from './components/purchase/purchase.update.component';

import { AccountService } from './services/AccountService';
import { PurchaseService } from './services/PurchaseService';
import { FilterPipe } from './components/account/account.filter';
import { PurchaseFilterPipe } from './components/purchase/purchase.filter';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        AccountListComponent,
        AccountCreateComponent,
        AccountUpdateComponent,
        PurchaseListComponent,
        PurchaseCreateComponent,
        PurchaseUpdateComponent,
        FilterPipe,
        PurchaseFilterPipe,
    ],
    providers: [AccountService, PurchaseService],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        Ng2DatetimePickerModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch:'full' },
            { path: 'home', component: HomeComponent },
            { path: 'account-list', component: AccountListComponent },
            { path: 'account-create', component: AccountCreateComponent },
            { path: 'account-update/:id', component: AccountUpdateComponent },
            { path: 'purchase-list', component: PurchaseListComponent },
            { path: 'purchase-create', component: PurchaseCreateComponent },
            { path: 'purchase-update/:id', component: PurchaseUpdateComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
