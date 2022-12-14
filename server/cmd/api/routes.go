package main

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func (app *application) routes() http.Handler {
	// create a router mux
	mux := chi.NewRouter()

	// middleware
	mux.Use(middleware.Recoverer)

	// handlers
	mux.Get("/", app.Home)

	mux.Get("/movies", app.AllMovies)

	return mux
}
