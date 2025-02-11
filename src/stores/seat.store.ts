import { ref } from 'vue'
import { defineStore } from 'pinia'
import { SEAT_CONFIG } from '../assets/seat-config'
import { SOLD_SEATS } from '@/assets/sold-seat'

export const useSeatStore = defineStore('seat', () => {
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
