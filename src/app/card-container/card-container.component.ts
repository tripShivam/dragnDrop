import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {
  dragItemIndex: any;

  constructor() { }

  openItems = [
    {i:0, sNo: 870, payment: "PAYMENT DUE", carName: "Auris TR345", name: "Ahmed", invoice: "GP-LCVUZK-683", createdBy: "VIDYUT", date:"28 FEB 2021 02:54PM", total: "AED 799.05", dueAmount:"AED 299", tags:[{color: "#898989", name:'WASHING'}, {color: "#787878", name:'RASHID'}]  },
    {i:1, sNo: 869, payment: "PAYMENT DUE", carName: "Abarth OTHERS PETROL", name: "Nader", invoice: "GP-LCVUZK-683", createdBy: "AKHIL", date:"28 MAY 2021 12:54PM", total: "AED 799.05", dueAmount:"142.49", tags:[]},
  ];

  wipItems = [
    {i:0, sNo: 868, payment: "PAYMENT DUE", carName: "Skoda Rapid", name: "Ramesh", invoice: "GP-LCVUZK-567", createdBy: "JASS", date:"12 MAR 2021 01:14PM", total: "AED 799.05", dueAmount:"AED 399", tags:[] },
  ];

  readyItems = [
    {i:0, sNo: 867, payment: "PAYMENT DUE", carName: "Hyundai Kona", name: "Ajay", invoice: "GP-LCVUZK-562", createdBy: "VINAY", date:"28 APR 2021 02:54PM", total: "AED 799.05", dueAmount:"192.49", tags:[{color: "#898989", name:'WASHING'}, {color: "#787878", name:'RASHID'}] },
    {i:1, sNo: 866, payment: "PAYMENT DUE", carName: "Toyota Fortuner", name: "Yogesh", invoice: "GP-LCVUZK-876", createdBy: "ANKUR", date:"28 JUNE 2021 05:54PM", total: "AED 799.05", dueAmount:"AED 549", tags:[]},
  ];

  paymentDue = [
    {i:0, sNo: 865, payment: "PAYMENT DUE", carName: "Auris TR345", name: "Ahmed", invoice: "GP-LCVUZK-683", createdBy: "VIDYUT", date:"28 FEB 2021 02:54PM", total: "AED 799.05", dueAmount:"AED 299", tags:[]  },
    {i:1, sNo: 864, payment: "PAYMENT DUE", carName: "Auris TR345", name: "Ahmed", invoice: "GP-LCVUZK-683", createdBy: "VIDYUT", date:"28 FEB 2021 02:54PM", total: "AED 299", dueAmount:"142.49", tags:[]},
  ];

  onItemDrop(e: any, dropWindow: any) {
    // Get the dropped data here
    console.log('e.dragData', e.dragData, dropWindow)
    if(dropWindow === 'wip'){
      this.openItems.splice(this.dragItemIndex, 1);
      this.wipItems.push(e.dragData);
    } else  if(dropWindow === 'ready'){
      this.wipItems.splice(this.dragItemIndex, 1);
      this.readyItems.push(e.dragData);
    } else  if(dropWindow === 'due'){
      this.readyItems.splice(this.dragItemIndex, 1);
      this.paymentDue.push(e.dragData);
    } 
}

onDragStart(e: any, data: any){
  this.dragItemIndex = data;
  console.log('e.onDragStart', data)
}

  ngOnInit(): void {
  }

}
