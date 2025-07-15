from app.models.base import BaseModel
from app.extensions import db
from sqlalchemy import Column, Integer, ForeignKey, DateTime, func, Boolean

class BillingWeek(BaseModel):
    __tablename__ = "billing_week"
    
    project_id = Column(Integer, ForeignKey("projects.id"))
    week_start = Column(DateTime)
    week_end = Column(DateTime)
    invoice_generated = Column(Boolean)  