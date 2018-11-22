/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@polymer/polymer/lib/elements/dom-if.js";

import { SimpleColors } from "../simple-colors.js"; //import the shared styles
import "./simple-colors-select.js";
import "./simple-colors-demo-child.js";

export { SimpleColorsDemo };
/**
 * `simple-colors-demo`
 * `an example of how to extend simple-colors within a custom element`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 * @see "./simple-colors-demo-child.js"
 * @see "../simple-colors.js"
 * @demo demo/extending.html
 */
class SimpleColorsDemo extends SimpleColors {
  // render function
  static get template() {
    return html`
<style is="custom-style" include="simple-colors">
:host {
  background-color: var(--simple-colors-default-theme-accent-1); 
  color: var(--simple-colors-default-theme-grey-12); 
  border: 1px solid var(--simple-colors-default-theme-accent-6);
  margin: 15px 0;
  padding: 15px;
  display: block;
}
:host([hidden]){
  display: none;
}
a, a[link] {
  color: var(--simple-colors-default-theme-blue-8); 
}
a[visited] {
  color: var(--simple-colors-default-theme-purple-8); 
}
select {
  font-family: monospace;
}
</style>

<p>
  <tt>
    &lt;simple-colors-demo <simple-colors-selectors id="parent" accent-label="parent's accent-color" as-code colors$="[[colors]]" dark-label="parent's dark attribute">&gt; 
  </tt>
</p>
<simple-colors-demo-child accent-color$="[[__accentColorChild]]" dark$="[[__darkChild]]" hidden$="[[!_isNested(nested)]]">
  <tt>&lt;simple-colors-demo-child<simple-colors-selectors id="child" accent-label="nested child's accent-color" as-code colors$="[[colors]]" dark-label="nested child's attribute" inherit/>/&gt;</tt>
</simple-colors-demo-child>

<p><tt>&lt;/simple-colors-demo&gt;</tt></p>`;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      /**
       * show a nested child element in this custom element?
       */
      nested: {
        name: "nested",
        type: "Boolean",
        value: false,
        reflectToAttribute: true,
        observer: false
      },
      /**
       * sets the accent-color attribute of the nested child
       */
      __accentColorChild: {
        name: "__accentColorChild",
        type: "String",
        value: null,
        reflectToAttribute: false,
        observer: false
      },
      /**
       * sets the dark attribute of the nested child
       */
      __darkChild: {
        name: "__darkChild",
        type: "Boolean",
        value: false,
        reflectToAttribute: false,
        observer: false
      }
    };
  }

  /**
   * gets simple-colors behaviors
   */
  static get behaviors() {
    return [SimpleColors];
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "simple-colors-demo";
  }

  /**
   * determines if a given <option> is selected based on the option's value and this element's accent-color
   *
   * @param {String} the option's value
   */
  _accentSelected(option) {
    return this.accentColor === option ? "selected" : "";
  }

  /**
   * determines if the element is in nested mode
   *
   * @param {boolean} the element's nested property
   */
  _isNested(nested) {
    return nested !== "false" && nested !== false;
  }

  /**
   * updates parent's accent-color based on `<select>`
   */
  _updateParentAccent() {
    this.accentColor = this.$.parent.accentColor;
    this._updateChildAccent();
  }

  /**
   * updates parent's dark attribute based on `<select>`
   */
  _updateParentDark() {
    this.dark = this.$.parent.dark !== "false";
    this._updateChildDark();
  }

  /**
   * updates nested child's accent-color based on `<select>`
   */
  _updateChildAccent() {
    if (this.$.child.accentColor === "parent") {
      this.__accentColorChild = this.$.parent.accentColor;
    } else {
      this.__accentColorChild = this.$.child.accentColor;
    }
  }

  /**
   * updates nested child's dark attribute based on `<select>`
   */
  _updateChildDark() {
    if (this.$.child.dark === "parent") {
      this.__darkChild = this.$.parent.dark !== "false";
    } else {
      this.__darkChild = this.$.child.dark !== "false";
    }
  }

  /**
   * life cycle, element is afixed to the DOM
   */
  ready() {
    super.ready();
    this.$.parent.addEventListener("accent-change", e => {
      console.log(e);
      this._updateParentAccent();
    });
    this.$.parent.addEventListener("dark-change", e => {
      this._updateParentDark();
    });
    this.$.child.addEventListener("accent-change", e => {
      this._updateChildAccent();
    });
    this.$.child.addEventListener("dark-change", e => {
      this._updateChildDark();
    });
  }
  /**
   * life cycle, element is afixed to the DOM
   */
  connectedCallback() {
    super.connectedCallback();
  }
  /**
   * life cycle, element is removed from the DOM
   */
  //disconnectedCallback() {}
}
window.customElements.define(SimpleColorsDemo.tag, SimpleColorsDemo);
