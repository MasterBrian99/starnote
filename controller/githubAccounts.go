package controller

import (
	"net/http"

	"github.com/fletisco/starnote/model"
	"github.com/gin-gonic/gin"
)

type GithubAccountInput struct {
	Username string `json:"username" binding:"required"`
}

func AddNewAccount(context *gin.Context) {

	var input GithubAccountInput

	if err := context.ShouldBindJSON(&input); err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	account := model.Account{
		Username: input.Username,
	}

}
