# Generated by Django 2.2.19 on 2021-03-09 10:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_user_profession_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='coin_balance',
            field=models.FloatField(default=0.0),
        ),
    ]
