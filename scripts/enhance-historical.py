#!/usr/bin/env python3
"""Add particle/animation enhancements to all 12 historical books."""
import re

BASE = "/workspaces/edisongt.github.io/src/app/features/books/historical"

# ═══════════════════════════════════════════════════════════════════
# SCSS ENHANCEMENTS — keyframes + pseudo-element particle systems
# ═══════════════════════════════════════════════════════════════════

SCSS_ENHANCEMENTS = {
    "joshua": """
/* — Crossing Water Spray — */
.crossing-spray {
      position: absolute; bottom: 32%; z-index: 8;
      width: 4px; height: 4px;
      background: rgba(150,210,255,.4);
      border-radius: 50%;
      animation: splashUp var(--dur,3s) ease-out var(--delay,0s) infinite;
    }

@keyframes splashUp {
      0%,100% { transform: translateY(0) scale(1); opacity: 0; }
      18% { transform: translateY(-14px) scale(1.5); opacity: .5; }
      40% { transform: translateY(-28px) scale(.8); opacity: .2; }
      55% { transform: translateY(-18px) scale(.4); opacity: 0; }
    }

/* — Jericho Dust — */
.jericho-dust {
      position: absolute; bottom: 22%; z-index: 8;
      width: 5px; height: 5px;
      background: rgba(180,140,80,.35);
      border-radius: 50%;
      animation: dustRise var(--dur,5s) ease-out var(--delay,0s) infinite;
    }

@keyframes dustRise {
      0% { transform: translate(0,0) scale(1); opacity: 0; }
      12% { opacity: .35; }
      50% { transform: translate(8px,-22vh) scale(1.6); opacity: .15; }
      100% { transform: translate(-4px,-40vh) scale(2.2); opacity: 0; }
    }

/* — Conquest Embers — */
.conquest-ember {
      position: absolute; top: 5%; z-index: 8;
      width: 3px; height: 3px;
      background: rgba(255,120,20,.65);
      border-radius: 50%;
      box-shadow: 0 0 4px rgba(255,60,0,.4);
      animation: emberDrift var(--dur,6s) ease-in var(--delay,0s) infinite;
    }

@keyframes emberDrift {
      0% { transform: translate(0,0) scale(1); opacity: 0; }
      8% { opacity: .65; }
      40% { transform: translate(6px,30vh) scale(.7); opacity: .35; filter: brightness(1.3); }
      100% { transform: translate(-2px,85vh) scale(.1); opacity: 0; }
    }

/* — Division Golden Mote — */
.division-mote {
      position: absolute; z-index: 8;
      width: 3px; height: 3px;
      background: rgba(255,215,80,.5);
      border-radius: 50%;
      box-shadow: 0 0 6px rgba(255,200,50,.3);
      animation: moteFloat var(--dur,7s) ease-in-out var(--delay,0s) infinite;
    }

@keyframes moteFloat {
      0%,100% { transform: translate(0,0); opacity: 0; }
      15% { opacity: .45; }
      50% { transform: translate(var(--dx,12px), var(--dy,-18px)); opacity: .35; }
      85% { opacity: .1; }
    }

/* — Farewell Spark — */
.farewell-spark {
      position: absolute; bottom: 35%; z-index: 8;
      width: 2px; height: 2px;
      background: rgba(255,200,80,.6);
      border-radius: 50%;
      box-shadow: 0 0 5px rgba(255,180,40,.4);
      animation: sparkRise var(--dur,4s) ease-out var(--delay,0s) infinite;
    }

@keyframes sparkRise {
      0% { transform: translateY(0) scale(1); opacity: 0; }
      10% { opacity: .6; }
      50% { transform: translateY(-18vh) scale(.6); opacity: .3; }
      100% { transform: translateY(-35vh) scale(.2); opacity: 0; }
    }

/* — Crossing River Shimmer — */
#crossing-water::after {
      content: '';
      position: absolute; top: 0; left: 0; width: 200%; height: 6px;
      background: repeating-linear-gradient(90deg,
        transparent, transparent 40px,
        rgba(100,180,255,.12) 40px, rgba(100,180,255,.12) 80px);
      animation: waveRipple 4s linear infinite;
    }

@keyframes waveRipple {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }

/* — Jericho Shake — */
@keyframes wallShake {
      0%,100% { transform: translate(0,0); }
      10% { transform: translate(-2px,1px); }
      20% { transform: translate(3px,-1px); }
      30% { transform: translate(-1px,2px); }
      40% { transform: translate(2px,-2px); }
      50% { transform: translate(-3px,1px); }
      60% { transform: translate(1px,-1px); }
      70% { transform: translate(-2px,2px); }
      80% { transform: translate(3px,0); }
      90% { transform: translate(-1px,-1px); }
    }

#jericho-walls {
      animation: wallShake 0.6s ease-in-out infinite;
    }

/* — Conquest Ground Smoke — */
#conquest-ground::after {
      content: '';
      position: absolute; top: -50%; left: 0; width: 100%; height: 60%;
      background:
        radial-gradient(circle at 15% 65%, rgba(160,100,40,.14) 0%, transparent 8%),
        radial-gradient(circle at 45% 55%, rgba(140,80,30,.12) 0%, transparent 7%),
        radial-gradient(circle at 75% 70%, rgba(160,100,40,.1) 0%, transparent 9%);
      animation: smokeFloat 9s ease-in-out infinite;
      pointer-events: none;
    }

@keyframes smokeFloat {
      0% { transform: translateX(0) scale(1); opacity: .06; }
      50% { transform: translateX(-2%) scale(1.05); opacity: .14; }
      100% { transform: translateX(0) scale(1); opacity: .06; }
    }

""",

    "judges": """
/* — Deborah Battle Sparks — */
.battle-spark {
      position: absolute; z-index: 8;
      width: 3px; height: 3px;
      background: rgba(255,200,60,.65);
      border-radius: 50%;
      box-shadow: 0 0 5px rgba(255,180,30,.4);
      animation: sparkBurst var(--dur,3s) ease-out var(--delay,0s) infinite;
    }

@keyframes sparkBurst {
      0% { transform: translate(0,0) scale(1); opacity: 0; }
      8% { opacity: .7; }
      30% { transform: translate(var(--dx,15px), var(--dy,-20px)) scale(.5); opacity: .35; }
      60% { transform: translate(calc(var(--dx,15px)*2), calc(var(--dy,-20px)*2)) scale(.2); opacity: .1; }
      100% { opacity: 0; }
    }

/* — Gideon Torch Flicker — */
.torch-glow {
      position: absolute; z-index: 7;
      width: clamp(8px,1.5vw,16px); height: clamp(8px,1.5vw,16px);
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255,180,40,.6) 0%, rgba(255,120,0,.3) 40%, transparent 70%);
      animation: torchFlicker var(--dur,2s) ease-in-out var(--delay,0s) infinite alternate;
    }

@keyframes torchFlicker {
      0% { transform: scale(1); opacity: .5; }
      30% { transform: scale(1.3); opacity: .75; }
      70% { transform: scale(.85); opacity: .4; }
      100% { transform: scale(1.15); opacity: .65; }
    }

/* — Samson Debris — */
.temple-debris {
      position: absolute; top: 10%; z-index: 8;
      width: 6px; height: 4px;
      background: rgba(160,130,80,.5);
      border-radius: 1px;
      animation: debrisFall var(--dur,4s) ease-in var(--delay,0s) infinite;
    }

@keyframes debrisFall {
      0% { transform: translate(0,0) rotate(0deg); opacity: 0; }
      5% { opacity: .6; }
      40% { transform: translate(8px,32vh) rotate(180deg); opacity: .35; }
      100% { transform: translate(-4px,88vh) rotate(400deg); opacity: 0; }
    }

/* — Cycle Spiral Particle — */
.cycle-particle {
      position: absolute; z-index: 7;
      width: 3px; height: 3px;
      border-radius: 50%;
      animation: cycleSpin var(--dur,8s) linear var(--delay,0s) infinite;
    }

@keyframes cycleSpin {
      0% { transform: rotate(0deg) translateX(var(--r,80px)); opacity: .4; }
      25% { opacity: .6; filter: brightness(1.2); }
      50% { transform: rotate(180deg) translateX(var(--r,80px)); opacity: .4; }
      75% { opacity: .2; }
      100% { transform: rotate(360deg) translateX(var(--r,80px)); opacity: .4; }
    }

/* — Darkness Mist — */
#darkness-fog {
      position: absolute; inset: 0; z-index: 5;
      background: radial-gradient(ellipse 70% 50% at 50% 60%, rgba(10,5,15,.6) 0%, transparent 60%);
      animation: mistPulse 6s ease-in-out infinite;
    }

@keyframes mistPulse {
      0%,100% { opacity: .5; }
      50% { opacity: .8; }
    }

""",

    "ruth": """
/* — Wheat Particle — */
.wheat-mote {
      position: absolute; z-index: 8;
      width: 2px; height: 5px;
      background: rgba(220,180,80,.5);
      border-radius: 0 0 2px 2px;
      animation: wheatDrift var(--dur,7s) ease-in-out var(--delay,0s) infinite;
    }

@keyframes wheatDrift {
      0% { transform: translate(0,-10px) rotate(0deg); opacity: 0; }
      8% { opacity: .45; }
      35% { transform: translate(16px,30vh) rotate(120deg); opacity: .35; }
      65% { transform: translate(-8px,55vh) rotate(240deg); opacity: .2; }
      100% { transform: translate(6px,85vh) rotate(360deg); opacity: 0; }
    }

/* — Gleaning Sunbeam — */
.sunbeam {
      position: absolute; top: 0; z-index: 6;
      width: 2px; height: 35vh;
      background: linear-gradient(180deg, rgba(255,230,120,.25) 0%, rgba(255,210,80,.08) 60%, transparent 100%);
      transform-origin: top center;
      animation: sunbeamSway var(--dur,8s) ease-in-out var(--delay,0s) infinite;
    }

@keyframes sunbeamSway {
      0%,100% { transform: rotate(var(--rot,-2deg)); opacity: .3; }
      50% { transform: rotate(calc(var(--rot,-2deg) + 4deg)); opacity: .5; }
    }

/* — Threshing Chaff — */
.chaff {
      position: absolute; bottom: 30%; z-index: 8;
      width: 3px; height: 2px;
      background: rgba(200,170,100,.45);
      border-radius: 50%;
      animation: chaffFloat var(--dur,5s) ease-out var(--delay,0s) infinite;
    }

@keyframes chaffFloat {
      0% { transform: translate(0,0) scale(1); opacity: 0; }
      10% { opacity: .5; }
      50% { transform: translate(var(--dx,20px),-15vh) scale(.7); opacity: .25; }
      100% { transform: translate(calc(var(--dx,20px)*2),-28vh) scale(.3); opacity: 0; }
    }

/* — Redemption Golden Ring — */
.redemption-ring {
      position: absolute; z-index: 7;
      width: clamp(30px,6vw,60px); height: clamp(30px,6vw,60px);
      border: 2px solid rgba(255,215,0,.2);
      border-radius: 50%;
      animation: ringExpand var(--dur,4s) ease-out var(--delay,0s) infinite;
    }

@keyframes ringExpand {
      0% { transform: scale(.5); opacity: .5; }
      60% { transform: scale(1.8); opacity: .15; }
      100% { transform: scale(2.5); opacity: 0; }
    }

/* — Lineage Star Twinkle — */
.lineage-star {
      position: absolute; z-index: 8;
      width: 2px; height: 2px;
      background: #fff;
      border-radius: 50%;
      box-shadow: 0 0 4px rgba(255,255,255,.6);
      animation: starTwinkle var(--dur,3s) ease-in-out var(--delay,0s) infinite;
    }

@keyframes starTwinkle {
      0%,100% { opacity: .2; transform: scale(.8); }
      50% { opacity: .9; transform: scale(1.3); }
    }

/* — Gleaning Firefly — */
#gleaning-ground::after {
      content: '';
      position: absolute; top: -70%; left: 0; width: 100%; height: 80%;
      background:
        radial-gradient(circle at 12% 30%, rgba(255,220,80,.5) 0%, transparent 1.2%),
        radial-gradient(circle at 35% 55%, rgba(255,200,60,.4) 0%, transparent 1%),
        radial-gradient(circle at 60% 25%, rgba(255,230,100,.45) 0%, transparent 1.1%),
        radial-gradient(circle at 80% 50%, rgba(255,210,70,.35) 0%, transparent 1.3%);
      animation: fireflyField 6s ease-in-out infinite;
      pointer-events: none;
    }

@keyframes fireflyField {
      0%,100% { opacity: .4; transform: scale(1); }
      50% { opacity: .7; transform: scale(1.02); }
    }

""",

    "1samuel": """
/* — Temple Candlelight — */
.temple-candle {
      position: absolute; z-index: 7;
      width: clamp(6px,1.2vw,12px); height: clamp(6px,1.2vw,12px);
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255,200,60,.7) 0%, rgba(255,160,20,.3) 40%, transparent 70%);
      animation: candlePulse var(--dur,2.5s) ease-in-out var(--delay,0s) infinite alternate;
    }

@keyframes candlePulse {
      0% { transform: scale(1); opacity: .4; }
      50% { transform: scale(1.25); opacity: .7; }
      100% { transform: scale(.9); opacity: .5; }
    }

/* — Ark Glory Particles — */
.ark-glory {
      position: absolute; z-index: 8;
      width: 3px; height: 3px;
      background: rgba(255,215,80,.5);
      border-radius: 50%;
      box-shadow: 0 0 6px rgba(255,200,50,.3);
      animation: gloryFloat var(--dur,5s) ease-in-out var(--delay,0s) infinite;
    }

@keyframes gloryFloat {
      0%,100% { transform: translate(0,0); opacity: .15; }
      25% { transform: translate(6px,-12px); opacity: .55; }
      50% { transform: translate(-4px,-20px); opacity: .35; }
      75% { transform: translate(8px,-8px); opacity: .2; }
    }

/* — Sling Stone Trail — */
.sling-trail {
      position: absolute; z-index: 9;
      width: 3px; height: 3px;
      background: rgba(180,160,120,.5);
      border-radius: 50%;
      animation: stoneTrail var(--dur,2s) ease-in var(--delay,0s) infinite;
    }

@keyframes stoneTrail {
      0% { transform: translate(-30vw,10vh) scale(1.2); opacity: 0; }
      20% { opacity: .6; }
      50% { transform: translate(0,0) scale(1); opacity: .4; }
      70% { transform: translate(15vw,-6vh) scale(.6); opacity: .2; }
      100% { transform: translate(30vw,-12vh) scale(.2); opacity: 0; }
    }

/* — Crown Sparkle — */
.crown-sparkle {
      position: absolute; z-index: 8;
      width: 2px; height: 2px;
      background: rgba(255,215,0,.7);
      border-radius: 50%;
      box-shadow: 0 0 6px rgba(255,200,0,.5);
      animation: sparkleFloat var(--dur,3s) ease-in-out var(--delay,0s) infinite;
    }

@keyframes sparkleFloat {
      0%,100% { opacity: 0; transform: translateY(0) scale(.5); }
      20% { opacity: .7; transform: translateY(-5px) scale(1.2); }
      50% { opacity: .4; transform: translateY(-12px) scale(1); }
      80% { opacity: .1; transform: translateY(-20px) scale(.6); }
    }

/* — Saul Darkness Mist — */
#fall-darkness::after {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(ellipse 60% 45% at 50% 55%, rgba(20,5,30,.5) 0%, transparent 55%);
      animation: darkPulse 5s ease-in-out infinite;
      pointer-events: none;
    }

@keyframes darkPulse {
      0%,100% { opacity: .3; }
      50% { opacity: .6; }
    }

""",

    "2samuel": """
/* — Coronation Confetti — */
.coronation-confetti {
      position: absolute; top: 5%; z-index: 8;
      width: 4px; height: 6px;
      border-radius: 1px;
      animation: confettiFall var(--dur,5s) ease-in var(--delay,0s) infinite;
    }

@keyframes confettiFall {
      0% { transform: translate(0,0) rotate(0deg); opacity: 0; }
      6% { opacity: .6; }
      40% { transform: translate(10px,35vh) rotate(200deg); opacity: .4; }
      100% { transform: translate(-6px,90vh) rotate(500deg); opacity: 0; }
    }

/* — Ark Procession Glow — */
.procession-glow {
      position: absolute; z-index: 7;
      width: clamp(10px,2vw,20px); height: clamp(10px,2vw,20px);
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255,215,80,.4) 0%, transparent 70%);
      animation: processionPulse var(--dur,3s) ease-in-out var(--delay,0s) infinite;
    }

@keyframes processionPulse {
      0%,100% { transform: scale(.8); opacity: .3; }
      50% { transform: scale(1.4); opacity: .6; }
    }

/* — Bathsheba Rain — */
.night-rain {
      position: absolute; top: 0; z-index: 6;
      width: 1px; height: clamp(12px,2vh,22px);
      background: rgba(140,160,200,.2);
      animation: rainFall var(--spd,1s) linear var(--delay,0s) infinite;
    }

@keyframes rainFall {
      0% { transform: translateY(-10px); opacity: 0; }
      10% { opacity: .3; }
      90% { opacity: .15; }
      100% { transform: translateY(100vh); opacity: 0; }
    }

/* — Absalom Wind Streak — */
.wind-streak {
      position: absolute; z-index: 6;
      height: 1.5px;
      background: linear-gradient(90deg, transparent, rgba(180,200,230,.15), rgba(200,220,245,.25), rgba(180,200,230,.15), transparent);
      animation: windStreak var(--dur,4s) linear var(--delay,0s) infinite;
    }

@keyframes windStreak {
      0% { transform: translateX(-100%); opacity: 0; }
      20% { opacity: .3; }
      80% { opacity: .2; }
      100% { transform: translateX(100vw); opacity: 0; }
    }

/* — Covenant Divine Light Ring — */
.covenant-ring {
      position: absolute; z-index: 7;
      border: 1.5px solid rgba(255,230,120,.15);
      border-radius: 50%;
      animation: divineRing var(--dur,4s) ease-out var(--delay,0s) infinite;
    }

@keyframes divineRing {
      0% { transform: scale(.4); opacity: .5; }
      50% { transform: scale(1.6); opacity: .15; }
      100% { transform: scale(2.5); opacity: 0; }
    }

""",

    "1kings": """
/* — Wisdom Golden Mote — */
.wisdom-mote {
      position: absolute; z-index: 8;
      width: 3px; height: 3px;
      background: rgba(255,215,80,.55);
      border-radius: 50%;
      box-shadow: 0 0 5px rgba(255,200,50,.3);
      animation: moteFloat var(--dur,6s) ease-in-out var(--delay,0s) infinite;
    }

@keyframes moteFloat {
      0%,100% { transform: translate(0,0); opacity: .1; }
      20% { opacity: .5; }
      50% { transform: translate(var(--dx,10px),var(--dy,-15px)); opacity: .35; }
      80% { opacity: .1; }
    }

/* — Temple Sparkle — */
.temple-sparkle {
      position: absolute; z-index: 8;
      width: 2px; height: 2px;
      background: rgba(255,220,100,.7);
      border-radius: 50%;
      box-shadow: 0 0 6px rgba(255,215,0,.4);
      animation: sparkleGlint var(--dur,3s) ease-in-out var(--delay,0s) infinite;
    }

@keyframes sparkleGlint {
      0%,100% { opacity: 0; transform: scale(.5); }
      50% { opacity: .8; transform: scale(1.5); }
    }

/* — Sheba Incense — */
.incense-particle {
      position: absolute; bottom: 30%; z-index: 7;
      width: 4px; height: 4px;
      background: rgba(200,180,220,.25);
      border-radius: 50%;
      animation: incenseRise var(--dur,6s) ease-out var(--delay,0s) infinite;
    }

@keyframes incenseRise {
      0% { transform: translate(0,0) scale(1); opacity: 0; }
      10% { opacity: .3; }
      50% { transform: translate(6px,-25vh) scale(1.8); opacity: .15; }
      100% { transform: translate(-4px,-45vh) scale(2.5); opacity: 0; }
    }

/* — Division Crack Effect — */
#division-crack::after {
      content: '';
      position: absolute; top: 0; left: 50%; transform: translateX(-50%);
      width: 4px; height: 100%;
      background: linear-gradient(180deg, transparent 0%, rgba(180,60,20,.2) 30%, rgba(200,80,30,.35) 50%, rgba(180,60,20,.2) 70%, transparent 100%);
      animation: crackGlow 2.5s ease-in-out infinite;
      pointer-events: none;
    }

@keyframes crackGlow {
      0%,100% { opacity: .3; }
      50% { opacity: .7; }
    }

/* — Carmel Fire Spark — */
.carmel-spark {
      position: absolute; z-index: 9;
      width: 3px; height: 3px;
      background: rgba(255,140,20,.7);
      border-radius: 50%;
      box-shadow: 0 0 6px rgba(255,80,0,.5);
      animation: sparkRise var(--dur,3.5s) ease-out var(--delay,0s) infinite;
    }

@keyframes sparkRise {
      0% { transform: translateY(0) scale(1); opacity: 0; }
      10% { opacity: .7; }
      45% { transform: translateY(-20vh) scale(.5); opacity: .3; }
      100% { transform: translateY(-40vh) scale(.15); opacity: 0; }
    }

""",

    "2kings": """
/* — Chariot Fire Trail — */
.chariot-spark {
      position: absolute; z-index: 9;
      width: 3px; height: 3px;
      background: rgba(255,160,30,.7);
      border-radius: 50%;
      box-shadow: 0 0 8px rgba(255,100,0,.5);
      animation: sparkAscend var(--dur,3s) ease-out var(--delay,0s) infinite;
    }

@keyframes sparkAscend {
      0% { transform: translate(0,0) scale(1); opacity: 0; }
      10% { opacity: .7; }
      40% { transform: translate(var(--dx,5px),-22vh) scale(.6); opacity: .4; }
      100% { transform: translate(calc(var(--dx,5px)*2),-50vh) scale(.15); opacity: 0; }
    }

/* — Miracle Water Ripple — */
.miracle-ripple {
      position: absolute; z-index: 7;
      border: 1.5px solid rgba(100,180,255,.2);
      border-radius: 50%;
      animation: rippleExpand var(--dur,4s) ease-out var(--delay,0s) infinite;
    }

@keyframes rippleExpand {
      0% { transform: scale(.3); opacity: .5; }
      50% { transform: scale(1.5); opacity: .18; }
      100% { transform: scale(2.8); opacity: 0; }
    }

/* — Fall Smoke — */
.siege-smoke {
      position: absolute; bottom: 20%; z-index: 7;
      width: 6px; height: 6px;
      background: rgba(80,60,40,.25);
      border-radius: 50%;
      animation: smokeRise var(--dur,6s) ease-out var(--delay,0s) infinite;
    }

@keyframes smokeRise {
      0% { transform: translate(0,0) scale(1); opacity: 0; }
      8% { opacity: .3; }
      50% { transform: translate(4px,-28vh) scale(2.2); opacity: .12; }
      100% { transform: translate(-6px,-48vh) scale(3.5); opacity: 0; }
    }

/* — Prayer Light Ray — */
.prayer-ray {
      position: absolute; top: 0; z-index: 6;
      width: 2px; height: 40vh;
      background: linear-gradient(180deg, rgba(255,230,150,.3) 0%, rgba(255,210,80,.1) 50%, transparent 100%);
      transform-origin: top center;
      animation: rayPulse var(--dur,5s) ease-in-out var(--delay,0s) infinite;
    }

@keyframes rayPulse {
      0%,100% { opacity: .15; transform: scaleY(1); }
      50% { opacity: .45; transform: scaleY(1.1); }
    }

/* — Exile Ember — */
.exile-ember {
      position: absolute; top: 5%; z-index: 8;
      width: 3px; height: 3px;
      background: rgba(255,80,20,.6);
      border-radius: 50%;
      box-shadow: 0 0 4px rgba(200,40,0,.4);
      animation: emberDrift var(--dur,5s) ease-in var(--delay,0s) infinite;
    }

@keyframes emberDrift {
      0% { transform: translate(0,0) scale(1); opacity: 0; }
      8% { opacity: .55; }
      50% { transform: translate(6px,35vh) scale(.6); opacity: .25; }
      100% { transform: translate(-3px,80vh) scale(.1); opacity: 0; }
    }

""",

    "1chronicles": """
/* — Genealogy Connecting Lines — */
.genealogy-line {
      position: absolute; z-index: 6;
      width: 1px;
      background: rgba(200,180,120,.15);
      animation: lineAppear var(--dur,5s) ease-in-out var(--delay,0s) infinite;
    }

@keyframes lineAppear {
      0%,100% { opacity: 0; height: 0; }
      20% { opacity: .3; height: var(--h,40px); }
      80% { opacity: .3; height: var(--h,40px); }
    }

/* — King Crown Glow — */
.crown-glow {
      position: absolute; z-index: 8;
      width: clamp(8px,1.5vw,16px); height: clamp(8px,1.5vw,16px);
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255,215,0,.5) 0%, transparent 70%);
      animation: crownPulse var(--dur,3s) ease-in-out var(--delay,0s) infinite alternate;
    }

@keyframes crownPulse {
      0% { transform: scale(.8); opacity: .3; }
      100% { transform: scale(1.4); opacity: .6; }
    }

/* — Ark Glory Spirit — */
.ark-spirit {
      position: absolute; z-index: 8;
      width: 3px; height: 3px;
      background: rgba(255,230,120,.5);
      border-radius: 50%;
      box-shadow: 0 0 8px rgba(255,215,60,.3);
      animation: spiritDance var(--dur,6s) ease-in-out var(--delay,0s) infinite;
    }

@keyframes spiritDance {
      0%,100% { transform: translate(0,0); opacity: .15; }
      25% { transform: translate(8px,-14px); opacity: .5; }
      50% { transform: translate(-6px,-22px); opacity: .35; }
      75% { transform: translate(10px,-10px); opacity: .2; }
    }

/* — Prepare Material Sparkle — */
.material-sparkle {
      position: absolute; z-index: 8;
      width: 2px; height: 2px;
      border-radius: 50%;
      animation: materialGlint var(--dur,4s) ease-in-out var(--delay,0s) infinite;
    }

@keyframes materialGlint {
      0%,100% { opacity: 0; transform: scale(.4); }
      50% { opacity: .7; transform: scale(1.4); }
    }

/* — Prayer Ascending Light — */
.prayer-light {
      position: absolute; z-index: 7;
      width: 2px; height: 2px;
      background: rgba(255,240,180,.5);
      border-radius: 50%;
      box-shadow: 0 0 5px rgba(255,220,100,.3);
      animation: lightAscend var(--dur,5s) ease-out var(--delay,0s) infinite;
    }

@keyframes lightAscend {
      0% { transform: translateY(0) scale(1); opacity: 0; }
      10% { opacity: .5; }
      50% { transform: translateY(-25vh) scale(.6); opacity: .25; }
      100% { transform: translateY(-50vh) scale(.2); opacity: 0; }
    }

""",

    "2chronicles": """
/* — Dedication Cloud Particle — */
.glory-cloud {
      position: absolute; z-index: 7;
      width: clamp(12px,2.5vw,24px); height: clamp(8px,1.5vw,16px);
      border-radius: 50%;
      background: rgba(255,245,220,.12);
      animation: cloudDrift var(--dur,8s) ease-in-out var(--delay,0s) infinite;
    }

@keyframes cloudDrift {
      0%,100% { transform: translate(0,0) scale(1); opacity: .08; }
      30% { transform: translate(10px,-8px) scale(1.2); opacity: .2; }
      60% { transform: translate(-6px,-16px) scale(1.1); opacity: .12; }
    }

/* — Battle Trumpet Blast — */
.trumpet-wave {
      position: absolute; z-index: 7;
      border: 1.5px solid rgba(255,200,60,.15);
      border-radius: 50%;
      animation: trumpetExpand var(--dur,3.5s) ease-out var(--delay,0s) infinite;
    }

@keyframes trumpetExpand {
      0% { transform: scale(.3); opacity: .5; }
      40% { transform: scale(1.4); opacity: .2; }
      100% { transform: scale(2.8); opacity: 0; }
    }

/* — Repair Hammer Particle — */
.repair-spark {
      position: absolute; z-index: 8;
      width: 2px; height: 2px;
      background: rgba(200,180,140,.6);
      border-radius: 50%;
      animation: hammerSpark var(--dur,2s) ease-out var(--delay,0s) infinite;
    }

@keyframes hammerSpark {
      0% { transform: translate(0,0) scale(1); opacity: 0; }
      10% { opacity: .7; }
      40% { transform: translate(var(--dx,12px),var(--dy,-10px)) scale(.5); opacity: .3; }
      100% { transform: translate(calc(var(--dx,12px)*2),calc(var(--dy,-10px)*2)) scale(.1); opacity: 0; }
    }

/* — Revival Fire Spark — */
.revival-spark {
      position: absolute; bottom: 25%; z-index: 8;
      width: 2px; height: 2px;
      background: rgba(255,140,40,.6);
      border-radius: 50%;
      box-shadow: 0 0 4px rgba(255,100,0,.4);
      animation: revivalRise var(--dur,4s) ease-out var(--delay,0s) infinite;
    }

@keyframes revivalRise {
      0% { transform: translateY(0) scale(1); opacity: 0; }
      10% { opacity: .6; }
      50% { transform: translateY(-22vh) scale(.5); opacity: .25; }
      100% { transform: translateY(-42vh) scale(.15); opacity: 0; }
    }

/* — Exile Chain Particle — */
.exile-chain {
      position: absolute; z-index: 7;
      width: clamp(4px,.8vw,8px); height: clamp(4px,.8vw,8px);
      border: 1.5px solid rgba(120,100,80,.3);
      border-radius: 50%;
      animation: chainDangle var(--dur,3s) ease-in-out var(--delay,0s) infinite;
    }

@keyframes chainDangle {
      0%,100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(4px) rotate(8deg); }
    }

""",

    "ezra": """
/* — Decree Scroll Particle — */
.decree-mote {
      position: absolute; z-index: 8;
      width: 3px; height: 3px;
      background: rgba(255,220,100,.5);
      border-radius: 50%;
      box-shadow: 0 0 5px rgba(255,200,60,.3);
      animation: decreeFloat var(--dur,6s) ease-in-out var(--delay,0s) infinite;
    }

@keyframes decreeFloat {
      0%,100% { transform: translate(0,0); opacity: .1; }
      20% { opacity: .5; }
      50% { transform: translate(var(--dx,8px),var(--dy,-15px)); opacity: .35; }
      80% { opacity: .1; }
    }

/* — Return Dust Trail — */
.return-dust {
      position: absolute; bottom: 20%; z-index: 7;
      width: 4px; height: 4px;
      background: rgba(180,150,100,.3);
      border-radius: 50%;
      animation: trailDust var(--dur,5s) ease-out var(--delay,0s) infinite;
    }

@keyframes trailDust {
      0% { transform: translate(0,0) scale(1); opacity: 0; }
      10% { opacity: .3; }
      50% { transform: translate(-8px,-18vh) scale(1.5); opacity: .12; }
      100% { transform: translate(4px,-32vh) scale(2); opacity: 0; }
    }

/* — Foundation Sparkle — */
.foundation-sparkle {
      position: absolute; z-index: 8;
      width: 2px; height: 2px;
      background: rgba(255,215,0,.65);
      border-radius: 50%;
      box-shadow: 0 0 6px rgba(255,200,0,.4);
      animation: foundationGlint var(--dur,3s) ease-in-out var(--delay,0s) infinite;
    }

@keyframes foundationGlint {
      0%,100% { opacity: 0; transform: scale(.4); }
      50% { opacity: .8; transform: scale(1.5); }
    }

/* — Temple Complete Glory — */
.complete-glory {
      position: absolute; z-index: 7;
      border: 1.5px solid rgba(255,230,120,.15);
      border-radius: 50%;
      animation: gloryExpand var(--dur,5s) ease-out var(--delay,0s) infinite;
    }

@keyframes gloryExpand {
      0% { transform: scale(.3); opacity: .4; }
      50% { transform: scale(1.6); opacity: .12; }
      100% { transform: scale(2.8); opacity: 0; }
    }

/* — Reform Tear Particle — */
.reform-tear {
      position: absolute; top: 25%; z-index: 8;
      width: 2px; height: 4px;
      background: rgba(140,170,220,.35);
      border-radius: 0 0 50% 50%;
      animation: tearFall var(--dur,4s) ease-in var(--delay,0s) infinite;
    }

@keyframes tearFall {
      0% { transform: translateY(0); opacity: 0; }
      8% { opacity: .4; }
      60% { transform: translateY(45vh); opacity: .15; }
      100% { transform: translateY(70vh); opacity: 0; }
    }

""",

    "nehemiah": """
/* — Prayer Rising Light — */
.prayer-mote {
      position: absolute; bottom: 35%; z-index: 8;
      width: 2px; height: 2px;
      background: rgba(255,240,180,.5);
      border-radius: 50%;
      box-shadow: 0 0 4px rgba(255,220,100,.3);
      animation: prayerRise var(--dur,5s) ease-out var(--delay,0s) infinite;
    }

@keyframes prayerRise {
      0% { transform: translateY(0) scale(1); opacity: 0; }
      10% { opacity: .5; }
      50% { transform: translateY(-25vh) scale(.6); opacity: .2; }
      100% { transform: translateY(-45vh) scale(.2); opacity: 0; }
    }

/* — Wall Construction Dust — */
.wall-dust {
      position: absolute; z-index: 8;
      width: 4px; height: 4px;
      background: rgba(160,130,80,.3);
      border-radius: 50%;
      animation: constructDust var(--dur,4s) ease-out var(--delay,0s) infinite;
    }

@keyframes constructDust {
      0% { transform: translate(0,0) scale(1); opacity: 0; }
      8% { opacity: .35; }
      50% { transform: translate(var(--dx,8px),-15vh) scale(1.4); opacity: .12; }
      100% { transform: translate(calc(var(--dx,8px)*2),-28vh) scale(2); opacity: 0; }
    }

/* — Opposition Arrow — */
.arrow-trail {
      position: absolute; z-index: 8;
      width: 12px; height: 1.5px;
      background: linear-gradient(90deg, transparent, rgba(180,160,120,.4), rgba(160,140,100,.2));
      animation: arrowFly var(--dur,3s) linear var(--delay,0s) infinite;
    }

@keyframes arrowFly {
      0% { transform: translateX(-20vw) rotate(var(--rot,5deg)); opacity: 0; }
      15% { opacity: .5; }
      50% { opacity: .3; }
      100% { transform: translateX(80vw) rotate(var(--rot,5deg)); opacity: 0; }
    }

/* — Law Scroll Shimmer — */
.scroll-shimmer {
      position: absolute; z-index: 7;
      width: 2px; height: 2px;
      background: rgba(255,220,120,.6);
      border-radius: 50%;
      box-shadow: 0 0 5px rgba(255,200,80,.3);
      animation: shimmerFloat var(--dur,4s) ease-in-out var(--delay,0s) infinite;
    }

@keyframes shimmerFloat {
      0%,100% { transform: translate(0,0); opacity: .1; }
      25% { opacity: .6; transform: translate(4px,-8px); }
      50% { opacity: .3; transform: translate(-3px,-14px); }
      75% { opacity: .15; transform: translate(5px,-6px); }
    }

/* — Covenant Fire Spark — */
.covenant-spark {
      position: absolute; bottom: 30%; z-index: 8;
      width: 2px; height: 2px;
      background: rgba(255,160,40,.6);
      border-radius: 50%;
      box-shadow: 0 0 4px rgba(255,120,0,.4);
      animation: covenantRise var(--dur,4s) ease-out var(--delay,0s) infinite;
    }

@keyframes covenantRise {
      0% { transform: translateY(0) scale(1); opacity: 0; }
      10% { opacity: .55; }
      50% { transform: translateY(-20vh) scale(.5); opacity: .2; }
      100% { transform: translateY(-38vh) scale(.15); opacity: 0; }
    }

""",

    "esther": """
/* — Palace Sparkle — */
.palace-sparkle {
      position: absolute; z-index: 8;
      width: 2px; height: 2px;
      background: rgba(255,215,0,.6);
      border-radius: 50%;
      box-shadow: 0 0 6px rgba(255,200,0,.4);
      animation: palaceGlint var(--dur,3s) ease-in-out var(--delay,0s) infinite;
    }

@keyframes palaceGlint {
      0%,100% { opacity: 0; transform: scale(.5); }
      50% { opacity: .75; transform: scale(1.4); }
    }

/* — Plot Shadow Mist — */
.shadow-mist {
      position: absolute; z-index: 6;
      width: clamp(16px,3vw,32px); height: clamp(12px,2vw,22px);
      border-radius: 50%;
      background: rgba(30,10,40,.2);
      animation: shadowDrift var(--dur,7s) ease-in-out var(--delay,0s) infinite;
    }

@keyframes shadowDrift {
      0%,100% { transform: translate(0,0) scale(1); opacity: .1; }
      30% { transform: translate(8px,6px) scale(1.3); opacity: .25; }
      70% { transform: translate(-6px,-4px) scale(1.1); opacity: .15; }
    }

/* — Courage Golden Aura Ring — */
.courage-ring {
      position: absolute; z-index: 7;
      border: 1.5px solid rgba(255,215,0,.15);
      border-radius: 50%;
      animation: courageExpand var(--dur,4s) ease-out var(--delay,0s) infinite;
    }

@keyframes courageExpand {
      0% { transform: scale(.4); opacity: .5; }
      50% { transform: scale(1.5); opacity: .15; }
      100% { transform: scale(2.5); opacity: 0; }
    }

/* — Reversal Confetti — */
.reversal-confetti {
      position: absolute; top: 5%; z-index: 9;
      width: 4px; height: 5px;
      border-radius: 1px;
      animation: confettiCelebrate var(--dur,5s) ease-in var(--delay,0s) infinite;
    }

@keyframes confettiCelebrate {
      0% { transform: translate(0,0) rotate(0deg); opacity: 0; }
      5% { opacity: .65; }
      35% { transform: translate(12px,32vh) rotate(180deg); opacity: .4; }
      100% { transform: translate(-8px,88vh) rotate(450deg); opacity: 0; }
    }

/* — Purim Celebration Spark — */
.purim-spark {
      position: absolute; z-index: 9;
      width: 3px; height: 3px;
      border-radius: 50%;
      animation: purimBurst var(--dur,3s) ease-out var(--delay,0s) infinite;
    }

@keyframes purimBurst {
      0% { transform: translate(0,0) scale(1); opacity: 0; }
      10% { opacity: .7; }
      40% { transform: translate(var(--dx,15px),var(--dy,-20px)) scale(.5); opacity: .3; }
      100% { transform: translate(calc(var(--dx,15px)*2),calc(var(--dy,-20px)*2)) scale(.1); opacity: 0; }
    }

""",
}


