# Generated by Django 2.2.19 on 2021-03-15 14:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0012_smilecommunity'),
    ]

    operations = [
        migrations.CreateModel(
            name='SmileScience',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('article_name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('image', models.FileField(upload_to='smile_science')),
            ],
        ),
    ]