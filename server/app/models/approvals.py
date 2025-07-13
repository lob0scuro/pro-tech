from app.models.base import BaseModel
from app.extensions import db
from sqlalchemy import Column, Integer, String, ForeignKey, Text, DateTime, func

class Approval(BaseModel):
    __tablename__ = "approvals"
    
    task_id = Column(Integer, ForeignKey("tasks.id"))
    approved_by_user_id = Column(Integer, ForeignKey("users.id"))
    status = Column(String(100))
    notes = Column(Text)
    approved_at = Column(DateTime, func.current_timestamp())
    
    def serialize(self):
        return {
            "id": self.id,
            "task_id": self.task_id,
            "approved_by_user_id": self.approved_by_user_id,
            "status": self.status,
            "notes": self.notes,
            "approved_at": self.approved_at
        }