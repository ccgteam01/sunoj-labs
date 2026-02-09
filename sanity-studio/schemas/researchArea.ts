import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'researchArea',
  title: 'Research Area',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text'}),
    defineField({name: 'focusAreas', title: 'Focus Areas', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'icon', title: 'Icon Name', type: 'string', description: 'Lucide icon name: Atom, FlaskConical, Leaf, BrainCircuit'}),
    defineField({name: 'order', title: 'Order', type: 'number'}),
  ],
})
