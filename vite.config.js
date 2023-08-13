const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

export default {
    root: 'src/',
    publicDir: '../public',
    base: './blender--threejs-practice',
    
    server:
    {
        host: true,
        open: !isCodeSandbox // Open if it's not a CodeSandbox
    },

    build:
    {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true
    }
}