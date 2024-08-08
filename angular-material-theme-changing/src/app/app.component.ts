import {Component, inject, OnInit, Renderer2} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavigationComponent} from "./navigation/navigation.component";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  #renderer = inject(Renderer2);
  #document = inject(DOCUMENT);

  ngOnInit() {
    this.#renderer.addClass(this.#document.body, "light-theme");
  }


  onThemeChanged(isDark: boolean) {
    this.#renderer.removeClass(this.#document.body, `${isDark ? 'light' : 'dark'}-theme`);
    this.#renderer.addClass(this.#document.body, `${isDark ? 'dark' : 'light'}-theme`);
  }
}
