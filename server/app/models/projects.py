from app.models.base import BaseModel
from app.extensions import db
from sqlalchemy import Column, Integer, String, ForeignKey

class Project(BaseModel):
    __tablename__ = "projects"
    
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    sub = db.relationship("User", back_populates='projects')
    tasks = db.relationship("Tasks", back_populates='tasks')
    name = Column(String(255), nullable=False)
    address = Column(String(150), nullable=False)
    total_project_value = Column(Integer, default=0)
    total_billed_to_date_customer = Column(Integer, default=0)
    total_billed_to_date_subs = Column(Integer, default=0)
    
    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "name": self.name,
            "address": self.address,
            "total_project_value": self.total_project_value,
            "total_billed_to_date_customer": self.total_billed_to_date_customer,
            "total_billed_to_date_subs": self.total_billed_to_date_subs
        }