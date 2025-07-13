from app.models.base import BaseModel
from app.extensions import db
from sqlalchemy import Column, Integer, String

class User(BaseModel):
    __tablename__ = "users"
    
    name = Column(String(150), nullable=False)
    email = Column(String(255), nullable=False)
    password_hash = Column(String(767), nullable=False)
    projects = db.relationship("Projects", back_populates='user', cascade="all, delete-orphan")
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "projects": [project.serialize() for project in self.projects]
        }