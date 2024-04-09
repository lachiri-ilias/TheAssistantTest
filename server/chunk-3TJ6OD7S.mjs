import './polyfills.server.mjs';
import{a as W,b as $,c as q,f as z,l as Y}from"./chunk-OOJZHL5J.mjs";import{Aa as h,Ba as A,Ca as u,Da as c,Ea as M,Fa as m,G as y,Ga as F,H as v,I as _,K as N,N as C,Q as g,R as V,T as x,Wa as j,_a as H,db as B,ea as O,eb as U,fb as L,ja as D,la as l,ma as P,na as T,oa as k,qa as G,ra as R,wa as b,xa as f,ya as o,za as a}from"./chunk-7OXAB4D3.mjs";import{a as I,b as S}from"./chunk-VVCT4QZE.mjs";var oe={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},qe=S(I({},oe),{"[class.ng-submitted]":"isSubmitted"});var ae=new N("CallSetDisabledState",{providedIn:"root",factory:()=>Z}),Z="always";var le=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=V({type:e}),e.\u0275inj=_({});let r=e;return r})();var X=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:ae,useValue:t.callSetDisabledState??Z}]}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=V({type:e}),e.\u0275inj=_({imports:[le]});let r=e;return r})();var Q=[{id:163728,firstName:"Minerva",lastName:"McGonagall",description:"Transfiguration teacher and head of Gryffindor",arrivalDate:"08/09/1956",house:"Gryffindor",assignment:"Transfiguration",isTeacher:!0},{id:903943,firstName:"Hermione",lastName:"Granger",description:`Top of her class. 
 Parents are dentists.`,arrivalDate:"01/09/1991",house:"Gryffindor",isTeacher:!1},{id:809247,firstName:"Fred",lastName:"Weasley",description:`Quidditch beater. 
 Twin of Georges Weasley.`,arrivalDate:"01/09/1989",house:"Gryffindor",isTeacher:!1},{id:409232,firstName:"Severus",lastName:"Snape",description:"Potions teacher and head of Slytherin",arrivalDate:"04/09/1984",house:"Slytherin",assignment:"Potions",isTeacher:!0},{id:910832,firstName:"Harry",lastName:"Potter",description:`Quidditch seeker. 
 The boy who lived`,arrivalDate:"01/09/1991",house:"Gryffindor",isTeacher:!1},{id:929478,firstName:"Georges",lastName:"Weasley",description:`Quidditch beater. 
 Twin of Fred Weasley.`,arrivalDate:"01/09/1989",house:"Gryffindor",isTeacher:!1},{id:309233,firstName:"Pomona",lastName:"Sprout",description:"Herbology teacher and head of Hufflepuff",arrivalDate:"03/09/1982",house:"Hufflepuff",assignment:"Herbology",isTeacher:!0},{id:849303,firstName:"Ronald",lastName:"Weasley",description:`Has 5 brothers and a sister. 
 Son of Arthur and Molly Weasley.`,arrivalDate:"01/09/1991",house:"Gryffindor",isTeacher:!1},{id:903543,firstName:"Draco",lastName:"Malefoy",description:`Snape's favorite student. 
 Son of Lucius and Narcissa Malefoy.`,arrivalDate:"01/09/1991",house:"Slytherin",isTeacher:!1},{id:783728,firstName:"Neville",lastName:"Longbottom",description:`Raised by his grandmother. 
 Son of Alice and Frank Longbottom.`,arrivalDate:"01/09/1991",house:"Gryffindor",isTeacher:!1},{id:492893,firstName:"Filius",lastName:"Flitwick",description:"Charms teacher and head of Ravenclaw",arrivalDate:"01/09/1971",house:"Ravenclaw",assignment:"Charms",isTeacher:!0},{id:938200,firstName:"Vincent",lastName:"Crabbe",description:`Draco's best friend. 
 Bottom of his class.`,arrivalDate:"01/09/1991",house:"Slytherin",isTeacher:!1}];var K=r=>({"background-color":r});function ue(r,e){if(r&1&&(o(0,"div",11)(1,"span",12),u(2),a(),o(3,"div",13)(4,"h3",14),u(5),a(),o(6,"p",15),u(7),a(),o(8,"div",16),h(9,"i",17),o(10,"p",18),u(11),a()()()()),r&2){let i=e.$implicit,t=A();l(),f("ngStyle",F(6,K,t.getHouseColor(i.house))),l(),c(i.assignment),l(3),M("",i.firstName," ",i.lastName,""),l(2),c(i.description),l(4),c(i.arrivalDate)}}function de(r,e){if(r&1&&(o(0,"div",19)(1,"span",20),u(2),a(),o(3,"div",13)(4,"h3",14),u(5),a(),o(6,"p",15),u(7),a(),o(8,"div",16),h(9,"i",17),o(10,"p",18),u(11),a()()()()),r&2){let i=e.$implicit,t=A();l(),f("ngStyle",F(6,K,t.getHouseColor(i.house))),l(),c(i.house),l(3),M("",i.firstName," ",i.lastName,""),l(2),c(i.description),l(4),c(t.calculateStudyYear(i.arrivalDate))}}var J=(()=>{let e=class e{constructor(){this.hogwarts=Q,this.teacher=this.hogwarts.filter(t=>t.isTeacher),this.teachers=this.teacher.sort((t,n)=>new Date(t.arrivalDate).getTime()-new Date(n.arrivalDate).getTime()),this.student=this.hogwarts.filter(t=>!t.isTeacher),this.students=this.student.sort((t,n)=>t.house===n.house?t.firstName.localeCompare(n.firstName):t.house.localeCompare(n.house))}getHouseColor(t){return{Gryffindor:"#E9131F",Slytherin:"#18A874",Ravenclaw:"#1D79CD",Hufflepuff:"#C7B514"}[t]||"#e0e0e0"}calculateStudyYear(t){let s=1991-new Date(t).getFullYear();switch(s){case 0:return"First Year";case 1:return"Second Year";case 2:return"Third Year";default:return`${s} Years`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["app-hogwarts"]],standalone:!0,features:[m],decls:20,vars:2,consts:[["href",D`https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Orelega+One&display=swap`,"rel","stylesheet"],["href",D`https://fonts.googleapis.com/css?family=Lato`,"rel","stylesheet"],[1,"container"],[1,"title-banner"],[1,"hogwarts"],[1,"row"],[1,"col-sm-12","col-md-6","col-lg-4"],[1,"cards-container"],["class","card mb-3","style","width: 18rem;",4,"ngFor","ngForOf"],[1,"col-sm-12","col-md-6","col-lg-8"],["class","card sm-6 mb-3",4,"ngFor","ngForOf"],[1,"card","mb-3",2,"width","18rem"],[1,"badge","assignment",3,"ngStyle"],[1,"card-body"],[1,"name"],[1,"description"],[1,"arrival-date-container","d-flex","align-items-center"],[1,"bi","bi-calendar-date-fill"],[1,"arrival-date","ml-2"],[1,"card","sm-6","mb-3"],[1,"badge","house",3,"ngStyle"]],template:function(n,s){n&1&&(o(0,"head"),h(1,"link",0)(2,"link",1),a(),o(3,"body")(4,"div",2)(5,"h1",3),u(6,"Hogwarts"),a()(),o(7,"div",4)(8,"div",2)(9,"div",5)(10,"div",6)(11,"h2"),u(12,"Teachers"),a(),o(13,"div",7),b(14,ue,12,8,"div",8),a()(),o(15,"div",9)(16,"h2"),u(17,"Students"),a(),o(18,"div",7),b(19,de,12,8,"div",10),a()()()()()()),n&2&&(l(14),f("ngForOf",s.teachers),l(5),f("ngForOf",s.students))},dependencies:[L,B,U,X],styles:[".hogwarts[_ngcontent-%COMP%]{display:flex;margin:0;padding:0;box-sizing:border-box;width:100%;height:100vh;overflow:auto}.title-banner[_ngcontent-%COMP%]{color:#11171d;display:inline-block;padding:.2em 0;margin-top:1em;font-family:Orelega One,cursive;font-weight:700;background-image:linear-gradient(to bottom,#fff 60%,#ffc107 60%);line-height:1}body[_ngcontent-%COMP%]{font-family:Lato,sans-serif;color:#333}.cards-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:10px;width:100%;justify-content:center}.card[_ngcontent-%COMP%]{position:relative;border:1px solid #F2F2F2;border-radius:10px;padding-top:8px;background-color:#fff;box-shadow:0 2px 5px #0003;width:100%;height:100%;height:133px;min-width:360px;max-width:360px}.badge[_ngcontent-%COMP%]{position:absolute;top:3px;right:10px;padding:5px 10px;border-radius:15px;color:#fff;font-weight:700;text-align:center;margin-top:8px;font-size:11px;font-weight:400;width:91px}.arrival-date-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.name[_ngcontent-%COMP%]{font-weight:700;font-size:17px;margin-bottom:0}.description[_ngcontent-%COMP%]{font-weight:400;font-size:17px;Width:227px;Height:59px}.h2[_ngcontent-%COMP%]{font-weight:800;size:20px;line-height:24px}.arrival-date[_ngcontent-%COMP%]{font-weight:400;font-size:11px;line-height:13px;color:#484848;margin:0}.card-body[_ngcontent-%COMP%]{padding-top:0}"]});let r=e;return r})();var ee=(()=>{let e=class e{constructor(){this.title="TheAssistantTest"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["app-root"]],standalone:!0,features:[m],decls:1,vars:0,template:function(n,s){n&1&&h(0,"app-hogwarts")},dependencies:[J]});let r=e;return r})();var te=[];var ce="@",he=(()=>{let e=class e{constructor(t,n,s,d,p){this.doc=t,this.delegate=n,this.zone=s,this.animationType=d,this.moduleImpl=p,this._rendererFactoryPromise=null,this.scheduler=C(T,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-AVF22C74.mjs")).catch(n=>{throw new y(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:s})=>{this._engine=n(this.animationType,this.doc,this.scheduler);let d=new s(this.delegate,this._engine,this.zone);return this.delegate=d,d})}createRenderer(t,n){let s=this.delegate.createRenderer(t,n);if(s.\u0275type===0)return s;typeof s.throwOnSyntheticProps=="boolean"&&(s.throwOnSyntheticProps=!1);let d=new E(s);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(p=>{let se=p.createRenderer(t,n);d.use(se)}).catch(p=>{d.use(s)}),d}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(n){P()},e.\u0275prov=v({token:e,factory:e.\u0275fac});let r=e;return r})(),E=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let i of this.replay)i(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,i){return this.delegate.createElement(e,i)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,i){this.delegate.appendChild(e,i)}insertBefore(e,i,t,n){this.delegate.insertBefore(e,i,t,n)}removeChild(e,i,t){this.delegate.removeChild(e,i,t)}selectRootElement(e,i){return this.delegate.selectRootElement(e,i)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,i,t,n){this.delegate.setAttribute(e,i,t,n)}removeAttribute(e,i,t){this.delegate.removeAttribute(e,i,t)}addClass(e,i){this.delegate.addClass(e,i)}removeClass(e,i){this.delegate.removeClass(e,i)}setStyle(e,i,t,n){this.delegate.setStyle(e,i,t,n)}removeStyle(e,i,t){this.delegate.removeStyle(e,i,t)}setProperty(e,i,t){this.shouldReplay(i)&&this.replay.push(n=>n.setProperty(e,i,t)),this.delegate.setProperty(e,i,t)}setValue(e,i){this.delegate.setValue(e,i)}listen(e,i,t){return this.shouldReplay(i)&&this.replay.push(n=>n.listen(e,i,t)),this.delegate.listen(e,i,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(ce)}};function ie(r="animations"){return G("NgAsyncAnimations"),x([{provide:k,useFactory:(e,i,t)=>new he(e,i,t,r),deps:[H,W,R]},{provide:O,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ne={providers:[Y(te),q(),ie()]};var fe={providers:[z()]},re=j(ne,fe);var pe=()=>$(ee,re),At=pe;export{At as a};
