import { Component, input } from '@angular/core';

const ICONS = {
  menu: 'M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z',
  close:
    'm6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6l5.6-5.6L5 6.4z',
  dashboard: 'M3 3h8v10H3zm10 0h8v6h-8zM3 15h8v6H3zm10-4h8v10h-8z',
  module: 'M4 4h16v16H4zm2 2v12h12V6zm2 2h8v2H8zm0 4h8v2H8z',
  logout: 'M3 3h9v2H5v14h7v2H3zm14.6 3L23 12l-5.4 6-1.5-1.4 3.3-3.6H9v-2h10.4l-3.3-3.6z',
  arrow: 'M12 4l-8 8 8 8 1.4-1.4-5.6-5.6H20v-2H7.8l5.6-5.6z',
};

@Component({
  selector: 'app-school-icon',
  template: `<svg viewBox="0 0 24 24" aria-hidden="true">
    <path [attr.d]="icons[name()]" fill="currentColor" fill-rule="evenodd" />
  </svg>`,
  styles: `
    :host {
      display: inline-flex;
      flex: 0 0 auto;
    }
    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  `,
})
export class SchoolIcon {
  readonly name = input.required<keyof typeof ICONS>();
  protected readonly icons = ICONS;
}
