import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/responsive-utility/responsive-utility.js";
import { normalizeEventPath } from "@lrnwebcomponents/utils/utils.js";

// need to make this an object so that HAX can listen for it correctly
class GridPlateLayoutOptions {
  constructor() {
    this.resizeTimer = null;
    this.layouts = {
      1: {
        columnLayout: "1: full width",
        xs: ["100%"],
        sm: ["100%"],
        md: ["100%"],
        lg: ["100%"],
        xl: ["100%"],
      },
      "1-1": {
        columnLayout: "2: equal width",
        xs: ["100%", "100%"],
        sm: ["50%", "50%"],
        md: ["50%", "50%"],
        lg: ["50%", "50%"],
        xl: ["50%", "50%"],
      },
      "2-1": {
        columnLayout: "2: wide & narrow",
        xs: ["100%", "100%"],
        sm: ["50%", "50%"],
        md: ["66.6666667%", "33.3333337%"],
        lg: ["66.6666667%", "33.3333337%"],
        xl: ["66.6666667%", "33.3333337%"],
      },
      "1-2": {
        columnLayout: "2: narrow & wide",
        xs: ["100%", "100%"],
        sm: ["50%", "50%"],
        md: ["33.3333333%", "66.6666667%"],
        lg: ["33.3333333%", "66.6666667%"],
        xl: ["33.3333333%", "66.6666667%"],
      },
      "3-1": {
        columnLayout: "2: wider & narrower",
        xs: ["100%", "100%"],
        sm: ["50%", "50%"],
        md: ["75%", "25%"],
        lg: ["75%", "25%"],
        xl: ["75%", "25%"],
      },
      "1-3": {
        columnLayout: "2: narrower & wider",
        xs: ["100%", "100%"],
        sm: ["50%", "50%"],
        md: ["25%", "75%"],
        lg: ["25%", "75%"],
        xl: ["25%", "75%"],
      },
      "1-1-1": {
        columnLayout: "3: equal width",
        xs: ["100%", "100%", "100%"],
        sm: ["100%", "100%", "100%"],
        md: ["33.3333333%", "33.3333333%", "33.3333333%"],
        lg: ["33.3333333%", "33.3333333%", "33.3333333%"],
        xl: ["33.3333333%", "33.3333333%", "33.3333333%"],
      },
      "2-1-1": {
        columnLayout: "3: wide, narrow, and narrow",
        xs: ["100%", "100%", "100%"],
        sm: ["100%", "50%", "50%"],
        md: ["50%", "25%", "25%"],
        lg: ["50%", "25%", "25%"],
        xl: ["50%", "25%", "25%"],
      },
      "1-2-1": {
        columnLayout: "3: narrow, wide, and narrow",
        xs: ["100%", "100%", "100%"],
        sm: ["100%", "100%", "100%"],
        md: ["25%", "50%", "25%"],
        lg: ["25%", "50%", "25%"],
        xl: ["25%", "50%", "25%"],
      },
      "1-1-2": {
        columnLayout: "3: narrow, narrow, and wide",
        xs: ["100%", "100%", "100%"],
        sm: ["50%", "50%", "100%"],
        md: ["25%", "25%", "50%"],
        lg: ["25%", "25%", "50%"],
        xl: ["25%", "25%", "50%"],
      },
      "1-1-1-1": {
        columnLayout: "4: equal width",
        xs: ["100%", "100%", "100%", "100%"],
        sm: ["50%", "50%", "50%", "50%"],
        md: ["25%", "25%", "25%", "25%"],
        lg: ["25%", "25%", "25%", "25%"],
        xl: ["25%", "25%", "25%", "25%"],
      },
      "1-1-1-1-1": {
        columnLayout: "5: equal width",
        xs: ["100%", "100%", "100%", "100%", "100%"],
        sm: ["50%", "50%", "50%", "50%", "50%"],
        md: ["20%", "20%", "20%", "20%", "20%"],
        lg: ["20%", "20%", "20%", "20%", "20%"],
        xl: ["20%", "20%", "20%", "20%", "20%"],
      },
      "1-1-1-1-1-1": {
        columnLayout: "6: equal width",
        xs: ["100%", "100%", "100%", "100%", "100%", "100%"],
        sm: ["50%", "50%", "50%", "50%", "50%", "50%"],
        md: [
          "33.3333333%",
          "33.3333333%",
          "33.3333333%",
          "33.3333333%",
          "33.3333333%",
          "33.3333333%",
        ],
        lg: [
          "16.6666667%",
          "16.6666667%",
          "16.6666667%",
          "16.6666667%",
          "16.6666667%",
          "16.6666667%",
        ],
        xl: [
          "16.6666667%",
          "16.6666667%",
          "16.6666667%",
          "16.6666667%",
          "16.6666667%",
          "16.6666667%",
        ],
      },
    };
    this.options = {};
    let layoutFlip = Object.keys(this.layouts);
    // loop through all the supplied layouts to get the HAX layout options & descriptions
    for (let i = 1; i < layoutFlip.length; i++) {
      this.options[layoutFlip[i]] = this.layouts[layoutFlip[i]].columnLayout;
    }
  }
}
/**
 * `grid-plate`
 * `A grid plate based on a layout that manipulates it.`
 * @demo demo/index.html
 * @element grid-plate
 */
