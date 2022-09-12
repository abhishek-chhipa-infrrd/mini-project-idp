import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor() { }

  arr=[ {c:"65,184,241,193",name: "Cutting Lawn"},
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
