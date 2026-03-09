import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'authors', title: 'Authors', type: 'string'}),
    defineField({name: 'journal', title: 'Journal', type: 'string'}),
    defineField({name: 'doi', title: 'DOI', type: 'string'}),
    defineField({name: 'year', title: 'Year', type: 'number'}),
    defineField({name: 'image', title: 'Cover Image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'featured', title: 'Featured on Homepage', type: 'boolean', initialValue: false}),
  ],
})
