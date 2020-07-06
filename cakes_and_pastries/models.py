from django.db import models


class SweetCard(models.Model):
    name = models.CharField("Имя", max_length=255)
    description = models.TextField("Описание", blank=True, null=True)
    image = models.ImageField("Изображение", upload_to='media')
    price = models.DecimalField("Цена", max_digits=5, decimal_places=2)

    def __str__(self):
        return self.name
