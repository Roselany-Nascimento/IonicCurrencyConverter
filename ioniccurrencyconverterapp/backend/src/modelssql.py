from sqlalchemy import Column, Integer, String, Float, DateTime, JSON
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime

engine = create_engine("mysql+pymysql://root:123456@localhost/currency_converter_db")

Base = declarative_base()

class Conversao(Base):
    __tablename__ = 'CONVERSAO_TB'

    id = Column("ID_CONV",Integer, primary_key=True, autoincrement=True)
    moeda_base = Column("MOEDA_BASE", String(3), nullable=False)
    moeda_destino = Column("MOEDA_DEST", String(3), nullable=False)
    valor_original = Column("VALOR", Float, nullable=False)
    valor_convertido = Column("VL_CONVERT", Float, nullable=False)
    taxa = Column("TAXA", Float, nullable=False)
    data_hora_conversao = Column("DT_HR_CONV", DateTime, default=datetime.now)

class Consulta(Base):
    __tablename__ = 'CONSULTA_TB'

    id = Column("ID_CONS", Integer, primary_key=True, autoincrement=True)
    moeda_base = Column("MOEDA_BASE", String(3), nullable=False)
    taxas = Column("TAXAS", JSON, nullable=False)
    data_hora_consulta = Column("DT_HR_CONS", DateTime, default=datetime.now)

Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)