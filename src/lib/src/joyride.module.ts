import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { JoyrideDirective } from './directives/joyride.directive';
import { JoyrideService } from './services/joyride.service';
import { JoyrideStepComponent } from "./components/step/joyride-step.component";
import { JoyrideButtonComponent } from "./components/button/button.component";
import { JoyrideStepService } from "./services/joyride-step.service";
import { JoyrideBackdropService } from "./services/joyride-backdrop.service";
import { JoyrideArrowComponent } from "./components/arrow/arrow.component";
import { EventListenerService } from "./services/event-listener.service";
import { JoyrideStepsContainerService } from "./services/joyride-steps-container.service";
import { DocumentService } from "./services/document.service";
import { JoyrideOptionsService } from './services/joyride-options.service';
import { StepDrawerService } from './services/step-drawer.service';
import { DomRefService } from './services/dom.service';
import { Logger } from './services/logger.service';
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [CommonModule, RouterModule.forChild([])],
    declarations: [
        JoyrideDirective,
        JoyrideStepComponent,
        JoyrideArrowComponent,
        JoyrideButtonComponent,
    ],
    entryComponents: [JoyrideStepComponent],
    exports: [
        JoyrideDirective
    ]
})
export class JoyrideModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: JoyrideModule,
            providers: [
                JoyrideService,
                JoyrideStepService,
                JoyrideStepsContainerService,
                JoyrideBackdropService,
                EventListenerService,
                DocumentService,
                JoyrideOptionsService,
                StepDrawerService,
                DomRefService,
                Logger
            ]
        }
    }
    static forChild(): ModuleWithProviders {
        return {
            ngModule: JoyrideModule,
            providers: []
        }
    }
}
