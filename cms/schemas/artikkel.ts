import {defineField, defineType} from 'sanity'

export const artikkel = defineType({
  name: 'artikkel',
  title: 'artikkel',
  type: 'document',
  fields: [
    defineField({name: 'tittel', type: 'string', title: 'Tittel'}),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Innhold',
      of: [
        {type: 'block'},
        {
          type: 'code',
        },
        {type: 'image'},
      ],
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
