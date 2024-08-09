import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

export interface Language {
	name: string;
	code: string;
	icon: string;
	translatedText: string;
}

@Component({
	selector: "app-language",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./language.component.html"
})
export class LanguageComponent {
	@Input() languageName = "";
	@Input() languageIcon = "";
	@Input() languageTranslatedText = "";
}
