import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({name: 'groupName', title: 'Group Short Name', type: 'string'}),
    defineField({name: 'groupFullName', title: 'Group Full Name', type: 'string'}),
    defineField({name: 'tagline', title: 'Tagline', type: 'string'}),
    defineField({name: 'quote', title: 'Homepage Quote', type: 'text'}),
    defineField({name: 'quoteAttribution', title: 'Quote Attribution', type: 'string'}),
  ],
})
