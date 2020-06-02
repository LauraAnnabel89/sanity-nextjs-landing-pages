import { TiMap } from 'react-icons/ti'

export default {
  name: 'map',
  title: 'Map',
  type: 'object',
  icon: TiMap,
  fields: [
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint'
    },
    {
      name: 'zoom',
      title: 'Zoom Level',
      type: 'number',
      description: '1 - 20'
    },
    {
      name: 'height',
      title: 'Height',
      type: 'string'
    }
  ],
  preview: {
    select: {
      location: 'location',
      zoom: 'zoom'
    },
    prepare: selection => {
      const { location, zoom } = selection
      return {
        title: (location.lat && location.lng) ? `lat: ${location.lat}, lng: ${location.lng}` : 'Select location...',
        subtitle: zoom && `Zoom: ${zoom}` || undefined
      }
    }
  }
}
