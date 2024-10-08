import { item } from '../Item';
import { ACTIVE_RELOAD } from './ACTIVE_RELOAD';
import { ALCHEMICAL_FIRE } from './ALCHEMICAL_FIRE';
import { BASIC_MAGAZINE } from './BASIC_MAGAZINE';
import { BERSERKER } from './BERSERKER';
import { BURST_FIRE } from './BURST_FIRE';
import { CLOSE_QUARTERS } from './CLOSE_QUARTERS';
import { CRIPPLING_HEADSHOT } from './CRIPPLING_HEADSHOT';
import { ESCALATING_RESILIENCE } from './ESCALATING_RESILIENCE';
import { FLEETFOOT } from './FLEETFOOT';
import { FRENZY } from './FRENZY';
import { GLASS_CANNON } from './GLASS_CANNON';
import { HEADHUNTER } from './HEADHUNTER';
import { HEADSHOT_BOOSTER } from './HEADSHOT_BOOSTER';
import { HEROIC_AURA } from './HEROIC_AURA';
import { HIGH_VELOCITY_MAG } from './HIGH_VELOCITY_MAG';
import { HOLLOW_POINT_WARD } from './HOLLOW_POINT_WARD';
import { HUNTERS_AURA } from './HUNTERS_AURA';
import { INTENSIFYING_MAGAZINE } from './INTENSIFYING_MAGAZINE';
import { KINETIC_DASH } from './KINETIC_DASH';
import { LONG_RANGE } from './LONG_RANGE';
import { LUCKY_SHOT } from './LUCKY_SHOT';
import { MELEE_CHARGE } from './MELEE_CHARGE';
import { MONSTER_ROUNDS } from './MONSTER_ROUNDS';
import { MYSTIC_SHOT } from './MYSTIC_SHOT';
import { POINT_BLANK } from './POINT_BLANK';
import { PRISTINE_EMBLEM } from './PRISTINE_EMBLEM';
import { RAPID_ROUNDS } from './RAPID_ROUNDS';
import { RESTORATIVE_SHOT } from './RESTORATIVE_SHOT';
import { RICOCHET } from './RICOCHET';
import { SHADOW_WEAVE } from './SHADOW_WEAVE';
import { SHARPSHOOTER } from './SHARPSHOOTER';
import { SILENCER } from './SILENCER';
import { SLOWING_BULLETS } from './SLOWING_BULLETS';
import { SOUL_SHREDDER_BULLETS } from './SOUL_SHREDDER_BULLETS';
import { SPIRITUAL_OVERFLOW } from './SPIRITUAL_OVERFLOW';
import { SWIFT_STRIKER } from './SWIFT_STRIKER';
import { TESLA_BULLETS } from './TESLA_BULLETS';
import { TITANIC_MAGAZINE } from './TITANIC_MAGAZINE';
import { TOXIC_BULLETS } from './TOXIC_BULLETS';
import { VAMPIRIC_BURST } from './VAMPIRIC_BURST';
import { WARP_STONE } from './WARP_STONE';

export const ALL_WEAPON_ITEMS = [
  ACTIVE_RELOAD,
  ALCHEMICAL_FIRE,
  BASIC_MAGAZINE,
  BERSERKER,
  BURST_FIRE,
  CLOSE_QUARTERS,
  CRIPPLING_HEADSHOT,
  ESCALATING_RESILIENCE,
  FLEETFOOT,
  FRENZY,
  GLASS_CANNON,
  HEADHUNTER,
  HEADSHOT_BOOSTER,
  HEROIC_AURA,
  HIGH_VELOCITY_MAG,
  HOLLOW_POINT_WARD,
  HUNTERS_AURA,
  INTENSIFYING_MAGAZINE,
  KINETIC_DASH,
  LONG_RANGE,
  LUCKY_SHOT,
  MELEE_CHARGE,
  MONSTER_ROUNDS,
  MYSTIC_SHOT,
  POINT_BLANK,
  PRISTINE_EMBLEM,
  RAPID_ROUNDS,
  RESTORATIVE_SHOT,
  RICOCHET,
  SHARPSHOOTER,
  SILENCER,
  SHADOW_WEAVE,
  SLOWING_BULLETS,
  SOUL_SHREDDER_BULLETS,
  SPIRITUAL_OVERFLOW,
  SWIFT_STRIKER,
  TESLA_BULLETS,
  TITANIC_MAGAZINE,
  TOXIC_BULLETS,
  VAMPIRIC_BURST,
  WARP_STONE,
].map((description) => item(description));
