
import "../rm-icon";import { LitElement, css, html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators";
import { commonStyles } from "../../styles/common";
import { palette } from "../../styles/palette";
import { flexAlignItems, flexFullAlign, size } from "../../styles/utils";
import { ENavigationPages, tagName } from "./definitions";
import { svgHome, svgInfo } from "../rm-icon/icons";

@customElement(tagName)
export class PagesNavigationMenu extends LitElement {
  @property({ type: String }) public activePage?: ENavigationPages;

  protected activeCls = (page: ENavigationPages): string => this.activePage === page ? "active" : "";

  render(): TemplateResult {
    return html`
      <div class="navigation-menu">
        ${this.renderMenuLinks()}
      </div>
    `;
  }

  protected renderMenuLinks = () => {
    return html`
      <div class="menu-links">
        <a href="/" class="menu-link ${this.activeCls(ENavigationPages.HOME)}">
          <rm-icon .icon=${svgHome}></rm-icon>
          Home
        </a>
        <a href="/pages/about" class="menu-link ${this.activeCls(ENavigationPages.ABOUT)}">
          <rm-icon .icon=${svgInfo}></rm-icon>
          About
        </a>
      </div>
    `;
  };

  static styles = css`
    ${commonStyles}

    .navigation-menu {
      background: ${palette.gray100};
    }

    .menu-links {
      ${flexFullAlign()};
    }

    .menu-link {
      ${flexAlignItems()};
      height: 100%;
      color: ${palette.white};
      padding: ${size(1)} ${size(2)};
    }
    .menu-link:hover,
    .menu-link.active {
      background: ${palette.gray90};
      color: ${palette.white};
    }

    .menu-link rm-icon {
      fill: ${palette.white};
      margin-right: ${size(1)};
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: PagesNavigationMenu;
  }
}