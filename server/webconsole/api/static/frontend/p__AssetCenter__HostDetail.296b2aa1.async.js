"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[414],{55767:function(Ee,W,n){n.r(W),n.d(W,{default:function(){return Le}});var q=n(15009),l=n.n(q),ee=n(99289),I=n.n(ee),te=n(19632),M=n.n(te),A=n(5574),B=n.n(A),H=n(93769),ae=n(12121),j=n(38345),h=n(14373),C=n(89129),ne=n(47375),k=n(97269),V=n(64317),G=n(97462),Y=n(67294),re=n(96974),N=n(84908),U=n(26713),K=n(20550),v=n(69677),m=n(30381),x=n.n(m),y=n(48555),o=n(63430),L=n(12461),Ce=n(80737),Te=n(71577),ve=n(10010),he=n(24969),T=n(49748),J=n(80854),Ye={tag:"tag___kCu44"},Ze=n(55171),Se=n.n(Ze),e=n(85893),Me=H.Z.Divider,Ae=[{title:"\u63D2\u4EF6\u540D\u79F0",dataIndex:"name"},{title:"\u7248\u672C",search:!1,dataIndex:"pversion"},{title:"\u72B6\u6001",search:!1,dataIndex:"status",valueEnum:{true:{text:"\u5728\u7EBF",status:"Success"},false:{text:"\u79BB\u7EBF",status:"Error"}}},{title:function(){return(0,e.jsx)(N.Z,{title:"kbps",children:(0,e.jsxs)(U.Z,{children:["\u4E0A\u4F20\u901F\u7387",(0,e.jsx)(ve.Z,{style:{color:"#1890ff"}})]})})},search:!1,width:"10%",dataIndex:"tx_speed",renderText:function(c){return(c/1024).toFixed(2)}},{title:function(){return(0,e.jsxs)(U.Z,{children:["\u4E0A\u4F20 tps",(0,e.jsx)(ve.Z,{style:{color:"#1890ff"}})]})},search:!1,width:"10%",dataIndex:"tx_tps",renderText:function(c){return c.toFixed(2)}},{title:"\u4E0A\u7EBF\u65F6\u95F4",search:!1,dataIndex:"start_at",renderText:function(c){var d=new Date(c*1e3);return x()(d).utc(!0).format("YYYY-MM-DD HH:mm:ss")}},{title:"\u6700\u8FD1\u5FC3\u8DF3\u65F6\u95F4",search:!1,dataIndex:"last_heartbeat_time",renderText:function(c){var d=new Date(c*1e3);return x()(d).utc(!0).format("YYYY-MM-DD HH:mm:ss")}},{title:"\u64CD\u4F5C",search:!1,valueType:"option",key:"option",dataIndex:"",render:function(c,d,F,R){return[(0,e.jsx)("a",{href:"javascript:void(0);",onClick:function(){var w;return(0,T.nc)({name:(w=d.name)!==null&&w!==void 0?w:"",pversion:d.pversion,agent_id:window.location.pathname.replace("/assetcenter/host/",""),action:"upgrade"}).then(function(Z){return Z.code!=0?(L.ZP.error("\u5347\u7EA7\u5931\u8D25:"+Z.data),!1):(L.ZP.success("\u5347\u7EA7\u6210\u529F"),Z)})},rel:"noopener noreferrer",children:"\u5347\u7EA7"},"remove"),(0,e.jsx)("a",{href:"javascript:void(0);",onClick:function(){var w;return(0,T.nc)({name:(w=d.name)!==null&&w!==void 0?w:"",pversion:d.pversion,agent_id:window.location.pathname.replace("/assetcenter/host/",""),action:"delete"}).then(function(Z){return Z.code!=0?(L.ZP.error("\u5220\u9664\u5931\u8D25:"+Z.data),!1):(L.ZP.success("\u5220\u9664\u6210\u529F"),Z)})},rel:"noopener noreferrer",children:"\u5378\u8F7D"},"remove")]}}],He=[{title:"PID",dataIndex:"pid",width:"5%",defaultSortOrder:"descend"},{title:"PPID",search:!1,dataIndex:"ppid",width:"5%"},{title:"\u8FDB\u7A0B\u540D",dataIndex:"name",width:"10%",copyable:!0,ellipsis:!0},{title:"\u6267\u884C\u6587\u4EF6",dataIndex:"exe",ellipsis:!0,width:"30%",copyable:!0},{title:"UID",search:!1,dataIndex:"uid",width:"5%"},{title:"\u7528\u6237\u540D",search:!1,dataIndex:"username",width:"10%",ellipsis:!0,order:1},{title:"\u542F\u52A8\u65F6\u95F4",search:!1,width:"17.5%",dataIndex:"start_time",renderText:function(c){var d=new Date(c*1e3);return x()(d).utc(!0).format("YYYY-MM-DD HH:mm:ss")}},{title:"\u6570\u636E\u66F4\u65B0\u65F6\u95F4",search:!1,width:"17.5%",dataIndex:"update_time",renderText:function(c){var d=new Date(c*1e3);return x()(d).utc(!0).format("YYYY-MM-DD HH:mm:ss")}}],ze=[{title:"UID",dataIndex:"uid",width:"5%",defaultSortOrder:"descend"},{title:"GID",search:!1,dataIndex:"gid",width:"5%"},{title:"\u7528\u6237\u540D",dataIndex:"username",width:"10%",ellipsis:!0,copyable:!0},{title:"\u7528\u6237\u7EC4\u540D",dataIndex:"group_name",width:"10%",ellipsis:!0,copyable:!0},{title:"\u5386\u53F2\u767B\u5F55 IP",dataIndex:"last_login_ip",ellipsis:!0,width:"10%",search:!1},{title:"\u5BC6\u7801\u66F4\u65B0\u65F6\u95F4",search:!1,dataIndex:"password_update_time",ellipsis:!0,width:"14%"},{title:"Home \u76EE\u5F55",search:!1,dataIndex:"home_dir",ellipsis:!0,width:"13%"},{title:"shell",search:!1,dataIndex:"shell",ellipsis:!0,width:"13%"},{title:"\u7528\u6237\u4FE1\u606F",search:!1,ellipsis:!0,dataIndex:"info",width:"20%"}],Be=[{title:"PID",dataIndex:"pid",width:"5%"},{title:"\u534F\u8BAE\u7C7B\u578B",dataIndex:"type",width:"5%",valueEnum:{1:{text:"ICMP"},6:{text:"TCP"},17:{text:"UDP"}},search:!1,filters:[{text:"ICMP",value:1},{text:"TCP",value:6},{text:"UDP",value:17}],onFilter:!0},{title:"\u8FDB\u7A0B\u540D\u79F0",search:!1,copyable:!0,dataIndex:"comm",width:"10%"},{title:"\u8FDC\u7A0B IP",dataIndex:"dip",width:"8%"},{title:"\u8FDC\u7A0B Port",dataIndex:"dport",ellipsis:!0,width:"4%"},{title:"\u672C\u5730 IP",search:!1,dataIndex:"sip",width:"8%"},{title:"\u672C\u5730 Port",search:!1,dataIndex:"sport",width:"4%"},{title:"\u6267\u884C\u547D\u4EE4",search:!1,dataIndex:"cmdline",width:"20%",ellipsis:!0,copyable:!0}],Re=[{title:"\u6587\u4EF6\u8DEF\u5F84",dataIndex:"path",width:"20%",ellipsis:!0,copyable:!0},{title:"\u7528\u6237\u540D",search:!1,dataIndex:"user",width:"10%",ellipsis:!0},{title:"minute",search:!1,dataIndex:"minute",width:"5%",ellipsis:!0},{title:"hour",search:!1,dataIndex:"hour",width:"5%",ellipsis:!0},{title:"dom",search:!1,dataIndex:"day_of_month",width:"5%",ellipsis:!0},{title:"month",search:!1,dataIndex:"month",width:"5%",ellipsis:!0},{title:"dow",search:!1,dataIndex:"day_of_week",width:"5%",ellipsis:!0},{title:"\u547D\u4EE4",dataIndex:"command",width:"45%",ellipsis:!0,copyable:!0}],$e=[{title:"PID",search:!1,dataIndex:"pid",width:"5%",ellipsis:!0},{title:"\u7C7B\u578B",dataIndex:"type",width:"10%",ellipsis:!0,valueEnum:{container:{text:"container"},software:{text:"software"},database:{text:"database"},web:{text:"web"},service:{text:"service"},bigdata:{text:"bigdata"}},search:!1,filters:!0,onFilter:!0},{title:"\u540D\u79F0",dataIndex:"name",width:"13%",copyable:!0,ellipsis:!0},{title:"\u5BB9\u5668\u540D\u79F0",dataIndex:"container_name",width:"8%",ellipsis:!0,copyable:!0},{title:"\u7248\u672C",search:!1,dataIndex:"version",width:"5%",ellipsis:!0},{title:"\u76D1\u542C\u7AEF\u53E3",search:!1,dataIndex:"listen_addrs",width:"15%",ellipsis:!0},{title:"UID",search:!1,dataIndex:"uid",width:"5%",ellipsis:!0},{title:"\u6267\u884C\u547D\u4EE4",search:!1,dataIndex:"cmdline",width:"35%",ellipsis:!0,copyable:!0}],Oe=[{title:"\u540D\u79F0",dataIndex:"name",width:"15%",copyable:!0,ellipsis:!0},{title:"Size",search:!1,dataIndex:"size",width:"10%",ellipsis:!0,sorter:!0},{title:"\u5F15\u7528\u8BA1\u6570",dataIndex:"refcount",width:"5%",ellipsis:!0,search:!1},{title:"Used by",search:!1,dataIndex:"used_by",width:"30%",ellipsis:!0},{title:"State",dataIndex:"state",width:"6%",search:!1,ellipsis:!0,filters:!0,onFilter:!0,valueEnum:{Live:{text:"Live",status:"success"},Loading:{text:"Loading",status:"default"}}},{title:"Addr",dataIndex:"addr",width:"15%",ellipsis:!0,copyable:!0},{title:"\u66F4\u65B0\u65F6\u95F4",search:!1,dataIndex:"update_time",renderText:function(c){var d=new Date(c*1e3);return x()(d).utc(!0).format("YYYY-MM-DD HH:mm:ss")}}],Ue=[{title:"PID",dataIndex:"pid",width:"5%",ellipsis:!0,search:!1},{title:"ID",search:!1,dataIndex:"id",width:"18%",ellipsis:!0,copyable:!0},{title:"\u8FD0\u884C\u65F6",dataIndex:"runtime",width:"5%",ellipsis:!0,search:!1,filters:!0,onFilter:!0,valueEnum:{containerd:{text:"containerd"},docker:{text:"docker"},kubelet:{text:"kubelet"},"kube-apiserver":{text:"kube-apiserver"}}},{title:"\u540D\u79F0",dataIndex:"names",width:"10%",copyable:!0,ellipsis:!0},{title:"\u955C\u50CF\u540D\u79F0",dataIndex:"image_name",width:"10%",copyable:!0,ellipsis:!0},{title:"\u72B6\u6001",dataIndex:"state",ellipsis:!0,width:"5%",valueEnum:{running:{text:"\u8FD0\u884C\u4E2D",status:"Success"},exited:{text:"\u5DF2\u9000\u51FA",status:"Error"}},filters:!0,onFilter:!0,search:!1},{title:"\u72B6\u6001\u8BE6\u60C5",dataIndex:"status",width:"12%",ellipsis:!0,search:!1},{title:"\u5BB9\u5668\u6807\u7B7E",search:!1,dataIndex:"labels",width:"20%",ellipsis:!0,render:function(c,d){return(0,e.jsx)(Se(),{name:"labels",collapsed:!0,displayDataTypes:!1,src:JSON.parse(d.labels)})}},{title:"\u521B\u5EFA\u65F6\u95F4",search:!1,dataIndex:"created",sorter:!0,renderText:function(c){var d=new Date(c*1e3);return x()(d).utc(!0).format("YYYY-MM-DD HH:mm:ss")}}];function se(g){var c,d,F=0;if(g.plugins_info!==void 0)for(var R in g.plugins_info){var P,w;F+=(P=(w=g.plugins_info[R])===null||w===void 0?void 0:w.cpu)!==null&&P!==void 0?P:0}return F+=(c=(d=g.agent_info)===null||d===void 0?void 0:d.cpu)!==null&&c!==void 0?c:0,F}function ie(g){var c,d,F=0;if(g.plugins_info!==void 0)for(var R in g.plugins_info){var P,w;F+=(P=(w=g.plugins_info[R])===null||w===void 0?void 0:w.rss)!==null&&P!==void 0?P:0}return F+=(c=(d=g.agent_info)===null||d===void 0?void 0:d.rss)!==null&&c!==void 0?c:0,F=F/(1024*1024),F}var Ke=function(){var c,d,F,R,P,w,Z,ue,le,S=(0,re.UO)(),ke=(0,Y.useRef)(),Ge=(0,Y.useState)(!1),me=B()(Ge,2),ge=me[0],Ne=me[1],xe={},We=Y.useState(xe),Ie=B()(We,2),f=Ie[0],Ve=Ie[1],Je=Ce.Z.useForm(),Qe=B()(Je,1),Xe=Qe[0],qe=(0,J.useRequest)(function(i){return(0,T.pi)({agent_id:S.agent_id})},{pollingInterval:30*1e3}),$=qe.data,O=(c=(0,J.useRequest)(T.UV).data)===null||c===void 0?void 0:c.plugins,et=(0,Y.useState)(!1),we=B()(et,2),de=we[0],_e=we[1],be=(0,Y.useRef)(null),tt=(0,Y.useState)(""),ye=B()(tt,2),Q=ye[0],je=ye[1];(0,Y.useEffect)(function(){if(de){var i;(i=be.current)===null||i===void 0||i.focus()}},[de]);var at=function(){_e(!0)},De=function(){_e(!1),je(""),(0,J.request)("/api/v1/tag",{method:"PUT",params:{agent_id:S.agent_id,name:Q}});var r=[],a=new Set;z!==void 0&&(a=new Set(z)),a.has(Q)||r.push.apply(r,M()(z).concat([Q])),oe(r)},nt=function(r){je(r.target.value)},rt=(0,Y.useState)([]),Fe=B()(rt,2),z=Fe[0],oe=Fe[1],st={width:60,verticalAlign:"top"},it=function(r){var a=z==null?void 0:z.filter(function(p){return p!==r});(0,J.request)("/api/v1/tag",{method:"DELETE",params:{agent_id:S.agent_id,name:r}}),oe(a)};return Y.useEffect(function(){Ve($!=null?$:xe),oe($==null?void 0:$.tags)},[$]),(0,e.jsxs)(ae._z,{title:" ",children:[(0,e.jsx)(j.Z,{title:"\u57FA\u7840\u4FE1\u606F",children:(0,e.jsxs)(h.vY,{actionRef:ke,column:4,dataSource:f,children:[(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","hostname"],label:"\u4E3B\u673A\u540D\u79F0"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","intranet_ipv4"],label:"\u5185\u7F51 IPv4"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","pid"],label:"PID"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","boot_at"],label:"\u7CFB\u7EDF\u542F\u52A8\u65F6\u95F4",renderText:function(r){var a=new Date(r*1e3);return x()(a).utc(!0).format("YYYY-MM-DD HH:mm:ss")}}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","arch"],label:"\u7CFB\u7EDF\u67B6\u6784"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","intranet_ipv6"],label:"\u5185\u7F51 IPv6"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","addr"],label:"\u8FDE\u63A5\u5730\u5740"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","last_heartbeat_time"],label:"\u6700\u8FD1\u5FC3\u8DF3\u65F6\u95F4",renderText:function(r){var a=new Date(r*1e3);return x()(a).utc(!0).format("YYYY-MM-DD HH:mm:ss")}}),(0,e.jsx)(h.vY.Item,{dataIndex:"agent_info",label:"\u7CFB\u7EDF\u7248\u672C",renderText:function(r){return r!==void 0?r.platform+" "+r.platform_family+" "+r.platform_version:"-"}}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","extranet_ipv4"],label:"\u516C\u7F51 IPv4"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","nfd"],label:"FD"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","start_at"],label:"Agent \u542F\u52A8\u65F6\u95F4",renderText:function(r){var a=new Date(r*1e3);return x()(a).utc(!0).format("YYYY-MM-DD HH:mm:ss")}}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","kernel_version"],label:"\u5185\u6838\u7248\u672C"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","extranet_ipv6"],label:"\u516C\u7F51 IPv6"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","cpu_num"],label:"CPU"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","version"],label:"Agent \u7248\u672C"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","cpu_name"],label:"CPU \u540D\u79F0"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","tags"],label:"\u6807\u7B7E",render:function(){return(0,e.jsxs)(U.Z,{size:[0,8],children:[(0,e.jsx)(U.Z,{size:[0,8],children:z==null?void 0:z.map(function(r,a){return(0,e.jsx)(K.Z,{closable:!0,onClose:function(){return it(r)},color:"green",children:r},r)})}),de?(0,e.jsx)(v.Z,{ref:be,type:"text",size:"small",style:st,value:Q,onChange:nt,onBlur:De,onPressEnter:De}):(0,e.jsx)(K.Z,{onClick:at,className:Ye.tag,children:(0,e.jsx)(he.Z,{style:{fontSize:"10px",width:"10px",height:"10px"}})})]})}}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","ngr"],label:"Goroutine"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","online"],label:"\u5BA2\u6237\u7AEF\u72B6\u6001",valueEnum:{false:{text:"\u79BB\u7EBF",status:"Error"},true:{text:"\u5728\u7EBF",status:"Success"}}})]})}),(0,e.jsx)("p",{}),(0,e.jsx)(j.Z,{title:"\u6027\u80FD\u8D1F\u8F7D",children:(0,e.jsx)(y.Z,{onResize:function(r){Ne(r.width<596)},children:(0,e.jsxs)(H.Z.Group,{direction:ge?"column":"row",children:[(0,e.jsx)(H.Z,{statistic:{title:"Agent CPU",value:se(f)*100,suffix:"%",precision:2},chart:(0,e.jsx)(o.Z,{height:70,width:70,innerRadius:.7,renderer:"svg",data:[{name:"",value:.1-se(f)},{name:"CPU",value:se(f)}],angleField:"value",colorField:"name",statistic:void 0,legend:!1,tooltip:!1,label:!1,color:["#f5f5f5","#6394f9"]}),chartPlacement:"left"}),(0,e.jsx)(H.Z,{statistic:{title:"Agent \u5185\u5B58",value:ie(f),suffix:"Mb",precision:2},chart:(0,e.jsx)(o.Z,{height:70,width:70,innerRadius:.7,renderer:"svg",data:[{name:"",value:250-ie(f)},{name:"\u5185\u5B58",value:ie(f)}],angleField:"value",colorField:"name",statistic:void 0,legend:!1,tooltip:!1,label:!1,color:["#f5f5f5","#6394f9"]}),chartPlacement:"left"}),(0,e.jsx)(Me,{type:ge?"horizontal":"vertical"}),(0,e.jsx)(H.Z,{statistic:{title:"\u7CFB\u7EDF CPU",value:f==null||(d=f.agent_info)===null||d===void 0?void 0:d.sys_cpu,suffix:"%",precision:2},chart:(0,e.jsx)(o.Z,{height:70,width:70,innerRadius:.7,renderer:"svg",data:[{name:"",value:100-((F=f==null||(R=f.agent_info)===null||R===void 0?void 0:R.sys_cpu)!==null&&F!==void 0?F:0)},{name:"CPU",value:f==null||(P=f.agent_info)===null||P===void 0?void 0:P.sys_cpu}],angleField:"value",colorField:"name",statistic:void 0,legend:!1,tooltip:!1,label:!1,color:["#f5f5f5","#6394f9"]}),chartPlacement:"left"}),(0,e.jsx)(H.Z,{statistic:{title:"\u7CFB\u7EDF\u5185\u5B58",value:f==null||(w=f.agent_info)===null||w===void 0?void 0:w.sys_mem,suffix:"%",precision:2},chart:(0,e.jsx)(o.Z,{height:70,width:70,innerRadius:.7,renderer:"svg",data:[{name:"",value:100-((Z=f==null||(ue=f.agent_info)===null||ue===void 0?void 0:ue.sys_mem)!==null&&Z!==void 0?Z:0)},{name:"\u5185\u5B58",value:f==null||(le=f.agent_info)===null||le===void 0?void 0:le.sys_mem}],angleField:"value",colorField:"name",statistic:void 0,legend:!1,tooltip:!1,label:!1,color:["#f5f5f5","#6394f9"]}),chartPlacement:"left"})]})},"resize-observer")}),(0,e.jsx)("p",{}),(0,e.jsxs)(j.Z,{tabs:{type:"card"},title:"\u4E3B\u673A\u8BE6\u60C5",children:[(0,e.jsx)(j.Z.TabPane,{tab:"\u63D2\u4EF6\u5217\u8868",children:(0,e.jsx)(C.Z,{columns:Ae,options:!1,rowKey:function(){return Math.random()},dataSource:f.plugins_info,search:{defaultCollapsed:!1,labelWidth:"auto",optionRender:function(r,a,p){return[(0,e.jsx)(ne.Y,{title:"\u4E0B\u53D1\u63D2\u4EF6",trigger:(0,e.jsxs)(Te.Z,{type:"primary",children:[(0,e.jsx)(he.Z,{}),"\u4E0B\u53D1\u63D2\u4EF6"]}),form:Xe,autoFocusFirstInput:!0,modalProps:{destroyOnClose:!0,onCancel:function(){return console.log("run")}},submitTimeout:2e3,onFinish:function(u){var s,D;return(0,T.nc)({name:(s=u.name)!==null&&s!==void 0?s:"",pversion:u.pversion,agent_id:(D=S.agent_id)!==null&&D!==void 0?D:"",action:"insert"}).then(function(t){return t.code!=0?(L.ZP.error("\u4E0B\u53D1\u5931\u8D25:"+t.data),!1):(L.ZP.success("\u4E0B\u53D1\u6210\u529F"),t)})},children:(0,e.jsxs)(k.A.Group,{children:[(0,e.jsx)(V.Z,{width:"md",name:"name",label:"\u63D2\u4EF6\u540D\u79F0",labelAlign:"left",request:I()(l()().mark(function _(){var u,s,D,t,X;return l()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(u=new Array,s=new Map,O===void 0){b.next=16;break}b.t0=l()().keys(O);case 4:if((b.t1=b.t0()).done){b.next=16;break}if(D=b.t1.value,t=O[D].name,s.get(t)!==!0){b.next=11;break}return b.abrupt("continue",4);case 11:s.set(t,!0);case 12:X={label:t,value:t},u.push(X),b.next=4;break;case 16:return b.abrupt("return",u);case 17:case"end":return b.stop()}},_)})),placeholder:"\u8BF7\u9009\u62E9\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u63D2\u4EF6\u540D\u79F0"}]}),(0,e.jsx)(G.Z,{name:["name"],ignoreFormListField:!0,children:function(u){var s=u.name;return(0,e.jsx)(V.Z,{width:"md",name:"pversion",params:{name:s},request:function(){var D=I()(l()().mark(function t(X){var ce,b,fe,pe,Pe;return l()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:if(ce=X.name,b=new Array,O===void 0){E.next=13;break}E.t0=l()().keys(O);case 4:if((E.t1=E.t0()).done){E.next=13;break}if(fe=E.t1.value,O[fe].name==ce){E.next=8;break}return E.abrupt("continue",4);case 8:pe=O[fe].pversion,Pe={label:pe,value:pe},b.push(Pe),E.next=4;break;case 13:return E.abrupt("return",b);case 14:case"end":return E.stop()}},t)}));return function(t){return D.apply(this,arguments)}}(),label:"\u63D2\u4EF6\u7248\u672C",placeholder:"\u8BF7\u8F93\u5165\u7248\u672C",rules:[{required:!0}]})}})]})})].concat(M()(p.reverse()))}}})},"tab1"),(0,e.jsx)(j.Z.TabPane,{tab:"\u8FDB\u7A0B\u5217\u8868",children:(0,e.jsx)(C.Z,{columns:He,options:!1,rowKey:function(){return Math.random()},pagination:{pageSize:10,pageSizeOptions:["10","20","50"]},request:function(){var i=I()(l()().mark(function r(a,p,_){var u,s;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,T.Nh)({type:"processes",agent_id:(u=S.agent_id)!==null&&u!==void 0?u:"",page:a.current,size:a.pageSize,sort:p,filter:_,keyword:{pid:a.pid,name:a.name,exe:a.exe}});case 2:return s=t.sent,t.abrupt("return",{data:s.data.assets,success:s.code==0,total:s.data.total});case 4:case"end":return t.stop()}},r)}));return function(r,a,p){return i.apply(this,arguments)}}()})},"tab2"),(0,e.jsx)(j.Z.TabPane,{tab:"\u7F51\u7EDC\u5217\u8868",children:(0,e.jsx)(C.Z,{columns:Be,options:!1,pagination:{pageSize:10},rowKey:function(){return Math.random()},request:function(){var i=I()(l()().mark(function r(a,p,_){var u,s;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,T.Nh)({type:"sockets",agent_id:(u=S.agent_id)!==null&&u!==void 0?u:"",page:a.current,size:a.pageSize,sort:p,filter:_,keyword:{pid:a.pid,dip:a.dip,dport:a.dport}});case 2:return s=t.sent,t.abrupt("return",{data:s.data.assets,success:s.code==0,total:s.data.total});case 4:case"end":return t.stop()}},r)}));return function(r,a,p){return i.apply(this,arguments)}}()})},"tab3"),(0,e.jsx)(j.Z.TabPane,{tab:"\u7528\u6237\u5217\u8868",children:(0,e.jsx)(C.Z,{columns:ze,options:!1,pagination:{pageSize:10},rowKey:function(){return Math.random()},request:function(){var i=I()(l()().mark(function r(a,p,_){var u,s;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,T.Nh)({type:"users",agent_id:(u=S.agent_id)!==null&&u!==void 0?u:"",page:a.current,size:a.pageSize,sort:p,filter:_,keyword:{username:a.username,group_name:a.group_name,uid:a.uid}});case 2:return s=t.sent,t.abrupt("return",{data:s.data.assets,success:s.code==0,total:s.data.total});case 4:case"end":return t.stop()}},r)}));return function(r,a,p){return i.apply(this,arguments)}}()})},"tab4"),(0,e.jsx)(j.Z.TabPane,{tab:"\u5B9A\u65F6\u4EFB\u52A1",children:(0,e.jsx)(C.Z,{columns:Re,options:!1,pagination:{pageSize:10},rowKey:function(){return Math.random()},request:function(){var i=I()(l()().mark(function r(a,p,_){var u,s;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,T.Nh)({type:"crons",agent_id:(u=S.agent_id)!==null&&u!==void 0?u:"",page:a.current,size:a.pageSize,sort:p,filter:_,keyword:{command:a.command,path:a.path}});case 2:return s=t.sent,t.abrupt("return",{data:s.data.assets,success:s.code==0,total:s.data.total});case 4:case"end":return t.stop()}},r)}));return function(r,a,p){return i.apply(this,arguments)}}()})},"tab5"),(0,e.jsx)(j.Z.TabPane,{tab:"\u5E94\u7528\u8D44\u4EA7",children:(0,e.jsx)(C.Z,{columns:$e,options:!1,pagination:{pageSize:10},rowKey:function(){return Math.random()},request:function(){var i=I()(l()().mark(function r(a,p,_){var u,s;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,T.Nh)({type:"apps",agent_id:(u=S.agent_id)!==null&&u!==void 0?u:"",page:a.current,size:a.pageSize,sort:p,filter:_,keyword:{type:a.type,name:a.name,container_name:a.container_name}});case 2:return s=t.sent,t.abrupt("return",{data:s.data.assets,success:s.code==0,total:s.data.total});case 4:case"end":return t.stop()}},r)}));return function(r,a,p){return i.apply(this,arguments)}}()})},"tab6"),(0,e.jsx)(j.Z.TabPane,{tab:"\u5185\u6838\u6A21\u5757",children:(0,e.jsx)(C.Z,{columns:Oe,options:!1,pagination:{pageSize:10},rowKey:function(){return Math.random()},request:function(){var i=I()(l()().mark(function r(a,p,_){var u,s;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,T.Nh)({type:"kmods",agent_id:(u=S.agent_id)!==null&&u!==void 0?u:"",page:a.current,size:a.pageSize,sort:p,filter:_,keyword:{addr:a.addr,name:a.name}});case 2:return s=t.sent,t.abrupt("return",{data:s.data.assets,success:s.code==0,total:s.data.total});case 4:case"end":return t.stop()}},r)}));return function(r,a,p){return i.apply(this,arguments)}}()})},"tab7"),(0,e.jsx)(j.Z.TabPane,{tab:"\u5BB9\u5668\u8D44\u4EA7",children:(0,e.jsx)(C.Z,{columns:Ue,options:!1,pagination:{pageSize:10},rowKey:function(){return Math.random()},request:function(){var i=I()(l()().mark(function r(a,p,_){var u,s;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(p,_),t.next=3,(0,T.Nh)({type:"containers",agent_id:(u=S.agent_id)!==null&&u!==void 0?u:"",page:a.current,size:a.pageSize,sort:p,filter:_,keyword:{names:a.names,image_name:a.image_name}});case 3:return s=t.sent,t.abrupt("return",{data:s.data.assets,success:s.code==0,total:s.data.total});case 5:case"end":return t.stop()}},r)}));return function(r,a,p){return i.apply(this,arguments)}}()})},"tab8")]})]})},Le=Ke},49748:function(Ee,W,n){n.d(W,{Ek:function(){return B},LH:function(){return re},Nh:function(){return U},UV:function(){return V},Zs:function(){return ae},nc:function(){return ne},pi:function(){return h},sk:function(){return Y}});var q=n(15009),l=n.n(q),ee=n(97857),I=n.n(ee),te=n(99289),M=n.n(te),A=n(80854);function B(v){return H.apply(this,arguments)}function H(){return H=M()(l()().mark(function v(m){return l()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.abrupt("return",(0,A.request)("/api/v1/grpc/conn/count",I()({method:"GET"},m||{})));case 1:case"end":return y.stop()}},v)})),H.apply(this,arguments)}function ae(v,m){return j.apply(this,arguments)}function j(){return j=M()(l()().mark(function v(m,x){return l()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,A.request)("/api/v1/grpc/conn/basic",I()({method:"GET",params:I()({},m)},x||{})));case 1:case"end":return o.stop()}},v)})),j.apply(this,arguments)}function h(v,m){return C.apply(this,arguments)}function C(){return C=M()(l()().mark(function v(m,x){return l()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,A.request)("/api/v1/grpc/conn/stat",I()({method:"GET",params:I()({},m)},x||{})));case 1:case"end":return o.stop()}},v)})),C.apply(this,arguments)}function ne(v,m){return k.apply(this,arguments)}function k(){return k=M()(l()().mark(function v(m,x){return l()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,A.request)("/api/v1/plugin/send",I()({method:"POST",data:JSON.stringify({name:m.name,pversion:m.pversion,agent_id:m.agent_id,action:m.action}),headers:{"Content-Type":"application/json"}},x||{})));case 1:case"end":return o.stop()}},v)})),k.apply(this,arguments)}function V(v){return G.apply(this,arguments)}function G(){return G=M()(l()().mark(function v(m){return l()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.abrupt("return",(0,A.request)("/api/v1/plugin/list",I()({method:"GET"},m||{})));case 1:case"end":return y.stop()}},v)})),G.apply(this,arguments)}function Y(v){return(0,A.request)("/api/v1/plugin/delete",I()({method:"GET"},v||{}))}function re(v,m){return N.apply(this,arguments)}function N(){return N=M()(l()().mark(function v(m,x){return l()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,A.request)(m,I()({},x||{})));case 1:case"end":return o.stop()}},v)})),N.apply(this,arguments)}function U(v,m){return K.apply(this,arguments)}function K(){return K=M()(l()().mark(function v(m,x){return l()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,A.request)("/api/v1/asset/get",I()({method:"GET",params:m},x||{})));case 1:case"end":return o.stop()}},v)})),K.apply(this,arguments)}}}]);