webpackHotUpdate("static\\development\\pages\\products\\black.js",{

/***/ "./pages/products/black.js":
/*!*********************************!*\
  !*** ./pages/products/black.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");





var _jsxFileName = "C:\\Users\\Effy\\anti\\pages\\products\\black.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Black = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Black, _Component);

  var _super = _createSuper(Black);

  function Black() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Black);

    _this = _super.call(this);

    _this.showModal = function () {
      _this.setState({
        show: true
      });
    };

    _this.hideModal = function () {
      _this.setState({
        show: false
      });
    };

    _this.imgRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.state = {
      show: false
    };
    _this.images = ["BLANK", "BLANK", "BLANK", "BLANK"];
    _this.imgModal;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Black, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      this.showHideClassName = this.state.show ? "display-grid" : "display-none";
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 4
        }
      }, __jsx("div", {
        id: "modal",
        className: "jsx-3263136002" + " " + (this.showHideClassName || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 5
        }
      }, __jsx("div", {
        onClick: this.hideModal,
        className: "jsx-3263136002" + " " + "closeModal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 6
        }
      }, "X"), __jsx("div", {
        className: "jsx-3263136002" + " " + "display",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 6
        }
      }, __jsx("div", {
        style: {
          position: "relative"
        },
        className: "jsx-3263136002",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 7
        }
      }, __jsx("h1", {
        className: "jsx-3263136002",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 8
        }
      }, "PLACEHOLDER")), __jsx("img", {
        style: {
          height: "750px",
          border: "2px solid black"
        },
        src: this.modalImage,
        className: "jsx-3263136002",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 7
        }
      })), __jsx("div", {
        style: {
          backgroundColor: "#101010",
          flexDirection: "column",
          padding: "5em"
        },
        className: "jsx-3263136002" + " " + "display",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 6
        }
      }, __jsx("h1", {
        className: "jsx-3263136002",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 7
        }
      }, "\\\\ Black --:--", " ", __jsx("span", {
        className: "jsx-3263136002" + " " + "price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 8
        }
      }, __jsx("br", {
        className: "jsx-3263136002",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }
      }), "$69.99 + tax")), __jsx("h2", {
        style: {
          textAlign: "left",
          padding: "1em"
        },
        className: "jsx-3263136002" + " " + "price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 7
        }
      }, "Sari modern influence sportswear trend commercial valuable. Artistic extraordinary xs make up breathable conservative imprint color effect. Embroidery pattern hand-made showcase. Value stock artistry conformity pastel pumps creative vintage cut cheap. Catwalk emphasis hippie hair trademark consumer influence tailored. Imprint cheap wardrobe. Impeccable illustration emphasis. Buttons beautiful zipper inspiration comfortable. Luxurious instagram revealing. Sari ensemble emphasis expirement impeccable modification trademark waistline minimalist."))), __jsx("div", {
        id: "products",
        className: "jsx-3263136002",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "jsx-3263136002" + " " + "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 6
        }
      }, __jsx("h1", {
        className: "jsx-3263136002" + " " + "ptitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 7
        }
      }, "\\\\ Black --:--", " ", __jsx("span", {
        className: "jsx-3263136002" + " " + "price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 8
        }
      }, __jsx("br", {
        className: "jsx-3263136002",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 9
        }
      }), "$69.99 + tax"))), __jsx("div", {
        className: "jsx-3263136002" + " " + "product",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 6
        }
      }, this.images.map(function (x) {
        return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_8__["motion"].div, {
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          },
          exit: {
            opacity: 0
          },
          whileHover: {
            scale: 1.05
          },
          onTap: {
            scale: 0.95
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 8
          }
        }, __jsx("img", {
          style: {
            maxWidth: "370px",
            cursor: "pointer"
          },
          key: x.toString(),
          ref: _this2.imgRef,
          src: "../".concat(x, ".png"),
          onClick: function onClick() {
            _this2.modalImage = "../".concat(x, ".png");

            _this2.showModal();
          },
          className: "jsx-3263136002" + " " + "image",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 9
          }
        }));
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3263136002",
        __self: this
      }, ".display-grid.jsx-3263136002{display:grid;}.display-none.jsx-3263136002{display:none;}.display.jsx-3263136002{background-color:#f1eee9;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#modal.jsx-3263136002{height:100vh;width:100vw;position:fixed;top:0;left:0;z-index:3;background:#101010;grid-template-columns:50% 50%;}#products.jsx-3263136002{width:100%;height:100vh;display:grid;grid-template-columns:auto;color:#f1eee9;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.product.jsx-3263136002{display:grid;grid-template-columns:auto auto auto auto;grid-gap:auto;justify-items:center;}.image.jsx-3263136002{max-width:370px;cursor:pointer;}h2.jsx-3263136002{margin:0;pading:0;text-align:center;}.title.jsx-3263136002{height:0;}.ptitle.jsx-3263136002{margin:0;padding:2em 0;text-align:center;text-transform:uppercase;font-size:24pt;color:#f1eee9;}.price.jsx-3263136002{font-size:12pt;text-align:center;font-weight:normal;}.closeModal.jsx-3263136002{position:absolute;top:0;right:0;margin-top:1em;margin-right:2.5em;font-size:24pt;font-weight:bold;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRWZmeVxcYW50aVxccGFnZXNcXHByb2R1Y3RzXFxibGFjay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrR2dCLEFBR29CLEFBR0EsQUFHWSxBQU1aLEFBVUYsQUFRRSxBQU1HLEFBSVAsQUFLQSxBQUdBLEFBUU0sQUFLRyxTQXBCVCxBQUtWLEFBR2UsRUExQkQsRUF0QmQsQUFHQSxBQVNhLEFBa0I4QixFQTBCeEIsQ0FwQkgsRUFLRyxBQW9CWixLQVpZLENBMUJMLEFBdUNMLENBeERLLEFBT0UsTUF3QmhCLENBMEJnQixDQU5JLEdBZnBCLENBbEI0QixHQVZyQixDQW9DbUIsS0FuQ2xCLENBaURZLEtBTnBCLENBMUNXLEVBZUksUUFkSyxDQVFMLEVBMEJDLEFBY0EsR0FqQ00sU0FORSxHQTBCVCxBQWNHLENBaERhLFFBZS9CLEtBb0JBLEdBY2dCLENBNURJLGFBWXBCLENBaURBLDBFQXpDQSxLQW5Cd0IsbUdBQ3hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRWZmeVxcYW50aVxccGFnZXNcXHByb2R1Y3RzXFxibGFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmNsYXNzIEJsYWNrIGV4dGVuZHMgQ29tcG9uZW50IHtcdFxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgICAgdGhpcy5zaG93TW9kYWwgPSAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3c6IHRydWUgfSk7XHRcdFx0XHRcclxuXHRcdFx0fTtcclxuXHRcdFx0dGhpcy5oaWRlTW9kYWwgPSAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pO1xyXG5cdFx0XHR9O1xyXG5cdFx0dGhpcy5pbWdSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IHNob3c6IGZhbHNlIH07XHJcblx0XHR0aGlzLmltYWdlcyA9IFtcIkJMQU5LXCIsIFwiQkxBTktcIiwgXCJCTEFOS1wiLCBcIkJMQU5LXCJdO1xyXG5cdFx0dGhpcy5pbWdNb2RhbDtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMuc2hvd0hpZGVDbGFzc05hbWUgPSB0aGlzLnN0YXRlLnNob3cgPyBcImRpc3BsYXktZ3JpZFwiIDogXCJkaXNwbGF5LW5vbmVcIjtcclxuICAgIHJldHVybiAoXHJcblx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3RoaXMuc2hvd0hpZGVDbGFzc05hbWV9IGlkPVwibW9kYWxcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2xvc2VNb2RhbFwiIG9uQ2xpY2s9e3RoaXMuaGlkZU1vZGFsfT5cclxuXHRcdFx0XHRcdFx0WFxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXlcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxyXG5cdFx0XHRcdFx0XHRcdDxoMT5QTEFDRUhPTERFUjwvaDE+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgaGVpZ2h0OiBcIjc1MHB4XCIsIGJvcmRlcjogXCIycHggc29saWQgYmxhY2tcIiB9fVxyXG5cdFx0XHRcdFx0XHRcdHNyYz17dGhpcy5tb2RhbEltYWdlfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiMxMDEwMTBcIixcclxuXHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IFwiNWVtXCIsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImRpc3BsYXlcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8aDE+XHJcblx0XHRcdFx0XHRcdFx0XFxcXCBCbGFjayAtLTotLXtcIiBcIn1cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJwcmljZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQkNjkuOTkgKyB0YXhcclxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHRcdDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdFwiLCBwYWRkaW5nOiBcIjFlbVwiIH19IGNsYXNzTmFtZT1cInByaWNlXCI+XHJcblx0XHRcdFx0XHRcdFx0U2FyaSBtb2Rlcm4gaW5mbHVlbmNlIHNwb3J0c3dlYXIgdHJlbmQgY29tbWVyY2lhbCB2YWx1YWJsZS5cclxuXHRcdFx0XHRcdFx0XHRBcnRpc3RpYyBleHRyYW9yZGluYXJ5IHhzIG1ha2UgdXAgYnJlYXRoYWJsZSBjb25zZXJ2YXRpdmUgaW1wcmludFxyXG5cdFx0XHRcdFx0XHRcdGNvbG9yIGVmZmVjdC4gRW1icm9pZGVyeSBwYXR0ZXJuIGhhbmQtbWFkZSBzaG93Y2FzZS4gVmFsdWUgc3RvY2tcclxuXHRcdFx0XHRcdFx0XHRhcnRpc3RyeSBjb25mb3JtaXR5IHBhc3RlbCBwdW1wcyBjcmVhdGl2ZSB2aW50YWdlIGN1dCBjaGVhcC5cclxuXHRcdFx0XHRcdFx0XHRDYXR3YWxrIGVtcGhhc2lzIGhpcHBpZSBoYWlyIHRyYWRlbWFyayBjb25zdW1lciBpbmZsdWVuY2VcclxuXHRcdFx0XHRcdFx0XHR0YWlsb3JlZC4gSW1wcmludCBjaGVhcCB3YXJkcm9iZS4gSW1wZWNjYWJsZSBpbGx1c3RyYXRpb25cclxuXHRcdFx0XHRcdFx0XHRlbXBoYXNpcy4gQnV0dG9ucyBiZWF1dGlmdWwgemlwcGVyIGluc3BpcmF0aW9uIGNvbWZvcnRhYmxlLlxyXG5cdFx0XHRcdFx0XHRcdEx1eHVyaW91cyBpbnN0YWdyYW0gcmV2ZWFsaW5nLiBTYXJpIGVuc2VtYmxlIGVtcGhhc2lzIGV4cGlyZW1lbnRcclxuXHRcdFx0XHRcdFx0XHRpbXBlY2NhYmxlIG1vZGlmaWNhdGlvbiB0cmFkZW1hcmsgd2Fpc3RsaW5lIG1pbmltYWxpc3QuXHJcblx0XHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGlkPVwicHJvZHVjdHNcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInB0aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFxcXFwgQmxhY2sgLS06LS17XCIgXCJ9XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0JDY5Ljk5ICsgdGF4XHJcblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2gxPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RcIj5cclxuXHRcdFx0XHRcdFx0e3RoaXMuaW1hZ2VzLm1hcCgoeCkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cclxuXHRcdFx0XHRcdFx0XHRcdGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0ZXhpdD17eyBvcGFjaXR5OiAwIH19XHJcblx0XHRcdFx0XHRcdFx0XHR3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjA1IH19XHJcblx0XHRcdFx0XHRcdFx0XHRvblRhcD17eyBzY2FsZTogMC45NSB9fVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtYXhXaWR0aDogXCIzNzBweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17eC50b1N0cmluZygpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3RoaXMuaW1nUmVmfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2AuLi8ke3h9LnBuZ2B9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLm1vZGFsSW1hZ2UgPSBgLi4vJHt4fS5wbmdgO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd01vZGFsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0XHQuZGlzcGxheS1ncmlkIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5kaXNwbGF5LW5vbmUge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmRpc3BsYXkge1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjFlZWU5O1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCNtb2RhbCB7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwdmg7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDB2dztcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0XHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdFx0XHRcdHotaW5kZXg6IDM7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMxMDEwMTA7XHJcblx0XHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCNwcm9kdWN0cyB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMHZoO1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjZjFlZWU5O1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5wcm9kdWN0IHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcclxuXHRcdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG5cdFx0XHRcdFx0XHRncmlkLWdhcDogYXV0bztcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmltYWdlIHtcclxuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAzNzBweDtcclxuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aDIge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHRcdHBhZGluZzogMDtcclxuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnRpdGxlIHtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnB0aXRsZSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMmVtIDA7XHJcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyNHB0O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogI2YxZWVlOTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5wcmljZSB7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJwdDtcclxuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmNsb3NlTW9kYWwge1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDFlbTtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAyLjVlbTtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyNHB0O1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGB9PC9zdHlsZT5cclxuXHRcdFx0PC9MYXlvdXQ+XHJcblx0XHQpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsYWNrIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Effy\\\\anti\\\\pages\\\\products\\\\black.js */"));
    }
  }]);

  return Black;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Black);

/***/ })

})
//# sourceMappingURL=black.js.ba001667ea4bf9db2b8f.hot-update.js.map