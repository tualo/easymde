

insert into  extjs_base_types (id,classname,baseclass,xtype_long_modern,xtype_long_classic,name,vendor,
iscolumn,
isformfield) values 
(
    'Tualo.easymde.form.field.EasyMDE (widget.easymde)',
    'Tualo.easymde.form.field.EasyMDE',
    'Ext.field.Field',
    'widget.easymde',
    'widget.easymde',
    'Tualo.easymde.form.field.EasyMDE',
    'tualo solutions GmbH',
    0,
    1
) 
on duplicate key update xtype_long_modern=values(xtype_long_modern),
xtype_long_classic=values(xtype_long_classic),
isformfield=values(isformfield);
