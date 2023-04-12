import { Component, OnInit } from '@angular/core';
import { DbServices } from '../../Services/db-services';

@Component({
  selector: 'app-shar-component',
  templateUrl: './shar-component.component.html',
  styleUrls: ['./shar-component.component.css']
})
export class SharComponentComponent implements OnInit {

   //courses:string[];  ///["one","two","three"]
   courses:any;
   /// nested for
    nested:any[]=[
      { "country":"egypt", "names":[ "one","two" ]  },
      { "country":"egypt2", "names":[ "one2","two2" ]  },
      { "country":"egypt3", "names":[ "one3","two3" ]  }
    ]


        /// called "interpolation"
   title = "this is title";  /// display it in html
   bindName:string="" ; // Two Way DataBinding

  defaultDisplay:string= "one";    //// Switch Case

   toglle:boolean=false;


   isActive:boolean=false;

                 /// add it  in providers "app.module.ts"
  constructor(private dbSer: DbServices) {
//    this.courses = dbSer.getAll();

this.courses = [
  { "id":1 , "name":"eslam1"  },
  { "id":2 , "name":"eslam2"  },
  { "id":3 , "name":"eslam3"  },
  { "id":4 , "name":"eslam4"  }
];

   }

  ngOnInit(): void {
  }
  onbtnClick(){
    alert("alert click");
  }

  onbtnClickDiv(){
    alert("from button");
  }
  onDivClick(){
    alert("from Div");
  }

      //// $event "print each key and codeKey"
  onKeyUp($event:any){
    if( $event.keyCode == 83 ) { alert("sss"); }
    if($event.key=="h") { alert("hhhhh"); }

    console.log($event);   // print each Char

     console.log($event.target.value);   /// print all value from event

   }


  /// toggle
  onToglee() {
    this.toglle = !this.toglle;
  }

  //// PUSH , Splice
  onPushItem(){
    this.courses.push(  { "id":5 , "name":"eslam5"  }  );
  }
  onRemoveItem(index:number){
    this.courses.splice(index);
  }

  ////
  ontrackmethod(index:number,courses:any){
     return courses ? courses.id :undefined;
  }

//// Switch Case
setview(selectedView:string){
  this.defaultDisplay = selectedView;
  console.log(selectedView);
}



}
