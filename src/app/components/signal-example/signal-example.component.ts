import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-example',
  imports: [FormsModule,JsonPipe],
  templateUrl: './signal-example.component.html',
  styleUrl: './signal-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalExampleComponent {

  cityName: string = "Chetan";

  courseName = signal<string>("Angular");
  isActive =  signal<boolean>(false);

  cityList = signal<string[]>(["Pune","Nagpur"]);
  studentObj = signal<any>({studId:1,studName:'Rahul',studCity:''})

  constructor( ) {
    setTimeout(() => {
      this.cityName = "Rahul";
      this.courseName.set("Dot Net")
    }, 5000);
  }
  changeStudName() {
    this.studentObj.update(oldObj=> ({...oldObj,studName:this.cityName,studId:3}))
  }

  changeVal() {
    this.courseName.set("React")
  }
  addnEwCity() {
    this.cityList.update(oldArray => ([...oldArray,this.cityName]))
  }
  AddMpCities() {
    this.cityList.set(["Indore","Bhopal"]);
  }

}
