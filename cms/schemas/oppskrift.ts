import {defineType, defineField} from 'sanity'

export const oppskrift = defineType({
  name: 'oppskrift',
  title: 'oppskrift',
  type: 'document',
  fields: [
    defineField({name: 'tittel', type: 'string', title: 'Tittel'}),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Innhold',
      of: [{type: 'block'}, {type: 'image'}, {type: 'ingrediensliste'}],
    }),
    defineField({
      name: 'authors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'person'}],
        },
      ],
    }),
    defineField({
      name: 'cudoz',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'person'}],
        },
      ],
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'slug',
    }),
  ],
})
