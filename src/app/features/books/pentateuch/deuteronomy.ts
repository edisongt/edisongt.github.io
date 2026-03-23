import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../../shared/components/starfield/starfield';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { NavDots } from '../../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-deuteronomy',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './deuteronomy.html',
  styleUrl: './deuteronomy.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Deuteronomy {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-farewell', label: '摩西的告別' },
    { id: 'scene-shema', label: '示瑪' },
    { id: 'scene-blessings', label: '祝福與咒詛' },
    { id: 'scene-view', label: '遠望應許之地' },
    { id: 'scene-death', label: '摩西之死' },
  ];
}
