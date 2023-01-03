import {defineType, defineField, defineArrayMember} from 'sanity'

export const person = defineType({
  name: 'person',
  title: 'person',
  type: 'document',
  fields: [
    defineField({name: 'name', type: 'string', title: 'Navn'}),
    defineField({name: 'image', type: 'image', title: 'bilde'}),
    defineField({
      title: 'links',
      name: 'links',
      type: 'array',
      of: [defineArrayMember({type: 'url'})],
    }),
  ],
})
