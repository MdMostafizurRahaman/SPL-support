;/*FB_PKG_DELIM*/

__d("CometEntityHeaderTitleRow.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={actorWrapper:{alignItems:"xuk3077",display:"x78zum5",height:"xqtp20y",marginBottom:"xh3wvx0",marginEnd:"xktsk01",$$css:!0},actorWrapperFullHeight:{height:"x5yr21d",$$css:!0}};function a(a){var b=a.actorBlock,d=a.hasExtraSpace;d=d===void 0?!1:d;a=a.titleBlock;return b!=null?j.jsxs("div",{className:"xuk3077 x78zum5",children:[j.jsx("div",{className:(h||(h=c("stylex")))(k.actorWrapper,d&&k.actorWrapperFullHeight),children:j.jsx("div",{children:b})}),j.jsx("div",{className:"xw7yly9",children:a})]}):j.jsx("div",{className:"xw7yly9",children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometEntityHeaderTopRow.react",["CometEntityHeaderTitleRow.react","CometRow.react","CometRowItem.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={auxiliaryColumn:{justifyContent:"x13a6bvl",$$css:!0},column:{flexBasis:"x1r8uery",flexGrow:"x1dh0t33",minWidth:"x17upfok",$$css:!0},columnBottomSpacing:{paddingBottom:"x1l90r2v",$$css:!0},columnNoExpanding:{flexBasis:"xdl72j9",flexGrow:"x1iyjqo2",$$css:!0},root:{width:"xh8yej3",$$css:!0},rootWithExtraSpace:{marginTop:"xw7yly9",$$css:!0}};function a(a){var b=a.actionsPosition;b=b===void 0?"bottom":b;var d=a.actor,e=a.auxiliary,f=a.columnExpanding;f=f===void 0?!0:f;var g=a.hasExtraSpace;g=g===void 0?!1:g;var i=a.skipBottomSpacing;i=i===void 0?!1:i;a=a.titleBlock;return j.jsx("div",{className:(h||(h=c("stylex")))(k.root,g&&k.rootWithExtraSpace),children:j.jsxs(c("CometRow.react"),{paddingHorizontal:0,verticalAlign:b,wrap:"forward",children:[j.jsx(c("CometRowItem.react"),{expanding:!0,xstyle:[k.column,!i&&k.columnBottomSpacing],children:j.jsx(c("CometEntityHeaderTitleRow.react"),{actorBlock:d,hasExtraSpace:g,titleBlock:a})}),j.jsx(c("CometRowItem.react"),{expanding:f,xstyle:[k.column,!f&&k.columnNoExpanding,!i&&k.columnBottomSpacing,k.auxiliaryColumn],children:e})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FDSMenuMultiStepPage.react",["fbt","ix","CometColumn.react","CometRow.react","CometRowItem.react","FDSIcon.react","Locale","TetraText.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=j||(j=d("react")),l=j.useCallback;function a(a){var b=a.children,e=a.header,f=a.onReturn;a=l(function(){f()},[f]);return k.jsxs(c("CometColumn.react"),{paddingVertical:8,children:[k.jsxs(c("CometRow.react"),{align:"start",paddingHorizontal:16,paddingTop:8,verticalAlign:"center",children:[k.jsx(c("CometRowItem.react"),{children:k.jsx(c("FDSIcon.react"),{"aria-label":h._("__JHASH__sqTeJmgA5ut__JHASH__"),icon:d("Locale").isRTL()?d("fbicon")._(i("514454"),20):d("fbicon")._(i("512647"),20),onPress:a})}),k.jsx(c("CometRowItem.react"),{children:k.jsx(c("TetraText.react"),{isSemanticHeading:!0,type:"headlineEmphasized3",children:e})})]}),k.jsx(c("CometRow.react"),{expanding:!0,paddingHorizontal:0,paddingTop:8,children:k.jsx(c("CometRowItem.react"),{expanding:!0,children:b})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("GroupCometShareGroupQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6814931405209227"}),null);
__d("GroupLeadersEngagementFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1743660");b=d("FalcoLoggerInternal").create("group_leaders_engagement",a);e=b;g["default"]=e}),98);
__d("GroupsCometEntityMenuInSmallScreenPopoverQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7559199370806792"}),null);
__d("GroupsCometNotificationSettingsEditDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6027217000728024"}),null);
__d("GroupsKeyCommandShortcutsFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("2955");b=d("FalcoLoggerInternal").create("groups_key_command_shortcuts",a);e=b;g["default"]=e}),98);
__d("VideoChatLoggingDataContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=(h||d("react")).createContext;b=a(null);g["default"]=b}),98);
__d("createUseMutation_DEPRECATED",["CometRelay","Promise","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||d("react")).useCallback;function a(a,c,e,f){return function(){var g=d("CometRelay").useRelayEnvironment();return j(function(i,j,k){return new(h||(h=b("Promise")))(function(b,h){return d("CometRelay").enqueueMutation(g,{mutation:a,onCompleted:function(a,c){c&&c.length?h(c):b(a)},onError:function(a){return h([a])},optimisticResponse:c?c(i,j,k):null,optimisticUpdater:e?e(i,j,k):null,updater:f?f(i,j,k):null,variables:babelHelpers["extends"]({input:i},j)})})},[g])}}g["default"]=a}),98);