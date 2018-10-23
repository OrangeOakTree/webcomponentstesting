define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.ContentaPolymer = void 0;
  function _templateObject_2fe9eba0d6ee11e893d7035f19f6a3bf() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_2fe9eba0d6ee11e893d7035f19f6a3bf = function() {
      return data;
    };
    return data;
  }
  var ContentaPolymer = (function(_PolymerElement) {
    babelHelpers.inherits(ContentaPolymer, _PolymerElement);
    function ContentaPolymer() {
      babelHelpers.classCallCheck(this, ContentaPolymer);
      return babelHelpers.possibleConstructorReturn(
        this,
        (
          ContentaPolymer.__proto__ || Object.getPrototypeOf(ContentaPolymer)
        ).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      ContentaPolymer,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                ContentaPolymer.prototype.__proto__ ||
                  Object.getPrototypeOf(ContentaPolymer.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              ContentaPolymer.haxProperties,
              ContentaPolymer.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_2fe9eba0d6ee11e893d7035f19f6a3bf()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Contenta polymer",
                description: "Automated conversion of contenta-polymer/",
                icon: "icons:android",
                color: "green",
                groups: ["Polymer"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "contenta-polymer";
          }
        }
      ]
    );
    return ContentaPolymer;
  })(_polymerElement.PolymerElement);
  _exports.ContentaPolymer = ContentaPolymer;
  window.customElements.define(ContentaPolymer.tag, ContentaPolymer);
});
