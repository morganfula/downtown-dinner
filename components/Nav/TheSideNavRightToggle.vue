<template>
  <div class="drawer-toggle" role="button" @click="$emit('toggle')">
    <div class="booking">reservation</div>
  </div>
</template>

<style scoped>
.drawer-toggle {
  color: #000;
  background: #fff;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 8px 16px;
  /* display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 40px;
  cursor: pointer; */
}

/* @media (min-width: 768px) {
  .drawer-toggle {
    display: none;
  }
} */

/* .drawer-toggle .bar {
  width: 100%;
  height: 3px;
  background-color: white;
} */
</style>
