import { Component, OnInit ,ViewChild} from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  @ViewChild('c') cell: any;
  @ViewChild('in') in: any;

  public arr:any = [];
   
  lis:string[]=[];

  constructor(private imageService:ImageService) {
  }
  ngOnInit() {
    this.arr = this.imageService.arr;
  }
  
  
  f(data:string,data2:string){
    this.imageService.f(data, data2, this.cell, this.in)
  }
  

  f2(data:string){
    this.imageService.f2(data, this.cell, this.in, this.lis)
  }
  
}
