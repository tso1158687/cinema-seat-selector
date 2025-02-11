<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSeatStore } from '../stores/seat.store';
import { ref, computed } from 'vue';
const seatStore = useSeatStore()
const { seatConfig, soldSeats } = storeToRefs(seatStore)
const selectedSeat = ref<string | null>(null);
const convertedSoldSeats = computed(() => {
    return soldSeats.value.map(([r, c]) => `${r}-${c}`)
})
const isSold = (row: number, col: number): boolean => {
    const stringSeat = `${row}-${col}`
    return convertedSoldSeats.value.includes(stringSeat)
};

const selectSeat = (row: number, col: number) => {
    if (!isSold(row, col)) {
        selectedSeat.value = `${row}-${col}`;
    }
};

function hasAsile(col: number): boolean {
    console.log(col)
    return seatConfig.value.aisleIndexes.includes(col)
}


</script>
<template>
    <div class="container">
        <div class="title">請選擇觀看電影的座位</div>
        <div class="legend-area">
            <div class="legend">
                <div class="seat selected"></div><span>您的座位</span>
            </div>
            <div class="legend">
                <div class="seat"></div><span>未售出</span>
            </div>
            <div class="legend">
                <div class="seat sold"></div><span>已售出</span>
            </div>
        </div>
        <div class="screen">
            螢幕
        </div>
        <div class="seat-list">
            <div v-for="row in seatConfig.rows" :key="row" class="row">
                <div v-for="col in seatConfig.cols" :key="col" :class="['seat',
                    isSold(row, col) ? 'sold cursor-not-allowed' : '',
                    selectedSeat === `${row}-${col}` ? 'selected' : '',
                    hasAsile(col) ? 'asile' : '']" @click="selectSeat(row, col)"></div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@use "../styles/seat-status.scss";

.seat-list {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.seat {
    margin: 4px;
    display: inline-block;
    cursor: pointer;
}

.cursor-not-allowed {
    cursor: not-allowed;
}

.row {
    display: flex;
}

.asile {
    margin-right: 18px;
}

.container {
    width: 472px;
    border: 4px solid #dddddd;
    flex-direction: column;
    padding: 32px 30px;

}

.title {
    text-align: center;
    font-size: 24px;
    justify-content: flex-start;
    display: flex;
    width: 100%;
    margin-bottom: 48px;


}

.legend-area {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    font-size: 12px;

}

.legend {
    align-items: center;
    margin-right: 10px;
    display: flex;
}

.screen {
    display: flex;
    border: 1px solid #dddddd;
    justify-content: center;
    width: 100%;
    margin-bottom: 32px;
    margin-top: 32px;
}
</style>