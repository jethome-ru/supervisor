(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[708],{2708:(e,t,i)=>{"use strict";i.r(t);i(4178),i(3973),i(1488);var r=i(424),o=i(5358),s=i(4516),n=i(7181),a=(i(4552),i(3546),i(1682)),l=i(5460),d=i(6765),c=i(1654);function p(){p=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var o=t.placement;if(t.kind===r&&("static"===o||"prototype"===o)){var s="static"===o?e:i;this.defineClassElement(s,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!m(e))return i.push(e);var t=this.decorateElement(e,o);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var s=this.decorateConstructor(i,t);return r.push.apply(r,s.finishers),s.finishers=r,s},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],o=e.decorators,s=o.length-1;s>=0;s--){var n=t[e.placement];n.splice(n.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[s])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);i.push.apply(i,d)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var o=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[r])(o)||o);if(void 0!==s.finisher&&i.push(s.finisher),void 0!==s.elements){e=s.elements;for(var n=0;n<e.length-1;n++)for(var a=n+1;a<e.length;a++)if(e[n].key===e[a].key&&e[n].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[n].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?g(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=y(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:i,placement:r,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:v(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=v(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function h(e){var t,i=y(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function u(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function m(e){return e.decorators&&e.decorators.length}function f(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function v(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function y(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}const k=(0,s.Z)((e=>{const t=""!==e.host.disk_life_time?30:10,i=1e3*e.host.disk_used/60/t,r=4*e.host.startup_time/60;return 10*Math.ceil((i+r)/10)}));!function(e,t,i,r){var o=p();if(r)for(var s=0;s<r.length;s++)o=r[s](o);var n=t((function(e){o.initializeInstanceElements(e,a.elements)}),i),a=o.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},r=0;r<e.length;r++){var o,s=e[r];if("method"===s.kind&&(o=t.find(i)))if(f(s.descriptor)||f(o.descriptor)){if(m(s)||m(o))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");o.descriptor=s.descriptor}else{if(m(s)){if(m(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");o.decorators=s.decorators}u(s,o)}else t.push(s)}return t}(n.d.map(h)),e);o.initializeClassElements(n.F,a.elements),o.runClassFinishers(n.F,a.finishers)}([(0,o.Mo)("dialog-hassio-datadisk")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"dialogParams",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"selectedDevice",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"devices",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"moving",value:()=>!1},{kind:"method",key:"showDialog",value:function(e){this.dialogParams=e,(0,l.ou)(this.hass).then((e=>{this.devices=e.devices}))}},{kind:"method",key:"closeDialog",value:function(){this.dialogParams=void 0,this.selectedDevice=void 0,this.devices=void 0,this.moving=!1,(0,n.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var e;return this.dialogParams?r.dy`
      <ha-dialog
        open
        scrimClickAction
        escapeKeyAction
        @closed=${this.closeDialog}
        ?hideActions=${this.moving}
      >
        ${this.moving?r.dy`<slot name="heading">
                <h2 id="title" class="header_title">
                  ${this.dialogParams.supervisor.localize("dialog.datadisk_move.moving")}
                </h2>
              </slot>
              <ha-circular-progress alt="Moving" size="large" active>
              </ha-circular-progress>
              <p class="progress-text">
                ${this.dialogParams.supervisor.localize("dialog.datadisk_move.moving_desc")}
              </p>`:r.dy`<slot name="heading">
                <h2 id="title" class="header_title">
                  ${this.dialogParams.supervisor.localize("dialog.datadisk_move.title")}
                </h2>
              </slot>
              ${null!==(e=this.devices)&&void 0!==e&&e.length?r.dy`
                    ${this.dialogParams.supervisor.localize("dialog.datadisk_move.description",{current_path:this.dialogParams.supervisor.os.data_disk,time:k(this.dialogParams.supervisor)})}
                    <br /><br />

                    <paper-dropdown-menu
                      .label=${this.dialogParams.supervisor.localize("dialog.datadisk_move.select_device")}
                      @value-changed=${this._select_device}
                    >
                      <paper-listbox slot="dropdown-content">
                        ${this.devices.map((e=>r.dy`<paper-item>${e}</paper-item>`))}
                      </paper-listbox>
                    </paper-dropdown-menu>
                  `:void 0===this.devices?this.dialogParams.supervisor.localize("dialog.datadisk_move.loading_devices"):this.dialogParams.supervisor.localize("dialog.datadisk_move.no_devices")}

              <mwc-button slot="secondaryAction" @click=${this.closeDialog}>
                ${this.dialogParams.supervisor.localize("dialog.datadisk_move.cancel")}
              </mwc-button>

              <mwc-button
                .disabled=${!this.selectedDevice}
                slot="primaryAction"
                @click=${this._moveDatadisk}
              >
                ${this.dialogParams.supervisor.localize("dialog.datadisk_move.move")}
              </mwc-button>`}
      </ha-dialog>
    `:r.dy``}},{kind:"method",key:"_select_device",value:function(e){this.selectedDevice=e.detail.value}},{kind:"method",key:"_moveDatadisk",value:async function(){this.moving=!0;try{await(0,l.Sx)(this.hass,this.selectedDevice)}catch(e){this.hass.connection.connected&&!(0,a.yz)(e)&&((0,d.Ys)(this,{title:this.dialogParams.supervisor.localize("system.host.failed_to_move"),text:(0,a.js)(e)}),this.closeDialog())}}},{kind:"get",static:!0,key:"styles",value:function(){return[c.Qx,c.yu,r.iv`
        paper-dropdown-menu {
          width: 100%;
        }
        ha-circular-progress {
          display: block;
          margin: 32px;
          text-align: center;
        }

        .progress-text {
          text-align: center;
        }
      `]}}]}}),r.oi)}}]);
//# sourceMappingURL=3845880a.js.map