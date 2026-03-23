import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../../shared/components/starfield/starfield';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { NavDots } from '../../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-haggai',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './haggai.html',
  styleUrl: './haggai.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Haggai {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-rebuild', label: '重建的呼召' },
    { id: 'scene-obey', label: '百姓順服' },
    { id: 'scene-glory', label: '更大的榮耀' },
    { id: 'scene-blessing', label: '應許的祝福' },
    { id: 'scene-signet', label: '印記的揀選' },
  ];
}
