import {Component, ChangeDetectorRef, Input} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {MdSidenav} from "ng2-material/components/sidenav/sidenav";
import {Media} from "ng2-material/core/util/media";
import {Device} from "../../services/device";

function getWindowSize() {
  return {
    height: window.innerHeight,
    width: window.innerWidth
  };
}

@Component({
    selector: 'sidenav',
    directives:[MATERIAL_DIRECTIVES],
    providers: [Device],
    template:`

        <md-sidenav name="left" [style]="hasMedia('gt-sm') ? 'side' : 'over'">

          <md-toolbar class="md-theme-indigo">
            <h1 class="md-toolbar-tools">Contact</h1>
            <p>{{spencer.width}}</p>
            <button (click)="getWindowSize()">get windowsize</button>
          </md-toolbar>
        </md-sidenav>
      `
  })

export class SideNav {

  @Input() mySize;
  spencer: any;

  constructor(
    public device: Device
  ){

  }
  hasMedia(breakSize: string):boolean {
    return Media.hasMedia(breakSize);
  }
  ngOnInit() {
    this.getWindowSize();
  }
  getWindowSize(): void{
    this.device.loadWindow()
      .map(getWindowSize)
      .subscribe(res => this.renderTrack(res));
  }
  renderTrack(res: any): void {
    this.spencer = res;
    console.log(this.spencer.width);
  }
}

