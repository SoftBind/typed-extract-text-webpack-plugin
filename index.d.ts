declare module 'extract-text-webpack-plugin' {

    class ExtractTextPlugin {
        constructor( id, filename?:any, options?:any );
    }

    namespace ExtractTextPlugin {
        function extract( before:any, loader?:any, options?:any );
    }

    export = ExtractTextPlugin;

}