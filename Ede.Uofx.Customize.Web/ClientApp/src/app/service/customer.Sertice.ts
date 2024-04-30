import { BasicApiService } from "./basic-api.service";
import { CustomerInfo } from "../web/demo4-field/write/demo4-field.write.component";
import { Injectable } from "@angular/core";

//記得要在外掛欄位Module的BASIC_SERVICES注入Service

@Injectable()
export class CustomerService extends BasicApiService {


getCustomerInfo() {
  return this.http.get<Array< CustomerInfo>>("~/api/Customers/GetCustomers");
};
}
