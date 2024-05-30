import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DelishusUiModule } from '@galvezdev/ui';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, DelishusUiModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
