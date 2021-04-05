<script>
export default {
  name: 'my-component',
  props: {
    width: {
      type: Number,
      default: 200,
    },
  },
};
</script>
<template>
    <svg>
      <line x1="0" y1="0" :x2="width" :y2="width" style="stroke:rgb(255,0,0);stroke-width:2" />
    </svg>
</template>
