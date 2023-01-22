package handler

import (
	"github.com/fletisco/starnote/model"
	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
)

func AddAccount(c *fiber.Ctx) error {
	type NewAccount struct {
		Username string `json:"username"`
	}

	token := c.Locals("user").(*jwt.Token)
	uid := GetCurrentUser(token)
	// db := database.DB
	println(uid)
	acc := new(model.GithubAccount)
	if err := c.BodyParser(acc); err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Review your input", "data": err})

	}

	return c.SendStatus(200)
}
