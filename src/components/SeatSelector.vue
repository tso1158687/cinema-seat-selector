<script setup lang="ts">
</script>
<template>
    <div class="container">
        <div class="title">請選擇觀看電影的座位</div>
        <div class="legend-area">
            <div class="legend">
                <div class="dot"></div><span>您的座位</span>
            </div>
            <div class="legend">
                <div class="dot"></div><span>未售出</span>
            </div>
            <div class="legend">
                <div class="dot"></div><span>已售出</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container {
    width: 472px;
    border: 4px solid gray;
    flex-direction: column;
    padding-top: 32px;
    padding-bottom: 32px;
}

.title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;


}

.legend-area {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.legend {
    display: flex;
    align-items: center;
    margin-right: 10px;
    flex: 1;
}
</style>