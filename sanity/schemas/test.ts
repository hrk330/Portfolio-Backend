export default {
  name: 'testi',
  title: 'Testi',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },

    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'imageurl',
      title: 'ImgURL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'profileLink',
      title: 'Profile Link',
      type: 'url',
    },
    {
      name: 'feedback',
      title: 'Feedback',
      type: 'string',
    },
  ],
}
