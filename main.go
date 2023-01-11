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
	database.Database.AutoMigrate(&model.User{})
}

func serveApplication() {
	router := gin.Default()

	publicRoutes := router.Group("/auth")
	publicRoutes.POST("/register", controller.Register)
	publicRoutes.POST("/login", controller.Login)

	router.Run(":8000")
	fmt.Println("Server running on port 8000")
}
