# Generated by Django 2.2.24 on 2021-07-09 08:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0043_auto_20210709_0653'),
    ]

    operations = [
        migrations.AlterField(
            model_name='smile',
            name='created',
            field=models.DateTimeField(),
        ),
    ]