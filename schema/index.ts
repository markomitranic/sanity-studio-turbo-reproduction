import { defineField, defineType } from "sanity";

export const schemaTypes = [
    defineType({
    name: "page",
    title: "Page",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
    ],
    })
];