import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  Properties: Array<any> = [
    {
      Id: 1,
      Name: "Devil's Villa",
      Type: 'villa',
      Price: 12000,
    },
    {
      Id: 2,
      Name: "Jalsa Nivas",
      Type: 'House',
      Price: 36000,
    },
    {
      Id: 3,
      Name: "Raj Mahal",
      Type: 'Palace',
      Price: 45000,
    },
    {
      Id: 4,
      Name: "Blue Sapphire",
      Type: 'Tenament',
      Price: 9000,
    },
    {
      Id: 5,
      Name: "Devil's Villa",
      Type: 'villa',
      Price: 12000,
    },
    {
      Id: 6,
      Name: "Floating Home",
      Type: 'House',
      Price: 12000,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
