<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSeatStore } from '../stores/seat.store';
import { ref, computed } from 'vue';
import SeatMap from './SeatMap.vue';
const seatStore = useSeatStore()
const { seatConfig, soldSeats } = storeToRefs(seatStore)
const selectedSeat = ref<string | null>(null);
const convertedSoldSeats = computed(() => {
  return soldSeats.value.map(([r, c]) => `${r}-${c}`)
})

function selectSeat(seat: string): void {
  selectedSeat.value = seat
  const formattedSeat = seat.split(',').map(s => Number(s)) as [number, number]
  seatStore.selectSeat(formattedSeat)
}

</script>
<template>
  <div class="container">
    <div class="title">請選擇觀看電影的座位</div>
    <div class="legend-area">
      <div class="legend">
        <div class="dot selected"></div><span>您的座位</span>
      </div>
      <div class="legend">
        <div class="dot"></div><span>未售出</span>
      </div>
      <div class="legend">
        <div class="dot sold"></div><span>已售出</span>
      </div>
    </div>
    <div class="screen">
      螢幕
    </div>
    <SeatMap :seat-config="seatConfig" :sold-seats="convertedSoldSeats" :selected-seat="selectedSeat"
      @select-seat-emit="selectSeat($event)"></SeatMap>
  </div>
</template>
<style scoped lang="scss">
@use "../styles/seat-status.scss";

.container {
  border: 4px solid #dddddd;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 32px 28px;
  width: 550px;
}

.title {
  font-size: 20px;
  justify-content: flex-start;
  display: flex;
  margin-bottom: 48px;
  width: 472px;
}

.legend-area {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.legend {
  align-items: center;
  margin-right: 10px;
  display: flex;
  font-size: 14px;

  .dot {
    margin-right: 4px;
  }
}

.screen {
  display: flex;
  border: 1px solid #dddddd;
  justify-content: center;
  width: 472px;
  margin-bottom: 32px;
  margin-top: 32px;
  padding-top: 4px;
  padding-bottom: 4px;
}
</style>
