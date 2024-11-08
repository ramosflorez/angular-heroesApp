import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: `./layoutPage.component.html`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutPageComponent { }
