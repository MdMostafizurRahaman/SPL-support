;/*FB_PKG_DELIM*/

__d("FDSMenu.react",["FDSMenuBaseWithPopover.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");b=i.forwardRef(a);function a(a,b){a=babelHelpers["extends"]({},a);return i.jsx(c("FDSMenuBaseWithPopover.react"),babelHelpers["extends"]({},a,{ref:b}))}a.displayName=a.name+" [from "+f.id+"]";e=b;g["default"]=e}),98);
__d("FDSMenuItem.react",["CometBadge.react","CometProfilePhoto.react","FDSIcon.react","FDSMenuItemBase.react","FDSMenuItemIcon.react","FDSTextPairing.react","MWXIconStrict.react","MWXSvgIcon","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");b=i.forwardRef(a);function a(a,b){var e=a.auxItem,f=a.icon,g=a.iconColor,h=a.iconCssSelectorId,j=a.iconSize,k=a.iconStyle;k=k===void 0?"normal":k;var l=a.image,m=a.overlayRadius;m=m===void 0?4:m;a=babelHelpers.objectWithoutPropertiesLoose(a,["auxItem","icon","iconColor","iconCssSelectorId","iconSize","iconStyle","image","overlayRadius"]);var n=null;if(e!=null)switch(e.type){case"text":n=i.jsx(c("FDSTextPairing.react"),{level:3,meta:e.auxText});break;case"badge":n=i.jsx(c("CometBadge.react"),{color:e.color});break;case"icon":n=e.icon instanceof d("MWXSvgIcon").MWXSvgIcon?i.jsx(c("MWXIconStrict.react"),{color:e.color,icon:e.icon,size:20}):i.jsx(c("FDSIcon.react"),{color:e.color,icon:e.icon});break;case"numberedBadge":n=e.badge;break;case"infoChip":n=e.chip;break}return i.jsx(c("FDSMenuItemBase.react"),babelHelpers["extends"]({},a,{alignCenter:!0,aux:n,iconNode:f!=null?i.jsx(c("FDSMenuItemIcon.react"),{disabled:a.disabled,icon:f,iconColor:g,iconCssSelectorId:h,iconSize:j,use:k}):l!=null?i.jsx(c("CometProfilePhoto.react"),{addOn:l.addOn,shape:l.shape,size:l.size,source:l.source}):null,isIconAnImage:f==null&&l!=null,overlayRadius:m,ref:b}))}a.displayName=a.name+" [from "+f.id+"]";e=b;g["default"]=e}),98);