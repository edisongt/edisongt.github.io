import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../../shared/components/starfield/starfield';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { NavDots } from '../../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-joshua',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './joshua.html',
  styleUrl: './joshua.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Joshua {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-crossing', label: '渡約旦河' },
    { id: 'scene-jericho', label: '耶利哥城' },
    { id: 'scene-conquest', label: '征服迦南' },
    { id: 'scene-division', label: '分配土地' },
    { id: 'scene-farewell', label: '約書亞的告別' },
  ];
}
