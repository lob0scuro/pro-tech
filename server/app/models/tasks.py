from app.models.base import BaseModel
from app.extensions import db
from sqlalchemy import Column, Integer, ForeignKey, Text, event, Numeric, Enum

status_enum = Enum("unassigned", "assigned", "completed", "pending_approval", "approved", "rejected", name="sov_values")

class Task(BaseModel):
    __tablename__ = "tasks"
    
    project_id = Column(Integer, ForeignKey("projects.id"), nullable=False)
    project = db.relationship("Project", back_populates='projects')
    description = Column(Text)
    quantity = Column(Integer, default=0)
    unit_cost = Column(Integer, default=0)
    total_amount = Column(Integer, default=0)
    assigned_sub_id = Column(Integer, ForeignKey("subcontractor.id"))
    assigned_percent = Column(Numeric(5, 4), default=0)
    status = Column(status_enum)
    
    def serialize(self):
        return {
            "id": self.id,
            "project_id": self.project_id,
            "description": self.description,
            "quantity": self.quantity,
            "unit_cost": self.unit_cost,
            "total_amount": self.total_amount,
            "assigned_sub_id": self.assigned_sub_id,
            "assigned_percent": self.assigned_percent,
            "status": self.status
        }
    
    
    
@event.listens_for(Task, 'before_insert')
@event.listens_for(Task, 'before_update')
def calculate_total_amount(mapper, connection, target):
    target.total_amount = target.quantity * target.unit_cost