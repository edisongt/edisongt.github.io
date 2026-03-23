import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-genesis',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './genesis.html',
  styleUrl: './genesis.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Genesis {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-creation', label: '七日創造' },
    { id: 'scene-eden', label: '伊甸園' },
    { id: 'scene-fall', label: '犯罪墮落' },
    { id: 'scene-noah', label: '挪亞方舟' },
    { id: 'scene-babel', label: '巴別塔' },
  ];
}
