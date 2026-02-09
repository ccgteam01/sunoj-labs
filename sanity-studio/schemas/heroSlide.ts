import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'heroSlide',
  title: 'Hero Slide',
  type: 'document',
  fields: [
    defineField({name: 'tagline', title: 'Tagline', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text'}),
    defineField({name: 'link', title: 'Link URL', type: 'string'}),
    defineField({name: 'linkLabel', title: 'Link Label', type: 'string'}),
    defineField({name: 'image', title: 'Background Image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'order', title: 'Order', type: 'number'}),
  ],
})
