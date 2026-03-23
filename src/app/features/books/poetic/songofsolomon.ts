import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-songofsolomon',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './songofsolomon.html',
  styleUrl: './songofsolomon.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SongOfSolomon {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-beloved', label: '良人的愛慕' },
    { id: 'scene-garden', label: '愛的花園' },
    { id: 'scene-seeking', label: '尋找良人' },
    { id: 'scene-wedding', label: '婚禮盛典' },
    { id: 'scene-eternal', label: '堅貞的愛' },
  ];
}
