import copy from "copy-to-clipboard";
import _ from "lodash";
import translate from "translate";

import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { Language, LanguageComponent } from "./language/language.component";
import { LanguagesService } from "./languages.service";

@Component({
	selector: "app-languages",
	standalone: true,
	imports: [CommonModule, FormsModule, LanguageComponent],
	templateUrl: "./languages.component.html"
})
export class LanguagesComponent {
	text = "Hello World";

	copyTranslationsText = "Copy Translations";
	translationsCopiedText = "Copied!";

	copyTranslationsButtonDisabled = false;

	languages: Language[];

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private languagesService: LanguagesService
	) {
		this.languages = this.languagesService.getLanguages();
		this.route.queryParams.subscribe((params) => {
			if (params["text"]) {
				this.text = params["text"] as string;
				this.translateText();
			}
		});
	}

	async translateText() {
		if (_.size(this.text)) {
			for (const language of this.languages) {
				language.translatedText = await translate(this.text, language.code);
			}
		} else {
			this.languages.forEach((language) => {
				language.translatedText = "";
			});
		}
	}

	onTextChange() {
		this.copyTranslationsButtonDisabled = false;
		this.router.navigate([], {
			relativeTo: this.route,
			queryParams: { text: this.text },
			queryParamsHandling: "merge"
		});
		this.translateText();
	}

	copyTranslations() {
		this.copyTranslationsButtonDisabled = true;
		copy(_.map([...this.languages], (language) => `${language.name}: ${language.translatedText}`).join("\n"));
	}
}
