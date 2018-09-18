<template>
  <div>
    <!-- <mu-circular-progress :size="40" v-if="loading"/> -->
    <div class="html-panel" v-html="html"></div>
  </div>
</template>
<style scoped>
.html-panel {
    padding: 0.2rem 0;
}
.html-panel table {
    width: 100% !important;
}
.html-panel img {
    width: auto;
    max-width: 100%;
}
</style>
<script>
import axios from "axios";
export default {
    // 使用时请使用 :url.sync=""传值
    props: {
        url: {
            required: true
        }
    },
    data() {
        return {
            loading: false,
            html: ""
        };
    },
    watch: {
        url(value) {
            this.load(value);
        }
    },
    mounted() {
        this.load(this.url);
    },
    methods: {
        load(url) {
            if (url && url.length > 0) {
                // 加载中
                this.loading = true;
                let param = {
                    accept: "text/html, text/plain"
                };
                axios
                    .get(url, param)
                    .then(response => {
                        this.loading = false;
                        // 处理HTML显示
                        this.html = response.data;
                    })
                    .catch(() => {
                        this.loading = false;
                        this.html = "加载失败";
                    });
            }
        }
    }
};
</script>