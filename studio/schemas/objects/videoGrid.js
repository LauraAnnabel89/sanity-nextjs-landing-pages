export default {
  type: 'object',
  name: 'videoGrid',
  title: 'Video Grid',
  fields: [
    {
      name: 'videos',
      title: 'Video List',
      type: 'array',
      of: [{ type: 'video' }]
    }
],
  preview: {
    select: {
      videos: 'videos'
    },
    prepare({ videos }) {
      return {
        title: `${videos.length} ${videos.length === 1 ? 'video' : 'videos'}`,
        subtitle: 'Video Grid'
      }
    }
  }
}