# ═══════════════════════════════════════════════════════════════════
# HTML ENHANCEMENTS — particle elements inserted before </section>
# ═══════════════════════════════════════════════════════════════════

HTML_ENHANCEMENTS = {
    "joshua": {
        "scene-crossing": """
  <!-- Water spray particles -->
  <div class="crossing-spray" style="left:20%; --dur:2.8s; --delay:0s;" aria-hidden="true"></div>
  <div class="crossing-spray" style="left:38%; --dur:3.5s; --delay:0.8s;" aria-hidden="true"></div>
  <div class="crossing-spray" style="left:56%; --dur:2.5s; --delay:1.6s;" aria-hidden="true"></div>
  <div class="crossing-spray" style="left:74%; --dur:3.2s; --delay:0.4s;" aria-hidden="true"></div>
  <div class="crossing-spray" style="left:85%; --dur:2.9s; --delay:2.2s;" aria-hidden="true"></div>""",
        "scene-jericho": """
  <!-- Collapsing wall dust -->
  <div class="jericho-dust" style="left:18%; --dur:5s; --delay:0s;" aria-hidden="true"></div>
  <div class="jericho-dust" style="left:35%; --dur:6s; --delay:1.2s;" aria-hidden="true"></div>
  <div class="jericho-dust" style="left:52%; --dur:4.5s; --delay:2.5s;" aria-hidden="true"></div>
  <div class="jericho-dust" style="left:68%; --dur:5.5s; --delay:0.8s;" aria-hidden="true"></div>
  <div class="jericho-dust" style="left:82%; --dur:4.8s; --delay:3.2s;" aria-hidden="true"></div>""",
        "scene-conquest": """
  <!-- Battle embers -->
  <div class="conquest-ember" style="left:15%; --dur:5s; --delay:0s;" aria-hidden="true"></div>
  <div class="conquest-ember" style="left:32%; --dur:6.5s; --delay:1.5s;" aria-hidden="true"></div>
  <div class="conquest-ember" style="left:55%; --dur:4.5s; --delay:3s;" aria-hidden="true"></div>
  <div class="conquest-ember" style="left:72%; --dur:5.8s; --delay:0.6s;" aria-hidden="true"></div>
  <div class="conquest-ember" style="left:88%; --dur:5.2s; --delay:2.2s;" aria-hidden="true"></div>""",
        "scene-division": """
  <!-- Golden motes -->
  <div class="division-mote" style="top:25%; left:20%; --dur:7s; --delay:0s; --dx:10px; --dy:-16px;" aria-hidden="true"></div>
  <div class="division-mote" style="top:40%; left:45%; --dur:8s; --delay:1.5s; --dx:-8px; --dy:-12px;" aria-hidden="true"></div>
  <div class="division-mote" style="top:55%; left:70%; --dur:6.5s; --delay:3s; --dx:14px; --dy:-20px;" aria-hidden="true"></div>
  <div class="division-mote" style="top:35%; left:85%; --dur:7.5s; --delay:0.8s; --dx:-12px; --dy:-14px;" aria-hidden="true"></div>""",
        "scene-farewell": """
  <!-- Farewell fire sparks -->
  <div class="farewell-spark" style="left:40%; --dur:3.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="farewell-spark" style="left:48%; --dur:4.2s; --delay:0.8s;" aria-hidden="true"></div>
  <div class="farewell-spark" style="left:55%; --dur:3.8s; --delay:1.6s;" aria-hidden="true"></div>
  <div class="farewell-spark" style="left:45%; --dur:4.5s; --delay:2.4s;" aria-hidden="true"></div>
  <div class="farewell-spark" style="left:52%; --dur:3.2s; --delay:3.2s;" aria-hidden="true"></div>""",
    },

    "judges": {
        "scene-deborah": """
  <!-- Battle sparks -->
  <div class="battle-spark" style="top:30%; left:25%; --dur:2.5s; --delay:0s; --dx:15px; --dy:-18px;" aria-hidden="true"></div>
  <div class="battle-spark" style="top:45%; left:55%; --dur:3s; --delay:0.6s; --dx:-12px; --dy:-22px;" aria-hidden="true"></div>
  <div class="battle-spark" style="top:35%; left:72%; --dur:2.8s; --delay:1.2s; --dx:18px; --dy:-15px;" aria-hidden="true"></div>
  <div class="battle-spark" style="top:50%; left:40%; --dur:3.2s; --delay:1.8s; --dx:-20px; --dy:-12px;" aria-hidden="true"></div>""",
        "scene-gideon": """
  <!-- 300 torches glow -->
  <div class="torch-glow" style="top:40%; left:12%; --dur:2s; --delay:0s;" aria-hidden="true"></div>
  <div class="torch-glow" style="top:38%; left:22%; --dur:2.3s; --delay:0.3s;" aria-hidden="true"></div>
  <div class="torch-glow" style="top:42%; left:32%; --dur:1.8s; --delay:0.6s;" aria-hidden="true"></div>
  <div class="torch-glow" style="top:36%; left:42%; --dur:2.5s; --delay:0.9s;" aria-hidden="true"></div>
  <div class="torch-glow" style="top:44%; left:52%; --dur:2.1s; --delay:1.2s;" aria-hidden="true"></div>
  <div class="torch-glow" style="top:37%; left:62%; --dur:2.4s; --delay:1.5s;" aria-hidden="true"></div>
  <div class="torch-glow" style="top:41%; left:72%; --dur:1.9s; --delay:1.8s;" aria-hidden="true"></div>
  <div class="torch-glow" style="top:39%; left:82%; --dur:2.2s; --delay:2.1s;" aria-hidden="true"></div>""",
        "scene-samson": """
  <!-- Temple debris -->
  <div class="temple-debris" style="left:20%; --dur:3.5s; --delay:0s; transform:rotate(12deg);" aria-hidden="true"></div>
  <div class="temple-debris" style="left:35%; --dur:4.2s; --delay:0.8s; transform:rotate(-18deg);" aria-hidden="true"></div>
  <div class="temple-debris" style="left:50%; --dur:3.8s; --delay:1.5s; transform:rotate(25deg);" aria-hidden="true"></div>
  <div class="temple-debris" style="left:65%; --dur:4.5s; --delay:0.3s; transform:rotate(-8deg);" aria-hidden="true"></div>
  <div class="temple-debris" style="left:78%; --dur:3.2s; --delay:2.2s; transform:rotate(30deg);" aria-hidden="true"></div>""",
        "scene-cycle": """
  <!-- Cycle spiral particles -->
  <div class="cycle-particle" style="top:45%; left:48%; --dur:7s; --delay:0s; --r:60px; background:rgba(200,60,60,.4);" aria-hidden="true"></div>
  <div class="cycle-particle" style="top:45%; left:48%; --dur:8s; --delay:1s; --r:85px; background:rgba(60,60,200,.35);" aria-hidden="true"></div>
  <div class="cycle-particle" style="top:45%; left:48%; --dur:9s; --delay:2s; --r:110px; background:rgba(200,180,60,.3);" aria-hidden="true"></div>
  <div class="cycle-particle" style="top:45%; left:48%; --dur:6.5s; --delay:3s; --r:45px; background:rgba(60,180,60,.35);" aria-hidden="true"></div>""",
        "scene-darkness": """
  <!-- Darkness fog -->
  <div id="darkness-fog" aria-hidden="true"></div>""",
    },

    "ruth": {
        "scene-naomi": """
  <!-- Wheat motes drifting -->
  <div class="wheat-mote" style="left:15%; --dur:6s; --delay:0s;" aria-hidden="true"></div>
  <div class="wheat-mote" style="left:35%; --dur:7.5s; --delay:1.5s;" aria-hidden="true"></div>
  <div class="wheat-mote" style="left:55%; --dur:6.5s; --delay:3s;" aria-hidden="true"></div>
  <div class="wheat-mote" style="left:75%; --dur:8s; --delay:0.8s;" aria-hidden="true"></div>""",
        "scene-gleaning": """
  <!-- Sunbeams -->
  <div class="sunbeam" style="left:18%; --dur:7s; --delay:0s; --rot:-5deg;" aria-hidden="true"></div>
  <div class="sunbeam" style="left:35%; --dur:8.5s; --delay:1s; --rot:-2deg;" aria-hidden="true"></div>
  <div class="sunbeam" style="left:52%; --dur:7.5s; --delay:2s; --rot:1deg;" aria-hidden="true"></div>
  <div class="sunbeam" style="left:70%; --dur:9s; --delay:0.5s; --rot:4deg;" aria-hidden="true"></div>
  <div class="sunbeam" style="left:85%; --dur:8s; --delay:1.5s; --rot:6deg;" aria-hidden="true"></div>
  <!-- Wheat motes -->
  <div class="wheat-mote" style="left:25%; --dur:7s; --delay:0.5s;" aria-hidden="true"></div>
  <div class="wheat-mote" style="left:60%; --dur:8s; --delay:2s;" aria-hidden="true"></div>
  <div class="wheat-mote" style="left:80%; --dur:6.5s; --delay:3.5s;" aria-hidden="true"></div>""",
        "scene-threshing": """
  <!-- Chaff particles -->
  <div class="chaff" style="left:30%; --dur:4s; --delay:0s; --dx:18px;" aria-hidden="true"></div>
  <div class="chaff" style="left:42%; --dur:5s; --delay:0.8s; --dx:-15px;" aria-hidden="true"></div>
  <div class="chaff" style="left:55%; --dur:4.5s; --delay:1.6s; --dx:22px;" aria-hidden="true"></div>
  <div class="chaff" style="left:48%; --dur:5.5s; --delay:2.4s; --dx:-20px;" aria-hidden="true"></div>
  <div class="chaff" style="left:62%; --dur:3.8s; --delay:3.2s; --dx:12px;" aria-hidden="true"></div>""",
        "scene-redemption": """
  <!-- Golden redemption rings -->
  <div class="redemption-ring" style="top:40%; left:46%; --dur:3.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="redemption-ring" style="top:40%; left:46%; --dur:3.5s; --delay:1.2s;" aria-hidden="true"></div>
  <div class="redemption-ring" style="top:40%; left:46%; --dur:3.5s; --delay:2.4s;" aria-hidden="true"></div>""",
        "scene-lineage": """
  <!-- Star twinkles -->
  <div class="lineage-star" style="top:12%; left:18%; --dur:2.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="lineage-star" style="top:22%; left:42%; --dur:3.2s; --delay:0.8s;" aria-hidden="true"></div>
  <div class="lineage-star" style="top:8%; left:65%; --dur:2.8s; --delay:1.5s;" aria-hidden="true"></div>
  <div class="lineage-star" style="top:18%; left:82%; --dur:3.5s; --delay:0.3s;" aria-hidden="true"></div>
  <div class="lineage-star" style="top:28%; left:30%; --dur:2.2s; --delay:2.2s;" aria-hidden="true"></div>
  <div class="lineage-star" style="top:15%; left:55%; --dur:3s; --delay:1.8s;" aria-hidden="true"></div>""",
    },

    "1samuel": {
        "scene-birth": """
  <!-- Temple candlelights -->
  <div class="temple-candle" style="top:35%; left:15%; --dur:2.2s; --delay:0s;" aria-hidden="true"></div>
  <div class="temple-candle" style="top:38%; left:30%; --dur:2.8s; --delay:0.5s;" aria-hidden="true"></div>
  <div class="temple-candle" style="top:32%; left:70%; --dur:2.5s; --delay:1s;" aria-hidden="true"></div>
  <div class="temple-candle" style="top:36%; left:85%; --dur:3s; --delay:1.5s;" aria-hidden="true"></div>""",
        "scene-ark": """
  <!-- Ark glory particles -->
  <div class="ark-glory" style="top:30%; left:42%; --dur:4.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="ark-glory" style="top:35%; left:50%; --dur:5.2s; --delay:1s;" aria-hidden="true"></div>
  <div class="ark-glory" style="top:28%; left:56%; --dur:4.8s; --delay:2s;" aria-hidden="true"></div>
  <div class="ark-glory" style="top:38%; left:47%; --dur:5.5s; --delay:0.5s;" aria-hidden="true"></div>
  <div class="ark-glory" style="top:32%; left:53%; --dur:4.2s; --delay:2.8s;" aria-hidden="true"></div>""",
        "scene-saul": """
  <!-- Crown sparkles -->
  <div class="crown-sparkle" style="top:22%; left:46%; --dur:2.8s; --delay:0s;" aria-hidden="true"></div>
  <div class="crown-sparkle" style="top:20%; left:50%; --dur:3.2s; --delay:0.6s;" aria-hidden="true"></div>
  <div class="crown-sparkle" style="top:24%; left:54%; --dur:2.5s; --delay:1.2s;" aria-hidden="true"></div>
  <div class="crown-sparkle" style="top:18%; left:48%; --dur:3.5s; --delay:1.8s;" aria-hidden="true"></div>""",
        "scene-david": """
  <!-- Sling stone trails -->
  <div class="sling-trail" style="top:42%; left:50%; --dur:2.2s; --delay:0s;" aria-hidden="true"></div>
  <div class="sling-trail" style="top:44%; left:50%; --dur:2.2s; --delay:0.7s;" aria-hidden="true"></div>
  <div class="sling-trail" style="top:40%; left:50%; --dur:2.2s; --delay:1.4s;" aria-hidden="true"></div>""",
        "scene-fall": """
  <!-- No extra HTML needed — uses ::after pseudo-element -->""",
    },

    "2samuel": {
        "scene-coronation": """
  <!-- Coronation confetti -->
  <div class="coronation-confetti" style="left:15%; --dur:4.5s; --delay:0s; background:rgba(255,215,0,.5);" aria-hidden="true"></div>
  <div class="coronation-confetti" style="left:28%; --dur:5.2s; --delay:0.8s; background:rgba(200,60,60,.4);" aria-hidden="true"></div>
  <div class="coronation-confetti" style="left:42%; --dur:4.8s; --delay:1.6s; background:rgba(60,60,200,.4);" aria-hidden="true"></div>
  <div class="coronation-confetti" style="left:58%; --dur:5.5s; --delay:0.4s; background:rgba(255,215,0,.45);" aria-hidden="true"></div>
  <div class="coronation-confetti" style="left:72%; --dur:4.2s; --delay:2.2s; background:rgba(60,180,60,.4);" aria-hidden="true"></div>
  <div class="coronation-confetti" style="left:85%; --dur:5s; --delay:1.2s; background:rgba(200,60,60,.35);" aria-hidden="true"></div>""",
        "scene-ark": """
  <!-- Procession glow -->
  <div class="procession-glow" style="top:35%; left:30%; --dur:2.8s; --delay:0s;" aria-hidden="true"></div>
  <div class="procession-glow" style="top:38%; left:45%; --dur:3.2s; --delay:0.5s;" aria-hidden="true"></div>
  <div class="procession-glow" style="top:33%; left:60%; --dur:2.5s; --delay:1s;" aria-hidden="true"></div>
  <div class="procession-glow" style="top:40%; left:72%; --dur:3.5s; --delay:1.5s;" aria-hidden="true"></div>""",
        "scene-bathsheba": """
  <!-- Night rain -->
  <div class="night-rain" style="left:5%; --spd:0.8s; --delay:0s;" aria-hidden="true"></div>
  <div class="night-rain" style="left:12%; --spd:1.1s; --delay:0.2s;" aria-hidden="true"></div>
  <div class="night-rain" style="left:22%; --spd:0.9s; --delay:0.5s;" aria-hidden="true"></div>
  <div class="night-rain" style="left:35%; --spd:1.3s; --delay:0.1s;" aria-hidden="true"></div>
  <div class="night-rain" style="left:48%; --spd:0.85s; --delay:0.7s;" aria-hidden="true"></div>
  <div class="night-rain" style="left:58%; --spd:1.0s; --delay:0.3s;" aria-hidden="true"></div>
  <div class="night-rain" style="left:68%; --spd:1.2s; --delay:0.6s;" aria-hidden="true"></div>
  <div class="night-rain" style="left:78%; --spd:0.95s; --delay:0.9s;" aria-hidden="true"></div>
  <div class="night-rain" style="left:88%; --spd:1.05s; --delay:0.4s;" aria-hidden="true"></div>
  <div class="night-rain" style="left:95%; --spd:0.88s; --delay:0.8s;" aria-hidden="true"></div>""",
        "scene-absalom": """
  <!-- Wind streaks -->
  <div class="wind-streak" style="top:20%; width:35%; --dur:3.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="wind-streak" style="top:35%; width:28%; --dur:4.2s; --delay:1.2s;" aria-hidden="true"></div>
  <div class="wind-streak" style="top:50%; width:40%; --dur:5s; --delay:0.5s;" aria-hidden="true"></div>
  <div class="wind-streak" style="top:65%; width:32%; --dur:3.8s; --delay:2s;" aria-hidden="true"></div>""",
        "scene-covenant": """
  <!-- Divine light rings -->
  <div class="covenant-ring" style="top:35%; left:46%; width:60px; height:60px; --dur:3.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="covenant-ring" style="top:35%; left:46%; width:60px; height:60px; --dur:3.5s; --delay:1.2s;" aria-hidden="true"></div>
  <div class="covenant-ring" style="top:35%; left:46%; width:60px; height:60px; --dur:3.5s; --delay:2.4s;" aria-hidden="true"></div>""",
    },

    "1kings": {
        "scene-wisdom": """
  <!-- Golden wisdom motes -->
  <div class="wisdom-mote" style="top:25%; left:20%; --dur:6s; --delay:0s; --dx:8px; --dy:-14px;" aria-hidden="true"></div>
  <div class="wisdom-mote" style="top:40%; left:45%; --dur:7s; --delay:1.5s; --dx:-10px; --dy:-18px;" aria-hidden="true"></div>
  <div class="wisdom-mote" style="top:30%; left:70%; --dur:5.5s; --delay:3s; --dx:12px; --dy:-12px;" aria-hidden="true"></div>
  <div class="wisdom-mote" style="top:50%; left:30%; --dur:6.5s; --delay:0.8s; --dx:-6px; --dy:-20px;" aria-hidden="true"></div>
  <div class="wisdom-mote" style="top:35%; left:82%; --dur:7.5s; --delay:2s; --dx:14px; --dy:-16px;" aria-hidden="true"></div>""",
        "scene-temple": """
  <!-- Temple sparkles -->
  <div class="temple-sparkle" style="top:22%; left:42%; --dur:2.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="temple-sparkle" style="top:28%; left:50%; --dur:3s; --delay:0.6s;" aria-hidden="true"></div>
  <div class="temple-sparkle" style="top:18%; left:55%; --dur:2.8s; --delay:1.2s;" aria-hidden="true"></div>
  <div class="temple-sparkle" style="top:32%; left:48%; --dur:3.2s; --delay:1.8s;" aria-hidden="true"></div>
  <div class="temple-sparkle" style="top:25%; left:58%; --dur:2.2s; --delay:2.4s;" aria-hidden="true"></div>
  <div class="temple-sparkle" style="top:20%; left:44%; --dur:3.5s; --delay:3s;" aria-hidden="true"></div>""",
        "scene-sheba": """
  <!-- Incense particles -->
  <div class="incense-particle" style="left:35%; --dur:5.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="incense-particle" style="left:45%; --dur:6.5s; --delay:1.2s;" aria-hidden="true"></div>
  <div class="incense-particle" style="left:55%; --dur:5s; --delay:2.5s;" aria-hidden="true"></div>
  <div class="incense-particle" style="left:65%; --dur:7s; --delay:0.5s;" aria-hidden="true"></div>""",
        "scene-division": """
  <!-- (crack uses ::after pseudo) -->""",
        "scene-carmel": """
  <!-- Carmel fire sparks -->
  <div class="carmel-spark" style="left:42%; --dur:3s; --delay:0s;" aria-hidden="true"></div>
  <div class="carmel-spark" style="left:48%; --dur:3.5s; --delay:0.6s;" aria-hidden="true"></div>
  <div class="carmel-spark" style="left:52%; --dur:2.8s; --delay:1.2s;" aria-hidden="true"></div>
  <div class="carmel-spark" style="left:45%; --dur:4s; --delay:1.8s;" aria-hidden="true"></div>
  <div class="carmel-spark" style="left:55%; --dur:3.2s; --delay:2.4s;" aria-hidden="true"></div>
  <div class="carmel-spark" style="left:50%; --dur:3.8s; --delay:3s;" aria-hidden="true"></div>""",
    },

    "2kings": {
        "scene-chariot": """
  <!-- Fiery chariot sparks -->
  <div class="chariot-spark" style="left:42%; --dur:2.5s; --delay:0s; --dx:-5px;" aria-hidden="true"></div>
  <div class="chariot-spark" style="left:48%; --dur:3s; --delay:0.5s; --dx:8px;" aria-hidden="true"></div>
  <div class="chariot-spark" style="left:52%; --dur:2.8s; --delay:1s; --dx:-3px;" aria-hidden="true"></div>
  <div class="chariot-spark" style="left:45%; --dur:3.5s; --delay:1.5s; --dx:6px;" aria-hidden="true"></div>
  <div class="chariot-spark" style="left:55%; --dur:2.2s; --delay:2s; --dx:-8px;" aria-hidden="true"></div>
  <div class="chariot-spark" style="left:50%; --dur:3.2s; --delay:2.5s; --dx:4px;" aria-hidden="true"></div>""",
        "scene-miracles": """
  <!-- Miracle ripples -->
  <div class="miracle-ripple" style="top:42%; left:46%; width:50px; height:50px; --dur:3.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="miracle-ripple" style="top:42%; left:46%; width:50px; height:50px; --dur:3.5s; --delay:1.2s;" aria-hidden="true"></div>
  <div class="miracle-ripple" style="top:42%; left:46%; width:50px; height:50px; --dur:3.5s; --delay:2.4s;" aria-hidden="true"></div>""",
        "scene-fall": """
  <!-- Siege smoke -->
  <div class="siege-smoke" style="left:25%; --dur:5.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="siege-smoke" style="left:42%; --dur:6.5s; --delay:1.5s;" aria-hidden="true"></div>
  <div class="siege-smoke" style="left:60%; --dur:5s; --delay:3s;" aria-hidden="true"></div>
  <div class="siege-smoke" style="left:75%; --dur:7s; --delay:0.8s;" aria-hidden="true"></div>""",
        "scene-prayer": """
  <!-- Prayer light rays -->
  <div class="prayer-ray" style="left:42%; --dur:4.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="prayer-ray" style="left:48%; --dur:5.2s; --delay:0.8s;" aria-hidden="true"></div>
  <div class="prayer-ray" style="left:52%; --dur:4.8s; --delay:1.6s;" aria-hidden="true"></div>
  <div class="prayer-ray" style="left:55%; --dur:5.5s; --delay:2.4s;" aria-hidden="true"></div>""",
        "scene-exile": """
  <!-- Exile embers -->
  <div class="exile-ember" style="left:18%; --dur:4.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="exile-ember" style="left:35%; --dur:5.5s; --delay:1.2s;" aria-hidden="true"></div>
  <div class="exile-ember" style="left:55%; --dur:4s; --delay:2.5s;" aria-hidden="true"></div>
  <div class="exile-ember" style="left:72%; --dur:6s; --delay:0.5s;" aria-hidden="true"></div>
  <div class="exile-ember" style="left:88%; --dur:5s; --delay:3.2s;" aria-hidden="true"></div>""",
    },

    "1chronicles": {
        "scene-genealogy": """
  <!-- Genealogy connecting lines -->
  <div class="genealogy-line" style="top:20%; left:25%; --dur:4s; --delay:0s; --h:35px;" aria-hidden="true"></div>
  <div class="genealogy-line" style="top:30%; left:45%; --dur:5s; --delay:1s; --h:45px;" aria-hidden="true"></div>
  <div class="genealogy-line" style="top:25%; left:65%; --dur:4.5s; --delay:2s; --h:40px;" aria-hidden="true"></div>
  <div class="genealogy-line" style="top:35%; left:80%; --dur:5.5s; --delay:0.5s; --h:30px;" aria-hidden="true"></div>""",
        "scene-king": """
  <!-- Crown glow -->
  <div class="crown-glow" style="top:18%; left:46%; --dur:2.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="crown-glow" style="top:16%; left:50%; --dur:3s; --delay:0.5s;" aria-hidden="true"></div>
  <div class="crown-glow" style="top:20%; left:54%; --dur:2.8s; --delay:1s;" aria-hidden="true"></div>""",
        "scene-ark": """
  <!-- Ark spirit particles -->
  <div class="ark-spirit" style="top:30%; left:42%; --dur:5.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="ark-spirit" style="top:35%; left:50%; --dur:6s; --delay:1s;" aria-hidden="true"></div>
  <div class="ark-spirit" style="top:28%; left:55%; --dur:5s; --delay:2s;" aria-hidden="true"></div>
  <div class="ark-spirit" style="top:38%; left:48%; --dur:6.5s; --delay:0.5s;" aria-hidden="true"></div>
  <div class="ark-spirit" style="top:32%; left:52%; --dur:5.8s; --delay:2.5s;" aria-hidden="true"></div>""",
        "scene-prepare": """
  <!-- Material sparkles -->
  <div class="material-sparkle" style="top:30%; left:22%; --dur:3.5s; --delay:0s; background:rgba(255,215,0,.5);" aria-hidden="true"></div>
  <div class="material-sparkle" style="top:40%; left:38%; --dur:4s; --delay:0.8s; background:rgba(200,200,210,.5);" aria-hidden="true"></div>
  <div class="material-sparkle" style="top:25%; left:55%; --dur:3.2s; --delay:1.6s; background:rgba(255,215,0,.45);" aria-hidden="true"></div>
  <div class="material-sparkle" style="top:45%; left:72%; --dur:4.5s; --delay:0.4s; background:rgba(180,140,80,.5);" aria-hidden="true"></div>
  <div class="material-sparkle" style="top:35%; left:85%; --dur:3.8s; --delay:2.4s; background:rgba(200,200,210,.4);" aria-hidden="true"></div>""",
        "scene-prayer": """
  <!-- Prayer ascending lights -->
  <div class="prayer-light" style="left:42%; --dur:4.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="prayer-light" style="left:48%; --dur:5.2s; --delay:1s;" aria-hidden="true"></div>
  <div class="prayer-light" style="left:52%; --dur:4.8s; --delay:2s;" aria-hidden="true"></div>
  <div class="prayer-light" style="left:45%; --dur:5.5s; --delay:0.5s;" aria-hidden="true"></div>
  <div class="prayer-light" style="left:55%; --dur:4.2s; --delay:2.5s;" aria-hidden="true"></div>""",
    },

    "2chronicles": {
        "scene-dedication": """
  <!-- Glory cloud particles -->
  <div class="glory-cloud" style="top:20%; left:28%; --dur:7s; --delay:0s;" aria-hidden="true"></div>
  <div class="glory-cloud" style="top:25%; left:45%; --dur:8.5s; --delay:1.5s;" aria-hidden="true"></div>
  <div class="glory-cloud" style="top:18%; left:62%; --dur:7.5s; --delay:3s;" aria-hidden="true"></div>
  <div class="glory-cloud" style="top:28%; left:75%; --dur:9s; --delay:0.8s;" aria-hidden="true"></div>""",
        "scene-jehoshaphat": """
  <!-- Trumpet shockwaves -->
  <div class="trumpet-wave" style="top:40%; left:46%; width:50px; height:50px; --dur:3s; --delay:0s;" aria-hidden="true"></div>
  <div class="trumpet-wave" style="top:40%; left:46%; width:50px; height:50px; --dur:3s; --delay:1s;" aria-hidden="true"></div>
  <div class="trumpet-wave" style="top:40%; left:46%; width:50px; height:50px; --dur:3s; --delay:2s;" aria-hidden="true"></div>""",
        "scene-repair": """
  <!-- Repair sparks -->
  <div class="repair-spark" style="top:40%; left:42%; --dur:1.8s; --delay:0s; --dx:10px; --dy:-12px;" aria-hidden="true"></div>
  <div class="repair-spark" style="top:42%; left:55%; --dur:2.2s; --delay:0.5s; --dx:-8px; --dy:-15px;" aria-hidden="true"></div>
  <div class="repair-spark" style="top:38%; left:48%; --dur:1.5s; --delay:1s; --dx:14px; --dy:-8px;" aria-hidden="true"></div>
  <div class="repair-spark" style="top:44%; left:52%; --dur:2s; --delay:1.5s; --dx:-12px; --dy:-10px;" aria-hidden="true"></div>""",
        "scene-revival": """
  <!-- Revival fire sparks -->
  <div class="revival-spark" style="left:40%; --dur:3.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="revival-spark" style="left:48%; --dur:4.2s; --delay:0.8s;" aria-hidden="true"></div>
  <div class="revival-spark" style="left:52%; --dur:3.8s; --delay:1.6s;" aria-hidden="true"></div>
  <div class="revival-spark" style="left:45%; --dur:4.5s; --delay:2.4s;" aria-hidden="true"></div>
  <div class="revival-spark" style="left:55%; --dur:3.2s; --delay:3.2s;" aria-hidden="true"></div>""",
        "scene-exile": """
  <!-- Exile chain particles -->
  <div class="exile-chain" style="top:55%; left:20%; --dur:2.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="exile-chain" style="top:58%; left:35%; --dur:3s; --delay:0.5s;" aria-hidden="true"></div>
  <div class="exile-chain" style="top:52%; left:50%; --dur:2.8s; --delay:1s;" aria-hidden="true"></div>
  <div class="exile-chain" style="top:56%; left:65%; --dur:3.2s; --delay:1.5s;" aria-hidden="true"></div>
  <div class="exile-chain" style="top:60%; left:80%; --dur:2.5s; --delay:2s;" aria-hidden="true"></div>""",
    },

    "ezra": {
        "scene-decree": """
  <!-- Decree golden motes -->
  <div class="decree-mote" style="top:25%; left:22%; --dur:5.5s; --delay:0s; --dx:10px; --dy:-14px;" aria-hidden="true"></div>
  <div class="decree-mote" style="top:35%; left:45%; --dur:6.5s; --delay:1.5s; --dx:-8px; --dy:-18px;" aria-hidden="true"></div>
  <div class="decree-mote" style="top:30%; left:68%; --dur:5s; --delay:3s; --dx:12px; --dy:-12px;" aria-hidden="true"></div>
  <div class="decree-mote" style="top:40%; left:82%; --dur:7s; --delay:0.8s; --dx:-6px; --dy:-20px;" aria-hidden="true"></div>""",
        "scene-return": """
  <!-- Return dust trail -->
  <div class="return-dust" style="left:20%; --dur:4.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="return-dust" style="left:38%; --dur:5.5s; --delay:1.2s;" aria-hidden="true"></div>
  <div class="return-dust" style="left:56%; --dur:4s; --delay:2.5s;" aria-hidden="true"></div>
  <div class="return-dust" style="left:74%; --dur:5s; --delay:0.5s;" aria-hidden="true"></div>""",
        "scene-foundation": """
  <!-- Foundation sparkles -->
  <div class="foundation-sparkle" style="top:42%; left:38%; --dur:2.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="foundation-sparkle" style="top:38%; left:48%; --dur:3s; --delay:0.6s;" aria-hidden="true"></div>
  <div class="foundation-sparkle" style="top:45%; left:55%; --dur:2.8s; --delay:1.2s;" aria-hidden="true"></div>
  <div class="foundation-sparkle" style="top:40%; left:62%; --dur:3.2s; --delay:1.8s;" aria-hidden="true"></div>
  <div class="foundation-sparkle" style="top:44%; left:42%; --dur:2.2s; --delay:2.4s;" aria-hidden="true"></div>""",
        "scene-complete": """
  <!-- Temple glory rings -->
  <div class="complete-glory" style="top:32%; left:45%; width:55px; height:55px; --dur:4.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="complete-glory" style="top:32%; left:45%; width:55px; height:55px; --dur:4.5s; --delay:1.5s;" aria-hidden="true"></div>
  <div class="complete-glory" style="top:32%; left:45%; width:55px; height:55px; --dur:4.5s; --delay:3s;" aria-hidden="true"></div>""",
        "scene-reform": """
  <!-- Reform tears -->
  <div class="reform-tear" style="left:18%; --dur:3.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="reform-tear" style="left:32%; --dur:4.2s; --delay:0.8s;" aria-hidden="true"></div>
  <div class="reform-tear" style="left:48%; --dur:3.8s; --delay:1.6s;" aria-hidden="true"></div>
  <div class="reform-tear" style="left:62%; --dur:4.5s; --delay:2.4s;" aria-hidden="true"></div>
  <div class="reform-tear" style="left:78%; --dur:3.2s; --delay:3.2s;" aria-hidden="true"></div>""",
    },

    "nehemiah": {
        "scene-prayer": """
  <!-- Prayer ascending motes -->
  <div class="prayer-mote" style="left:42%; --dur:4.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="prayer-mote" style="left:48%; --dur:5.2s; --delay:1s;" aria-hidden="true"></div>
  <div class="prayer-mote" style="left:52%; --dur:4.8s; --delay:2s;" aria-hidden="true"></div>
  <div class="prayer-mote" style="left:45%; --dur:5.5s; --delay:0.5s;" aria-hidden="true"></div>
  <div class="prayer-mote" style="left:55%; --dur:4.2s; --delay:2.5s;" aria-hidden="true"></div>""",
        "scene-wall": """
  <!-- Construction dust -->
  <div class="wall-dust" style="top:35%; left:22%; --dur:3.5s; --delay:0s; --dx:10px;" aria-hidden="true"></div>
  <div class="wall-dust" style="top:40%; left:38%; --dur:4.2s; --delay:0.8s; --dx:-8px;" aria-hidden="true"></div>
  <div class="wall-dust" style="top:32%; left:55%; --dur:3.8s; --delay:1.6s; --dx:12px;" aria-hidden="true"></div>
  <div class="wall-dust" style="top:42%; left:72%; --dur:4.5s; --delay:2.4s; --dx:-6px;" aria-hidden="true"></div>""",
        "scene-opposition": """
  <!-- Arrow trails -->
  <div class="arrow-trail" style="top:30%; --dur:2.5s; --delay:0s; --rot:3deg;" aria-hidden="true"></div>
  <div class="arrow-trail" style="top:42%; --dur:3s; --delay:0.8s; --rot:-5deg;" aria-hidden="true"></div>
  <div class="arrow-trail" style="top:36%; --dur:2.8s; --delay:1.6s; --rot:7deg;" aria-hidden="true"></div>
  <div class="arrow-trail" style="top:48%; --dur:3.2s; --delay:2.4s; --rot:-3deg;" aria-hidden="true"></div>""",
        "scene-law": """
  <!-- Scroll shimmers -->
  <div class="scroll-shimmer" style="top:28%; left:42%; --dur:3.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="scroll-shimmer" style="top:32%; left:50%; --dur:4s; --delay:0.8s;" aria-hidden="true"></div>
  <div class="scroll-shimmer" style="top:25%; left:55%; --dur:3.2s; --delay:1.6s;" aria-hidden="true"></div>
  <div class="scroll-shimmer" style="top:35%; left:48%; --dur:4.5s; --delay:2.4s;" aria-hidden="true"></div>""",
        "scene-covenant": """
  <!-- Covenant fire sparks -->
  <div class="covenant-spark" style="left:42%; --dur:3.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="covenant-spark" style="left:48%; --dur:4.2s; --delay:0.8s;" aria-hidden="true"></div>
  <div class="covenant-spark" style="left:52%; --dur:3.8s; --delay:1.6s;" aria-hidden="true"></div>
  <div class="covenant-spark" style="left:45%; --dur:4.5s; --delay:2.4s;" aria-hidden="true"></div>
  <div class="covenant-spark" style="left:55%; --dur:3.2s; --delay:3.2s;" aria-hidden="true"></div>""",
    },

    "esther": {
        "scene-queen": """
  <!-- Palace sparkles -->
  <div class="palace-sparkle" style="top:18%; left:22%; --dur:2.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="palace-sparkle" style="top:25%; left:42%; --dur:3s; --delay:0.6s;" aria-hidden="true"></div>
  <div class="palace-sparkle" style="top:15%; left:58%; --dur:2.8s; --delay:1.2s;" aria-hidden="true"></div>
  <div class="palace-sparkle" style="top:22%; left:75%; --dur:3.2s; --delay:1.8s;" aria-hidden="true"></div>
  <div class="palace-sparkle" style="top:28%; left:88%; --dur:2.2s; --delay:2.4s;" aria-hidden="true"></div>""",
        "scene-plot": """
  <!-- Shadow mist -->
  <div class="shadow-mist" style="top:30%; left:15%; --dur:6s; --delay:0s;" aria-hidden="true"></div>
  <div class="shadow-mist" style="top:45%; left:40%; --dur:7.5s; --delay:1.5s;" aria-hidden="true"></div>
  <div class="shadow-mist" style="top:35%; left:65%; --dur:6.5s; --delay:3s;" aria-hidden="true"></div>
  <div class="shadow-mist" style="top:50%; left:80%; --dur:8s; --delay:0.8s;" aria-hidden="true"></div>""",
        "scene-courage": """
  <!-- Courage golden rings -->
  <div class="courage-ring" style="top:38%; left:46%; width:55px; height:55px; --dur:3.5s; --delay:0s;" aria-hidden="true"></div>
  <div class="courage-ring" style="top:38%; left:46%; width:55px; height:55px; --dur:3.5s; --delay:1.2s;" aria-hidden="true"></div>
  <div class="courage-ring" style="top:38%; left:46%; width:55px; height:55px; --dur:3.5s; --delay:2.4s;" aria-hidden="true"></div>""",
        "scene-reversal": """
  <!-- Reversal confetti -->
  <div class="reversal-confetti" style="left:12%; --dur:4.5s; --delay:0s; background:rgba(255,215,0,.5);" aria-hidden="true"></div>
  <div class="reversal-confetti" style="left:28%; --dur:5.2s; --delay:0.8s; background:rgba(60,100,200,.4);" aria-hidden="true"></div>
  <div class="reversal-confetti" style="left:42%; --dur:4.8s; --delay:1.6s; background:rgba(200,60,60,.4);" aria-hidden="true"></div>
  <div class="reversal-confetti" style="left:58%; --dur:5.5s; --delay:0.4s; background:rgba(60,180,60,.4);" aria-hidden="true"></div>
  <div class="reversal-confetti" style="left:72%; --dur:4.2s; --delay:2.2s; background:rgba(255,215,0,.45);" aria-hidden="true"></div>
  <div class="reversal-confetti" style="left:88%; --dur:5s; --delay:1.2s; background:rgba(180,60,180,.35);" aria-hidden="true"></div>""",
        "scene-purim": """
  <!-- Purim celebration sparks -->
  <div class="purim-spark" style="top:20%; left:15%; --dur:2.5s; --delay:0s; --dx:18px; --dy:-22px; background:rgba(255,200,40,.6);" aria-hidden="true"></div>
  <div class="purim-spark" style="top:30%; left:35%; --dur:3s; --delay:0.5s; --dx:-15px; --dy:-18px; background:rgba(255,100,100,.5);" aria-hidden="true"></div>
  <div class="purim-spark" style="top:25%; left:55%; --dur:2.8s; --delay:1s; --dx:20px; --dy:-15px; background:rgba(100,200,255,.5);" aria-hidden="true"></div>
  <div class="purim-spark" style="top:35%; left:75%; --dur:3.2s; --delay:1.5s; --dx:-18px; --dy:-25px; background:rgba(100,255,100,.5);" aria-hidden="true"></div>
  <div class="purim-spark" style="top:28%; left:88%; --dur:2.2s; --delay:2s; --dx:12px; --dy:-20px; background:rgba(255,180,60,.55);" aria-hidden="true"></div>""",
    },
}


