import { Component, OnInit ,ViewChild} from '@angular/core';
import { ImageServiceService } from 'src/app/services/image-service.service';

@Component({
  selector: 'app-tex-ex',
  templateUrl: './tex-ex.component.html',
  styleUrls: ['./tex-ex.component.css']
})
export class TexExComponent implements OnInit {

  @ViewChild('c') cell: any;
  @ViewChild('in') in: any;

  public arr:any = [];

    cet=80;cel=125;dsl=-1;dst=-1;del=-1;det=-1;t="";i=0; 
   
  lis:string[]=[];

  constructor(private _ImageService:ImageServiceService) {

     this.arr = _ImageService.arr;
   }
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

    if(this.in.nativeElement.value!="")
    this.in.nativeElement.value= this.in.nativeElement.value + ":" + data2;
    else
    this.in.nativeElement.value= this.in.nativeElement.value + data2;

  }
  

  f2(data:string)
  {
     if(data!=""&&this.lis.length<11)
     {
      this.in.nativeElement.value="";
      this.cell.nativeElement.style.visibility="hidden";
      this.lis.push(data);
     }
  }

}
