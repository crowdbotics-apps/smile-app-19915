# Generated by Django 2.2.24 on 2021-07-01 15:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('authtoken', '0002_auto_20160226_1747'),
        ('users', '0014_auto_20210630_1436'),
    ]

    operations = [
        migrations.CreateModel(
            name='Token',
            fields=[
                ('token_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='authtoken.Token')),
                ('email', models.CharField(max_length=150)),
            ],
            bases=('authtoken.token',),
        ),
    ]
