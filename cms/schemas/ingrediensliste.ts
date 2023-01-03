import {defineField, defineType} from 'sanity'

export const ingrediensliste = defineType({
  name: 'ingrediensliste',
  type: 'object',
  title: 'Ingrediensliste',
  fields: [
    defineField({
      type: 'array',
      name: 'liste',
      title: 'liste',
      of: [{type: 'string'}],
    }),
  ],
})
