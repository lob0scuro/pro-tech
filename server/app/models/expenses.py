from app.models.base import BaseModel
from app.extensions import db
from sqlalchemy import Column, Integer, String, ForeignKey, Enum, Text, DateTime, func

category_enum = Enum("Gas", "Meals", "Hotel", "Materials")


class Expense(BaseModel):
    __tablename__ = "expenses"
    
    project_id = Column(Integer, ForeignKey("projects.id"))
    billing_week_id = Column(Integer, ForeignKey("billing_week.id"))
    user_id = Column(Integer, ForeignKey("users.id"))
    category = Column(category_enum)
    description = Column(Text)
    amount = Column(Integer, default=0)
    created_at = Column(DateTime, default=func.current_timestamp)
    
    def serialize(self):
        return {
            "id": self.id,
            "project_id": self.project_id,
            "billing_week_id": self.billing_week_id,
            "user_id": self.user_id,
            "category": self.category,
            "description": self.description,
            "amount": self.amount,
            "created_at": self.created_at
        }