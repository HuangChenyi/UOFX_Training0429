/*
此為外掛欄位prop mode的樣板，修改/置換的項事如下
修改selector和templateUrl路徑
修改classname
修改 @Input() exProps 的interface
修改及設定 exProps的interface 名稱和結構
*/

import { Component, Input, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { BpmFwPropsComponent } from '@uofx/web-components/form';

/*修改*/
/*置換selector和templateUrl*/

@Component({
  selector: 'uofx-template-field-props-component',
  templateUrl: './demo3-field.props.component.html',
})

/*修改*/
/*置換class名稱，exProps的interface名稱*/
export class Demo3FieldPropsComponent
  extends BpmFwPropsComponent
  implements OnInit
{
  form: UntypedFormGroup;
  @Input() exProps: Demo3FieldExProps;

  isShowHelloWorld: boolean;
  constructor(public fb: UntypedFormBuilder) {
    super(fb);
  }

  ngOnInit(): void {
    this.initExProps();
    this.initForm();

    /*外掛欄位額外屬性設定(條件站點、簽核條件、主旨....)*/
    this.initPluginSettings({

      /*toBeSubjects表單主旨資料來源，name主旨名稱 jsonPath欄位值來源*/
      toBeSubjects: [{ name: 'Demo主旨', jsonPath: 'message' }],

    });
  }

  initExProps() {
    if (!this.exProps) {
      // 初始化設定額外屬性
      this.exProps = {
        isShowHelloWorld: false,
      };
    } else {
      // 若已有存在的 exProps
      // 看是需要更新還是重設 value
    }
  }

  initForm() {
    Object.keys(this.exProps).forEach((k) => {
      this.addFormControl(k, null);
    });
    this.form.setValue(this.exProps);
  }
}

/*修改*/
/*置換interface名稱*/
export interface Demo3FieldExProps {
  isShowHelloWorld: boolean;
}
