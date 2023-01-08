package database

import (
	"fmt"

	"github.com/fletisco/starnote/config"
	"github.com/fletisco/starnote/model"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

// ConnectDB connect to db
func ConnectDB() {
	var err error
	DB, err = gorm.Open(sqlite.Open(config.Config("DB_FILE")), &gorm.Config{})

	if err != nil {
		panic("failed to connect database")
	}

	fmt.Println("Connection Opened to Database")
	DB.AutoMigrate(&model.User{})
	fmt.Println("Database Migrated")
}
