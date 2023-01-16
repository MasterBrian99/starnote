package main

import (
	"fmt"

	"github.com/fletisco/starnote/controller"
	"github.com/fletisco/starnote/database"
	"github.com/fletisco/starnote/model"
	"github.com/gin-gonic/gin"
)

func main() {
	loadDatabase()
	serveApplication()

}
func loadDatabase() {
	database.Connect()
	database.Database.AutoMigrate(&model.User{}, &model.Account{})
}

func serveApplication() {

	r := gin.Default()
	routes := r.Group("/api")
	auth := routes.Group("/auth")
	{
		auth.POST("/", controller.Register)
		auth.POST("/login", controller.Login)
	}

	accounts := routes.Group("github")
	{
		accounts.POST("add", controller.AddNewAccount)
	}

	r.Run(":9000")
	fmt.Println("Server running on port 8000")
}

// nodemon --exec go run main.go --signal SIGTERM
