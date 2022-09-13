import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor() { }

  arr=[
  {c:"32,62,205,78",name:"Jim's lawn care Service"},
  {c:"32,78,116,90",name:"You grow it,we mow it"},
  {c:"32,92,100,125",name:"5025 south 116th greenfield,Wi(414)525-8560"},
  {c:"264,92,285,102",name:"Date"},
  {c:"289,92,330,102",name:"April 18,2011"},
  {c:"253,102,286,110",name:"Invoice #"},
  {c:"289,102,320,110",name:"10009-32"},
  {c:"266,110,285,118",name:"For"},
  {c:"289,110,350,118",name:"Spring Yard Cleaning"},
  {c:"258,134,285,142",name:"Bill To"},
  {c:"289,133,353,158",name:"Leo Simpson 742 evergreen,Wi 53328"},
  {c:"34,175,65,184",name:"QTY"},
  {c:"65,175,241,184",name:"item discription or service"},
  {c:"241,175,283,184",name:"Item price"},
  {c:"283,175,344,184",name:"Total"},
  {c:"254,336,283,345",name:"sub total"},
  {c:"255,346,283,354",name:"tax rate"},
  {c:"289,345,345,355",name:"5.60%"},
  {c:"250,356,285,363",name:"sales tax"},
  {c:"202,366,286,378",name:"final total due"},
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
  {c:"241,260,284,270",name: "$12.00"}];
}
