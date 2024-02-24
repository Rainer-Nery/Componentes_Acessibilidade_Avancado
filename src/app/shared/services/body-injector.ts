import {
  ApplicationRef,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BodyInjectorService {
  constructor(private appRef: ApplicationRef) {}

  public stackBeforeAppRoot(componenetRef: ComponentRef<any>): void {
    const domElement = this.createDomElement(componenetRef);
    const appRoot = document.body.querySelector('app-root');
    document.body.insertBefore(domElement, appRoot);
  }

  private createDomElement(componenetRef: ComponentRef<any>): HTMLElement {
    this.appRef.attachView(componenetRef.hostView);
    const domElement = (componenetRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    return domElement;
  }
}
