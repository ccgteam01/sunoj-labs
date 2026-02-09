import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'newsItem',
  title: 'News Item',
  type: 'document',
  fields: [
    defineField({name: 'text', title: 'Text', type: 'text'}),
    defineField({name: 'year', title: 'Year', type: 'number'}),
    defineField({name: 'order', title: 'Order', type: 'number'}),
  ],
})
