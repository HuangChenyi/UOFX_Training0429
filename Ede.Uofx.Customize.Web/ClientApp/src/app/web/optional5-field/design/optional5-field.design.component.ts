/*
此為外掛欄位wtite mode的樣板，修改/置換的項事如下
修改import 擴充屬性(ExProps)的interface
修改selector和templateUrl路徑
修改classname
修改 @Input() exProps 的interface
*/

import {
  AbstractControl,
  UntypedFormBuilder,
  UntypedFormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { BpmFwDesignComponent, BpmFwViewComponent, UofxFormTools } from '@uofx/web-components/form';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

import { Optional5FieldExProps } from '../props/optional5-field.props.component';

/*修改*/
/*↑↑↑↑修改import 各模式的Component↑↑↑↑*/

/*修改*/
/*置換selector和templateUrl*/
@Component({
  selector: 'uofx-template-field-design-component',
  templateUrl: './optional5-field.design.component.html',
})

/*修改*/
/*置換className*/
export class Optional5FieldDesignComponent
  extends BpmFwDesignComponent
  implements OnInit
{

  /*修改*/
  /*置換className*/
  @Input() exProps: Optional5FieldExProps;

  form: UntypedFormGroup;
  constructor(
    private cdr: ChangeDetectorRef,
    private fb: UntypedFormBuilder,
    private tools: UofxFormTools
  ) {
    super();
  }



  ngOnInit(): void {

    this.initForm();

  }

  initForm() {



  }

}
