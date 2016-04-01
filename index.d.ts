// Copyright (c) 2016
//   ____        ____       ____             _
//  / ___| ___  / ___| ___ | __ ) _   ___  _(_)
// | |  _ / _ \| |  _ / _ \|  _ \| | | \ \/ / |
// | |_| | (_) | |_| | (_) | |_) | |_| |>  <| |
//  \____|\___/ \____|\___/|____/ \__,_/_/\_\_|
//
// Licensed under MIT.

declare module 'extract-text-webpack-plugin' {

    namespace ExtractTextPlugin {
        interface PluginOptions {
            // extract from all additional chunks too (by default it extracts only from the initial chunk(s))
            allChunks?:boolean,

            // disables the plugin
            disable?:boolean
        }

        interface LoaderOptions {
            // override the publicPath setting for this loader.
            publicPath?:string
        }

        function extract( loader:string | Array<string>, options?:LoaderOptions );
        function extract( before:any, loader?:string | Array<string>, options?:LoaderOptions );
    }

    class ExtractTextPlugin {
        constructor( filename:string, options?:ExtractTextPlugin.PluginOptions );
        constructor( id:string, filename:string, options:ExtractTextPlugin.PluginOptions );
        constructor( id?:string, filename?:string, options?:ExtractTextPlugin.PluginOptions );
    }

    export = ExtractTextPlugin;

}