from app.models.base import BaseModel
from app.extensions import db
from sqlalchemy import Column, Integer, String, ForeignKey, Enum, JSON

invoice_type_enum = Enum("customer", "subcontractor", name="invoice_type_enum")
invoice_status_enum = Enum("sent", "paid", "unpaid", name="invoice_status_enum")

class Invoice(BaseModel):
    __tablename__ = "invoices"
    project_id = Column(Integer, ForeignKey("projects.id"))
    _type = Column(invoice_type_enum)
    billing_week_id = Column(Integer, ForeignKey("billing_week.id"))
    task_ids = Column(JSON)
    invoice_total = Column(Integer)
    subcontractor_portion = Column(String(255))
    main_user_revenue = Column(Integer, default=0)
    total_expenses = Column(Integer, default=0)
    net_profit = Column(Integer, default=0)
    pdf_url = Column(String(747))
    status = Column(invoice_status_enum)
    
    def serialize(self):
        return {
            "id": self.id,
            "project_id": self.project_id,
            "_type": self._type,
            "billing_week_id": self.billing_week_id,
            "task_ids": self.task_ids,
            "invoice_total": self.invoice_total,
            "subcontractor_portion": self.subcontractor_portion,
            "main_user_revenue":self.main_user_revenue,
            "total_expenses": self.total_expenses,
            "net_profit": self.net_profit,
            "pdf_url": self.pdf_url,
            "status": self.status
        }
    