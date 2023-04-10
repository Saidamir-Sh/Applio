from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class CustomUserManager(BaseUserManager):
   def create_user(self, username, email, password, **extra_fields):
      if not username:
         raise ValueError('Username is required')
      email = self.normalize_email(email)
      user = self.model(username=username, email=email, **extra_fields)
      user.set_password(password)
      user.save()
      return user
    


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(db_index=True, max_length=240, unique=True)
    email = models.EmailField(max_length=55, unique=True)
    password = models.CharField(max_length=8)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    objects = CustomUserManager()

    def __str__(self):
       return self.email

    class Meta:
      verbose_name = 'User'
      verbose_name_plural = 'Users'

      