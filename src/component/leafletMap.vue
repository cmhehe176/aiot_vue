<script lang="ts" setup>
  import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'
  import { ref } from 'vue'

  type TPropsMap = {
    lat: number
    lng: number
    height: number
    width: number
  }

  const { lat = 21.0285, lng = 105.8542, height = 500, width = 500 } = defineProps<TPropsMap>()
</script>

<template>
  <div :style="`height: ${height}px; width: ${width}px`">
    <l-map ref="map" :zoom="13" :center="[lat, lng]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      />
      <l-marker :lat-lng="{ lat, lng }">
        <l-popup>Vị trí này là Hanoi</l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<style lang="scss" scoped></style>
