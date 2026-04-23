import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { schema } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'

const projectId = 'i1c83kqb'
const dataset = 'production'
const apiVersion = '2024-07-11'

export default defineConfig({
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
