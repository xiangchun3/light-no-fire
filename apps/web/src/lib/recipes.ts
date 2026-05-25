export interface Recipe {
  result: string;
  quantity: number;
  ingredients: { name: string; amount: number }[];
  station: string;
}

export const recipes: Recipe[] = [
  {
    result: "Iron Ingot",
    quantity: 1,
    ingredients: [{ name: "Iron Ore", amount: 2 }],
    station: "Forge",
  },
  {
    result: "Steel Bar",
    quantity: 1,
    ingredients: [{ name: "Iron Ingot", amount: 2 }, { name: "Coal", amount: 1 }],
    station: "Forge",
  },
  {
    result: "Iron Sword",
    quantity: 1,
    ingredients: [{ name: "Iron Ingot", amount: 3 }, { name: "Timber", amount: 1 }],
    station: "Anvil",
  },
  {
    result: "Healing Potion",
    quantity: 1,
    ingredients: [{ name: "Moonflower", amount: 1 }, { name: "Crystal Shard", amount: 1 }],
    station: "Alchemy Table",
  },
  {
    result: "Greater Healing Potion",
    quantity: 1,
    ingredients: [{ name: "Healing Potion", amount: 2 }, { name: "Crystal Shard", amount: 1 }],
    station: "Alchemy Table",
  },
  {
    result: "Crystal Staff",
    quantity: 1,
    ingredients: [{ name: "Crystal Shard", amount: 5 }, { name: "Timber", amount: 2 }],
    station: "Arcane Forge",
  },
  {
    result: "Fireproof Cloak",
    quantity: 1,
    ingredients: [{ name: "Dragon Scale", amount: 3 }, { name: "Leather", amount: 2 }],
    station: "Loom",
  },
  {
    result: "Mana Potion",
    quantity: 1,
    ingredients: [{ name: "Crystal Shard", amount: 2 }, { name: "Moonflower", amount: 1 }],
    station: "Alchemy Table",
  },
  {
    result: "Arrow",
    quantity: 10,
    ingredients: [{ name: "Timber", amount: 1 }, { name: "Iron Ore", amount: 1 }],
    station: "Carpenter's Bench",
  },
  {
    result: "Dragon Armor",
    quantity: 1,
    ingredients: [{ name: "Dragon Scale", amount: 10 }, { name: "Steel Bar", amount: 5 }],
    station: "Forge",
  },
];
