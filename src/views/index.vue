<template>
    <div>
        <mt-header fixed title="OP.弟弟">
            <router-link to="/list" slot="right">
                <mt-button icon="more"></mt-button>
            </router-link>
        </mt-header>
        <div class="page-header-main">
            <mt-navbar class="page-part" v-model="selected">
                <mt-tab-item id="0" @click.native.prevent="startSort(0)">Tier</mt-tab-item>
                <mt-tab-item id="1" @click.native.prevent="startSort(1)">胜率</mt-tab-item>
                <mt-tab-item id="2" @click.native.prevent="startSort(2)">登场率</mt-tab-item>
                <mt-tab-item id="3" @click.native.prevent="startSort(3)">禁用率</mt-tab-item>
            </mt-navbar>

            <mt-tab-container v-model="selected">
                <!-- Tier -->
                <mt-tab-container-item id="0" class="tab-list">
                    <div class="top list">
                        <h3 class="flex flex-content">
                            <h5 class="title is-5"></h5>
                            <router-link to="/data/TOP/Tier">
                                <span class="tag">more></span>
                            </router-link>
                        </h3>
                        <div class="columns is-mobile is-gapless">
                            <div class="column" v-for="(item,n) in listTop" :key="n" v-if="n<5">

                                <router-link :to="{name:'Champion',params:{name:item.key,position:'TOP'}}">
                                    <figure class="image is-48x48">
                                        <img :src="item.imageUrl" alt="champion">
                                    </figure>
                                </router-link>

                                <img src="@/assets/images/icon-champtier-1.png" alt="tier" v-if="item.tier==1">
                                <img src="@/assets/images/icon-champtier-2.png" alt="tier" v-if="item.tier==2">
                                <img src="@/assets/images/icon-champtier-3.png" alt="tier" v-if="item.tier==3">
                                <img src="@/assets/images/icon-champtier-4.png" alt="tier" v-if="item.tier==4">
                                <img src="@/assets/images/icon-champtier-5.png" alt="tier" v-if="item.tier==5">
                                <img src="@/assets/images/icon-champtier-op.png" alt="tier" v-if="item.tier=='op'">
                            </div>
                        </div>
                    </div>
                    <div class="jng list">
                        <h3 class="flex flex-content">
                            <h5 class="title is-5"></h5>
                            <router-link to="/data/JNG/Tier">
                                <span class="tag">more></span>
                            </router-link>
                        </h3>
                        <div class="columns is-mobile is-gapless">
                            <div class="column" v-for="(item,n) in listJng" :key="n" v-if="n<5">
                                <router-link :to="{name:'Champion',params:{name:item.key,position:'JUNGLE'}}">
                                    <figure class="image is-48x48">
                                        <img :src="item.imageUrl" alt="champion">
                                    </figure>
                                </router-link>
                                <img src="@/assets/images/icon-champtier-1.png" alt="tier" v-if="item.tier==1">
                                <img src="@/assets/images/icon-champtier-2.png" alt="tier" v-if="item.tier==2">
                                <img src="@/assets/images/icon-champtier-3.png" alt="tier" v-if="item.tier==3">
                                <img src="@/assets/images/icon-champtier-4.png" alt="tier" v-if="item.tier==4">
                                <img src="@/assets/images/icon-champtier-5.png" alt="tier" v-if="item.tier==5">
                                <img src="@/assets/images/icon-champtier-op.png" alt="tier" v-if="item.tier=='op'">
                            </div>
                        </div>
                    </div>
                    <div class="mid list">
                        <h3 class="flex flex-content">
                            <h5 class="title is-5"></h5>
                            <router-link to="/data/MID/Tier">
                                <span class="tag">more></span>
                            </router-link>
                        </h3>
                        <div class="columns is-mobile is-gapless">
                            <div class="column" v-for="(item,n) in listMid" :key="n" v-if="n<5">
                                <router-link :to="{name:'Champion',params:{name:item.key,position:'MID'}}">
                                    <figure class="image is-48x48">
                                        <img :src="item.imageUrl" alt="champion">
                                    </figure>
                                </router-link>
                                <img src="@/assets/images/icon-champtier-1.png" alt="tier" v-if="item.tier==1">
                                <img src="@/assets/images/icon-champtier-2.png" alt="tier" v-if="item.tier==2">
                                <img src="@/assets/images/icon-champtier-3.png" alt="tier" v-if="item.tier==3">
                                <img src="@/assets/images/icon-champtier-4.png" alt="tier" v-if="item.tier==4">
                                <img src="@/assets/images/icon-champtier-5.png" alt="tier" v-if="item.tier==5">
                                <img src="@/assets/images/icon-champtier-op.png" alt="tier" v-if="item.tier=='op'">
                            </div>
                        </div>
                    </div>
                    <div class="adc list">
                        <h3 class="flex flex-content">
                            <h5 class="title is-5"></h5>
                            <router-link to="/data/ADC/Tier">
                                <span class="tag">more></span>
                            </router-link>
                        </h3>
                        <div class="columns is-mobile is-gapless">
                            <div class="column" v-for="(item,n) in listAdc" :key="n" v-if="n<5">
                                <router-link :to="{name:'Champion',params:{name:item.key,position:'ADC'}}">
                                    <figure class="image is-48x48">
                                        <img :src="item.imageUrl" alt="champion">
                                    </figure>
                                </router-link>
                                <img src="@/assets/images/icon-champtier-1.png" alt="tier" v-if="item.tier==1">
                                <img src="@/assets/images/icon-champtier-2.png" alt="tier" v-if="item.tier==2">
                                <img src="@/assets/images/icon-champtier-3.png" alt="tier" v-if="item.tier==3">
                                <img src="@/assets/images/icon-champtier-4.png" alt="tier" v-if="item.tier==4">
                                <img src="@/assets/images/icon-champtier-5.png" alt="tier" v-if="item.tier==5">
                                <img src="@/assets/images/icon-champtier-op.png" alt="tier" v-if="item.tier=='op'">
                            </div>
                        </div>
                    </div>
                    <div class="sup list">
                        <h3 class="flex flex-content">
                            <h5 class="title is-5"></h5>
                            <router-link to="/data/SUP/Tier">
                                <span class="tag">more></span>
                            </router-link>
                        </h3>
                        <div class="columns is-mobile is-gapless">
                            <div class="column" v-for="(item,n) in listSup" :key="n" v-if="n<5">
                                <router-link :to="{name:'Champion',params:{name:item.key,position:'SUPPORT'}}">
                                    <figure class="image is-48x48">
                                        <img :src="item.imageUrl" alt="champion">
                                    </figure>
                                </router-link>
                                <img src="@/assets/images/icon-champtier-1.png" alt="tier" v-if="item.tier==1">
                                <img src="@/assets/images/icon-champtier-2.png" alt="tier" v-if="item.tier==2">
                                <img src="@/assets/images/icon-champtier-3.png" alt="tier" v-if="item.tier==3">
                                <img src="@/assets/images/icon-champtier-4.png" alt="tier" v-if="item.tier==4">
                                <img src="@/assets/images/icon-champtier-5.png" alt="tier" v-if="item.tier==5">
                                <img src="@/assets/images/icon-champtier-op.png" alt="tier" v-if="item.tier=='op'">
                            </div>
                        </div>
                    </div>
                </mt-tab-container-item>
                <!-- 胜率 -->
                <mt-tab-container-item id="1" class="tab-list">
                    <div class="all list">
                        <h3 class="flex flex-content">
                            <h5 class="title is-5"></h5>
                            <router-link to="/data/ALL/winRate">
                                <span class="tag">more></span>
                            </router-link>
                        </h3>
                        <div class="columns is-mobile is-gapless">
                            <div class="column" v-for="(item,n) in listAll" :key="n" v-if="n<5">
                                <router-link :to="{name:'Champion',params:{name:item.key,position:item.positions[0].name}}">
                                    <figure class="image is-48x48">
                                        <img :src="item.imageUrl" alt="champion">
                                    </figure>
                                </router-link>
                                <span>{{(100*item.stats.winRate).toFixed(2)+'%'}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="top list">
                        <h3 class="flex flex-content">
                            <h5 class="title is-5"></h5>
                            <router-link to="/data/TOP/winRate">
                                <span class="tag">more></span>
                            </router-link>
                        </h3>
                        <div class="columns is-mobile is-gapless">
                            <div class="column" v-for="(item,n) in listTop" :key="n" v-if="n<5">
                                <figure class="image is-48x48">
                                    <img :src="item.imageUrl" alt="champion">
                                </figure>
                                <span v-for="(e,n) in item.positions" :key="n" v-if="e.name=='TOP'">{{(100*e.stats.winRate).toFixed(2)+'%'}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="jng list">
                        <h3 class="flex flex-content">
                            <h5 class="title is-5"></h5>
                            <router-link to="/data/JNG/winRate">
                                <span class="tag">more></span>
                            </router-link>
                        </h3>
                        <div class="columns is-mobile is-gapless">
                            <div class="column" v-for="(item,n) in listJng" :key="n" v-if="n<5">
                                <figure class="image is-48x48">
                                    <img :src="item.imageUrl" alt="champion">
                                </figure>
                                <span v-for="(e,n) in item.positions" :key="n" v-if="e.name=='JUNGLE'">{{(100*e.stats.winRate).toFixed(2)+'%'}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="mid list">
                        <h3 class="flex flex-content">
                            <h5 class="title is-5"></h5>
                            <router-link to="/data/MID/winRate">
                                <span class="tag">more></span>
                            </router-link>
                        </h3>
                        <div class="columns is-mobile is-gapless">
                            <div class="column" v-for="(item,n) in listMid" :key="n" v-if="n<5">
                                <figure class="image is-48x48">
                                    <img :src="item.imageUrl" alt="champion">
                                </figure>
                                <span v-for="(e,n) in item.positions" :key="n" v-if="e.name=='MID'">{{(100*e.stats.winRate).toFixed(2)+'%'}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="adc list">
                        <h3 class="flex flex-content">
                            <h5 class="title is-5"></h5>
                            <router-link to="/data/ADC/winRate">
                                <span class="tag">more></span>
                            </router-link>
                        </h3>
                        <div class="columns is-mobile is-gapless">
                            <div class="column" v-for="(item,n) in listAdc" :key="n" v-if="n<5">
                                <figure class="image is-48x48">
                                    <img :src="item.imageUrl" alt="champion">
                                </figure>
                                <span v-for="(e,n) in item.positions" :key="n" v-if="e.name=='ADC'">{{(100*e.stats.winRate).toFixed(2)+'%'}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="sup list">
                        <h3 class="flex flex-content">
                            <h5 class="title is-5"></h5>
                            <router-link to="/data/SUP/winRate">
                                <span class="tag">more></span>
                            </router-link>
                        </h3>
                        <div class="columns is-mobile is-gapless">
                            <div class="column" v-for="(item,n) in listSup" :key="n" v-if="n<5">
                                <figure class="image is-48x48">
                                    <img :src="item.imageUrl" alt="champion">
                                </figure>
                                <span v-for="(e,n) in item.positions" :key="n" v-if="e.name=='SUPPORT'">{{(100*e.stats.winRate).toFixed(2)+'%'}}</span>
                            </div>
                        </div>
                    </div>
                </mt-tab-container-item>
                <!-- 登场率 -->
                <mt-tab-container-item id="2" class="tab-list">
                    <div class="all list">
                        <h3 class="flex flex-content">
                            <h5 class="title is-5"></h5>
                            <router-link to="/data/ALL/pickRate">
                                <span class="tag">more></span>
                            </router-link>
                        </h3>
                        <div class="columns is-mobile is-gapless">
                            <div class="column" v-for="(item,n) in listAll" :key="n" v-if="n<5">
                                <router-link :to="{name:'Champion',params:{name:item.key,position:item.positions[0].name}}">
                                    <figure class="image is-48x48">
                                        <img :src="item.imageUrl" alt="champion">
                                    </figure>
                                </router-link>
                                <span>{{(100*item.stats.pickRate).toFixed(2)+'%'}}</span>

                            </div>
                        </div>
                    </div>
                    <div class="top list">
                        <h3 class="flex flex-content">
                            <h5 class="title is-5"></h5>
                            <router-link to="/data/TOP/pickRate">
                                <span class="tag">more></span>
                            </router-link>
                        </h3>
                        <div class="columns is-mobile is-gapless">
                            <div class="column" v-for="(item,n) in listTop" :key="n" v-if="n<5">
                                <router-link :to="{name:'Champion',params:{name:item.key,position:'TOP'}}">
                                    <figure class="image is-48x48">
                                        <img :src="item.imageUrl" alt="champion">
                                    </figure>
                                </router-link>
                                <span v-for="(e,n) in item.positions" :key="n" v-if="e.name=='TOP'">{{(100*e.stats.pickRate).toFixed(2)+'%'}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="jng list">
                        <h3 class="flex flex-content">
                            <h5 class="title is-5"></h5>
                            <router-link to="/data/JNG/pickRate">
                                <span class="tag">more></span>
                            </router-link>
                        </h3>
                        <div class="columns is-mobile is-gapless">
                            <div class="column" v-for="(item,n) in listJng" :key="n" v-if="n<5">
                                <router-link :to="{name:'Champion',params:{name:item.key,position:'JUNGLE'}}">
                                    <figure class="image is-48x48">
                                        <img :src="item.imageUrl" alt="champion">
                                    </figure>
                                </router-link>
                                <span v-for="(e,n) in item.positions" :key="n" v-if="e.name=='JUNGLE'">{{(100*e.stats.pickRate).toFixed(2)+'%'}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="mid list">
                        <h3 class="flex flex-content">
                            <h5 class="title is-5"></h5>
                            <router-link to="/data/MID/pickRate">
                                <span class="tag">more></span>
                            </router-link>
                        </h3>
                        <div class="columns is-mobile is-gapless">
                            <div class="column" v-for="(item,n) in listMid" :key="n" v-if="n<5">
                                <router-link :to="{name:'Champion',params:{name:item.key,position:'MID'}}">
                                    <figure class="image is-48x48">
                                        <img :src="item.imageUrl" alt="champion">
                                    </figure>
                                </router-link>
                                <span v-for="(e,n) in item.positions" :key="n" v-if="e.name=='MID'">{{(100*e.stats.pickRate).toFixed(2)+'%'}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="adc list">
                        <h3 class="flex flex-content">
                            <h5 class="title is-5"></h5>
                            <router-link to="/data/ADC/pickRate">
                                <span class="tag">more></span>
                            </router-link>
                        </h3>
                        <div class="columns is-mobile is-gapless">
                            <div class="column" v-for="(item,n) in listAdc" :key="n" v-if="n<5">
                                <router-link :to="{name:'Champion',params:{name:item.key,position:'ADC'}}">
                                    <figure class="image is-48x48">
                                        <img :src="item.imageUrl" alt="champion">
                                    </figure>
                                </router-link>
                                <span v-for="(e,n) in item.positions" :key="n" v-if="e.name=='ADC'">{{(100*e.stats.pickRate).toFixed(2)+'%'}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="sup list">
                        <h3 class="flex flex-content">
                            <h5 class="title is-5"></h5>
                            <router-link to="/data/SUP/pickRate">
                                <span class="tag">more></span>
                            </router-link>
                        </h3>
                        <div class="columns is-mobile is-gapless">
                            <div class="column" v-for="(item,n) in listSup" :key="n" v-if="n<5">
                                <router-link :to="{name:'Champion',params:{name:item.key,position:'SUPPORT'}}">
                                    <figure class="image is-48x48">
                                        <img :src="item.imageUrl" alt="champion">
                                    </figure>
                                </router-link>
                                <span v-for="(e,n) in item.positions" :key="n" v-if="e.name=='SUPPORT'">{{(100*e.stats.pickRate).toFixed(2)+'%'}}</span>
                            </div>
                        </div>
                    </div>
                </mt-tab-container-item>
                <!-- 禁用率 -->
                <mt-tab-container-item id="3" class="tab-list">
                    <div class="all list">
                        <h3 class="flex flex-content">
                            <h5 class="title is-5"></h5>
                            <router-link to="/data/ALL/banRate">
                                <span class="tag">more></span>
                            </router-link>
                        </h3>
                        <div class="columns is-mobile is-gapless">
                            <div class="column" v-for="(item,n) in listAll" :key="n" v-if="n<5">
                                <router-link :to="{name:'Champion',params:{name:item.key,position:item.positions[0].name}}">
                                    <figure class="image is-48x48">
                                        <img :src="item.imageUrl" alt="champion">
                                    </figure>
                                </router-link>
                                <span>{{(100*item.stats.banRate).toFixed(2)+'%'}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="top list">
                        <h3 class="flex flex-content">
                            <h5 class="title is-5"></h5>
                            <router-link to="/data/TOP/banRate">
                                <span class="tag">more></span>
                            </router-link>
                        </h3>
                        <div class="columns is-mobile is-gapless">
                            <div class="column" v-for="(item,n) in listTop" :key="n" v-if="n<5">
                                <router-link :to="{name:'Champion',params:{name:item.key,position:'TOP'}}">
                                    <figure class="image is-48x48">
                                        <img :src="item.imageUrl" alt="champion">
                                    </figure>
                                </router-link>
                                <span v-for="(e,n) in item.positions" :key="n" v-if="e.name=='TOP'">{{(100*e.stats.banRate).toFixed(2)+'%'}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="jng list">
                        <h3 class="flex flex-content">
                            <h5 class="title is-5"></h5>
                            <router-link to="/data/JNG/banRate">
                                <span class="tag">more></span>
                            </router-link>
                        </h3>
                        <div class="columns is-mobile is-gapless">
                            <div class="column" v-for="(item,n) in listJng" :key="n" v-if="n<5">
                                <router-link :to="{name:'Champion',params:{name:item.key,position:'JUNGLE'}}">
                                    <figure class="image is-48x48">
                                        <img :src="item.imageUrl" alt="champion">
                                    </figure>
                                </router-link>
                                <span v-for="(e,n) in item.positions" :key="n" v-if="e.name=='JUNGLE'">{{(100*e.stats.banRate).toFixed(2)+'%'}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="mid list">
                        <h3 class="flex flex-content">
                            <h5 class="title is-5"></h5>
                            <router-link to="/data/MID/banRate">
                                <span class="tag">more></span>
                            </router-link>
                        </h3>
                        <div class="columns is-mobile is-gapless">
                            <div class="column" v-for="(item,n) in listMid" :key="n" v-if="n<5">
                                <router-link :to="{name:'Champion',params:{name:item.key,position:'MID'}}">
                                    <figure class="image is-48x48">
                                        <img :src="item.imageUrl" alt="champion">
                                    </figure>
                                </router-link>
                                <span v-for="(e,n) in item.positions" :key="n" v-if="e.name=='MID'">{{(100*e.stats.banRate).toFixed(2)+'%'}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="adc list">
                        <h3 class="flex flex-content">
                            <h5 class="title is-5"></h5>
                            <router-link to="/data/ADC/banRate">
                                <span class="tag">more></span>
                            </router-link>
                        </h3>
                        <div class="columns is-mobile is-gapless">
                            <div class="column" v-for="(item,n) in listAdc" :key="n" v-if="n<5">
                                <router-link :to="{name:'Champion',params:{name:item.key,position:'ADC'}}">
                                    <figure class="image is-48x48">
                                        <img :src="item.imageUrl" alt="champion">
                                    </figure>
                                </router-link>
                                <span v-for="(e,n) in item.positions" :key="n" v-if="e.name=='ADC'">{{(100*e.stats.banRate).toFixed(2)+'%'}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="sup list">
                        <h3 class="flex flex-content">
                            <h5 class="title is-5"></h5>
                            <router-link to="/data/SUP/banRate">
                                <span class="tag">more></span>
                            </router-link>
                        </h3>
                        <div class="columns is-mobile is-gapless">
                            <div class="column" v-for="(item,n) in listSup" :key="n" v-if="n<5">
                                <router-link :to="{name:'Champion',params:{name:item.key,position:'SUPPORT'}}">
                                    <figure class="image is-48x48">
                                        <img :src="item.imageUrl" alt="champion">
                                    </figure>
                                </router-link>
                                <span v-for="(e,n) in item.positions" :key="n" v-if="e.name=='SUPPORT'">{{(100*e.stats.banRate).toFixed(2)+'%'}}</span>
                            </div>
                        </div>
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>

</template>
<script>
import api from "@/axios/api";
import firstBy from "thenby";
export default {
    data() {
        return {
            selected: "0",
            originData: "",
            listTop: [],
            listJng: [],
            listMid: [],
            listAdc: [],
            listSup: [],
            listAll: []
        };
    },
    created() {
        api
            .getListJson()
            .then(res => {
                //sort by top and tier
                let l = res.champions;
                this.originData = l;

                this.listTop = this.filterSort(l, "TOP", 0);
                this.listJng = this.filterSort(l, "JUNGLE", 0);
                this.listMid = this.filterSort(l, "MID", 0);
                this.listAdc = this.filterSort(l, "ADC", 0);
                this.listSup = this.filterSort(l, "SUPPORT", 0);
            })
            .catch(err => {
                console.log(err);
            });
    },
    methods: {
        filter(position) {
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
        },
        sort(list, position, type) {
            return list.sort((v1, v2) => {
                if (position == "ALL") {
                    switch (type) {
                        case 0:
                            //
                            break;
                        case 1:
                            v1.sort = v1.stats.winRate;
                            v2.sort = v2.stats.winRate;
                            return -(v1.sort - v2.sort);
                            break;
                        case 2:
                            v1.sort = v1.stats.pickRate;
                            v2.sort = v2.stats.pickRate;
                            return -(v1.sort - v2.sort);
                            break;
                        case 3:
                            v1.sort = v1.stats.banRate;
                            v2.sort = v2.stats.banRate;
                            return -(v1.sort - v2.sort);
                            break;
                    }
                } else {
                    switch (type) {
                        case 0:
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

                        case 1:
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
                        case 2:
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
                        case 3:
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
        },
        filterSort(l, position, type) {
            //deep copy
            let deepl = JSON.parse(JSON.stringify(l));
            let list = deepl.filter(this.filter(position));
            return this.sort(list, position, type);
        },
        startSort(type) {
            this.listAll = this.filterSort(this.originData, "ALL", type);
            this.listTop = this.filterSort(this.originData, "TOP", type);
            this.listJng = this.filterSort(this.originData, "JUNGLE", type);
            this.listMid = this.filterSort(this.originData, "MID", type);
            this.listAdc = this.filterSort(this.originData, "ADC", type);
            this.listSup = this.filterSort(this.originData, "SUPPORT", type);
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
.tab-list .list {
    height: 100px;
    border-bottom: 1px solid #f1f1f1;
}

.columns .column {
    text-align: center;
}

.column .image {
    margin: 0 auto;
}

.column span {
    font-size: 14px;
}

.column > img {
    position: relative;
    top: -4px;
    width: 17px;
    height: 19px;
}

.column figure img {
    padding: 2px;
    background: red;
    border-radius: 50%;
}

.top .is-5::before {
    content: "TOP";
}
.jng .is-5::before {
    content: "JNG";
}
.mid .is-5::before {
    content: "MID";
}
.adc .is-5::before {
    content: "ADC";
}
.sup .is-5::before {
    content: "SUP";
}

.all .is-5::before {
    content: "ALL";
}

.title {
    margin-bottom: 0;
    font-weight: 500;
    font-size: 1rem;
}

h3 {
    padding: 0 0 2px 10px;
}
</style>