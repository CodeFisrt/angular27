import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {EmployeeComponent} from './components/employee/employee.component'
import { VariablesComponent } from './components/variables/variables.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StructuralDirComponent } from './components/structural-dir/structural-dir.component';
import { ControlFlowStatmentComponent } from './components/control-flow-statment/control-flow-statment.component';
import { AttributeDirComponent } from './components/attribute-dir/attribute-dir.component';
import { PipeComponent } from './components/pipe/pipe.component';

export const routes: Routes = [
   

    {
        path:"",
        redirectTo:"dashbaord",
        pathMatch: 'full'
    },
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
        title:'Variable Page'
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
        path:"**",
        component: NotFoundComponent
    }
   
];
