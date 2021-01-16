package main

import (
	"github.com/evanw/esbuild/pkg/api"
	"github.com/tamoore/esbuild-plugins/pkg/http"
	"log"
	"os"
)

func main() {
	result := api.Build(api.BuildOptions{
		EntryPoints: []string{"src/app.jsx"},
		Define: map[string]string{
			"process.env.NODE_ENV": "\"production\"",
		},
		Bundle:            true,
		Outfile:           "out.js",
		MinifyWhitespace:  true,
		MinifySyntax:      true,
		MinifyIdentifiers: true,
		Plugins:           []api.Plugin{http.Plugin},
		Write:             true,
	})

	if len(result.Errors) > 0 {
		log.Fatal(result.Errors)
		os.Exit(1)
	}
}
