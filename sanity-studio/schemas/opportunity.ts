import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'opportunity',
  title: 'Opportunity',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text'}),
    defineField({name: 'icon', title: 'Icon Name', type: 'string'}),
    defineField({name: 'order', title: 'Order', type: 'number'}),
  ],
})
