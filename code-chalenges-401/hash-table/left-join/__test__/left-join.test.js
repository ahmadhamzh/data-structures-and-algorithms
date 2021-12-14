const Hashtable = require("../../hash-table");
const leftJoin = require("../left-join");

test(" test if the Join left works  ", () => {
  let ht1 = new Hashtable(10);
  ht1.add("fond", "enamored");
  ht1.add("wrath", "anger");
  ht1.add("diligent", "employed");
  ht1.add("guide", "usher");
  let ht2 = new Hashtable(10);
  ht2.add("fond", "averse");
  ht2.add("wrath", "delight");
  ht2.add("diligent", "idle");
  ht2.add("guide", "follow");
  ht2.add("flow", "jam");
  expect(    
      {
        fond: "enamored",
        wrath: "anger",
        diligent: "employed",
        outfit: "garb",
        guide: "usher",
      },
      {
        fond: "averse",
        wrath: "delight",
        diligent: "idle",
        guide: "follow",
        flow: "jam",
      }
    
  ).toStrictEqual({"diligent": ["employed", "idle"], "flow": [null, "jam"], "fond": ["enamored", "averse"], "guide": ["usher", "follow"], "outfit": ["garb"], "wrath": ["anger", "delight"]});
});