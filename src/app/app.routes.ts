import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {EmployeeComponent} from './components/employee/employee.component'
import { VariablesComponent } from './components/variables/variables.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StructuralDirComponent } from './components/structural-dir/structural-dir.component';
import { ControlFlowStatmentComponent } from './components/control-flow-statment/control-flow-statment.component';
import { AttributeDirComponent } from './components/attribute-dir/attribute-dir.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { GetApiCallComponent } from './components/get-api-call/get-api-call.component';
import { UserComponent } from './components/user/user.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { BulkUpdateComponent } from './components/bulk-update/bulk-update.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './guard/auth.guard';
import { InfoComponent } from './components/info/info.component';

export const routes: Routes = [
   



    {
        path:"",
        redirectTo:"login",
        pathMatch: 'full'
    },
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:"information",
        component: InfoComponent
    },
    {
        path:'',
        component:LayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path:"dashbaord",
                component:DashboardComponent,
                title:"Dashboard"
            },
            {
                path:"employee-list",
                component:EmployeeComponent,
                title:"Employee List"
            },
            {
                path:'variable',
                component:VariablesComponent,
                title:'Variable Page',
               
            },
            {
                path:"stuructual-dir",
                component: StructuralDirComponent
            },
            {
                path:"control-flow",
                component: ControlFlowStatmentComponent
            },
            {
                path:"attrivute-dir",
                component: AttributeDirComponent
            },
            {
                path:"pipe",
                component: PipeComponent
            },
            {
                path:"get-api",
                component: GetApiCallComponent
            },
            {
                path:"user",
                component: UserComponent
            },
            {
                path:"vendor",
                component: VendorComponent
            },
            {
                path:"enrollment",
                component: EnrollmentComponent
            },
            {
                path:"bulk",
                component: BulkUpdateComponent
            },
        ]
    },

    
    {
        path:"**",
        component: NotFoundComponent
    }
   
];
