;/*FB_PKG_DELIM*/

__d("CometMessengerResharesDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7541482175918046"}),null);
__d("CometMessengerResharesDialogQuery$Parameters",["CometMessengerResharesDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometMessengerResharesDialogQuery_facebookRelayOperation"),metadata:{},name:"CometMessengerResharesDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometMessengerResharesDialog.entrypoint",["CometMessengerResharesDialogQuery$Parameters","JSResourceForInteraction","MWXacGating","WebPixelRatio","qex"],(function(a,b,c,d,e,f,g){"use strict";var h=8660;a={getPreloadProps:function(a){a=a.url;return{queries:{resharesQueryReference:{parameters:b("CometMessengerResharesDialogQuery$Parameters"),variables:{isLinkSharingEnabled:c("qex")._("858")===!0,privacySelectorRenderLocation:"COMET_SHARE_DIALOG",renderLocation:"reshares_dialog",scale:d("WebPixelRatio").get(),suppress_xac_groups:!d("MWXacGating").isGroupsEnabled(),url:a,xacDisclosureNux:h}}}}},root:c("JSResourceForInteraction")("CometMessengerResharesDialog.react").__setRef("CometMessengerResharesDialog.entrypoint")};g["default"]=a}),98);
__d("useCometFeedToMessengerReshareV2_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometFeedToMessengerReshareV2_group",selections:[{args:null,kind:"FragmentSpread",name:"CometMessengerResharesDialog_group"}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("useCometFeedToMessengerReshareV2",["CometMessengerResharesDialog.entrypoint","CometRelay","LSMessagingThreadAttributionType","gkx","react","useCometEntryPointDialog","useCometFeedToMessengerReshareV2_group.graphql","useShareLogger"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||d("react")).useRef;function a(a){var e=a.feedLocation,f=a.groupKey,g=a.shareableID,i=a.sharingComponentName,k=a.storyData;a=a.url;var l=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometFeedToMessengerReshareV2_group.graphql"),f);f={url:a};a=j(null);f=c("useCometEntryPointDialog")(c("CometMessengerResharesDialog.entrypoint"),f,c("gkx")("24223")?"button_aggressive":"button");var m=f[0],n=f[1],o=f[2];f=f[3];var p=c("useShareLogger")(),q=p.onOpenBCFButtonClicked;function r(){q({entry_point:e,shareable_entity_fbid:g,sharing_component_name:i}),m({feedLocation:e,groupKey:l,shareableID:g,source:c("LSMessagingThreadAttributionType").FB_FEED_ORGANIC_POST_VIEW_AND_MESSAGE,storyData:k})}return{onClick:r,onHoverInFunction:n,onHoverOutFunction:o,onPressInFunction:f,triggerRef:a}}g["default"]=a}),98);
__d("useCometResharesToasts",["fbt","ix","SilenceableErrorMessageUtils","TetraIcon.react","cometPushToast","fbicon","react","useCometRouterDispatcher","useNullthrowsViolation","useToasterStateManager"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=j||(j=d("react")),l=j.useCallback,m="CometStoriesReshareToast";function a(a){var b=c("useToasterStateManager")(),e=c("useNullthrowsViolation")(c("useCometRouterDispatcher")()),f=l(function(f){var g=k.jsx(c("TetraIcon.react"),{color:"positive",icon:d("fbicon")._(i("498146"),20),size:20}),j=f!=null?{label:h._("__JHASH__SB5t9wP-DlC__JHASH__"),onPress:function(){e.go(f,{})}}:void 0;d("cometPushToast").cometPushToast({action:j,icon:g,message:a,testid:m},void 0,b)},[b,e,a]),g=l(function(a,c,e){if(a!=null){a=d("SilenceableErrorMessageUtils").getMetadataFromError(a);if(d("SilenceableErrorMessageUtils").shouldHideErrorMessage(a))return}a=c!=null?d("cometPushToast").cometPushToast:d("cometPushToast").cometPushErrorToast;a({icon:c,message:e?h._("__JHASH__Gg9tHFaojpv__JHASH__"):h._("__JHASH__QKJj6FsLHJQ__JHASH__"),onPress:function(b){function a(){return b.apply(this,arguments)}a.toString=function(){return b.toString()};return a}(function(){e&&e()}),testid:m},void 0,b)},[b]),j=l(function(){d("cometPushToast").cometPushToast({message:h._("__JHASH__lvbk0C0HrxQ__JHASH__"),testid:m},void 0,b)},[b]);return{showErrorToast:g,showPostingToast:j,showSuccessToast:f}}g["default"]=a}),226);