import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({name: 'groupDescription', title: 'Group Description', type: 'text'}),
    defineField({name: 'researchAreas', title: 'Research Areas List', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'publicationSummary', title: 'Publication Summary', type: 'text'}),
    defineField({name: 'piName', title: 'PI Name', type: 'string'}),
    defineField({name: 'piTitle', title: 'PI Title', type: 'string'}),
    defineField({name: 'piBio', title: 'PI Biography', type: 'text'}),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({name: 'degree', title: 'Degree', type: 'string'}),
          defineField({name: 'institution', title: 'Institution', type: 'string'}),
          defineField({name: 'advisor', title: 'Advisor', type: 'string'}),
        ],
      }],
    }),
    defineField({
      name: 'interests',
      title: 'Research Interests',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({name: 'label', title: 'Label', type: 'string'}),
          defineField({name: 'icon', title: 'Icon Name', type: 'string'}),
        ],
      }],
    }),
    defineField({name: 'awards', title: 'Awards', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'coursesTaught', title: 'Courses Taught', type: 'array', of: [{type: 'string'}]}),
  ],
})
