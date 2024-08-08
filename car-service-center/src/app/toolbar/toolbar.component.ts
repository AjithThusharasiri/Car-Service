import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [TranslateModule] // Import TranslateModule here for standalone components
})
export class ToolbarComponent {
  constructor(private translate: TranslateService) {
    // Set default language
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const menu = document.getElementById('mobileMenu');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  }

  changeLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement | null;
    if (selectElement) {
      const language = selectElement.value;
      this.translate.use(language);
    }
  }
}
