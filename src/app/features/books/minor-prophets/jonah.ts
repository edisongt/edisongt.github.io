import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../../shared/components/starfield/starfield';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { NavDots } from '../../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-jonah',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './jonah.html',
  styleUrl: './jonah.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Jonah {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-fleeing', label: '逃往他施' },
    { id: 'scene-storm', label: '暴風之海' },
    { id: 'scene-belly', label: '大魚之腹' },
    { id: 'scene-repent', label: '尼尼微悔改' },
    { id: 'scene-mercy', label: '神的憐憫' },
  ];
}