class GridPlate extends LitElement {
  /**
   * LitElement render styles
   */
  static get styles() {
    return [
      css`
        :host {
          display: block;
          --hax-layout-container-outline-width: 1px;
          --hax-layout-container-hover-outline-width: 1px;
        }
        :host .row {
          width: 100%;
          overflow-wrap: break-word;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: stretch;
          margin: var(--grid-plate-row-margin, 0px);
          padding: var(--grid-plate-row-padding, 0px);
        }
        :host([disable-responsive]) .column {
          overflow: hidden;
        }
        :host .column {
          width: 100%;
          flex: 0 0 auto;
          min-height: 50px;
        }
        /* make sure that animation for nothing to 2 col doesn't jar layout */
        :host([layout="1-1"]) #col1 {
          width: 50%;
        }
        :host([layout="1-1-1"]) #col1 {
          width: 33.33%;
        }
        :host([layout="1-1-1-1"]) #col1 {
          width: 25%;
        }
        :host([layout="1-1-1-1-1"]) #col1 {
          width: 20%;
        }
        :host([layout="1-1-1-1-1-1"]) #col1 {
          width: 16.66%;
        }
        .column.not-shown {
          min-height: unset;
        }
        :host .column ::slotted(*) {
          margin: var(--grid-plate-item-margin, 15px);
          padding: var(--grid-plate-item-padding, 15px);
          max-width: calc(100% - 60px);
          max-width: -webkit-fill-available;
        }
        :host([ready]) [data-layout-slotname] {
          transition: var(
            --hax-layout-container-transition,
            0.5s width ease-in-out,
            0.5s padding ease-in-out,
            0.5s margin ease-in-out
          );
        }
        :host([data-hax-ray]) [data-layout-slotname].not-shown {
          display: block;
          opacity: 0.4;
          width: 0;
        }
        :host([data-hax-ray]) [data-layout-slotname].not-shown.has-nodes {
          width: 100%;
          transition: none;
        }
        :host([data-hax-ray]) .not-shown:hover {
          opacity: 1;
        }
        :host([data-hax-ray]) .not-shown:hover::before {
          content: "Hidden bylayout";
          position: sticky;
          display: inline-flex;
          background-color: black;
          color: white;
          padding: 0px 8px;
          font-size: 12px;
          line-height: 16px;
          margin: 12px 13px;
          float: right;
          width: 124px;
        }
        /** this implies hax editing state is available **/
        :host([data-hax-ray]) ::slotted(*) {
          border: var(
            ---hax-body-editable-outline,
            1px solid var(--hax-ui-disabled-color, #ddd)
          );
        }
        :host([data-hax-ray]) ::slotted(*:hover) {
          border: var(
            --hax-body-active-outline-hover,
            1px solid var(--hax-ui-color-faded, #444)
          );
        }
        :host([data-hax-ray]) ::slotted(.hax-active) {
          border: var(
            --hax-body-active-outline,
            1px solid var(--hax-ui-color-focus, #000)
          );
        }
        :host([data-hax-ray]) ::slotted(.hax-active:hover) {
          border: var(
            --hax-body-active-drag-outline,
            1px solid var(--hax-ui-color-accent, #009dc7)
          );
        }
        :host([data-hax-ray]) [data-layout-slotname] {
          outline: var(
            ---hax-body-editable-outline,
            1px solid var(--hax-ui-disabled-color, #ddd)
          );
          outline-style: dotted;
          outline-offset: var(--hax-layout-container-outline-offset, 0px);
        }
        :host([data-hax-ray]) [data-layout-slotname]:hover {
          outline-style: solid;
        }
        :host([data-hax-ray].hax-hovered) [data-layout-slotname].active {
          outline: var(
            --hax-body-active-drag-outline,
            1px solid var(--hax-ui-color-accent, #009dc7)
          );
          outline-width: 2px;
        }
        :host([data-hax-ray]) ::slotted(img.active),
        :host([data-hax-ray]) ::slotted(*.active):before {
          background-color: var(
            --hax-layout-slotted-active-outline-color,
            var(--hax-layout-accent-color, #009dc7)
          ) !important;
          outline: var(
            --hax-body-active-outline,
            1px solid var(--hax-ui-color-focus, #000)
          );
          outline-style: dotted;
        }
        /* drag and drop */
        :host .column ::slotted(*)::before {
          content: " ";
          width: calc(100% + 32px);
          display: block;
          position: relative;
          margin: -28px -16px 12px;
          z-index: 2;
          height: 12px;
          border: none !important;
          transition: 0.2s all ease-in-out;
        }
        :host .column ::slotted(*.hax-hovered)::before {
          background-color: var(--hax-body-target-background-color) !important;
        }
        :host .column ::slotted(img.hax-hovered) {
          outline: var(
            ---hax-body-editable-outline,
            1px solid var(--hax-ui-disabled-color, #ddd)
          );
          border-top: 8px
            var(--hax-contextual-action-hover-color, var(--hax-ui-color-accent));
          margin-top: -8px;
        }

        @media screen and (min-color-index: 0) and(-webkit-min-device-pixel-ratio:0) {
          :host([data-hax-ray]) ::slotted(*.active) {
            background-color: var(
              --hax-layout-slotted-active-outline-color,
              var(--hax-layout-accent-color, #009dc7)
            ) !important;
            outline: var(--hax-layout-slotted-active-outline-width, 1px)
              var(--hax-layout-slotted-active-outline-style, solid)
              var(
                --hax-layout-slotted-active-outline-color,
                var(--hax-layout-accent-color, #009dc7)
              );
          }
          :host .column ::slotted(*) {
            outline: var(--hax-body-editable-outline);
            background-color: var(--hax-body-possible-target-background-color);
          }
          :host .column ::slotted(*.hax-hovered) {
            background-color: var(
              --hax-body-target-background-color
            ) !important;
            outline: var(--hax-body-active-outline);
          }
        }
      `,
    ];
  }
  constructor() {
    super();
    this.ready = false;
    this.breakpointSm = 900;
    this.breakpointMd = 1200;
    this.breakpointLg = 1500;
    this.breakpointXl = 1800;
    this.columns = 6;
    this.disableResponsive = false;
    this.layout = "1-1";
    this.layouts = new GridPlateLayoutOptions().layouts;
    this.responsiveSize = "xs";
    window.ResponsiveUtility.requestAvailability();
  }
  /**
   * LitElement render
   */
  render() {
    return html`
      <div class="row">
        ${[1, 2, 3, 4, 5, 6].map(
          (num) => html`
            <div
              class="column ${this.columns < num
                ? "not-shown"
                : "drag-enabled"}"
              id="col${num}"
              data-label="column ${num}"
              data-layout-slotname="col-${num}"
              part="layout-container"
              .style="${this._getColumnWidth(num - 1, this.__columnWidths)}"
              @drop="${this._drop}"
              @dragenter="${this._dragEnter}"
              @dragleave="${this._dragleave}"
            >
              <slot name="col-${num}"></slot>
            </div>
          `
        )}
      </div>
    `;
  }
  _drop(e) {
    if (!this.dataHaxRay) return;
    this.querySelectorAll(".active").forEach((el) => {
      el.classList.remove("active");
    });
    this.shadowRoot.querySelectorAll(".active").forEach((el) => {
      el.classList.remove("active");
    });
  }
  _dragEnter(e) {
    if (!this.dataHaxRay) return;
    e.target.classList.add("active");
  }
  _dragleave(e) {
    if (!this.dataHaxRay) return;
    e.target.classList.remove("active");
  }
  static get tag() {
    return "grid-plate";
  }
  /**
   * life cycle
   */
  firstUpdated(changedProperties) {
    if (super.firstUpdated) super.firstUpdated(changedProperties);
    setTimeout(() => {
      this.ready = true;
    }, 100);
    this.resize();
    window.dispatchEvent(
      new CustomEvent("responsive-element", {
        detail: {
          element: this,
          attribute: "responsive-size",
          relativeToParent: false,
          sm: this.breakpointSm,
          md: this.breakpointMd,
          lg: this.breakpointLg,
          xl: this.breakpointXl,
        },
      })
    );
    this.__columnWidths = this._getColumnWidths(
      this.responsiveSize,
      this.layout,
      this.layouts,
      this.disableResponsive
    );
  }
  /**
   * Wire to HAX
   */
  static get haxProperties() {
    return {
      type: "grid",
      canScale: true,
      canPosition: true,
      canEditSource: true,
      contentEditable: undefined,
      gizmo: {
        title: "Grid layout",
        description: "Simple card in a cool retro design",
        icon: "hax:3-3-3-3",
        color: "grey",
        groups: ["Layout"],
        handles: [],
        meta: {
          author: "ELMS:LN",
          owner: "The Pennsylvania State University",
        },
      },
      settings: {
        configure: [
          {
            property: "layout",
            title: "Column Layout",
            description:
              "Style to present these items (may change for small screens)",
            inputMethod: "select",
            options: new GridPlateLayoutOptions().options,
          },
          {
            property: "disableResponsive",
            title: "Disable responsive",
            description:
              "Check box to force layout to stick regardless of screen breakpoins",
            inputMethod: "boolean",
          },
        ],
        advanced: [
          {
            property: "breakpointSm",
            title: "Small Breakpoint",
            description:
              "Anything less than this number (in pixels) will render with the smallest version of this layout",
            inputMethod: "textfield",
            validationType: "number",
          },
          {
            property: "breakpointMd",
            title: "Medium Breakpoint",
            description:
              "Anything less than this number (in pixels) will render with the small version of this layout",
            inputMethod: "textfield",
            validationType: "number",
          },
          {
            property: "breakpointLg",
            title: "Large Breakpoint",
            description:
              "Anything less than this number (in pixels) will render with the medium version of this layout.",
            inputMethod: "textfield",
            validationType: "number",
          },
          {
            property: "breakpointXl",
            title: "Extra-Large Breakpoint",
            description:
              "Anything less than this number (in pixels) will render with the large version of this layout. Anything greater than or equal to this number will display with the maximum number of columns for this layout.",
            inputMethod: "textfield",
            validationType: "number",
          },
        ],
      },
      saveOptions: {
        unsetAttributes: [
          "ready",
          "layouts",
          "columns",
          "options",
          "responsive-width",
        ],
      },
      demoSchema: [
        {
          tag: "grid-plate",
          properties: {
            disableResponsive: true,
          },
          content: "",
        },
      ],
    };
  }
  static get properties() {
    return {
      /**
       * Custom small breakpoint for the layouts; only updated on attached
       */
      breakpointSm: {
        type: Number,
        attribute: "breakpoint-sm",
      },
      /**
       * Custom medium breakpoint for the layouts; only updated on attached
       */
      breakpointMd: {
        type: Number,
        attribute: "breakpoint-md",
      },
      /**
       * Custom large breakpoint for the layouts; only updated on attached
       */
      breakpointLg: {
        type: Number,
        attribute: "breakpoint-lg",
      },
      /**
       * Custom extra-large breakpoint for the layouts; only updated on attached
       */
      breakpointXl: {
        type: Number,
        attribute: "breakpoint-xl",
      },
      /**
       * number of columns at this layout / responsive size
       */
      columns: {
        type: Number,
        reflect: true,
      },
      dataHaxRay: {
        type: String,
        attribute: "data-hax-ray",
        reflect: true,
      },
      /**
       * disables responsive layouts
       */
      disableResponsive: {
        type: Boolean,
        attribute: "disable-responsive",
      },
      /**
       * an object with a layout's column sizes
       * at the current responsive width
       */
      layout: {
        type: String,
        reflect: true,
      },
      /**
       * Predefined layouts of column sizes and various responsive widths. 
       * For example:```
  {
    "1-1-1-1": {                         //the name of the layout
      "xs": ["100%","100%","100%","100%] //the responsive width of each column when the grid is extra small
      "sm": ["50%","50%","50%","50%"]    //the responsive width of each column when the grid is small
      "md": ["50%","50%","50%","50%"]    //the responsive width of each column when the grid is medium
      "lg": ["25%","25%","25%","25%"]    //the responsive width of each column when the grid is large
      "xl": ["25%","25%","25%","25%"]    //the responsive width of each column when the grid is extra large
    },
    {...}
  }```
      */
      layouts: {
        type: Object,
      },
      ready: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Responsive size as `xs`, `sm`, `md`, `lg`, or `xl`
       */
      responsiveSize: {
        type: String,
        reflect: true,
        attribute: "responsive-size",
      },
      /**
       * name of selected layout
       */
      __columnWidths: {
        type: String,
      },
    };
  }
  updated(changedProperties) {
    if (super.updated) super.updated(changedProperties);
    changedProperties.forEach((oldValue, propName) => {
      // if any of these changed, update col widths
      if (
        ["responsiveSize", "layout", "layouts", "disableResponsive"].includes(
          propName
        )
      ) {
        clearTimeout(this.__calcWidthLock);
        this.__calcWidthLock = setTimeout(() => {
          this.__columnWidths = this._getColumnWidths(
            this.responsiveSize,
            this.layout,
            this.layouts,
            this.disableResponsive
          );
        }, 0);
      }
      switch (propName) {
        // observer, ensure we are sized correctly after widths change
        case "__columnWidths":
          // widths changed because of layout somehow, wait for the resize transition
          // to have processed, then fire a resize event which we are listening
          this.resize();
          break;
        case "disableResponsive":
          // fire an event that this is a core piece of the system
          this.dispatchEvent(
            new CustomEvent("disable-responsive-changed", {
              detail: this[propName],
            })
          );
          break;
      }
    });
  }
  resize() {
    window.dispatchEvent(new Event("resize"));
  }
  /**
   * gets the column widths based on selected layout and current responsive width
   *
   * @param {string} a string that describes the current responsive width
   * @param {string} the name of selected layout
   * @param {object} predefined layouts of column sizes and various responsive widths
   * @param {boolean} disable responsive sizing?
   * @returns {object} an object with a layout's column sizes at the current responsive width
   */
  _getColumnWidths(
    responsiveSize = "sm",
    layout = "1-1",
    layouts,
    disableResponsive
  ) {
    if (layouts) {
      let newl = layouts[layout],
        //how old layout names map to the new ones
        oldLayouts = {
          12: "1",
          "8/4": "2-1",
          "6/6": "1-1",
          "4/8": "1-2",
          "4/4/4": "1-1-1",
          "3/3/3/3": "1-1-1-1",
        },
        size = disableResponsive !== false ? "xl" : responsiveSize;
      let oldl = oldLayouts[layout];
      if (newl !== undefined && newl[size] !== undefined) {
        //return the layout
        return layouts[layout][size];
      } else if (
        layouts[oldl] !== undefined &&
        layouts[oldl][size] !== undefined
      ) {
        //return new layout that maps to old one
        return layouts[oldl][size];
      } else if (typeof layouts["1-1"] !== typeof undefined) {
        //return 2-column layout
        return layouts["1-1"][size];
      }
    }
  }

  /**
   * gets a given column's current width based on layout and current responsive width
   *
   * @param {number} the index of the column
   * @param {object} an object with a layout's column sizes at the current responsive width
   * @returns {string} a given column's current width based on layout and current responsive width
   */
  _getColumnWidth(column, __columnWidths) {
    return __columnWidths !== undefined && __columnWidths[column] !== undefined
      ? "width:" + __columnWidths[column]
      : "min-height: unset";
  }
  /**
   * gets a given column's current width based on layout and current responsive width
   *
   * @param {string} the name of selected layout
   * @returns {number} the number of columns in this layout
   */
  _getColumns(__columnWidths) {
    return __columnWidths.length;
  }
  haxactiveElementChanged(el, val) {}
}
window.customElements.define(GridPlate.tag, GridPlate);
export { GridPlate };