def enhance_scss(book):
    """Insert particle keyframes before @media (prefers-reduced-motion)."""
    filepath = f"{BASE}/{book}.scss"
    with open(filepath, "r") as f:
        content = f.read()

    extra = SCSS_ENHANCEMENTS.get(book, "")
    if not extra:
        return

    marker = "@media (prefers-reduced-motion: reduce) {"
    if marker not in content:
        print(f"  WARNING: marker not found in {book}.scss")
        return

    # Check if already enhanced — search for a unique keyframe name
    unique_markers = {
        "joshua": "splashUp", "judges": "sparkBurst", "ruth": "wheatDrift",
        "1samuel": "candlePulse", "2samuel": "confettiFall", "1kings": "sparkleGlint",
        "2kings": "sparkAscend", "1chronicles": "lineAppear", "2chronicles": "cloudDrift",
        "ezra": "decreeFloat", "nehemiah": "prayerRise", "esther": "palaceGlint",
    }
    if unique_markers.get(book, "") in content:
        print(f"  SKIP {book}.scss (already enhanced)")
        return

    content = content.replace(marker, extra + "\n" + marker)

    with open(filepath, "w") as f:
        f.write(content)
    print(f"  SCSS enhanced: {book}.scss")


def enhance_html(book):
    """Insert particle divs before each scene's closing </section>."""
    filepath = f"{BASE}/{book}.html"
    with open(filepath, "r") as f:
        content = f.read()

    scenes = HTML_ENHANCEMENTS.get(book, {})
    if not scenes:
        return

    modified = False
    for scene_id, particles in scenes.items():
        if not particles or particles.strip().startswith("<!--"):
            # Skip comments-only entries
            if "class=" not in particles:
                continue

        # Find the section by its ID, then find the closing </section>
        pattern = rf'(id="{scene_id}".*?)(</section>)'
        match = re.search(pattern, content, re.DOTALL)
        if not match:
            print(f"  WARNING: scene {scene_id} not found in {book}.html")
            continue

        # Check if already has these particles
        before_close = match.group(1)
        first_particle_class = ""
        for line in particles.split('\n'):
            if 'class="' in line:
                first_particle_class = line.split('class="')[1].split('"')[0]
                break
        if first_particle_class and first_particle_class in before_close:
            continue  # Already enhanced

        # Insert particles just before </section>
        insert_pos = match.start(2)
        content = content[:insert_pos] + "\n" + particles + "\n" + content[insert_pos:]
        modified = True

    if modified:
        with open(filepath, "w") as f:
            f.write(content)
        print(f"  HTML enhanced: {book}.html")
    else:
        print(f"  SKIP {book}.html (already enhanced or no changes)")


books = ["joshua", "judges", "ruth", "1samuel", "2samuel", "1kings",
         "2kings", "1chronicles", "2chronicles", "ezra", "nehemiah", "esther"]

for book in books:
    print(f"\n=== {book.upper()} ===")
    enhance_scss(book)
    enhance_html(book)

print("\n✓ All 12 historical books enhanced.")
