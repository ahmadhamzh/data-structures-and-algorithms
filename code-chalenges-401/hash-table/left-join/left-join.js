function leftJoin(ht1, ht2) {  
    let newHashtable = new Hashtable(ht1.size);
    for (let i = 0; i < ht1.table.length; i++) {
        if (ht1.table[i]) {
            for (let j = 0; j < ht1.table[i].length; j++) {
                newHashtable.add(ht1.table[i][j][0], ht1.table[i][j][1]);
            }
        }
    }
    for (let i = 0; i < ht2.table.length; i++) {
        if (ht2.table[i]) {
            for (let j = 0; j < ht2.table[i].length; j++) {
                newHashtable.add(ht2.table[i][j][0], ht2.table[i][j][1]);
            }
        }
    }
}