<template>
    <div>
        <mt-header fixed title="英雄列表">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <!-- <mt-button slot="right" icon="more"></mt-button> -->
        </mt-header>
        <div class="page-indexlist-wrapper">
            <mt-index-list>
                <mt-index-section v-for="(item,n) in alphabet" :index="item.initial" :key="n" v-if="item.cells.length>0">
                    <router-link v-for="(cell,n) in item.cells" :key="n" v-if="cell.positions[0]" :to="{name:'Champion',params:{name:cell.key,position:cell.positions[0].name}}">
                        <mt-cell :title="cell.name" is-link>
                            <img slot="icon" :src="cell.imageUrl" width="36" height="36">
                        </mt-cell>
                    </router-link>
                </mt-index-section>
            </mt-index-list>
        </div>
    </div>

</template>
<script>
import firstBy from "thenby";
import api from "@/axios/api";
import { cn2py } from "@/utils/pinyinUtil.js";
export default {
    data() {
        return {
            alphabet: [],
            cnpy: []
        };
    },
    created() {
        api
            .getListJson()
            .then(res => {
                let list = res.champions;
                for (const key in list) {
                    if (list.hasOwnProperty(key)) {
                        const element = list[key];
                        element.pinyinName = cn2py(element.name);
                    }
                }
                // sort by pinyin
                list.sort(firstBy("pinyinName"));

                "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(initial => {
                    let cells = list.filter(
                        item =>
                            item.pinyinName[0][0]
                                .substring(0, 1)
                                .toUpperCase() === initial
                    );

                    this.alphabet.push({
                        initial,
                        cells
                    });
                });
            })
            .catch(err => {
                console.log(err);
            });
    },
    methods: {}
};
</script>
<style scoped>
.page-indexlist-wrapper {
    margin-top: 50px;
}

.mint-cell-title > img {
    border-radius: 50%;
}
</style>