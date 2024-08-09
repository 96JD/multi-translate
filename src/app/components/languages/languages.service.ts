import { Injectable } from "@angular/core";

import { Language } from "./language/language.component";

@Injectable({
	providedIn: "root"
})
export class LanguagesService {
	getLanguages(): Language[] {
		return [
			{ name: "Arabic", code: "ar", icon: "sa", translatedText: "مرحبا بالعالم" },
			{ name: "French", code: "fr", icon: "fr", translatedText: "Bonjour le monde" },
			{ name: "German", code: "de", icon: "de", translatedText: "Hallo Welt" },
			{ name: "Norwegian", code: "no", icon: "no", translatedText: "Hei Verden" },
			{ name: "Filipino", code: "tl", icon: "ph", translatedText: "Hello Mundo" },
			{ name: "Russian", code: "ru", icon: "ru", translatedText: "Привет, мир" },
			{ name: "Spanish", code: "es", icon: "es", translatedText: "Hola Mundo" },
			{ name: "Turkish", code: "tr", icon: "tr", translatedText: "Selam Dünya" }
		];
	}
}
