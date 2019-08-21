import { ViewContainerRef, TemplateRef, EventEmitter, Input } from '@angular/core';
import { JoyrideStepComponent } from "../components/step/joyride-step.component";
import { Observable } from 'rxjs';

export class JoyrideStep {
    name: string;
    route: string;
    position: string;
    title: string;
    text: string;
    stepContent: TemplateRef<any>;
    nextClicked: EventEmitter<any>;
    prevCliked: EventEmitter<any>;
    tourDone: EventEmitter<any>;
    transformCssStyle: string;
    isElementOrAncestorFixed: boolean;
    targetViewContainer: ViewContainerRef;
    stepInstance: JoyrideStepComponent;
    previousButtonLabel: string | Observable<string>;
    nextButtonLabel: string | Observable<string>;
    doneButtonLabel: string | Observable<string>;
}
