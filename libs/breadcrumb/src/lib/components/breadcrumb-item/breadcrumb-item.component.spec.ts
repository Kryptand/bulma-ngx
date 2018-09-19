import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { BreadcrumbItemComponent } from "./breadcrumb-item.component";

describe("BreadcrumbItemComponent", () => {
	let comp: BreadcrumbItemComponent;
	let fixture: ComponentFixture<BreadcrumbItemComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ BreadcrumbItemComponent ],
			schemas: [ NO_ERRORS_SCHEMA ]
		});
		fixture = TestBed.createComponent(BreadcrumbItemComponent);
		comp = fixture.componentInstance;
	});

	it("can load instance", () => {
		expect(comp).toBeTruthy();
	});

});
