import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string'}),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {list: ['pi', 'doctoral', 'postdoc', 'alumni']},
    }),
    defineField({name: 'topic', title: 'Research Topic', type: 'string'}),
    defineField({name: 'currentPosition', title: 'Current Position (Alumni)', type: 'string'}),
    defineField({name: 'awards', title: 'Awards', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'image', title: 'Photo', type: 'image', options: {hotspot: true}}),
    defineField({name: 'order', title: 'Order', type: 'number'}),
  ],
})
