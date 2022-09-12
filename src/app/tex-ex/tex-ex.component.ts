import { Component, OnInit ,ViewChild} from '@angular/core';

@Component({
  selector: 'app-tex-ex',
  templateUrl: './tex-ex.component.html',
  styleUrls: ['./tex-ex.component.css']
})
export class TexExComponent implements OnInit {

  @ViewChild('c') cell: any;
  arr =
    [
      {c:"65,184,241,193",name: "Cutting Lawn"},
      {c:"65,194,241,205",name: "Lawn watering and fertilizing"},
      {c:"65,205,241,215",name: "Flowers"},
      {c:"65,215,241,227",name: "Tree Trimming"},
      {c:"65,227,241,238",name: "Shrub trimming"},
      {c:"65,238,241,248",name: "Bricks for edging flower beds"},
      {c:"65,260,241,271",name: "Labor Cost (per hour)"},
      {c:"241,184,284,194",name: "$34.99"},
      {c:"241,194,284,205",name: "$8.99"},
      {c:"241,205,284,216",name: "$2.99"},
      {c:"241,216,284,227",name: "$19.99"},
      {c:"241,227,284,237",name: "$5.99"},
      {c:"241,237,284,249",name: "$0.89"},
      {c:"241,260,284,270",name: "$12.00"}
    ];
    cet=80;cel=125;dsl=-1;dst=-1;del=-1;det=-1;t="";i=0; 
   //bhagyam part 
  constructor() { }
  ngOnInit(): void {}
  f(data:string,data2:string)
  {
    this.dsl =-1;
    this.dst =-1;
    this.del =-1;
    this.det =-1;
    this.i = 0;
    this.t = "";
    while (this.i < data.length)
    {
      if (data[this.i] != ',') 
      {
        this.t += data[this.i];
      }
      else 
      {
        if (this.dsl == -1) {
          this.dsl = Number(this.t);
          this.t = "";
        }
        else if (this.dst==-1) {
          this.dst = Number(this.t);
          this.t = "";
        }
        else if (this.del ==-1) {
          this.del = Number(this.t);
          this.t = "";
        }
        else {
          this.det = Number(this.t);
          this.t = "";
        }
      }
      this.i++;
    }
    this.det=Number(this.t);

    this.cell.nativeElement.style.visibility="visible";
    this.cell.nativeElement.style.top=String(this.cet+this.dst)+"px";
    this.cell.nativeElement.style.left=String(this.cel+this.dsl)+"px";
    this.cell.nativeElement.style.height=String(this.det-this.dst)+"px";
    this.cell.nativeElement.style.width=String(this.del-this.dsl)+"px";
  }
  //bhagyam part
}
