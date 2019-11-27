import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { SizeDetectorComponent } from './components/size-detector/size-detector.component';
@NgModule({
	declarations: [SizeDetectorComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule
	],
	exports: [
		ReactiveFormsModule,
		SizeDetectorComponent
	]
})
export class SharedModule { }
