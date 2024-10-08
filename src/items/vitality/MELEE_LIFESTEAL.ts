import { ItemDescription } from "../Item";
import { LIFESTRIKE } from "./LIFESTRIKE";

export const MELEE_LIFESTEAL: ItemDescription = {
  name: 'Melee Lifesteal',
  id: 1437614329,
  type: 'vitality',
  tier: 1,
  stats: [
    [12, '%', "Melee Damage"],
    [75, '', "Bonus Health"]
  ],
  passive: {
    description: "Your melee attacks heal you for 20% of the Melee Damage dealt plus 90. This heal is 30% effective vs non-heroes.",
    cooldown: 7
  },
  buildsInto: () => LIFESTRIKE
}
