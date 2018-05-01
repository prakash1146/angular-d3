import { Component, OnInit } from '@angular/core';
import { GridOptions} from "ag-grid";
import { AppDataService } from '../app-data.service';


@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
  providers:[AppDataService]
})
export class DataGridComponent implements OnInit {
  private gridOptions: GridOptions;
  gridData : any[] ;
  constructor(private appDataService : AppDataService) {
    this.gridOptions = <GridOptions>{};
    this._createColumns();
    this._getGridData();
    /*
    this.gridOptions.rowData = [
       {fistName:"Prakash",lastName:"Kesarwani",age:32,gender:"Male",amtBalance:42000},
       {fistName:"Rajat",lastName:"Sinha",age:32,gender:"Male",amtBalance:42000},
       {fistName:"Vikas",lastName:"Sharma",age:32,gender:"Male",amtBalance:42000},
       {fistName:"Ganesh",lastName:"Singh",age:32,gender:"Male",amtBalance:42000},
       {fistName:"Vinay",lastName:"Rastogi",age:32,gender:"Male",amtBalance:42000},
       {fistName:"Saurya",lastName:"Chandra",age:32,gender:"Male",amtBalance:42000},
       {fistName:"Prakash",lastName:"Kesarwani",age:32,gender:"Male",amtBalance:42000},
       {fistName:"Rajat",lastName:"Sinha",age:32,gender:"Male",amtBalance:42000},
       {fistName:"Vikas",lastName:"Sharma",age:32,gender:"Male",amtBalance:42000},
       {fistName:"Ganesh",lastName:"Singh",age:32,gender:"Male",amtBalance:42000},
       {fistName:"Vinay",lastName:"Rastogi",age:32,gender:"Male",amtBalance:42000},
       {fistName:"Saurya",lastName:"Chandra",age:32,gender:"Male",amtBalance:42000}
    ];
    */
  }

  ngOnInit() {
      
  }

  _createColumns(){
    this.gridOptions.columnDefs = [
      {
        headerName: "Channel",
        field: "channel",
        width: 150
      },
      {
        headerName: "Investment",
        field: "investment",
        width: 150
      },
      {
        headerName: "Conversion (Last Click)",
        field: "conversionLastClick",
        width: 200
      },
      {
        headerName: "Conversion (Position Based)",
        field: "conversionPositionBased",
        width: 200
      },
      {
        headerName: "% Change in Conversion",
        field: "percentChangeConversion",
        width: 200
      },
      {
        headerName: "CPC (Last Click)",
        field: "cpcLastClick",
        width: 200
      },
      {
        headerName: "CPC (Position Based)",
        field: "cpcPositionBased",
        width: 200
      },
      {
        headerName: "% Change in CPC",
        field: "percentChangeCPC",
        width: 200
      }
    ]; ///{fistName:"Prakash",lastName:"Kesarwani",age:32,gender:"Male",amtBalance:42000},
    /*this.gridOptions.columnDefs = [
      {
        headerName: "First Name ",
        field: "fistName",
        width: 100
      },
      {
        headerName: "Last Name",
        field: "lastName",
        width: 150
      },
      {
        headerName: "Age",
        field: "age",
        width: 200
      },
      {
        headerName: "Gender",
        field: "gender",
        width: 200
      },
      {
        headerName: "Amount Balance",
        field: "amtBalance",
        width: 200
      }];*/
  }

  _getGridData(){
    /*
    this.appDataService.getComparsionModelData().subscribe(dataResponse=>{
        this.gridData = dataResponse.data;
        this._createRowData(this.gridData);
        console.log("data apured--->>",this.gridData);
    });
    */
   this.gridOptions.rowData = [
    {
      "channel": "Direct",
      "investment": "$0.00k",
      "conversionLastClick": 50,
      "conversionPositionBased": 50,
      "percentChangeConversion": "0%",
      "cpcLastClick": "$0.00k",
      "cpcPositionBased": "$0.00",
      "percentChangeCPC": ""
    },
    {
      "channel": "Display",
      "investment": "$923.48k",
      "conversionLastClick": 94,
      "conversionPositionBased": 86.07,
      "percentChangeConversion": "-8.44%",
      "cpcLastClick": "$9.82k",
      "cpcPositionBased": "$10.73k",
      "percentChangeCPC": "9.22%"
    },
    {
      "channel": "Email",
      "investment": "$151.18k",
      "conversionLastClick": 88,
      "conversionPositionBased": 88.9,
      "percentChangeConversion": "1.03%",
      "cpcLastClick": "$1.72k",
      "cpcPositionBased": "$1.70k",
      "percentChangeCPC": "-1.02%"
    },
    {
      "channel": "OrganicSearch",
      "investment": "$94.61k",
      "conversionLastClick": 71,
      "conversionPositionBased": 65.63,
      "percentChangeConversion": "-7.60%",
      "cpcLastClick": "$1.33k",
      "cpcPositionBased": "$1.44k",
      "percentChangeCPC": "8.18%"
    },
    {
      "channel": "PaidSearch",
      "investment": "$136.51k",
      "conversionLastClick": 85,
      "conversionPositionBased": 87.6,
      "percentChangeConversion": "3.06%",
      "cpcLastClick": "$1.61K",
      "cpcPositionBased": "$1.56k",
      "percentChangeCPC": "-2.97%"
    },
    {
      "channel": "SocialMedia",
      "investment": "$227.36k",
      "conversionLastClick": 162,
      "conversionPositionBased": 171.8,
      "percentChangeConversion": "6.05%",
      "cpcLastClick": "$1.05k",
      "cpcPositionBased": "$1.32k",
      "percentChangeCPC": "-5.71%"
    }
  ];
  } 

  _createRowData(_gridData){
    this.gridOptions.rowData = [];
    _gridData.forEach((item:any)=>{
      this.gridOptions.rowData.push({
        channel:item.channel,
        investment:item.investment,
        conversionLastClick:item.conversionLastClick,
        conversionPositionBased:item.conversionPositionBased,
        percentChangeConversion:item.percentChangeConversion,
        cpcLastClick:item.cpcLastClick,
        cpcPositionBased:item.cpcPositionBased,
        percentChangeCPC:item.percentChangeCPC
      });
    });
    console.log('data aftee ------------>>',this.gridOptions.rowData);
  }
}
