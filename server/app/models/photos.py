from app.models.base import BaseModel
from app.extensions import db
from sqlalchemy import Column, Integer, String, ForeignKey, Text, DateTime, func


class Photo(BaseModel):
    __tablename__ = "photos"
    
    task_id = Column(Integer, ForeignKey("tasks.id"))
    uploaded_by_user_id = Column(Integer, ForeignKey("users.id"))
    file_path = Column(String(747))
    caption = Column(Text)
    billing_week_id = Column(Integer, ForeignKey("billing_weeks.id"))
    uploaded_at = Column(DateTime, default=func.current_timestamp())
    
    def serialize(self):
        return {
            "id": self.id,
            "task_id": self.task_id,
            "uploaded_by_user_id": self.uploaded_by_user_id,
            "file_path": self.file_path,
            "caption": self.caption,
            "billing_week_id": self.billing_week_id,
            "uploaded_at": self.uploaded_at
        }