(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(t,e,n){t.exports=n(22)},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(3),o=n.n(i),c=(n(16),n(17),n(7)),s=n(4),l=n(5),u=n(8),f=n(6),h=n(9),m=(n(18),function(t){var e=t.index,n=t.number,r=t.onClick;return a.a.createElement("button",{className:"cell".concat(e+1===n?" cell-valid":"").concat(0===n?" cell-void":""),onClick:r},n)}),d=(n(19),function(t){var e=t.items,n=t.onClick;return a.a.createElement("div",{className:"grid"},e.map(function(t,e){return a.a.createElement(m,{key:e,index:e,number:t,onClick:function(){return n(e)}})}))}),g=(n(20),function(t){var e=t.restart;return a.a.createElement("div",{className:"controls"},a.a.createElement("button",{onClick:e},"Restart"),a.a.createElement("button",{onClick:function(){return e("easy")}},"Restart (easy)"))}),v=n(1),p=function(t,e){return{row:Math.floor(t/Math.sqrt(e)),column:Math.floor(t%Math.sqrt(e))}},w={init:function(t){var e=t.size,n=t.type,r=void 0===n?"default":n;return this.size=e,this.grid=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=Object(v.a)(Array(Math.pow(t,2)).keys());return"easy"===e?(n=n.slice(1,Math.pow(t,2)),[].concat(Object(v.a)(n.slice(0,n.length-1)),[0,n[n.length-1]])):n.sort(function(){return Math.random()>.5?1:-1})}(e,r),this.won=!1,this.grid},reset:function(t){return this.init({size:this.size,type:t})},swapCell:function(t){var e=this.grid.indexOf(0);return function(t,e,n){var r=p(t,n),a=p(e,n),i=r.row===a.row,o=1===Math.abs(r.row-a.row),c=r.column===a.column,s=1===Math.abs(r.column-a.column);return i&&s||c&&o}(t,e,this.grid.length)&&function(t,e,n){var r;r=[t[n],t[e]],t[e]=r[0],t[n]=r[1]}(this.grid,t,e),[this.grid,this.isWon()]},isWon:function(){return this.won=this.grid.slice(0,this.grid.length-1).every(function(t,e){return t===e+1}),this.won}},b=(n(21),function(t){function e(){var t,n;Object(s.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(u.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(a)))).state={grid:w.init({size:n.props.size}),gameWon:!1},n.onCellClick=function(t){var e=w.swapCell(t),r=Object(c.a)(e,2),a=r[0],i=r[1];n.setState(function(){return{grid:a,gameWon:i}})},n.restart=function(t){n.setState(function(){return{grid:w.reset(t),gameWon:!1}})},n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.state,e=t.grid,n=t.gameWon;return a.a.createElement(a.a.Fragment,null,n?a.a.createElement("div",{className:"congrats"},"Congrats!"):a.a.createElement(d,{items:e,onClick:this.onCellClick}),a.a.createElement(g,{restart:this.restart}))}}]),e}(r.Component));b.defaultProps={size:3};var C=b;var E=function(){return a.a.createElement("div",{className:"app"},a.a.createElement("h1",null,"Puzzled"),a.a.createElement(C,{size:3}))};o.a.render(a.a.createElement(E,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.1de85b83.chunk.js.map