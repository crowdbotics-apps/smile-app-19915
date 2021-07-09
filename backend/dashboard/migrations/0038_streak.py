# Generated by Django 2.2.24 on 2021-07-06 06:32

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('dashboard', '0037_remove_goal_total_second'),
    ]

    operations = [
        migrations.CreateModel(
            name='Streak',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('max_streak', models.IntegerField()),
                ('created', models.DateTimeField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_streak', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]