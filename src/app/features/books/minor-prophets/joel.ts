import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-joel',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './joel.html',
  styleUrl: './joel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Joel {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-locusts', label: '蝗蟲之災' },
    { id: 'scene-repentance', label: '哀哭悔改' },
    { id: 'scene-dayoflord', label: '耶和華的日子' },
    { id: 'scene-spirit', label: '靈的澆灌' },
    { id: 'scene-restoration', label: '萬物復興' },
  ];
}
