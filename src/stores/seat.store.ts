import { ref } from 'vue'
import { defineStore } from 'pinia'
import { SEAT_CONFIG } from '../assets/seat-config'
import { SOLD_SEATS } from '@/assets/sold-seat'

export const useSeatStore = defineStore('seat', () => {
  // 將畫面與邏輯的資料分開，可以跟API溝通
  const currentSelectedSeat = ref<[number, number] | null>(null)
  const seatConfig = ref(SEAT_CONFIG)
  const soldSeats = ref(SOLD_SEATS)

  function selectSeat(seat: [number, number]) {
    currentSelectedSeat.value = seat
  }

  return {
    currentSelectedSeat,
    seatConfig,
    soldSeats,
    selectSeat,
  }
})
