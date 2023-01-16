package model

import (
	"github.com/fletisco/starnote/database"
	"gorm.io/gorm"
)

type Account struct {
	gorm.Model
	Username string `gorm:"size:255;not null;unique" json:"username"`
	UserID   uint
}

func (account *Account) Save() (*Account, error) {
	err := database.Database.Create(&account).Error
	if err != nil {
		return &Account{}, err
	}
	return account, nil
}
