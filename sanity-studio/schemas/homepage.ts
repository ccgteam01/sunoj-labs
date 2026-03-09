import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage Settings',
  type: 'document',
  fields: [
    defineField({name: 'quote', title: 'Quote', type: 'text'}),
    defineField({name: 'quoteAuthor', title: 'Quote Author', type: 'string'}),
    defineField({name: 'ctaTitle', title: 'CTA Title', type: 'string'}),
    defineField({name: 'ctaDescription', title: 'CTA Description', type: 'text'}),
    defineField({name: 'ctaButtonText', title: 'CTA Button Text', type: 'string'}),
    defineField({name: 'ctaButtonLink', title: 'CTA Button Link', type: 'string'}),
    defineField({name: 'ctaBackgroundImage', title: 'CTA Background Image', type: 'image', options: {hotspot: true}}),
  ],
})
