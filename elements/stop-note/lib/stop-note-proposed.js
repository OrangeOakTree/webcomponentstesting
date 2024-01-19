import { LitElement, html, css } from "lit";
import { remoteLinkBehavior } from "@lrnwebcomponents/utils/lib/remoteLinkBehavior.js";
import { SimpleIconsetStore } from "@lrnwebcomponents/simple-icon/lib/simple-iconset.js";
import { I18NMixin } from "@lrnwebcomponents/i18n-manager/lib/I18NMixin.js";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

// register the iconset
SimpleIconsetStore.registerIconset(
  "stopnoteicons",
  `${
    new URL("./stop-note.js", import.meta.url).href
  }/../lib/svgs/stopnoteicons-proposed/`
);
/**
 * `stop-note`
 * `A note that directs people to an action item of different warning levels`
 * @demo demo/index.html
 * @element stop-note
 */
class StopNote extends I18NMixin(remoteLinkBehavior(DDD)) {
  /**
   * LitElement constructable styles enhancement
   */
  static get styles() {
    return [...super.styles,
      css`
        :host {
          display: block;
          width: auto;
          --background-color: var(--ddd-theme-polaris-errorLight);
          --accent-color: var(--ddd-theme-polaris-error);
          margin: var(--ddd-spacing-5) 0;
          font-family: var(--ddd-font-primary);
          font-weight: var(--ddd-font-primary-bold);
        }

        simple-icon {
          --simple-icon-height: 100px;
          --simple-icon-width: 100px;
        }

        :host([icon="stopnoteicons:stop-icon"]) {
          --accent-color: var(--ddd-theme-polaris-original87Pink);
          --background-color: var(--ddd-theme-polaris-errorLight);
        }

        :host([icon="stopnoteicons:warning-icon"]) {
          --accent-color: var(--ddd-theme-polaris-keystoneYellow);
          --background-color: var(--ddd-theme-polaris-warningLight);
        }

        :host([icon="stopnoteicons:confirm-icon"]) {
          --accent-color: var(--ddd-theme-polaris-success);
          --background-color: var(--ddd-theme-polaris-successLight);
        }

        :host([icon="stopnoteicons:book-icon"]) {
          --accent-color: var(--ddd-theme-polaris-info);
          --background-color: var(--ddd-theme-polaris-infoLight);
        }

        .container {
          display: flex;
          width: auto;
        }

        :host([url='']):not([title='']) .message_wrap { /* trying to add more padding to top if there's no link */
          padding: var(--ddd-spacing-3) var(--ddd-spacing-6);
        }

        .message_wrap {
          border-right: 4px solid var(--accent-color);
          padding: var(--ddd-spacing-1) var(--ddd-spacing-6);
          flex: 1 1 auto;
          background-color: var(--background-color);
        }

        :host([title=""]) .secondary_message {
          display: flex;
          height: 90%;
          align-items: center;
          margin-top: auto;
          font-size: var(--ddd-font-size-s);
          width: 100%;
          font-weight: var(--ddd-font-primary-bold);
        }

        .secondary_message {
          font-size: var(--ddd-font-size-3xs);
          width: 100%;
          font-weight: var(--ddd-font-primary-regular);
        }


        .link a {
          font-size: var(--ddd-font-size-3xs);
        }
        a:-webkit-any-link {
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }

        .svg {
          display: flex;
          justify-content: center;
        }

        .svg_wrap {
          background-color: var(--ddd-theme-polaris-limestoneMaxLight);
          padding: var(--ddd-spacing-1);
          width: auto;
        }

        .stop-icon {
          fill: var(--accent-color);
        }
      `,
    ];
  }
  render() {
    return html`
      <div class="container">
        <div class="svg_wrap">
          <div class="svg">
            <simple-icon icon="${this.icon}" no-colorize></simple-icon>
          </div>
        </div>
        <div class="message_wrap">
          <h3 class="main_message mt-1 mb-0 pb-0" id="title">${this.title}</h3>
          <div class="secondary_message my-2">
            <slot></slot>
            <slot name="message"></slot>
          </div>
          ${this.url
            ? html`
                <div class="link mb-1">
                  <a href="${this.url}" id="link">
                    ${this.t.moreInformation} &gt;
                  </a>
                </div>
              `
            : ``}
        </div>
      </div>
    `;
  }
  static get tag() {
    return "stop-note";
  }
  constructor() {
    super();
    this.url = null;
    this.title = "";
    this.icon = "stopnoteicons:stop-icon";
    this.t = {
      moreInformation: "More Information",
    };
    this.registerLocalization({
      context: this,
      basePath: import.meta.url,
      locales: ["es"],
    });
  }
  static get properties() {
    return {
      ...super.properties,
      /**
       * Title Message
       */
      title: {
        type: String,
        reflect: true,
      },
      /**
       * url to additional resources
       */
      url: {
        type: String,
      },
      /**
       * Icon selected
       */
      icon: {
        type: String,
        reflect: true,
      },
    };
  }
  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    changedProperties.forEach((oldValue, propName) => {
      if (propName == "url") {
        this.remoteLinkURL = this[propName];
      }
    });
  }
  /**
   * life cycle
   */
  firstUpdated(changedProperties) {
    if (super.firstUpdated) super.firstUpdated(changedProperties);
    this.remoteLinkTarget = this.shadowRoot.querySelector("#link");
  }
  /**
   * Implements haxHooks to tie into life-cycle if hax exists.
   */
  haxHooks() {
    return {
      editModeChanged: "haxeditModeChanged",
      activeElementChanged: "haxactiveElementChanged",
    };
  }
  /**
   * Set a flag to test if we should block link clicking on the entire card
   * otherwise when editing in hax you can't actually edit it bc its all clickable.
   * if editMode goes off this helps ensure we also become clickable again
   */
  haxeditModeChanged(val) {
    if (super.haxeditModeChanged) super.haxeditModeChanged(val);
    this._haxstate = val;
  }
  /**
   * double-check that we are set to inactivate click handlers
   * this is for when activated in a duplicate / adding new content state
   */
  haxactiveElementChanged(el, val) {
    if (super.haxactiveElementChanged) super.haxactiveElementChanged(el, val);
    // flag for HAX to not trigger active on changes but only when not locked
    let container = this.shadowRoot.querySelector("#title");
    if (val && this.getAttribute("data-hax-lock") === null) {
      container.setAttribute("contenteditable", true);
    } else {
      container.removeAttribute("contenteditable");
      this.title = container.innerText;
    }
    return false;
  }
  haxinlineContextMenu(ceMenu) {
    ceMenu.ceButtons = [
      {
        icon: "image:style",
        callback: "haxtoggleIcon",
        label: "Toggle icon",
      },
    ];
  }
  haxtoggleIcon(e) {
    const iconAry = [
      "stopnoteicons:stop-icon",
      "stopnoteicons:warning-icon",
      "stopnoteicons:confirm-icon",
      "stopnoteicons:book-icon",
    ];
    let icon = iconAry[0];
    if (iconAry.lastIndexOf(this.icon) != iconAry.length - 1) {
      icon = iconAry[iconAry.lastIndexOf(this.icon) + 1];
    }
    this.icon = icon;
    return true;
  }
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}
customElements.define(StopNote.tag, StopNote);
export { StopNote };
