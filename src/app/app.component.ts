import { Component } from "@angular/core";

import { LanguagesComponent } from "./components/languages/languages.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [LanguagesComponent, NavbarComponent],
	templateUrl: "./app.component.html"
})
export class AppComponent {}
