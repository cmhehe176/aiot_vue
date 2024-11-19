<script lang="ts" setup>
  import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'
  import { Icon } from 'leaflet'
  import markerSvg from '@/assets/icon/marker.svg'
  import { ref } from 'vue'

  const customIcon = new Icon({
    iconUrl: markerSvg,
    iconSize: [40, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  })

  const map = ref(null)

  type TPropsMap = {
    lat?: number
    lng?: number
    height?: number
    width?: number
    description?: string
    zoom?: number
  }

  const {
    lat = 21.0285,
    lng = 105.8542,
    height = 200,
    width = 200,
    description = 'Marker Here',
    zoom = 15,
  } = defineProps<TPropsMap>()
</script>

<template>
  <div class="map" :style="`height: ${height}px; width: ${width}px`">
    <l-map ref="map" :zoom="zoom" :center="[lat, lng]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      />
      <l-marker :lat-lng="{ lat, lng }" :icon="customIcon">
        <l-popup>{{ description }}</l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<style lang="scss" scoped></style>
