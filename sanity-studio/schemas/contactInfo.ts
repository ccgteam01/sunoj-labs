import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'contactInfo',
  title: 'Contact Info',
  type: 'document',
  fields: [
    defineField({name: 'email', title: 'Email', type: 'string'}),
    defineField({name: 'address', title: 'Address', type: 'text'}),
    defineField({name: 'googleScholarUrl', title: 'Google Scholar URL', type: 'url'}),
    defineField({name: 'githubUrl', title: 'GitHub URL', type: 'url'}),
    defineField({name: 'officialWebsiteUrl', title: 'Official Website URL', type: 'url'}),
    defineField({name: 'mapEmbedUrl', title: 'Google Maps Embed URL', type: 'url'}),
  ],
})
