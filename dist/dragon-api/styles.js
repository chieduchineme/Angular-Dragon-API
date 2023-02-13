(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles.scss ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n.notification {\n  display: flex;\n  justify-content: center;\n  flex-direction: row-reverse;\n  margin: auto;\n  margin-bottom: 20px;\n  width: 340px;\n}\n.alert-info {\n  color: #0c5460;\n  background-color: #D1ECF1;\n  border-color: #bee5eb;\n}\n.alert-primary {\n  color: #004085;\n  background-color: #cce5ff;\n  border-color: #b8daff;\n}\n.alert-secondary {\n  color: #383d41;\n  background-color: #e2e3e5;\n  border-color: #d6d8db;\n}\n.alert-success {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n}\n.alert-danger {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n}\n.alert-warning {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba;\n}\n.alert-info {\n  color: #0c5460;\n  background-color: #D1ECF1;\n  border-color: #bee5eb;\n}\n.alert-light {\n  color: #818182;\n  border-color: #fdfdfe;\n}\n.alert-dark {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca;\n}\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  transition: 0.25s ease;\n  font-family: \"Roboto Mono\", monospace;\n  display: block;\n}\nbody {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n}\nbody:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: -1;\n  pointer-events: none;\n  height: 430px;\n  background-color: rgba(237, 224, 192, 0.5);\n}\n.app {\n  width: 100%;\n}\na {\n  color: #1e90ff;\n  cursor: pointer;\n  text-decoration: none;\n}\na:hover,\na:focus,\na:active {\n  color: #1e90ff;\n  text-decoration: underline;\n}\n.center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.form-control {\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  background-clip: padding-box;\n  border: 1px solid #e6e6e6;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.btn {\n  cursor: pointer;\n  font-weight: 400;\n  color: #212121;\n  text-align: center;\n  vertical-align: middle;\n  border: 1px solid transparent;\n  margin-top: 20px;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  width: 100%;\n  opacity: 0.7;\n}\n.btn:hover {\n  opacity: 1;\n}\n.btn.btn-primary {\n  color: #fefefe;\n  background-color: #1e90ff;\n  border-color: #1e90ff;\n}\n.btn.btn-delete {\n  color: #fefefe;\n  background-color: #9e1002;\n  border-color: #9e1002;\n}\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 576px) {\n  .container {\n    max-width: 85%;\n  }\n}\n@media (min-width: 768px) {\n  .container {\n    max-width: 85%;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    max-width: 1140px;\n  }\n}\n.col {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.col.col-3 {\n  flex: 0 0 30%;\n  max-width: 30%;\n}\n.shadow {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fefefe;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n  margin-bottom: 40px;\n}\n.card-body {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 1.25rem;\n}\n.card-body p {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n.form-control.is-invalid, .was-validated .form-control:invalid {\n  border-color: #dc3545;\n}\n.w100 {\n  width: 100%;\n}\n/*DIALOG*/\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.cdk-global-overlay-wrapper {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000;\n}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n  opacity: 1;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.32);\n}\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n.cdk-overlay-pane {\n  position: relative;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n.mat-dialog-container {\n  display: block;\n  padding: 24px;\n  border-radius: 4px;\n  box-sizing: border-box;\n  overflow: auto;\n  outline: 0;\n  width: 100%;\n  height: 100%;\n  min-height: inherit;\n  max-height: inherit;\n}\n.mat-dialog-container {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n  background: #fff;\n  color: rgba(0, 0, 0, 0.87);\n}", "",{"version":3,"sources":["C:\\Users\\P9075\\Downloads\\new React Downloads\\dragon-portal-master2\\dragon-api/src\\styles.scss","C:\\Users\\P9075\\Downloads\\new React Downloads\\dragon-portal-master2\\dragon-api/src\\base\\alert.scss","styles.scss"],"names":[],"mappings":"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","file":"styles.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import 'variables';\n@import 'alert';\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  transition: 0.25s ease;\n  font-family: 'Roboto Mono', monospace;\n  display: block;\n}\nbody {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  &:before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: -1;\n    pointer-events: none;\n    height: 430px;\n    background-color:rgba(237, 224, 192, 0.5);\n}\n}\n.app {\n  width: 100%;\n}\na {\n  color: map-get($colors, 'dodger-blue');\n  cursor: pointer;\n  text-decoration: none;\n}\na:hover,\na:focus,\na:active {\n  color: map-get($colors, 'dodger-blue');\n  text-decoration: underline;\n}\n.center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.form-control {\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: map-get($colors, 'gray');\n  background-color: map-get($colors, 'white');\n  background-clip: padding-box;\n  border: 1px solid #e6e6e6;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.btn {\n  cursor: pointer;\n  font-weight: 400;\n  color: map-get($colors, 'black-alt');\n  text-align: center;\n  vertical-align: middle;\n  border: 1px solid transparent;\n  margin-top: 20px;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out;\n  width: 100%;\n  opacity: 0.7;\n  &:hover {\n    opacity: 1;\n  }\n  &.btn-primary {\n    color: map-get($colors, 'white-alt');  \n    background-color: map-get($colors, 'dodger-blue');\n    border-color: map-get($colors, 'dodger-blue');\n  }\n  &.btn-delete { \n    color: map-get($colors, 'white-alt');\n    background-color: map-get($colors, 'dark-red');\n    border-color: map-get($colors, 'dark-red');\n  }\n}\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  @media (min-width: 576px) {\n    max-width: 85%;\n  }\n  @media (min-width: 768px) {\n    max-width: 85%;\n  }\n  @media (min-width: 992px) {\n    max-width: 960px;\n  }\n  @media (min-width: 1200px) {\n    max-width: 1140px;\n  }\n}\n.col {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  &.col-3 {\n    flex: 0 0 30%;\n    max-width: 30%;\n  }\n}\n.shadow {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fefefe;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n  margin-bottom: 40px;\n}\n.card-body {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 1.25rem;\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n}\n.form-control.is-valid, .was-validated .form-control:valid {\n  border-color:  map-get($colors, 'green');\n}\n.form-control.is-invalid, .was-validated .form-control:invalid {\n  border-color: map-get($colors, 'amaranth');\n}\n.w100 {\n  width: 100%;\n}\n/*DIALOG*/\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n    pointer-events: none;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n}\n.cdk-global-overlay-wrapper {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n.cdk-overlay-container {\n    position: fixed;\n    z-index: 1000;\n}\n.cdk-overlay-backdrop{\n  &.cdk-overlay-backdrop-showing {\n      opacity: 1;\n  }\n}\n.cdk-overlay-dark-backdrop {\n    background: rgba(0,0,0,.32);\n}\n.cdk-overlay-backdrop {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 1000;\n    pointer-events: auto;\n    -webkit-tap-highlight-color: transparent;\n    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n    opacity: 0;\n}\n.cdk-overlay-pane {\n    position: relative;\n    pointer-events: auto;\n    box-sizing: border-box;\n    z-index: 1000;\n    display: flex;\n    max-width: 100%;\n    max-height: 100%;\n}\n.cdk-visually-hidden {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n    outline: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n.mat-dialog-container {\n    display: block;\n    padding: 24px;\n    border-radius: 4px;\n    box-sizing: border-box;\n    overflow: auto;\n    outline: 0;\n    width: 100%;\n    height: 100%;\n    min-height: inherit;\n    max-height: inherit;\n}\n.mat-dialog-container {\n    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n    background: #fff;\n    color: rgba(0,0,0,.87);\n}","@import 'variables';\n.alert {\n  position: relative;\n  padding: .75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: .25rem;\n}\n.notification{\n  display: flex;\n  justify-content: center;\n  flex-direction: row-reverse;\n  margin: auto;\n  margin-bottom: 20px;\n  width: 340px;\n}\n.alert-info {\n  color: map-get($colors, 'mosque');  \n  background-color: map-get($colors, 'oyster-bay');\n  border-color: map-get($colors, 'onahau');\n}\n.alert-primary {\n  color: map-get($colors, 'dark-cerulean');\n  background-color: map-get($colors, 'patten-blue');\n  border-color: map-get($colors, 'pale-cornflower-blue');\n}\n.alert-secondary {\n  color: map-get($colors, 'baltic-sea');\n  background-color: map-get($colors, 'solitude');\n  border-color:  map-get($colors, 'link-water');\n}\n.alert-success {\n  color:  map-get($colors, 'crusoe');\n  background-color: map-get($colors, 'swans-down');\n  border-color: map-get($colors, 'granny-apple');\n}\n.alert-danger {\n  color:  map-get($colors, 'red-berry');\n  background-color: map-get($colors, 'pale-pink');\n  border-color: map-get($colors, 'azalea');\n}\n.alert-warning {\n  color:  map-get($colors, 'golden-brown');\n  background-color: map-get($colors, 'china-ivory');\n  border-color: map-get($colors, 'banana-mania');\n}\n.alert-info {\n  color:  map-get($colors, 'mosque');\n  background-color: map-get($colors, 'oyster-bay');\n  border-color: map-get($colors, 'onahau');\n}\n.alert-light {\n  color:  map-get($colors, 'storm-grey');\n  background-color: map-get($colors, 'white');\n  border-color: map-get($colors, 'ghost-white');\n}\n.alert-dark {\n  color:  map-get($colors, 'black-pearl');\n  background-color: map-get($colors, 'pattens-blue');\n  border-color: map-get($colors, 'link-water-alt');\n}","/* You can add global styles to this file, and also import other style files */\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n\n.notification {\n  display: flex;\n  justify-content: center;\n  flex-direction: row-reverse;\n  margin: auto;\n  margin-bottom: 20px;\n  width: 340px;\n}\n\n.alert-info {\n  color: #0c5460;\n  background-color: #D1ECF1;\n  border-color: #bee5eb;\n}\n\n.alert-primary {\n  color: #004085;\n  background-color: #cce5ff;\n  border-color: #b8daff;\n}\n\n.alert-secondary {\n  color: #383d41;\n  background-color: #e2e3e5;\n  border-color: #d6d8db;\n}\n\n.alert-success {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n}\n\n.alert-danger {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n}\n\n.alert-warning {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba;\n}\n\n.alert-info {\n  color: #0c5460;\n  background-color: #D1ECF1;\n  border-color: #bee5eb;\n}\n\n.alert-light {\n  color: #818182;\n  border-color: #fdfdfe;\n}\n\n.alert-dark {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca;\n}\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  transition: 0.25s ease;\n  font-family: \"Roboto Mono\", monospace;\n  display: block;\n}\n\nbody {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n}\nbody:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: -1;\n  pointer-events: none;\n  height: 430px;\n  background-color: rgba(237, 224, 192, 0.5);\n}\n\n.app {\n  width: 100%;\n}\n\na {\n  color: #1e90ff;\n  cursor: pointer;\n  text-decoration: none;\n}\n\na:hover,\na:focus,\na:active {\n  color: #1e90ff;\n  text-decoration: underline;\n}\n\n.center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.form-control {\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  background-clip: padding-box;\n  border: 1px solid #e6e6e6;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.btn {\n  cursor: pointer;\n  font-weight: 400;\n  color: #212121;\n  text-align: center;\n  vertical-align: middle;\n  border: 1px solid transparent;\n  margin-top: 20px;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  width: 100%;\n  opacity: 0.7;\n}\n.btn:hover {\n  opacity: 1;\n}\n.btn.btn-primary {\n  color: #fefefe;\n  background-color: #1e90ff;\n  border-color: #1e90ff;\n}\n.btn.btn-delete {\n  color: #fefefe;\n  background-color: #9e1002;\n  border-color: #9e1002;\n}\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 576px) {\n  .container {\n    max-width: 85%;\n  }\n}\n@media (min-width: 768px) {\n  .container {\n    max-width: 85%;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    max-width: 1140px;\n  }\n}\n\n.col {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.col.col-3 {\n  flex: 0 0 30%;\n  max-width: 30%;\n}\n\n.shadow {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fefefe;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n  margin-bottom: 40px;\n}\n\n.card-body {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 1.25rem;\n}\n.card-body p {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\n.form-control.is-invalid, .was-validated .form-control:invalid {\n  border-color: #dc3545;\n}\n\n.w100 {\n  width: 100%;\n}\n\n/*DIALOG*/\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.cdk-global-overlay-wrapper {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000;\n}\n\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n  opacity: 1;\n}\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.32);\n}\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n\n.cdk-overlay-pane {\n  position: relative;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\n.mat-dialog-container {\n  display: block;\n  padding: 24px;\n  border-radius: 4px;\n  box-sizing: border-box;\n  overflow: auto;\n  outline: 0;\n  width: 100%;\n  height: 100%;\n  min-height: inherit;\n  max-height: inherit;\n}\n\n.mat-dialog-container {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n  background: #fff;\n  color: rgba(0, 0, 0, 0.87);\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\P9075\Downloads\new React Downloads\dragon-portal-master2\dragon-api\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map