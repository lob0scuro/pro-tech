from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_login import LoginManager
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate

db=SQLAlchemy()
cors=CORS()
login_manager=LoginManager()
bcrypt=Bcrypt()
migrate=Migrate()