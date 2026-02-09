import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'collaborator',
  title: 'Collaborator',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string'}),
    defineField({name: 'institution', title: 'Institution', type: 'string'}),
    defineField({name: 'topic', title: 'Topic', type: 'string'}),
  ],
})
