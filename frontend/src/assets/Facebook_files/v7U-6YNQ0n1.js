;/*FB_PKG_DELIM*/

__d("FriendingCometSuggestionsRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7176500739131881"}),null);
__d("FriendingCometSuggestionsRootQuery$Parameters",["FriendingCometSuggestionsRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("FriendingCometSuggestionsRootQuery_facebookRelayOperation"),metadata:{},name:"FriendingCometSuggestionsRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("FriendingCometSuggestionsRoot.entrypoint",["FriendingCometSuggestionsRootQuery$Parameters","JSResourceForInteraction","NestedRelayEntryPointBuilderUtils","ProfileCometTimelineListViewRouteRoot.entrypoint","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var e={scale:d("WebPixelRatio").get()},f=a.routeProps,g=f.profileID;f=f.viewerID;g=g!=null&&g!==""&&f!=null?d("NestedRelayEntryPointBuilderUtils").NestedRelayEntryPoint({entryPoint:c("ProfileCometTimelineListViewRouteRoot.entrypoint"),entryPointParams:{routeProps:{userID:a.routeProps.profileID,viewerID:a.routeProps.viewerID}}}):void 0;return{entryPoints:{profileEntryPoint:g},queries:{friendingCometSuggestionsRootQueryReference:{parameters:b("FriendingCometSuggestionsRootQuery$Parameters"),variables:e}}}},root:c("JSResourceForInteraction")("FriendingCometSuggestionsRoot.react").__setRef("FriendingCometSuggestionsRoot.entrypoint")};g["default"]=a}),98);