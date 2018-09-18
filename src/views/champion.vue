<template>
    <div class="main">
        <mt-header fixed title="统计数据">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="page-header-main">
            <!-- 头像 -->
            <div class="champion" v-if="res!=''">
                <div class="champion-image">
                    <img :src="'//opgg-static.akamaized.net/images/lol/champion/'+championName +'.png'" alt="" height="60px" width="60px">
                    <img class="champion-tier" src="@/assets/images/icon-champtier-1.png" alt="tier" v-if="champion.tier==1">
                    <img class="champion-tier" src="@/assets/images/icon-champtier-2.png" alt="tier" v-if="champion.tier==2">
                    <img class="champion-tier" src="@/assets/images/icon-champtier-3.png" alt="tier" v-if="champion.tier==3">
                    <img class="champion-tier" src="@/assets/images/icon-champtier-4.png" alt="tier" v-if="champion.tier==4">
                    <img class="champion-tier" src="@/assets/images/icon-champtier-5.png" alt="tier" v-if="champion.tier==5">
                    <img class="champion-tier" src="@/assets/images/icon-champtier-op.png" alt="tier" v-if="champion.tier=='op'">
                </div>
                <div class="champion-name">{{champion.name}}</div>
                <div class="champion-rate"> banRate {{res.banRate.string}} ({{res.banRate.value}})</div>
                <div class="champion-skill">
                    <div class="champion-skill-image">
                        <img :src="res.passive.imageUrl" alt="" height="28px" width="28px" @click="popupVisible = true">
                        <mt-popup v-model="popupVisible" popup-transition="popup-fade" :style="{ top: 110 + 'px' }">

                            <p v-html="res.passive.description"></p>

                        </mt-popup>
                    </div>
                    <div class="champion-skill-image">
                        <img :src="res.spells[0].imageUrl" alt="" height="28px" width="28px" @click="popupVisibleQ = true">
                        <mt-popup v-model="popupVisibleQ" popup-transition="popup-fade" :style="{ top: 110 + 'px' }">

                            <p v-html="res.spells[0].description"></p>

                        </mt-popup>
                    </div>
                    <div class="champion-skill-image">
                        <img :src="res.spells[1].imageUrl" alt="" height="28px" width="28px" @click="popupVisibleW = true">
                        <mt-popup v-model="popupVisibleW" popup-transition="popup-fade" :style="{ top: 110 + 'px' }">

                            <p v-html="res.spells[1].description"></p>

                        </mt-popup>
                    </div>
                    <div class="champion-skill-image">
                        <img :src="res.spells[2].imageUrl" alt="" height="28px" width="28px" @click="popupVisibleE = true">
                        <mt-popup v-model="popupVisibleE" popup-transition="popup-fade" :style="{ top: 110 + 'px' }">

                            <p v-html="res.spells[2].description"></p>

                        </mt-popup>
                    </div>
                    <div class="champion-skill-image">
                        <img :src="res.spells[3].imageUrl" alt="" height="28px" width="28px" @click="popupVisibleR = true">
                        <mt-popup v-model="popupVisibleR" popup-transition="popup-fade" :style="{ top: 110 + 'px' }">

                            <p v-html="res.spells[3].description"></p>

                        </mt-popup>
                    </div>

                    <!-- <div class="champion-skill-image" v-for="(cell,n) in res.spells" :key="n" v-if="res!=''">
                        <img :src="cell.imageUrl" alt="" height="28px" width="28px" @click="popupVisible = true" ref="button">
                        <mt-popup v-model="popupVisible" popup-transition="popup-fade" :style="{ top: 110 + 'px' }">

                            <p v-html="cell.description"></p>

                        </mt-popup>
                    </div> -->
                </div>
            </div>

            <!-- 位置 -->
            <div class="champion-positions columns is-mobile is-gapless">
                <div v-for="(cell,n) in champion.positions" :key="n" class="champion-position column" :class="{'active':selected===cell.name}" @click="selected=cell.name,changePosition(cell.name)">{{cell.name}}</div>
            </div>

            <div class="champion-tabs columns is-mobile is-gapless">
                <div class="champion-tab column" :class="{'active':tabSelected===''}" @click="tabSelected='',changeTab()">综观</div>
                <div class="champion-tab column" :class="{'active':tabSelected==='item'}" @click="tabSelected='item',changeTab()">物品</div>
                <div class="champion-tab column" :class="{'active':tabSelected==='skill'}" @click="tabSelected='skill',changeTab()">技能</div>
                <div class="champion-tab column" :class="{'active':tabSelected==='rune'}" @click="tabSelected='rune',changeTab()">符文</div>
                <div class="champion-tab column" :class="{'active':tabSelected==='trend'}" @click="tabSelected='trend',changeTab()">趋势</div>
                <div class="champion-tab column" :class="{'active':tabSelected==='matchup'}" @click="tabSelected='matchup',changeTab()">克制</div>
            </div>

            <iframe :src="iFrameSrc" v-if="iFrameSrc!=''" name="ifm" scrolling="no" frameborder="0" onload="this.height=ifm.document.body.scrollHeight"></iframe>
        </div>
    </div>
