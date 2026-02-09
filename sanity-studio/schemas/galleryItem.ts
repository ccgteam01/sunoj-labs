import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'galleryItem',
  title: 'Gallery Item',
  type: 'document',
  fields: [
    defineField({name: 'caption', title: 'Caption', type: 'string'}),
    defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'order', title: 'Order', type: 'number'}),
  ],
})
