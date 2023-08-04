Ext.define('Tualo.easymde.form.field.EasyMDE', {
    extend: 'Ext.form.field.TextArea',
    alias: ['widget.easymde'],
    language: null,

    height: 300,

    fieldSubTpl: [ // note: {id} here is really {inputId}, but {cmpId} is available 
      '<textarea id="{id}" data-ref="inputEl" type="{type}" {inputAttrTpl}',
          ' size="1"', // allows inputs to fully respect CSS widths across all browsers 
          '<tpl if="name"> name="{name}"</tpl>',
          '<tpl if="placeholder"> placeholder="{placeholder}"</tpl>',
          '{%if (values.maxLength !== undefined){%} maxlength="{maxLength}"{%}%}',
          '<tpl if="readOnly"> readonly="readonly"</tpl>',
          '<tpl if="disabled"> disabled="disabled"</tpl>',
          '<tpl if="tabIdx != null"> tabindex="{tabIdx}"</tpl>',
          '<tpl if="fieldStyle"> style="{fieldStyle}"</tpl>',
          '<tpl foreach="inputElAriaAttributes"> {$}="{.}"</tpl>',
      ' class="{fieldCls} {typeCls} {typeCls}-{ui} {editableCls} {inputCls}" autocomplete="off"/>',
      '<tpl if="value">{[Ext.util.Format.htmlEncode(values.value)]}"</tpl>',
      '</textarea>',
      {
          disableFormats: true
      }
    ],
    
    
    initComponent: function(){
      var me = this;
      me.callParent();
    },
  
    afterRender: function () {
      var me = this;
      me.callParent(arguments);
      try{
        me.createEditor();
      }catch(e){
        console.error(e);
      }
    },
    
    createEditor: function(){

        this.easymde = new EasyMDE({
            element: document.getElementById(this.id+'-inputEl'),
        });
        this.easymde.codemirror.on("change", this.onDidChangeContent.bind(this) );
    },
    onDestroy: function(){
        this.easymde.dispose();
        this.callParent();
    },
    onResize: function(w,h){
        this.callParent(arguments);
        this.easymde.codeeditor.setSize(w,h);
    },
    onDidChangeContent: function(event){
        this.setValue( this.easymde.value() ); 
    },
    
    setRawValue: function(value) {
        //console.log('setRawValue',this.$className);
        this.callParent([value]);
        if (typeof this.easymde!='undefined'){
            if (this.easymde.value()!=value){
                this.easymde.value(value);
            }
        }
    },
    setValue: function(value) {
        //console.log('setValue',this.$className);
        this.callParent([value]);
    }
});