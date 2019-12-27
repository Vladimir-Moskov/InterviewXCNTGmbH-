"""empty message

Revision ID: 3e43376afcc7
Revises: ded043a4068c
Create Date: 2019-12-27 16:09:02.759408

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3e43376afcc7'
down_revision = 'ded043a4068c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('expense', sa.Column('approved_by', sa.String(length=4000), nullable=True))
    op.add_column('expense', sa.Column('approved_datetime', sa.DateTime(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('expense', 'approved_datetime')
    op.drop_column('expense', 'approved_by')
    # ### end Alembic commands ###
