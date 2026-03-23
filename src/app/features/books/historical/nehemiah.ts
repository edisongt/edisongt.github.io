import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../../shared/components/starfield/starfield';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { NavDots } from '../../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-nehemiah',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './nehemiah.html',
  styleUrl: './nehemiah.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Nehemiah {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-prayer', label: '尼希米的禱告' },
    { id: 'scene-wall', label: '重建城牆' },
    { id: 'scene-opposition', label: '仇敵的攔阻' },
    { id: 'scene-law', label: '宣讀律法' },
    { id: 'scene-covenant', label: '重立聖約' },
  ];
}
