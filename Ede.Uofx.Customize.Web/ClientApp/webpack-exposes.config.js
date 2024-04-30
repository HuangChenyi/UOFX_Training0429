const exposes = {
  // 設定要開放外部使用欄位和頁面
  // ***目前僅實作外掛欄位
  //屬性名稱會對應到/assets/configs/fields-runtime.json 的exposedModule
  web: {
    './TemplateField': './src/app/web/template-field/template-field.module.ts',
    './DemoField': './src/app/web/demo-field/demo-field.module.ts',
    './Demo2Field': './src/app/web/demo2-field/demo2-field.module.ts'
    ,'./Demo3Field' : './src/app/web/demo3-field/demo3-field.module.ts'
        ,'./Demo4Field' : './src/app/web/demo4-field/demo4-field.module.ts'
        //勿刪除存放Web欄位的路徑
  },
  app: {
     './TemplateField': './src/app/web/template-field/template-field.module.ts'
    ,'./Demo3Field' : './src/app/mobile/demo3-field/demo3-field.module.ts'
        ,'./Demo4Field' : './src/app/mobile/demo4-field/demo4-field.module.ts'
        //勿刪除存放App欄位的路徑
  }
};

module.exports = exposes;
