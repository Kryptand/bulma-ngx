import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { Router } from "@angular/router";
import { BreadcrumbService } from "../../services/breadcrumb.service";
import { BreadcrumbContainerComponent } from "./breadcrumb-container.component";

describe("BreadcrumbContainerComponent", () => {
	let comp: BreadcrumbContainerComponent;
	let fixture: ComponentFixture<BreadcrumbContainerComponent>;

	beforeEach(() => {
		const routerStub = {
			events: {
				subscribe: () => ({})
			}
		};
		const breadcrumbServiceStub = {
			currBreadcrumb$: {
				subscribe: () => ({})
			}
		};
		TestBed.configureTestingModule({
			declarations: [ BreadcrumbContainerComponent ],
			schemas: [ NO_ERRORS_SCHEMA ],
			providers: [
				{ provide: Router, useValue: routerStub },
				{ provide: BreadcrumbService, useValue: breadcrumbServiceStub }
			]
		});
		fixture = TestBed.createComponent(BreadcrumbContainerComponent);
		comp = fixture.componentInstance;
	});

	it("can load instance", () => {
		expect(comp).toBeTruthy();
	});

	it("breadcrumbs defaults to: []", () => {
		expect(comp.breadcrumbs).toEqual([]);
	});

});
