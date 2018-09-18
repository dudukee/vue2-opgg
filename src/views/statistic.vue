<template>
    <div>
        <mt-header fixed title="统计数据">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="page-header-main">
            <mt-navbar class="page-part" v-model="selected">
                <mt-tab-item id="ALL" @click.native.prevent="changePosition('ALL')">ALL</mt-tab-item>
                <mt-tab-item id="TOP" @click.native.prevent="changePosition('TOP')">TOP</mt-tab-item>
                <mt-tab-item id="JNG" @click.native.prevent="changePosition('JNG')">JNG</mt-tab-item>
                <mt-tab-item id="MID" @click.native.prevent="changePosition('MID')">MID</mt-tab-item>
                <mt-tab-item id="ADC" @click.native.prevent="changePosition('ADC')">ADC</mt-tab-item>
                <mt-tab-item id="SUP" @click.native.prevent="changePosition('SUP')">SUP</mt-tab-item>
            </mt-navbar>

            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="ALL">
                    <div class="flex flex-content flex-center sort-rule">
                        <span class="sort">Sort by</span>
                        <div class="page-button-group">
                            <!-- <mt-button size="small" :class="{'active':selectType===0}" @click="selectType=0">Tier</mt-button> -->
                            <mt-button size="small" :class="{'active':selectTypeALL==='winRate'}" @click="selectTypeALL='winRate',changeType()">Win</mt-button>
                            <mt-button size="small" :class="{'active':selectTypeALL==='pickRate'}" @click="selectTypeALL='pickRate',changeType()">Pick</mt-button>
                            <mt-button size="small" :class="{'active':selectTypeALL==='banRate'}" @click="selectTypeALL='banRate',changeType()">Ban</mt-button>
                        </div>
                    </div>
                    <a class="mint-cell" v-for="(cell,n) in list" :key="n">
                        <router-link :to="{name:'Champion',params:{name:cell.key,position:cell.positions[0].name}}">
                            <div class="mint-cell-wrapper">
                                <div class="cell-index">{{n+1}}</div>
                                <div class="mint-cell-title">
                                    <img :src="cell.imageUrl" width="36" height="36">
                                    <span class="mint-cell-text">{{cell.name}}</span>
                                </div>
                                <div class="mint-cell-value">
                                    <span v-if="selectTypeALL==='winRate'">{{(100*cell.stats.winRate).toFixed(2)+'%'}}</span>
                                    <span v-if="selectTypeALL==='pickRate'">{{(100*cell.stats.pickRate).toFixed(2)+'%'}}</span>
                                    <span v-if="selectTypeALL==='banRate'">{{(100*cell.stats.banRate).toFixed(2)+'%'}}</span>
                                </div>
                            </div>
                        </router-link>
                    </a>
                </mt-tab-container-item>
                <mt-tab-container-item id="TOP">
                    <div class="flex flex-content flex-center sort-rule">
                        <span class="sort">Sort by</span>
                        <div class="page-button-group">
                            <mt-button size="small" :class="{'active':selectTypeTOP==='Tier'}" @click="selectTypeTOP='Tier',changeType()">Tier</mt-button>
                            <mt-button size="small" :class="{'active':selectTypeTOP==='winRate'}" @click="selectTypeTOP='winRate',changeType()">Win</mt-button>
                            <mt-button size="small" :class="{'active':selectTypeTOP==='pickRate'}" @click="selectTypeTOP='pickRate',changeType()">Pick</mt-button>
                            <mt-button size="small" :class="{'active':selectTypeTOP==='banRate'}" @click="selectTypeTOP='banRate',changeType()">Ban</mt-button>
                        </div>
                    </div>
                    <a class="mint-cell" v-for="(cell,n) in list" :key="n">
                        <router-link :to="{name:'Champion',params:{name:cell.key,position:'TOP'}}">
                            <div class="mint-cell-wrapper">
                                <div class="cell-index">{{n+1}}</div>
                                <div class="mint-cell-title"><img :src="cell.imageUrl" width="36" height="36">
                                    <span class="mint-cell-text">{{cell.name}}</span>
                                </div>
                                <div class="mint-cell-value">
                                    <img src="@/assets/images/icon-champtier-1.png" alt="tier" v-if="selectTypeTOP==='Tier'&&cell.tier==1">
                                    <img src="@/assets/images/icon-champtier-2.png" alt="tier" v-if="selectTypeTOP==='Tier'&&cell.tier==2">
                                    <img src="@/assets/images/icon-champtier-3.png" alt="tier" v-if="selectTypeTOP==='Tier'&&cell.tier==3">
                                    <img src="@/assets/images/icon-champtier-4.png" alt="tier" v-if="selectTypeTOP==='Tier'&&cell.tier==4">
                                    <img src="@/assets/images/icon-champtier-5.png" alt="tier" v-if="selectTypeTOP==='Tier'&&cell.tier==5">
                                    <img src="@/assets/images/icon-champtier-op.png" alt="tier" v-if="selectTypeTOP==='Tier'&&cell.tier=='op'">

                                    <span v-for="(e,n) in cell.positions" :key="n" v-if="selectTypeTOP==='winRate'&& e.name=='TOP'">{{(100*e.stats.winRate).toFixed(2)+'%'}}</span>
                                    <span v-for="(e,n) in cell.positions" :key="n" v-if="selectTypeTOP==='pickRate'&& e.name=='TOP'">{{(100*e.stats.pickRate).toFixed(2)+'%'}}</span>
                                    <span v-for="(e,n) in cell.positions" :key="n" v-if="selectTypeTOP==='banRate'&& e.name=='TOP'">{{(100*e.stats.banRate).toFixed(2)+'%'}}</span>
                                </div>
                            </div>
                        </router-link>
                    </a>
                </mt-tab-container-item>
                <mt-tab-container-item id="JNG">
                    <div class="flex flex-content flex-center sort-rule">
                        <span class="sort">Sort by</span>
                        <div class="page-button-group">

                            <mt-button size="small" :class="{'active':selectTypeJNG==='Tier'}" @click="selectTypeJNG='Tier',changeType()">Tier</mt-button>
                            <mt-button size="small" :class="{'active':selectTypeJNG==='winRate'}" @click="selectTypeJNG='winRate',changeType()">Win</mt-button>
                            <mt-button size="small" :class="{'active':selectTypeJNG==='pickRate'}" @click="selectTypeJNG='pickRate',changeType()">Pick</mt-button>
                            <mt-button size="small" :class="{'active':selectTypeJNG==='banRate'}" @click="selectTypeJNG='banRate',changeType()">Ban</mt-button>
                        </div>
                    </div>
                    <a class="mint-cell" v-for="(cell,n) in list" :key="n">
                        <router-link :to="{name:'Champion',params:{name:cell.key,position:'JUNGLE'}}">
                            <div class="mint-cell-wrapper">
                                <div class="cell-index">{{n+1}}</div>
                                <div class="mint-cell-title"><img :src="cell.imageUrl" width="36" height="36">
                                    <span class="mint-cell-text">{{cell.name}}</span>
                                </div>
                                <div class="mint-cell-value">
                                    <img src="@/assets/images/icon-champtier-1.png" alt="tier" v-if="selectTypeJNG==='Tier'&&cell.tier==1">
                                    <img src="@/assets/images/icon-champtier-2.png" alt="tier" v-if="selectTypeJNG==='Tier'&&cell.tier==2">
                                    <img src="@/assets/images/icon-champtier-3.png" alt="tier" v-if="selectTypeJNG==='Tier'&&cell.tier==3">
                                    <img src="@/assets/images/icon-champtier-4.png" alt="tier" v-if="selectTypeJNG==='Tier'&&cell.tier==4">
                                    <img src="@/assets/images/icon-champtier-5.png" alt="tier" v-if="selectTypeJNG==='Tier'&&cell.tier==5">
                                    <img src="@/assets/images/icon-champtier-op.png" alt="tier" v-if="selectTypeJNG==='Tier'&&cell.tier=='op'">
                                    <span v-for="(e,n) in cell.positions" :key="n" v-if="selectTypeJNG==='winRate'&& e.name=='JUNGLE'">{{(100*e.stats.winRate).toFixed(2)+'%'}}</span>
                                    <span v-for="(e,n) in cell.positions" :key="n" v-if="selectTypeJNG==='pickRate'&& e.name=='JUNGLE'">{{(100*e.stats.pickRate).toFixed(2)+'%'}}</span>
                                    <span v-for="(e,n) in cell.positions" :key="n" v-if="selectTypeJNG==='banRate'&& e.name=='JUNGLE'">{{(100*e.stats.banRate).toFixed(2)+'%'}}</span>

                                </div>
                            </div>
                        </router-link>
                    </a>
                </mt-tab-container-item>
                <mt-tab-container-item id="MID">
                    <div class="flex flex-content flex-center sort-rule">
                        <span class="sort">Sort by</span>
                        <div class="page-button-group">
                            <mt-button size="small" :class="{'active':selectTypeMID==='Tier'}" @click="selectTypeMID='Tier',changeType()">Tier</mt-button>
                            <mt-button size="small" :class="{'active':selectTypeMID==='winRate'}" @click="selectTypeMID='winRate',changeType()">Win</mt-button>
                            <mt-button size="small" :class="{'active':selectTypeMID==='pickRate'}" @click="selectTypeMID='pickRate',changeType()">Pick</mt-button>
                            <mt-button size="small" :class="{'active':selectTypeMID==='banRate'}" @click="selectTypeMID='banRate',changeType()">Ban</mt-button>
                        </div>
                    </div>
                    <a class="mint-cell" v-for="(cell,n) in list" :key="n">
                        <router-link :to="{name:'Champion',params:{name:cell.key,position:'MID'}}">
                            <div class="mint-cell-wrapper">
                                <div class="cell-index">{{n+1}}</div>
                                <div class="mint-cell-title"><img :src="cell.imageUrl" width="36" height="36">
                                    <span class="mint-cell-text">{{cell.name}}</span>
                                </div>
                                <div class="mint-cell-value">
                                    <img src="@/assets/images/icon-champtier-1.png" alt="tier" v-if="selectTypeMID==='Tier'&&cell.tier==1">
                                    <img src="@/assets/images/icon-champtier-2.png" alt="tier" v-if="selectTypeMID==='Tier'&&cell.tier==2">
                                    <img src="@/assets/images/icon-champtier-3.png" alt="tier" v-if="selectTypeMID==='Tier'&&cell.tier==3">
                                    <img src="@/assets/images/icon-champtier-4.png" alt="tier" v-if="selectTypeMID==='Tier'&&cell.tier==4">
                                    <img src="@/assets/images/icon-champtier-5.png" alt="tier" v-if="selectTypeMID==='Tier'&&cell.tier==5">
                                    <img src="@/assets/images/icon-champtier-op.png" alt="tier" v-if="selectTypeMID==='Tier'&&cell.tier=='op'">
                                    <span v-for="(e,n) in cell.positions" :key="n" v-if="selectTypeMID==='winRate'&& e.name=='MID'">{{(100*e.stats.winRate).toFixed(2)+'%'}}</span>
                                    <span v-for="(e,n) in cell.positions" :key="n" v-if="selectTypeMID==='pickRate'&& e.name=='MID'">{{(100*e.stats.pickRate).toFixed(2)+'%'}}</span>
                                    <span v-for="(e,n) in cell.positions" :key="n" v-if="selectTypeMID==='banRate'&& e.name=='MID'">{{(100*e.stats.banRate).toFixed(2)+'%'}}</span>

                                </div>
                            </div>
                        </router-link>
                    </a>
                </mt-tab-container-item>
                <mt-tab-container-item id="ADC">
                    <div class="flex flex-content flex-center sort-rule">
                        <span class="sort">Sort by</span>
                        <div class="page-button-group">
                            <mt-button size="small" :class="{'active':selectTypeADC==='Tier'}" @click="selectTypeADC='Tier',changeType()">Tier</mt-button>
                            <mt-button size="small" :class="{'active':selectTypeADC==='winRate'}" @click="selectTypeADC='winRate',changeType()">Win</mt-button>
                            <mt-button size="small" :class="{'active':selectTypeADC==='pickRate'}" @click="selectTypeADC='pickRate',changeType()">Pick</mt-button>
                            <mt-button size="small" :class="{'active':selectTypeADC==='banRate'}" @click="selectTypeADC='banRate',changeType()">Ban</mt-button>
                        </div>
                    </div>
                    <a class="mint-cell" v-for="(cell,n) in list" :key="n">
                        <router-link :to="{name:'Champion',params:{name:cell.key,position:'ADC'}}">
                            <div class="mint-cell-wrapper">
                                <div class="cell-index">{{n+1}}</div>
                                <div class="mint-cell-title"><img :src="cell.imageUrl" width="36" height="36">
                                    <span class="mint-cell-text">{{cell.name}}</span>
                                </div>
                                <div class="mint-cell-value">
                                    <img src="@/assets/images/icon-champtier-1.png" alt="tier" v-if="selectTypeADC==='Tier'&&cell.tier==1">
                                    <img src="@/assets/images/icon-champtier-2.png" alt="tier" v-if="selectTypeADC==='Tier'&&cell.tier==2">
                                    <img src="@/assets/images/icon-champtier-3.png" alt="tier" v-if="selectTypeADC==='Tier'&&cell.tier==3">
                                    <img src="@/assets/images/icon-champtier-4.png" alt="tier" v-if="selectTypeADC==='Tier'&&cell.tier==4">
                                    <img src="@/assets/images/icon-champtier-5.png" alt="tier" v-if="selectTypeADC==='Tier'&&cell.tier==5">
                                    <img src="@/assets/images/icon-champtier-op.png" alt="tier" v-if="selectTypeADC==='Tier'&&cell.tier=='op'">
                                    <span v-for="(e,n) in cell.positions" :key="n" v-if="selectTypeADC==='winRate'&& e.name=='ADC'">{{(100*e.stats.winRate).toFixed(2)+'%'}}</span>
                                    <span v-for="(e,n) in cell.positions" :key="n" v-if="selectTypeADC==='pickRate'&& e.name=='ADC'">{{(100*e.stats.pickRate).toFixed(2)+'%'}}</span>
                                    <span v-for="(e,n) in cell.positions" :key="n" v-if="selectTypeADC==='banRate'&& e.name=='ADC'">{{(100*e.stats.banRate).toFixed(2)+'%'}}</span>

                                </div>
                            </div>
                        </router-link>
                    </a>
                </mt-tab-container-item>
                <mt-tab-container-item id="SUP">
                    <div class="flex flex-content flex-center sort-rule">
                        <span class="sort">Sort by</span>
                        <div class="page-button-group">
                            <mt-button size="small" :class="{'active':selectTypeSUP==='Tier'}" @click="selectTypeSUP='Tier',changeType()">Tier</mt-button>
                            <mt-button size="small" :class="{'active':selectTypeSUP==='winRate'}" @click="selectTypeSUP='winRate',changeType()">Win</mt-button>
                            <mt-button size="small" :class="{'active':selectTypeSUP==='pickRate'}" @click="selectTypeSUP='pickRate',changeType()">Pick</mt-button>
                            <mt-button size="small" :class="{'active':selectTypeSUP==='banRate'}" @click="selectTypeSUP='banRate',changeType()">Ban</mt-button>
                        </div>
                    </div>
                    <a class="mint-cell" v-for="(cell,n) in list" :key="n">
                        <router-link :to="{name:'Champion',params:{name:cell.key,position:'SUPPORT'}}">
                            <div class="mint-cell-wrapper">
                                <div class="cell-index">{{n+1}}</div>
                                <div class="mint-cell-title"><img :src="cell.imageUrl" width="36" height="36">
                                    <span class="mint-cell-text">{{cell.name}}</span>
                                </div>
                                <div class="mint-cell-value">
                                    <img src="@/assets/images/icon-champtier-1.png" alt="tier" v-if="selectTypeSUP==='Tier'&&cell.tier==1">
                                    <img src="@/assets/images/icon-champtier-2.png" alt="tier" v-if="selectTypeSUP==='Tier'&&cell.tier==2">
                                    <img src="@/assets/images/icon-champtier-3.png" alt="tier" v-if="selectTypeSUP==='Tier'&&cell.tier==3">
                                    <img src="@/assets/images/icon-champtier-4.png" alt="tier" v-if="selectTypeSUP==='Tier'&&cell.tier==4">
                                    <img src="@/assets/images/icon-champtier-5.png" alt="tier" v-if="selectTypeSUP==='Tier'&&cell.tier==5">
                                    <img src="@/assets/images/icon-champtier-op.png" alt="tier" v-if="selectTypeSUP==='Tier'&&cell.tier=='op'">
                                    <span v-for="(e,n) in cell.positions" :key="n" v-if="selectTypeSUP==='winRate'&& e.name=='SUPPORT'">{{(100*e.stats.winRate).toFixed(2)+'%'}}</span>
                                    <span v-for="(e,n) in cell.positions" :key="n" v-if="selectTypeSUP==='pickRate'&& e.name=='SUPPORT'">{{(100*e.stats.pickRate).toFixed(2)+'%'}}</span>
                                    <span v-for="(e,n) in cell.positions" :key="n" v-if="selectTypeSUP==='banRate'&& e.name=='SUPPORT'">{{(100*e.stats.banRate).toFixed(2)+'%'}}</span>

                                </div>
                            </div>
                        </router-link>
                    </a>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>

