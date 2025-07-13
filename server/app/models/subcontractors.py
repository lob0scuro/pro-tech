from app.models.base import BaseModel
from app.extensions import db
from sqlalchemy import Column, Integer, String, ForeignKey


class Subcontractor(BaseModel):
    __tablename__ = "subcontractor"
    
    name = Column(String(150), nullable=False)
    email = Column(String(255), nullable=False)
    project_id = Column(Integer, ForeignKey("projects.id"))
    user_id = Column(Integer, ForeignKey("users.id"))
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "project_id": self.project_id,
            "user_id": self.user_id
        }
