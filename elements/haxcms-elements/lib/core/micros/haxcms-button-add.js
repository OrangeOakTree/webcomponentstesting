import { store } from "../haxcms-site-store.js";
import { HAXStore } from "@lrnwebcomponents/hax-body/lib/hax-store.js";
import { HAXCMSButton } from "../utils/HAXCMSButton.js";
import { SimpleToolbarButtonBehaviors } from "@lrnwebcomponents/simple-toolbar/lib/simple-toolbar-button.js";
import { toJS } from "mobx";
export class HAXCMSButtonAdd extends SimpleToolbarButtonBehaviors(
  HAXCMSButton
) {
  static get tag() {
    return "haxcms-button-add";
  }

  constructor() {
    super();
    this.windowControllers = new AbortController();
    this.t = this.t || {};
    this.t.newPageAdded = "New page added";
    this.t.newPage = "Page";
    this.t.copy = "Copy";
    this.t.newChildPage = "Child";
    this.t.duplicatePage = "Clone";
    this.t.docxImport = "Import pages (docx)";
    this.icon = "hax:add-page";
    this.voiceCommand = "add page";
    this.dark = false;
    this.type = "sibling";
    this.autoEdit = false;
    this.showTextLabel = true;
    this.iconPosition = "left";
    this.alignHorizontal = "left";
    this.addEventListener("click", this.HAXCMSButtonClick);
  }
  static get styles() {
    return [
      ...super.styles,
      ...this.iconStyles,
      ...this.labelStyles,
      ...this.tooltipStyles,
      ...this.simpleButtonCoreStyles,
      ...this.simpleButtonLayoutStyles,
      ...this.simpleButtonThemeStyles,
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      autoEdit: { type: Boolean, attribute: "auto-edit" },
      type: { type: String },
    };
  }

  updated(changedProperties) {
    if (super.updated) super.updated(changedProperties);
    switch (this.type) {
      case "sibling":
        return (this.label = this.t.newPage);
      case "child":
        this.icon = "hax:add-child-page";
        return (this.label = this.t.newChildPage);
      case "duplicate":
        this.icon = "hax:duplicate";
        return (this.label = this.t.duplicatePage);
      case "docximport":
        this.icon = "hax:file-docx";
        return (this.label = this.t.docxImport);
    }
    this.icon = undefined;
    this.setAttribute("role", "menuitem");
  }

  render() {
    return this.buttonTemplate;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener(
      "haxcms-create-node-success",
      this.HAXCMSButtonClickResponse.bind(this),
      { signal: this.windowControllers.signal }
    );
  }

  disconnectedCallback() {
    this.windowControllers.abort();

    super.disconnectedCallback();
  }

  HAXCMSButtonClick() {
    store.playSound("click");
    let order = null;
    let title = this.t.newPage;
    let parent = null;
    const item = toJS(store.activeItem);
    if (item) {
      if (this.type === "sibling") {
        parent = item.parent;
        order = parseInt(item.order) + 1;
      } else if (this.type === "child") {
        parent = item.id;
        // @todo might need to check last child and add to end order wise there
        order = 0;
      } else if (this.type === "duplicate") {
        title = item.title + " " + this.t.copy;
        parent = item.parent;
        order = parseInt(item.order) + 1;
      } else if (this.type === "docximport") {
        parent = null;
        order = 0;
      }
    }
    // sanity fallback in case a translation system is bricked
    if (title === "") {
      title = "New";
    }
    var payload = {
      node: {
        title: title,
        location: "",
      },
      order: order,
      parent: parent,
    };
    // special flag for duplicating the content of an existing item
    if (this.type === "duplicate") {
      payload.node.duplicate = item.id;
    } else if (this.type === "docximport") {
      payload.docximport = "branch";
    }
    // wrapper on CustomEvent to ensure uniformity
    this.HAXCMSFireButtonEvent("haxcms-create-node", this, payload);
  }
  HAXCMSButtonClickResponse(e) {
    // only respond to this if the event was generated by this element
    // this helps avoid multiple instances of a button coliding
    if (this === e.detail.originalTarget) {
      if (this.autoEdit) {
        // force hax tray to open
        HAXStore.haxTray.collapsed = false;
        // @todo this implies a timing issue on response and the wiping of material
        // see https://github.com/elmsln/issues/issues/938
        setTimeout(() => {
          // force into edit mode
          store.editMode = true;
        }, 250);
      }
    }
  }
}

customElements.define(HAXCMSButtonAdd.tag, HAXCMSButtonAdd);
