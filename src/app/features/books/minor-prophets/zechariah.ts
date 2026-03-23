import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-zechariah',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './zechariah.html',
  styleUrl: './zechariah.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Zechariah {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-visions', label: '夜間的異象' },
    { id: 'scene-joshua', label: '大祭司約書亞' },
    { id: 'scene-lampstand', label: '金燈臺' },
    { id: 'scene-king', label: '騎驢的君王' },
    { id: 'scene-waters', label: '活水湧流' },
  ];
}
