from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class CustomUserManager(BaseUserManager):
    


class User(AbstractBaseUser, PermissionsMixin):
    username: models.CharField(db_index=True, max_length=240, unique=True)
    email: models.EmailField(max_length=55, unique=True)
    password: models.CharField(max_length=8)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['username', 'email', 'password']

    class Meta:
      verbose_name = 'User'
      verbose_name_plural = 'Users'

      