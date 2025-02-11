<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSeatStore } from '../stores/seat.store';
import { ref, computed } from 'vue';
const seatStore = useSeatStore()
const { currentSelectedSeat, seatConfig, soldSeats } = storeToRefs(seatStore)
const selectedSeat = ref<string | null>(null);
const soldSeatsToString = computed(() => soldSeats.value.map(([r, c]) => `${r}-${c}`))
console.log('sold seats', soldSeats.value)
// const isSold = (row:number, col:number) => soldSeats.has(`${row}-${col}`);
const isSold = (row: number, col: number) => false;

const selectSeat = (row: number, col: number) => {
    if (!isSold(row, col)) {
        selectedSeat.value = `${row}-${col}`;
    }
};

console.log(seatConfig.value)

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
                    isSold(row, col) ? 'sold' : '',
                    selectedSeat === `${row}-${col}` ? 'selected' : '']" @click="selectSeat(row, col)"></div>
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

.row {
    display: flex;
}

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