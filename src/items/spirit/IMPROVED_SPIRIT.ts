import { ItemDescription } from "../Item";
import { EXTRA_SPIRIT } from "./EXTRA_SPIRIT";

export const IMPROVED_SPIRIT: ItemDescription = {
  name: 'Improved Spirit',
  type: 'spirit',
  tier: 3,
  stats: [
    [23, '', "Spirit Power"],
    [2, '', "Health Regen"],
    [1, 'm/s', "Sprint Speed"],
    [75, '', "Bonus Health"]
  ],
  preReq: () => EXTRA_SPIRIT
}
