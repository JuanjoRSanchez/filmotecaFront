"use strict";(self["webpackChunkfilmotecafront"]=self["webpackChunkfilmotecafront"]||[]).push([[628],{8263:function(t,a,e){e.r(a),e.d(a,{default:function(){return m}});var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"caja"}},[e("div",{attrs:{id:"acciones"}},[e("div",[e("headerMain")],1),e("div",{staticStyle:{display:"flex",height:"50px"}},[e("div",{staticStyle:{width:"50%"}},[e("router-link",{staticClass:"btn btn-primary",attrs:{to:"/AddPelicula",type:"button"}},[t._v(" Añadir película")])],1),e("div",{attrs:{id:"ordenador"}},[e("button",{staticClass:"btn btn-primary",on:{click:t.mostrarOrdenadores}},[t._v(" Ordenar por: ")]),e("ul",{attrs:{id:"ordenar"}},[e("div",[e("li",[e("button",{staticClass:"btn btn-primary",on:{click:t.ordenarPorAnio}},[t._v(" Año "+t._s(t.sortAnio)+" ")])]),e("li",[e("button",{staticClass:"btn btn-primary",on:{click:t.ordenarPorNota}},[t._v(" Nota "+t._s(t.sortNota)+" ")])]),e("li",[e("button",{staticClass:"btn btn-primary",on:{click:t.ordenarPorDirector}},[t._v(" Director ")])]),e("li",[e("button",{staticClass:"btn btn-primary",on:{click:t.ordenarPorVistas}},[t._v(" Vistas primero ")])]),e("li",[e("button",{staticClass:"btn btn-primary",on:{click:t.ordenarPorTitulo}},[t._v(" Quitar filtros ")])])])])])]),e("hr")]),t.pelis?e("div",{staticStyle:{"z-index":"-1"}},[e("table",{staticStyle:{"z-index":"2"},attrs:{id:"pelis"}},[t._m(0),t._l(t.datosPaginados,(function(a){return e("tr",{key:a.id,attrs:{id:"peliculadetalles"}},[e("td",[t._v(t._s(a.title))]),e("td",{staticClass:"tdAnio"},[t._v(t._s(a.anio))]),e("td",{staticClass:"tdDirector"},[t._v(t._s(a.nombreDirector))]),e("td",{staticClass:"tdComentario"},[t._v(t._s(a.comentario))]),e("td",[t._v(t._s(a.nota))]),1==a.vista?e("td",[e("svg",{staticClass:"bi bi-check-lg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"}})])]):e("td",[e("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})])]),e("td",{staticClass:"btnMan"},[e("a",{staticClass:"btn btn-outline-primary btnBorrar",attrs:{href:"#"},on:{click:function(e){return t.confirmar(a.id)}}},[e("svg",{staticClass:"bi bi-trash3",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"}})])])]),e("td",{staticClass:"btnMan",on:{click:function(e){return t.setIdPelicula(a.id)}}},[e("router-link",{staticClass:"btn btn-outline-primary",attrs:{to:"/UpdatePelicula",type:"button"}},[e("svg",{staticClass:"bi bi-file-earmark-diff",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M8 5a.5.5 0 0 1 .5.5V7H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V8H6a.5.5 0 0 1 0-1h1.5V5.5A.5.5 0 0 1 8 5zm-2.5 6.5A.5.5 0 0 1 6 11h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"}}),e("path",{attrs:{d:"M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"}})])])],1)])}))],2)]):t._e(),e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination justify-content-center"},[e("li",{staticClass:"page-item active",on:{click:function(a){return t.getPreviousPage()}}},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Anterior")])]),t._l(t.totalPaginas(),(function(a){return e("li",{key:a.index,staticClass:"page-item",class:t.isActive(a),attrs:{id:"part"},on:{click:function(e){return t.getDataPagina(a)}}},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item active",on:{click:function(a){return t.getNextPage()}}},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Siguiente")])])],2),e("p",{staticStyle:{color:"white"}},[t._v("Total de películas "+t._s(this.pelis.length))])]),e("div",{attrs:{id:"mensajeConfirmacion"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.mensajeConfirmacion,expression:"mensajeConfirmacion"}],attrs:{id:"inp",type:"text"},domProps:{value:t.mensajeConfirmacion},on:{input:function(a){a.target.composing||(t.mensajeConfirmacion=a.target.value)}}}),e("div",[e("button",{staticClass:"btn btn-danger btn-block fa-lg mb-3",on:{click:function(a){return t.deletePelicula()}}},[t._v(" Si ")]),e("button",{staticClass:"btn btn-primary btn-block fa-lg mb-3",on:{click:t.noEliminar}},[t._v(" No ")])])]),e("div",{attrs:{id:"foot"}},[e("footerComponent")],1)])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{attrs:{id:"titulos"}},[e("td",{staticClass:"tdTitulo"},[t._v("Título")]),e("td",{staticClass:"tdMed tdAnio"},[t._v("Año de estreno")]),e("td",{staticClass:"tdDirector"},[t._v("Director")]),e("td",{staticClass:"tdComentario"},[t._v("Comentario")]),e("td",{staticClass:"tdMin"},[t._v("Nota")]),e("td",{staticClass:"tdMin"},[t._v("Vista")]),e("td",{staticClass:"btnMan tdMin"},[t._v("Eliminar")]),e("td",{staticClass:"btnMan tdMin"},[t._v("Modificar")])])}],n=e(6166),o=e.n(n),r=e(9814),l=e(5784),c=e(3493),d={name:"homePage",components:{headerMain:r.Z,footerComponent:l.Z},data:function(){return{nombre:"",email:"",password:"",pelis:[],pelisTra:{},idPelicula:"",director:{},error:!1,error_msg:"",pelisPorAnio:{},pelisPorNota:{},sortAnio:"descendente",sortNota:"descendente",sortDirector:"descendente",mensaje:"Lo sentimos, en este momento no podemos acceder a tus películas, prueba más tarde",mensajeConfirmacion:"¿Esta seguro de liminar la película?",sortTitulo:"descendente",sortVista:"descendente",elementosPagina:10,datosPaginados:[],paginaActual:1}},mounted(){localStorage.mail?(this.email=localStorage.mail,this.getPeliculasDTO()):c.Z.push({name:"LandingPage"}),document.getElementById("ordenar").style.display="none"},methods:{setIdPelicula(t){localStorage.idPelicula=t},getPeliculasDTO(){try{o().get("http://localhost:9012/filmoteca/v1/pelicula/listas/"+localStorage.mail).then((t=>{null!=t.data?(this.pelis=t.data,this.getDataPagina(this.paginaActual)):this.error=!0})).catch((t=>{this.mensaje=t}))}catch(t){console.log(t)}},deletePelicula(){try{o()["delete"]("http://localhost:9012/filmoteca/v1/pelicula/borrar/"+this.idPelicula).then((t=>{"ok"==t.data?location.reload():window.alert("No se ha podido borrar la película")}))}catch(t){console.log(t)}},ordenarPorAnio(){this.datosPaginados=this.pelis,"descendente"==this.sortAnio?(this.datosPaginados.sort((function(t,a){return t.anio-a.anio})),this.sortAnio="ascendente"):(this.datosPaginados.sort((function(t,a){return a.anio-t.anio})),this.sortAnio="descendente"),this.getDataPagina(this.paginaActual),this.mostrarOrdenadores()},ordenarPorNota(){this.datosPaginados=this.pelis,"descendente"==this.sortNota?(this.datosPaginados.sort((function(t,a){return t.nota-a.nota})),this.sortNota="ascendente"):(this.datosPaginados.sort((function(t,a){return a.nota-t.nota})),this.sortNota="descendente"),this.getDataPagina(this.paginaActual),this.mostrarOrdenadores()},ordenarPorDirector(){return this.datosPaginados=this.pelis,"descendente"==this.sortDirector?(this.datosPaginados.sort(((t,a)=>{if(t.nombreDirector.charAt(0).toLowerCase()<a.nombreDirector.charAt(0).toLowerCase())return-1})),this.sortDirector="ascendente"):(this.datosPaginados.sort(((t,a)=>{if(t.nombreDirector.charAt(0).toLowerCase()>a.nombreDirector.charAt(0).toLowerCase())return 1})),this.sortDirector="descendente"),this.getDataPagina(this.paginaActual),this.mostrarOrdenadores(),0},ordenarPorTitulo(){location.reload()},ordenarPorVistas(){return this.datosPaginados=this.pelis,this.datosPaginados.sort(((t,a)=>{if(t.vista>a.vista)return-1})),this.getDataPagina(this.paginaActual),this.mostrarOrdenadores(),0},mostrarOrdenadores(){let t=document.getElementById("ordenar").style.display;document.getElementById("ordenar").style.display=""==t?"none":"block"},cerrarVentana(){document.getElementById("mensaje").style.display="none",location.reload()},totalPaginas(){return Math.ceil(this.pelis.length/this.elementosPagina)},getDataPagina(t){this.paginaActual=t;let a=t*this.elementosPagina-this.elementosPagina,e=t*this.elementosPagina;this.datosPaginados=this.pelis.slice(a,e)},getPreviousPage(){this.paginaActual>1&&this.paginaActual--,this.getDataPagina(this.paginaActual)},getNextPage(){this.paginaActual<this.totalPaginas()&&this.paginaActual++,this.getDataPagina(this.paginaActual)},isActive(t){return t==this.paginaActual?"active":""},ocultarMensaje(){document.getElementById("mensaje").style.display="none"},confirmar(t){document.getElementById("mensajeConfirmacion").style.display="block",this.idPelicula=t},noEliminar(){document.getElementById("mensajeConfirmacion").style.display="none"}}},h=d,u=e(1001),g=(0,u.Z)(h,i,s,!1,null,"45bab0f5",null),m=g.exports}}]);
//# sourceMappingURL=628.bca3e391.js.map