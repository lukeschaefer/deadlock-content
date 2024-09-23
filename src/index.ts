import { Item } from "./items/Item";
import { ALL_SPIRIT_ITEMS } from "./items/spirit";
import { ALL_VITALITY_ITEMS } from "./items/vitality";
import { ALL_WEAPON_ITEMS } from "./items/weapon";


// Passes into an array.sort() to sort items by tier, whether they have active, and then name.
export function itemSort(a: Item, b: Item) {
    if(a.type === b.type) {
        if (a.tier === b.tier) {
            if (a.active && !b.active) {
                return -1;
            } else if (!a.active && b.active) {
                return 1;
            } else {
                return a.name.localeCompare(b.name);
            }
        } else {
            return a.tier.level - b.tier.level;
        }
    } else {
        // Order should be weapon -> vitality -> spirit:
        if (a.type === 'weapon') {
            return -1;
        } else if (a.type === 'vitality' && b.type === 'spirit') {
            return -1;
        } else {
            return 1;
        }
    }
}

export {
    ALL_SPIRIT_ITEMS,
    ALL_VITALITY_ITEMS,
    ALL_WEAPON_ITEMS
} 

export const ALL_ITEMS = [
    ...ALL_WEAPON_ITEMS,
    ...ALL_VITALITY_ITEMS,
    ...ALL_SPIRIT_ITEMS,
]