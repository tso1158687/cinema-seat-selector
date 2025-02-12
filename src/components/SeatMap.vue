<script setup lang="ts">
const props = defineProps(['seatConfig', 'soldSeats', 'selectedSeat'])
const emits = defineEmits(['selectSeatEmit'])
const { rows, cols, aisleIndexes } = props.seatConfig

function isSold(row: number, col: number): boolean {
    const stringSeat = `${row}-${col}`
    return props.soldSeats?.includes(stringSeat)
};

function selectSeat(row: number, col: number): void {
    const newSeat = `${row}-${col}`
    if (!isSold(row, col) && newSeat !== props.selectedSeat) {
        emits('selectSeatEmit', newSeat)
    }
};

function hasAsile(col: number): boolean {
    return aisleIndexes.includes(col)
}
</script>
<template>
    <div class="seat-list">
        <div v-for="row in rows" :key="row" class="row">
            <div v-for="col in cols" :key="col" :class="['seat', 'dot',
                isSold(row, col) ? 'sold cursor-not-allowed' : '',
                selectedSeat === `${row}-${col}` ? 'selected' : '',
                hasAsile(col) ? 'asile' : '']" @click="selectSeat(row, col)"></div>
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

.row {
    display: flex;
}

.asile {
    margin-right: 18px;
}

.cursor-not-allowed {
    cursor: not-allowed;
}
</style>