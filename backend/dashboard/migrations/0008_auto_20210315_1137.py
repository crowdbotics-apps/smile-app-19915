# Generated by Django 2.2.19 on 2021-03-15 11:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0007_game'),
    ]

    operations = [
        migrations.CreateModel(
            name='Level',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('level', models.CharField(max_length=100)),
                ('range', models.FloatField()),
            ],
        ),
        migrations.RemoveField(
            model_name='game',
            name='range',
        ),
        migrations.AddField(
            model_name='game',
            name='level',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, related_name='game_level', to='dashboard.Level'),
            preserve_default=False,
        ),
    ]