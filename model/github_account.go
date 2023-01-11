package model

import "gorm.io/gorm"

type GithubAccount struct {
	gorm.Model
	Username string `json:"username"`
	UserID   uint
}
