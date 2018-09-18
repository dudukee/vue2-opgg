const filter = (position) => {
    return function(e) {
        let pList = e.positions;
        for (const key in pList) {
            const element = pList[key];
            if (position == "ALL") {
                return true;
            } else {
                if (element.name == position) {
                    e.tier = element.stats.tierData.tier;
                    return true;
                }
            }
        }
    };
};
const sort = (list, position, type) => {
    return list.sort((v1, v2) => {
        if (position == "ALL") {
            switch (type) {
                case "Tier":
                    //
                    break;
                case "winRate":
                    v1.sort = v1.stats.winRate;
                    v2.sort = v2.stats.winRate;
                    return -(v1.sort - v2.sort);
                    break;
                case "pickRate":
                    v1.sort = v1.stats.pickRate;
                    v2.sort = v2.stats.pickRate;
                    return -(v1.sort - v2.sort);
                    break;
                case "banRate":
                    v1.sort = v1.stats.banRate;
                    v2.sort = v2.stats.banRate;
                    return -(v1.sort - v2.sort);
                    break;
            }
        } else {
            switch (type) {
                case "Tier":
                    for (const key in v1.positions) {
                        const element = v1.positions[key];
                        if (element.name == position) {
                            v1.sort = element.stats.tierData.rank;
                        }
                    }
                    for (const key in v2.positions) {
                        const element = v2.positions[key];
                        if (element.name == position) {
                            v2.sort = element.stats.tierData.rank;
                        }
                    }
                    return v1.sort - v2.sort;
                    break;

                case "winRate":
                    for (const key in v1.positions) {
                        const element = v1.positions[key];
                        if (element.name == position) {
                            v1.sort = element.stats.winRate;
                        }
                    }
                    for (const key in v2.positions) {
                        const element = v2.positions[key];
                        if (element.name == position) {
                            v2.sort = element.stats.winRate;
                        }
                    }
                    return -(v1.sort - v2.sort);
                    break;
                case "pickRate":
                    for (const key in v1.positions) {
                        const element = v1.positions[key];
                        if (element.name == position) {
                            v1.sort = element.stats.pickRate;
                        }
                    }
                    for (const key in v2.positions) {
                        const element = v2.positions[key];
                        if (element.name == position) {
                            v2.sort = element.stats.pickRate;
                        }
                    }
                    return -(v1.sort - v2.sort);
                    break;
                case "banRate":
                    for (const key in v1.positions) {
                        const element = v1.positions[key];
                        if (element.name == position) {
                            v1.sort = element.stats.banRate;
                        }
                    }
                    for (const key in v2.positions) {
                        const element = v2.positions[key];
                        if (element.name == position) {
                            v2.sort = element.stats.banRate;
                        }
                    }
                    return -(v1.sort - v2.sort);
                    break;
            }
        }
    });
};
export const filterSort = (l, position, type) => {
    //deep copy
    let deepl = JSON.parse(JSON.stringify(l));
    let list = deepl.filter(filter(position));
    return sort(list, position, type);
};