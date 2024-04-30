import { Component, OnInit } from "@angular/core";
import { UofxDialog, UofxDialogController } from "@uofx/web-components/dialog";

import { CustomerInfo } from "../write/demo4-field.write.component";
import { CustomerService } from "@service/customer.Sertice";
import { FormDirtyConfirm } from "@uofx/core";

@Component({
  selector: 'app-selectdata',
  templateUrl: './selectdata.component.html',
  styleUrls: ['./selectdata.component.css']
})
export class SelectdataComponent extends UofxDialog
implements OnInit {
  constructor(private dialogCtrl: UofxDialogController,
    private cs:CustomerService
  ) {
    super();


  }

  gridData:Array<CustomerInfo>;

  ngOnInit(): void {
    this.cs.serverUrl = this.params.url;

    this.cs.getCustomerInfo().subscribe((res) => {
      this.gridData=res;
    }
    );




  }

  selectItem(item:CustomerInfo){
    this.close(item);
  }

url:string;
  closedialog() {
    this.close();
  }
}



