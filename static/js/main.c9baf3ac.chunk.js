(this["webpackJsonpreact-movies"]=this["webpackJsonpreact-movies"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),o=a.n(r),l=(a(9),a(1)),s=function(e){var t,a=e.title,n=e.poster_path,r=e.overview,o=e.vote_average;return c.a.createElement("div",{className:"movie"},c.a.createElement("img",{src:n?"https://image.tmdb.org/t/p/w1280"+n:"https://images.pexels.com/photos/5030569/pexels-photo-5030569.jpeg?cs=srgb&dl=pexels-alex-hoces-5030569.jpg&fm=jpg",alt:a}),c.a.createElement("div",{className:"movie-info"},c.a.createElement("h3",null,a),c.a.createElement("span",{className:"tag ".concat((t=o,t>=8?"green":t>=6?"orange":"red"))},o)),c.a.createElement("div",{className:"movie-over"},c.a.createElement("h2",null,"Overview:"),c.a.createElement("p",null,r)))};a(10);var m=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),m=Object(l.a)(o,2),i=m[0],u=m[1],p=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){r(e.results)}))};return Object(n.useEffect)((function(){p("https://appinfo.herokuapp.com/movies")}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("header",null,c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i&&(p("https://appinfo.herokuapp.com/movies/search?query="+i),u(""))}},c.a.createElement("input",{onChange:function(e){u(e.target.value)},value:i,className:"search",type:"search",placeholder:"search..."}))),c.a.createElement("div",{className:"movie-container"},a.length>0&&a.map((function(e){return c.a.createElement(s,Object.assign({key:e.id},e))}))))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.c9baf3ac.chunk.js.map