</template>
<script>
import api from "@/axios/api";
import panel from "@/components/HTMLPanel";
export default {
    data() {
        return {
            selected: "",
            tabSelected: "",
            championName: "",
            position: "",
            res: "",
            popupVisible: false,
            popupVisibleQ: false,
            popupVisibleW: false,
            popupVisibleE: false,
            popupVisibleR: false,
            champion: "",
            iFrameSrc: ""
        };
    },
    created() {
        this.championName = this.$route.params.name;
        this.position = this.$route.params.position;
        this.selected = this.$route.params.position;
        this.iFrameSrc =
            this.tabSelected == ""
                ? "/html/champion/" +
                  this.championName +
                  "/statistics/" +
                  this.selected
                : "/html/champion/" +
                  this.championName +
                  "/statistics/" +
                  this.selected +
                  "/" +
                  this.tabSelected;

        api
            .getDetail(this.championName)
            .then(res => {
                this.res = res;
            })
            .catch(err => {
                console.log(err);
            });

        api
            .getListJson()
            .then(res => {
                //filter by name
                let l = res.champions;
                this.champion = l.filter(
                    this.filterByName(this.championName)
                )[0];

                this.champion.positions.forEach(element => {
                    if (element.name === this.position) {
                        this.champion.tier = element.stats.tierData.tier;
                    }
                });
            })
            .catch(err => {
                console.log(err);
            });
    },
    components: {
        panel
    },
    methods: {
        changeFrameHeight() {},
        changePosition(position) {
            this.champion.positions.forEach(element => {
                if (element.name === position) {
                    this.champion.tier = element.stats.tierData.tier;
                }
            });

            this.iFrameSrc =
                this.tabSelected == ""
                    ? "/html/champion/" +
                      this.championName +
                      "/statistics/" +
                      this.selected
                    : "/html/champion/" +
                      this.championName +
                      "/statistics/" +
                      this.selected +
                      "/" +
                      this.tabSelected;
        },
        filterByName(name) {
            return function(e) {
                if (e.key === name) {
                    return true;
                }
            };
        },
        changeTab() {
            this.iFrameSrc =
                this.tabSelected == ""
                    ? "/html/champion/" +
                      this.championName +
                      "/statistics/" +
                      this.position
                    : "/html/champion/" +
                      this.championName +
                      "/statistics/" +
                      this.position +
                      "/" +
                      this.tabSelected;
        }
    }
};
</script>
<style scoped>
.main {
    background-color: #fff;
}
.champion-image,
.champion-name,
/* .champion-rate, */
.champion-skill-image,
.champion-tab {
    float: left;
}

.champion-image {
    position: relative;
    margin: 0 7px;
}

.champion-image > img:nth-child(1) {
    border-radius: 4px;
}

.champion-tier {
    position: absolute;
    width: 16px;
    height: 18px;
    top: 0;
    right: -1px;
}

.champion-name {
    font-weight: 600;
}

.champion-skill-image {
    padding: 4px 4px 4px 0;
}

.champion-tabs,
.champion-skill {
    overflow: hidden;
}

.columns .column {
    text-align: center;
}

iframe {
    width: 100%;
}

.mint-tab-item-label {
    font-size: 14px;
}

.champion-tabs {
    margin: 7px 0 !important;
}
.champion-tabs > .champion-tab {
    font-size: 12px;
    margin-bottom: 0.2rem;
}

.mint-navbar .mint-tab-item {
    padding: 7px 0;
}

.champion-tab.active {
    color: #3273dc;
}
.champion-positions {
    background-color: #fff;
    display: flex;
    text-align: center;
    margin: 7px 0 !important;
}
.champion-position {
    padding: 7px 0;
    font-size: 14px;
}
.champion-position.active {
    border-bottom: 3px solid #26a2ff;
    color: #26a2ff;
    margin-bottom: -3px;
}

.mint-popup {
    background-color: black;
    width: 200px;
    border-radius: 8px;
    padding: 10px;
    transform: translate(-50%, 0);
}
</style>