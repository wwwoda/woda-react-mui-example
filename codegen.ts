import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'http://localhost:3001/wp/graphql',
    documents: ['src/**/*.ts*'],
    generates: {
        'src/GraphQl/Generated/types.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
            config: {
                avoidOptionals: true
            }
        }
    }
}
export default config
