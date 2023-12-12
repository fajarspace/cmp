import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch: branch,
  clientId: "1402bae0-1f11-4e0b-a802-d8cc2aaa10f0", // Get this from tina.io
  token: "02aa850f15e6ad9759d4500a1d9fbd0b8766f509", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "boolean", // Tambahkan field boolean untuk draft
            name: "draft",
            label: "Draft",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date", // Date field
            label: "Date",
          },
          {
            type: "string",
            name: "description", // Description field
            label: "Description",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "image", // Featured Image field
            name: "featured_image",
            label: "Featured Image",
          },
          {
            type: "string",
            name: "author", // Author field
            label: "Author",
          },
          {
            type: "string",
            name: "tags", // Author field
            label: "Tags",
          },
        ],
        // ui: {
        //   router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        // },
      },
      {
        name: "photo",
        label: "Photos",
        path: "content/photos",
        fields: [
          {
            type: "boolean", // Tambahkan field boolean untuk draft
            name: "draft",
            label: "Draft",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date", // Date field
            label: "Date",
          },
          {
            type: "string",
            name: "description", // Description field
            label: "Description",
          },
          {
            type: "image", // Featured Image field
            name: "image",
            label: "Image",
            required: true,
          },
          {
            type: "string",
            name: "tags", // Author field
            label: "Tags",
          },
        ],
        // ui: {
        //   router: ({ document }) => `/demo/photo/${document._sys.filename}`,
        // },
      },
      {
        name: "testimonials",
        label: "Testimonials",
        path: "content/testimonials",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Nama",
            required: true,
          },
          {
            type: "string",
            name: "position",
            label: "Jabatan",
          },
          {
            type: "rich-text",
            name: "content",
            label: "Testimonial Content",
            isBody: true,
          },
          {
            type: "image",
            name: "avatar",
            label: "User Avatar",
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
        ],
        // ui: {
        //   router: ({ document }) =>
        //     `/demo/testimonial/${document._sys.filename}`,
        // },
      },
    ],
  },
  search: {
    tina: {
      indexerToken: "828a1d57145713ab6ad807fb18a4402fa957f8fb",
      stopwordLanguages: ["eng"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});