</template>
<script>
import api from "@/axios/api";
import { filterSort } from "@/utils/filterSort";
import firstBy from "thenby";
export default {
    data() {
        return {
            selected: "ALL",
            originData: "",
            list: [],
            selectTypeALL: "winRate",
            selectTypeTOP: "Tier",
            selectTypeJNG: "Tier",
            selectTypeMID: "Tier",
            selectTypeADC: "Tier",
            selectTypeSUP: "Tier"
        };
    },
    created() {
        api
            .getListJson()
            .then(res => {
                let l = res.champions;
                this.originData = l;

                // create sorted list from router params
                let position = this.$route.params.position;
                let type = this.$route.params.type;
                this.changeChecked(position, type);
            })
            .catch(err => {
                console.log(err);
            });
    },
    methods: {
        changeChecked(position, type) {
            this.selected = position;
            switch (position) {
                case "ALL":
                    this.selectTypeALL = type;
                    this.list = filterSort(this.originData, position, type);
                    break;
                case "TOP":
                    this.selectTypeTOP = type;
                    this.list = filterSort(this.originData, position, type);
                    break;
                case "JNG":
                    this.selectTypeJNG = type;
                    this.list = filterSort(this.originData, "JUNGLE", type);
                    break;
                case "MID":
                    this.selectTypeMID = type;
                    this.list = filterSort(this.originData, position, type);
                    break;
                case "ADC":
                    this.selectTypeADC = type;
                    this.list = filterSort(this.originData, position, type);
                    break;
                case "SUP":
                    this.selectTypeSUP = type;
                    this.list = filterSort(this.originData, "SUPPORT", type);
                    break;
            }
        },
        changePosition(position) {
            switch (position) {
                case "ALL":
                    this.list = filterSort(
                        this.originData,
                        position,
                        this.selectTypeALL
                    );
                    break;
                case "TOP":
                    this.list = filterSort(
                        this.originData,
                        position,
                        this.selectTypeTOP
                    );
                    break;
                case "JNG":
                    this.list = filterSort(
                        this.originData,
                        "JUNGLE",
                        this.selectTypeJNG
                    );
                    break;
                case "MID":
                    this.list = filterSort(
                        this.originData,
                        position,
                        this.selectTypeMID
                    );
                    break;
                case "ADC":
                    this.list = filterSort(
                        this.originData,
                        position,
                        this.selectTypeADC
                    );
                    break;
                case "SUP":
                    this.list = filterSort(
                        this.originData,
                        "SUPPORT",
                        this.selectTypeSUP
                    );
                    break;
            }
        },
        changeType() {
            switch (this.selected) {
                case "ALL":
                    this.list = filterSort(
                        this.originData,
                        "ALL",
                        this.selectTypeALL
                    );
                    break;
                case "TOP":
                    this.list = filterSort(
                        this.originData,
                        "TOP",
                        this.selectTypeTOP
                    );
                    break;
                case "JNG":
                    this.list = filterSort(
                        this.originData,
                        "JUNGLE",
                        this.selectTypeJNG
                    );
                    break;
                case "MID":
                    this.list = filterSort(
                        this.originData,
                        "MID",
                        this.selectTypeMID
                    );
                    break;
                case "ADC":
                    this.list = filterSort(
                        this.originData,
                        "ADC",
                        this.selectTypeADC
                    );
                    break;
                case "SUP":
                    this.list = filterSort(
                        this.originData,
                        "SUPPORT",
                        this.selectTypeSUP
                    );
                    break;
            }
        }
    }
};
</script>
<style scoped>
.page-header-main {
    margin-top: 50px;
}
.mint-tab-item {
    padding: 7px 0;
    margin-bottom: 0 !important;
}

.mint-button--small {
    display: inline-block;
    font-size: 12px;
    padding: 0 8px;
    height: 24px;
}

.sort-rule {
    padding: 4px;
}
.sort {
    font-weight: 600;
}

.mint-cell-title > img {
    border-radius: 50%;
}

.mint-cell-value > img {
    width: 15px;
    height: 16px;
}

.cell-index {
    font-style: italic;
    padding-right: 10px;
}

.page-button-group > .active {
    color: #fff;
    background-color: #26a2ff;
}
</style>
