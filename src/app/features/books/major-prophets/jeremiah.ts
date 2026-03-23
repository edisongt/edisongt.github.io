import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-jeremiah',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './jeremiah.html',
  styleUrl: './jeremiah.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Jeremiah {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-calling', label: '先知蒙召' },
    { id: 'scene-potter', label: '窯匠之手' },
    { id: 'scene-weeping', label: '哭泣的先知' },
    { id: 'scene-covenant', label: '新約應許' },
    { id: 'scene-restoration', label: '復興盼望' },
  ];
}
